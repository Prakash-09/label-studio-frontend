import React from 'react';
import './SampleFourLs.css';
import sourceData from './SampleFourLsData';
import { Row, Col, Button } from 'react-bootstrap'
import LabelStudio from 'label-studio';
import 'label-studio/build/static/css/main.css';

export default class SampleFourLs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            taskNavigation: 0,
            lsLegendLabels: [],
            response: [],
            taskData: [],
            showCreateLabelsModal: false,
            label: "",
            validateMsg: "",
        }
    }

    componentDidMount() {
        let taskNavigation = this.state.taskNavigation
        let responseData = sourceData.RESPONSE_DATA
        let taskData = this.state.taskData
        let lsLegendLabels = sourceData.LABEL_CONFIG

        if (lsLegendLabels.length !== 0) {
            for (const legend of lsLegendLabels) {
                legend.background = this.generateRandomColor()
            }
        }
        if (responseData.length !== 0) {
            for (const responseObj of responseData) {
                let taskObj = {
                    annotations: [{ id: `${responseData.indexOf(responseObj)}`, result: [] }],
                    data: { text: responseObj.document, },
                    id: 1 + parseInt(`${responseData.indexOf(responseObj)}`),
                    predictions: [],
                    modified: responseObj.modified ? responseObj.modified : false
                }
                if (responseObj.annotation?.entities) {
                    if (responseObj.annotation.entities.length !== 0) {
                        for (const entitiesObj of responseObj.annotation.entities) {
                            if (entitiesObj.type === "relation") {
                                let testObj = {
                                    direction: entitiesObj.direction,
                                    from_id: entitiesObj.from_id,
                                    to_id: entitiesObj.to_id,
                                    type: entitiesObj.type
                                }
                                taskObj.annotations[0].result.push(testObj)
                            } else {
                                let testObj = {
                                    from_name: "label",
                                    id: `${responseObj.annotation.entities.indexOf(entitiesObj)}${responseData.indexOf(responseObj)}1`,
                                    to_name: "text",
                                    type: "labels",
                                    value: {
                                        end: entitiesObj.end,
                                        labels: [`${entitiesObj.label}`],
                                        start: entitiesObj.start,
                                        text: `${entitiesObj.text}`,
                                    },
                                }
                                taskObj.annotations[0].result.push(testObj)
                            }
                        }
                    }
                }
                taskData.push(taskObj)
            }
        }

        this.buildLabelStudio(lsLegendLabels, taskData, taskNavigation)

        this.setState({ response: responseData, taskData: taskData, lsLegendLabels: lsLegendLabels })
    }
    generateRandomColor() {
        let randomNum = Math.random()
        while (randomNum < 0.1) {
            randomNum *= 10
        }
        let randomColor = "#" + Math.floor(randomNum * 16777215).toString(16)
        return randomColor
    }
    buildLabelStudio(lsLegendLabelsParam, taskDataParam, taskNavId) {
        const lsLegendLabels = lsLegendLabelsParam;
        let taskData = taskDataParam
        let navigation = taskNavId
        var labelStudio = new LabelStudio('label-studio', {
            config: `<View>
            <View className="${taskData[navigation].modified ? "header-class" : ""}">
            <Header name="text-1" value="Legends" />  
            </View>
            <Labels name="label" toName="text">
                ${lsLegendLabels.map((item, itemIdx) => `<Label key='${itemIdx}' value='${item.displayName}' background='${item.background}' />`)}
            </Labels>
            <View className="${taskData[navigation].modified ? "header-class" : ""}">
            <Header name="text-2" value="Editor" />
            </View>
            <Text name="text" value="$text" />
            </View>`,
            interfaces: [
                "update", "controls", "side-column", "annotatiosns:delete", "submit",
                // "skip",
                // "annotations:menu",
                // "predictions:menu",
                // "panel", 
                // "annotations:add-new",
            ],
            task: taskData[navigation],

            onLabelStudioLoad: function (LS) {
                var c = LS.annotationStore.addAnnotation({
                    userGenerate: true
                });
                LS.annotationStore.selectAnnotation(c.id);
            },
            onUpdateAnnotation: this.updateAnnotation.bind(this),
        });
    }
    updateAnnotation(ls, annotation) {
        let taskData = JSON.parse(JSON.stringify(this.state.taskData))
        let response = JSON.parse(JSON.stringify(this.state.response))
        let lsLegendLabels = this.state.lsLegendLabels
        let taskNavigation = this.state.taskNavigation
        let selectedReponseObj = response[ls.task.id - 1]
        let selectedTask = taskData.filter(task => task.id === ls.task.id)[0]
        // let isModified = false;

        // annotation.serializeAnnotation().forEach((entity, entityIdx) => {
        //     console.log("testing", entity.value.labels !== selectedTask.annotations[0].result[entityIdx]?.value?.labels)
        //     // if (entity.value.labels !== selectedTask.annotations[0].result[entityIdx]?.value?.labels) {
        //     //     console.log("yes")
        //     // } else {
        //     //     console.log("no")
        //     // }
        // })

        // console.log("taskData", this.state.taskData[0].annotations[0].result)

        selectedTask.annotations[0].result = annotation.serializeAnnotation()

        // console.log("taskData", this.state.taskData[0].annotations[0].result)

        // if (selectedTask.annotations[0].result.length !== selectedReponseObj.annotation.entities.length) {
        selectedReponseObj.annotation.entities = []

        for (const resultObj of selectedTask.annotations[0].result) {
            if (resultObj.type === "labels") {
                let entityObj = {
                    end: resultObj.value?.end,
                    label: resultObj.value?.labels[0],
                    start: resultObj.value?.start,
                    text: resultObj.value?.text
                }
                selectedReponseObj.annotation.entities.push(entityObj)
            }
        }
        selectedTask.modified = true
        // }
        console.log("response", response)
        this.buildLabelStudio(lsLegendLabels, taskData, taskNavigation)

        this.setState({ taskData: taskData, response: response })
    }
    navigateTask(type) {
        let { taskNavigation, response, taskData, lsLegendLabels } = this.state
        if (type === "next") {
            if (taskNavigation < response.length - 1) {
                let navIcrement = taskNavigation + 1
                this.buildLabelStudio(lsLegendLabels, taskData, navIcrement)
                this.setState({ taskNavigation: navIcrement })
            }
        }
        if (type === "prev") {
            if (taskNavigation > 0) {
                let navDecrement = taskNavigation - 1
                this.buildLabelStudio(lsLegendLabels, taskData, navDecrement)
                this.setState({ taskNavigation: navDecrement })
            }
        }
    }
    addLabel() {
        let lsLegendLabels = this.state.lsLegendLabels
        let label = this.state.label
        let taskData = this.state.taskData
        let taskNavigation = this.state.taskNavigation

        if (label) {
            let labelExisting = lsLegendLabels.filter(legend => legend.displayName.toLowerCase() === label.toLowerCase())
            if (labelExisting.length === 0) {
                let labelObj = {
                    id: label,
                    displayName: label,
                    description: label,
                    background: this.generateRandomColor(),
                }
                lsLegendLabels.push(labelObj)
                this.buildLabelStudio(lsLegendLabels, taskData, taskNavigation)
                this.setState({ lsLegendLabels: lsLegendLabels, taskData: taskData, taskNavigation: taskNavigation, showCreateLabelsModal: false, label: "", validateMsg: "" })
            } else {
                console.log("labelExisting existence", labelExisting)
                this.setState({ validateMsg: "It is already exist" })
            }
        } else {
            console.log("no label")
            this.setState({ validateMsg: "Please enter label name" })
        }
    }

    render() {
        const { response, taskNavigation, showCreateLabelsModal, label, validateMsg } = this.state
        const selectedTaskObj = response[taskNavigation]
        return (
            <div>
                <Row className="p-3">
                    <Col className="text-right">
                        <i className="fa fa-arrow-left m-3" onClick={this.navigateTask.bind(this, "prev")} />
                        <i className="fa fa-arrow-right m-3" onClick={this.navigateTask.bind(this, "next")} />
                    </Col>
                    <Col className="text-right" xs="auto">
                        <Button variant="primary" onClick={() => this.setState({ showCreateLabelsModal: true })}> + Add Labels </Button>
                        {showCreateLabelsModal &&
                            <div className="create-labels-modal">
                                <input type="text" className="form-control border-0 shadow-none" placeholder="Enter Label name" value={label} onChange={(e) => this.setState({ label: e.target.value, validateMsg: "" })} />
                                <button type="button" className="close-labels-modal" aria-label="Close" onClick={() => this.setState({ showCreateLabelsModal: false, label: "", validateMsg: "" })}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <button type="button" className="close-labels-modal save-labels-modal ml-3" onClick={() => this.addLabel()}>
                                    <i className="fa fa-check text-primary" aria-hidden="true"></i>
                                </button>
                                {validateMsg && <small className="text-danger">{validateMsg}</small>}
                            </div>
                        }
                        {/* <Button className="ml-2" variant="primary" onClick={() => this.updateData()}> Update </Button> */}
                    </Col>
                </Row>
                <div id="label-studio"></div>
                <div className="pb-5">
                    <h5>User Feedback</h5>
                    <Row className="m-0">
                        <Col className="p-0">
                            <div className="user-feedback-container">
                                {selectedTaskObj?.comments?.map((comment, commentIdx) =>
                                    <p key={commentIdx}>
                                        <span className="font-weight-bold">{comment.commentedBy} - </span>
                                        {comment.comment}
                                        <span className="text-muted pl-2">{comment.commentedAt}</span>
                                    </p>
                                )}
                            </div>
                        </Col>
                        <Col xs="auto"><div className="empty-div"></div></Col>
                    </Row>
                </div>
            </div>
        );
    }
}