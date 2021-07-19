import React from 'react';
import './SampleThreeLs.css';
import sourceData from './SampleThreeLsData';
import { Row, Col, Button } from 'react-bootstrap'
import LabelStudio from 'label-studio';
import 'label-studio/build/static/css/main.css';

export default class SampleThreeLs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            taskNavigation: 0,
            lsLagendLabels: sourceData.LABEL_CONFIG,
            // taskData: [],
            response: [],
        }
    }

    componentDidMount() {
        // let taskData = this.state.taskData
        let taskNavigation = this.state.taskNavigation
        let response = sourceData.RESPONSE_DATA

        this.labelStudioTransform(response, taskNavigation)

        this.setState({ response: response })
    }
    labelStudioTransform(response, taskNavigation) {
        console.log("response", response)
        let responseData = response
        const taskData = []
        const navigation = taskNavigation

        if (responseData.length !== 0) {
            for (const responseObj of responseData) {
                let taskObj = {
                    annotations: [
                        {
                            id: `${responseData.indexOf(responseObj)}`,
                            result: []
                        }
                    ],
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
        // ${ taskData[navigation].modified && `<Rating name="rating" toName="text-1" maxRating="1" icon="star" size="medium" />` }

        this.buildLabelStudio(taskData, navigation)

        this.setState({ taskData: taskData })
    }
    buildLabelStudio(taskDataParam, taskNavId) {
        const lsLagendLabels = this.state.lsLagendLabels;
        let taskData = taskDataParam
        let navigation = taskNavId
        var labelStudio = new LabelStudio('label-studio', {
            config: `<View>
            <View className="${taskData[navigation].modified ? "header-class" : ""}">
            <Header name="text-1" value="Lagends" />  
            </View>
            <Labels name="label" toName="text">
                ${lsLagendLabels.map((item, itemIdx) =>
                `<Label key='${itemIdx}' value='${item.displayName}' background='${item.background}' />`
            )}
            </Labels>
            <View className="${taskData[navigation].modified ? "header-class" : ""}">
            <Header name="text-2" value="Editor" />
            </View>
            <Text name="text" value="$text" />
            </View>`,
            interfaces: [
                "update", "controls", "side-column", "annotations:menu", "annotatiosns:delete", "skip", "submit",
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
            // onEntityCreate: this.entityCreation.bind(this),
            // onSubmitAnnotation: this.submitAnnotation.bind(this),
            onUpdateAnnotation: this.updateAnotation.bind(this)
        });

        let ele = document.getElementById('label-studio');
        if (ele) {
            ele.firstElementChild.className = "my-test-class"
        }
    }
    updateAnotation(ls, annotation) {
        let response = this.state.response
        let taskData = this.state.taskData
        let getTaskId = ls.task.id
        let taskNavigation = this.state.taskNavigation
        let annotationSerializedArr = annotation.serializeAnnotation()
        let currentResponseObj = response[getTaskId - 1]
        let filteredTaskObj = taskData.filter(task => task.id === getTaskId)[0]
        let annotationObj = filteredTaskObj.annotations[0]
        let resultArr = annotationObj.result

        if (annotationSerializedArr.length !== currentResponseObj.annotation.entities.length) {
            let getNewSerializedData = annotationSerializedArr.filter(({ id: id1 }) => !resultArr.some(({ id: id2 }) => id2 === id1))

            for (const newSerializedObj of getNewSerializedData) {
                // if (newSerializedObj.type === "relation") {
                //     let entityObj = {
                //         direction: newSerializedObj.direction,
                //         from_id: newSerializedObj.from_id,
                //         to_id: newSerializedObj.to_id,
                //         type: newSerializedObj.type
                //     }
                //     currentResponseObj.annotation.entities.push(entityObj)
                // }
                if (newSerializedObj.type === "labels") {
                    let entityObj = {
                        end: newSerializedObj.value?.end,
                        label: newSerializedObj.value?.labels[0],
                        start: newSerializedObj.value?.start,
                        text: newSerializedObj.value?.text
                    }
                    currentResponseObj.annotation.entities.push(entityObj)
                }
            }
            currentResponseObj.modified = true
            // console.log("response", response)
            this.labelStudioTransform(response, taskNavigation)
            this.setState({ response: response })
        }

    }
    entityCreation(region) {
        let getTaskId = region.store.task.id
        let response = this.state.response
        let taskNavigation = this.state.taskNavigation
        let currentResponseObj = response[getTaskId - 1]

        currentResponseObj.modified = true

        this.labelStudioTransform(response, taskNavigation)

        this.setState({ response: response })
    }
    navigateTask(type) {
        let { taskNavigation, response } = this.state
        if (type === "next") {
            if (taskNavigation < response.length - 1) {
                let navIcrement = taskNavigation + 1
                this.labelStudioTransform(response, navIcrement)
                this.setState({ taskNavigation: navIcrement })
            }
        }
        if (type === "prev") {
            if (taskNavigation > 0) {
                let navDecrement = taskNavigation - 1
                this.labelStudioTransform(response, navDecrement)
                this.setState({ taskNavigation: navDecrement })
            }
        }
    }
    addLabels() {
        let lsLagendLabels = this.state.lsLagendLabels
        let response = this.state.response
        let taskNavigation = this.state.taskNavigation
        let taskData = this.state.taskData
        let labelObj = {
            id: "New Label",
            displayName: "New Label",
            description: "New Label",
            background: "yellow",
        }
        lsLagendLabels.push(labelObj)
        this.labelStudioTransform(response, taskNavigation)
        this.setState({ lsLagendLabels: lsLagendLabels })
    }
    render() {
        console.log("taskData", this.state.taskData && this.state.taskData)
        return (
            <div>
                <Row className="p-3">
                    <Col className="text-right">
                        <i className="fa fa-arrow-left m-3" onClick={this.navigateTask.bind(this, "prev")} />
                        <i className="fa fa-arrow-right m-3" onClick={this.navigateTask.bind(this, "next")} />
                    </Col>
                    <Col className="text-right" xs="auto"> <Button variant="primary" onClick={() => this.addLabels()}> Add Labels + </Button> </Col>
                </Row>
                <div id="label-studio"></div>
            </div>
        );
    }
}