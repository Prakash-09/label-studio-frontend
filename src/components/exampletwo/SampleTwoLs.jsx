import React from 'react';
import './SampleTwoLs.css';
import sourceData from './SampleTwoLsData';
import { Row, Col, Button } from 'react-bootstrap'
import LabelStudio from 'label-studio';
import 'label-studio/build/static/css/main.css';

export default class SampleTwoLs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            taskNavigation: 0,
            lsLagendLabels: sourceData.LABEL_CONFIG,
            taskData: [],
            response: [],
        }
    }

    componentDidMount() {
        let taskData = this.state.taskData
        let taskNavigation = this.state.taskNavigation
        let response = sourceData.RESPONSE_DATA

        if (response.length !== 0) {
            for (const responseObj of response) {
                let taskObj = {
                    annotations: [
                        {
                            id: `${response.indexOf(responseObj)}`,
                            result: []
                        }
                    ],
                    data: { text: responseObj.document, },
                    id: 1 + parseInt(`${response.indexOf(responseObj)}`),
                    predictions: []
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
                                    id: `${responseObj.annotation.entities.indexOf(entitiesObj)}${response.indexOf(responseObj)}1`,
                                    to_name: "text",
                                    type: "labels",
                                    value: {
                                        end: entitiesObj.end,
                                        labels: [`${entitiesObj.label}`],
                                        start: entitiesObj.start,
                                        text: `${entitiesObj.text}`,
                                    }
                                }
                                taskObj.annotations[0].result.push(testObj)
                            }
                        }
                    }
                }
                taskData.push(taskObj)
            }
        }

        this.buildLabelStudio(taskData, taskNavigation)

        this.setState({ response: response, taskData: taskData })
    }
    buildLabelStudio(taskDataParam, taskNavigation) {
        const lsLagendLabels = this.state.lsLagendLabels;
        const taskData = taskDataParam
        const navigation = taskNavigation
        var labelStudio = new LabelStudio('label-studio', {
            config: `<View>
            <Header name="text-1" value="Lagends" />
            <Labels name="label" toName="text">
                ${lsLagendLabels.map((item, itemIdx) =>
                `<Label key='${itemIdx}' value='${item.displayName}' background='${item.background}' />`
            )}
            </Labels>
            <Header name="text-2" value="Editor" />
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
            // onSubmitAnnotation: this.submitAnnotation.bind(this),
            onUpdateAnnotation: this.updateAnotation.bind(this)
        });
    }
    updateAnotation(ls, annotation) {
        let response = this.state.response
        let taskData = this.state.taskData
        let getTaskId = ls.task.id
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
            console.log("response", response)
        }

    }
    navigateTask(type) {
        let { taskNavigation, response, taskData } = this.state
        if (type === "next") {
            if (taskNavigation < response.length - 1) {
                let navIcrement = taskNavigation + 1
                this.buildLabelStudio(taskData, navIcrement)
                this.setState({ taskNavigation: navIcrement })
            }
        }
        if (type === "prev") {
            if (taskNavigation > 0) {
                let navDecrement = taskNavigation - 1
                this.buildLabelStudio(taskData, navDecrement)
                this.setState({ taskNavigation: navDecrement })
            }
        }
    }
    addLabels() {
        let lsLagendLabels = this.state.lsLagendLabels
        let taskNavigation = this.state.taskNavigation
        let taskData = this.state.taskData
        let labelObj = {
            id: "New Label",
            displayName: "New Label",
            description: "New Label",
            background: "yellow",
        }
        lsLagendLabels.push(labelObj)
        this.buildLabelStudio(taskData, taskNavigation)
        this.setState({ lsLagendLabels: lsLagendLabels })
    }
    render() {
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