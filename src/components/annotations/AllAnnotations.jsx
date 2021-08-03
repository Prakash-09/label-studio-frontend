import React from 'react';
import './AllAnnotations.css';
import sourceData from './AllAnnotationsData';
import { Row, Col, Button } from 'react-bootstrap'
import LabelStudio from 'label-studio';
import 'label-studio/build/static/css/main.css';

export default class ImageAnnotation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            taskNavigation: 0,
            lsLegendLabels: [],
            response: [],
            interfacesData: ["update", "side-column", "controls", "submit"],
            taskData: [],
            showCreateLabelsModal: false,
            label: "",
            validateMsg: "",
        }
    }
    componentDidMount() {
        let taskNavigation = this.state.taskNavigation
        let responseData = sourceData.RESPONSE_DATA
        let interfacesData = this.state.interfacesData
        let taskData = this.state.taskData
        let filteredLegendLabels
        let unfilteredLegendLabels = []


        if (responseData.length !== 0) {
            for (const responseObj of responseData) {
                let taskObj = {
                    annotations: [{ id: `${responseData.indexOf(responseObj)}`, result: [] }],
                    data: responseObj.annotation.type === "text" ? { text: responseObj.document } : responseObj.annotation.type === "image rectangle" ? { image: responseObj.document } : responseObj.annotation.type === "image polygon" ? { image: responseObj.document } : responseObj.annotation.type === "video" ? { video: responseObj.documentSecondary, videoSource: responseObj.document } : responseObj.annotation.type === "audio" && { audio: responseObj.document },
                    id: 1 + parseInt(`${responseData.indexOf(responseObj)}`),
                    predictions: [],
                    modified: responseObj.modified ? responseObj.modified : false,
                    annotationType: responseObj.annotation.type
                }
                if (responseObj.annotation?.entities) {
                    if (responseObj.annotation.entities.length !== 0) {
                        for (const entitiesObj of responseObj.annotation.entities) {
                            let labelObj = {
                                id: entitiesObj.label,
                                displayName: entitiesObj.label
                            }
                            unfilteredLegendLabels.push(labelObj)

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
                taskData.push(taskObj)
            }
            filteredLegendLabels = unfilteredLegendLabels.filter((value, idx, arr) => arr.findIndex(item => (JSON.stringify(item) === JSON.stringify(value))) === idx)
            if (filteredLegendLabels.length > 0) {
                for (const legend of filteredLegendLabels) {
                    legend.background = this.generateDynamicColor()
                }
            }
            this.buildLabelStudio(filteredLegendLabels, interfacesData, taskData, taskNavigation)

            this.setState({ response: responseData, taskData: taskData, lsLegendLabels: filteredLegendLabels })
        }

    }
    generateDynamicColor() {
        let uniqueNum = Math.floor(Math.random() * 0xfffff * new Date().getTime()).toString(16);
        let randomColor = "#" + uniqueNum.slice(0, 6);
        return randomColor
    }
    buildLabelStudio(lsLegendLabelsParam, interfacesDataParam, taskDataParam, taskNavId) {
        const lsLegendLabels = lsLegendLabelsParam;
        const interfacesData = interfacesDataParam
        let taskData = taskDataParam
        let navigation = taskNavId
        new LabelStudio('label-studio', {
            config: `${taskData[navigation].annotationType === "image rectangle" ?
                this.lsConfigImageHtml(lsLegendLabels, "rect")
                : taskData[navigation].annotationType === "image polygon" ?
                    this.lsConfigImageHtml(lsLegendLabels, "poly")
                    : taskData[navigation].annotationType === "text" ?
                        this.lsConfigTextHtml(lsLegendLabels)
                        : taskData[navigation].annotationType === "video" ?
                            this.lsConfigVideoHtml(lsLegendLabels)
                            : taskData[navigation].annotationType === "audio" &&
                            this.lsConfigAudioHtml(lsLegendLabels)
                }`,
            interfaces: interfacesData,
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
    lsConfigImageHtml(lsLegendLabelsParam, typeParam) {
        const lsLegendLabels = lsLegendLabelsParam
        const type = typeParam
        if (type === "rect") {
            return (
                `<View>
                    <RectangleLabels name="tag" toName="img">
                        ${lsLegendLabels.map((item, itemIdx) => `<Label key='${itemIdx}' value='${item.displayName}' background='${item.background}' />`)}
                    </RectangleLabels>
                    <Image name="img" value="$image"></Image>
                </View>`
            )
        } else if (type === "poly") {
            return (
                `<View>
                    <PolygonLabels name="tag" toName="img" strokeWidth="3" pointSize="small" opacity="0.9">
                        ${lsLegendLabels.map((item, itemIdx) => `<Label key='${itemIdx}' value='${item.displayName}' background='${item.background}' />`)}
                    </PolygonLabels>
                    <Image name="img" value="$image"></Image>
                </View>`
            )
        }
    }
    lsConfigTextHtml(lsLegendLabelsParam) {
        const lsLegendLabels = lsLegendLabelsParam
        return (
            `<View>
                <Text name="text" value="$text" />
                <Labels name="label" toName="text">
                    ${lsLegendLabels.map((item, itemIdx) => `<Label key='${itemIdx}' value='${item.displayName}' background='${item.background}' />`)}
                </Labels>
            </View>`
        )
    }
    lsConfigVideoHtml(lsLegendLabelsParam) {
        const lsLegendLabels = lsLegendLabelsParam
        return (
            `<View>
                <Header value="Video timeline segmentation via AudioPlus sync trick"/>
                <Labels name="tricks" toName="audio" choice="multiple">
                ${lsLegendLabels.map((item, itemIdx) => `<Label key='${itemIdx}' value='${item.displayName}' background='${item.background}' />`)}
                </Labels>
                <HyperText name="video" value="$video"/>
                <AudioPlus name="audio" value="$videoSource" speed="false"/>
            </View>`
        )
    }
    lsConfigAudioHtml(lsLegendLabelsParam) {
        const lsLegendLabels = lsLegendLabelsParam
        return (
            `< View >
                <Header value="Listen to the audio"/>
                <Labels name="label" toName="audio" choice="multiple">
                ${lsLegendLabels.map((item, itemIdx) => `<Label key='${itemIdx}' value='${item.displayName}' background='${item.background}' />`)}
                </Labels>
                <AudioPlus name="audio" value="$audio"></AudioPlus>
            </View >`
        )
    }
    updateAnnotation(ls, annotation) {
        console.log("structure", annotation.serializeAnnotation())
        // let taskData = JSON.parse(JSON.stringify(this.state.taskData))
        // let response = JSON.parse(JSON.stringify(this.state.response))
        // const interfacesData = this.state.interfacesData
        // let lsLegendLabels = this.state.lsLegendLabels
        // let taskNavigation = this.state.taskNavigation
        // let selectedReponseObj = response[ls.task.id - 1]
        // let selectedTask = taskData.filter(task => task.id === ls.task.id)[0]

        // selectedTask.annotations[0].result = annotation.serializeAnnotation()
        // selectedReponseObj.annotation.entities = []

        // for (const resultObj of selectedTask.annotations[0].result) {
        //     if (resultObj.type === "labels") {
        //         let entityObj = {
        //             end: resultObj.value?.end,
        //             label: resultObj.value?.labels[0],
        //             start: resultObj.value?.start,
        //             text: resultObj.value?.text
        //         }
        //         selectedReponseObj.annotation.entities.push(entityObj)
        //     }
        // }
        // selectedTask.modified = true
        // console.log("response", response)
        // this.buildLabelStudio(lsLegendLabels, interfacesData, taskData, taskNavigation)

        // this.setState({ taskData: taskData, response: response })
    }
    navigateTask(type) {
        let { taskNavigation, response, taskData, lsLegendLabels, interfacesData } = this.state
        if (type === "next") {
            if (taskNavigation < response.length - 1) {
                let navIcrement = taskNavigation + 1
                this.buildLabelStudio(lsLegendLabels, interfacesData, taskData, navIcrement)
                this.setState({ taskNavigation: navIcrement })
            }
        }
        if (type === "prev") {
            if (taskNavigation > 0) {
                let navDecrement = taskNavigation - 1
                this.buildLabelStudio(lsLegendLabels, interfacesData, taskData, navDecrement)
                this.setState({ taskNavigation: navDecrement })
            }
        }
    }
    addLabel() {
        let lsLegendLabels = this.state.lsLegendLabels
        const interfacesData = this.state.interfacesData
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
                    background: this.generateDynamicColor(),
                }
                lsLegendLabels.push(labelObj)
                this.buildLabelStudio(lsLegendLabels, interfacesData, taskData, taskNavigation)
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
                        {/* {actionButton(dashboardItemData[taskNavigation]?.annotation?.status === 'COMPLETED' ? 'Completed' : 'Mark as complete', this.onSaveAndCompleteClick.bind(this), 'btn btn-sm', 'feather icon-check-circle', true, dashboardItemData[taskNavigation]?.annotation?.status === 'COMPLETED' ? true : false, dashboardItemData[taskNavigation]?.annotation?.status === 'COMPLETED' ? ACTION_BUTTON.WARNING : ACTION_BUTTON.PRIMARY)} */}
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
            </div >
        );
    }
}