import React from 'react';
import SampleLabelStudioData from './SampleLabelStudioData';
import LabelStudio from 'label-studio';
import 'label-studio/build/static/css/main.css';
import { Button } from 'react-bootstrap';

export default class SampleLabelStuio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            taskCount: 0,
            responseAnnotationData: [],
            lsConfigData: [],
            lsPropertiesData: {},
        }
    }
    componentDidMount() {
        let response = SampleLabelStudioData.RESPONSE_DATA;
        let lsConfigData = SampleLabelStudioData.LABEL_CONFIG;
        let propertiesData = SampleLabelStudioData.LABEL_STUDIO_DATA_PROPERTIES;

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
                    for (const entitiesObj of responseObj.annotation.entities) {
                        let testObj = {
                            // id: `${responseObj.annotation.entities.indexOf(entitiesObj)}${response.indexOf(responseObj)}`,
                            // result: [
                            //     {
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
                            //     }
                            // ]
                        }
                        taskObj.annotations[0].result.push(testObj)
                    }
                }
                propertiesData.lsTextTaskData.push(taskObj)
            }
        }
        this.setState({
            responseAnnotationData: response, lsConfigData: lsConfigData, lsPropertiesData: propertiesData
        })
    }

    addLabels() {
        let lsConfigData = this.state.lsConfigData;
        let newLabel = {
            id: "Added New",
            displayName: "Added New",
            description: "Added New",
            background: "yellow",
        }
        lsConfigData.push(newLabel)
        this.setState({ lsConfigData: lsConfigData })
    }

    navigateTask(type) {
        let taskCount = this.state.taskCount
        let responseAnnotationData = this.state.responseAnnotationData
        if (type === "next") {
            if (taskCount < responseAnnotationData.length - 1) {
                this.setState({ taskCount: taskCount + 1 })
            }
        }
        if (type === "prev") {
            if (taskCount > 0) {
                this.setState({ taskCount: taskCount - 1 })
            }
        }
    }

    submitAnnotation(ls, annotation) {
        console.log("annotation.serializeAnnotation()", annotation.serializeAnnotation())
    }

    updateAnotation(ls, annotation) {
        let getTaskId = ls.task.id
        let annotationSerializedArr = annotation.serializeAnnotation()
        let response = this.state.responseAnnotationData
        let filteredResponseObj = response[getTaskId - 1]
        let lsPropertiesData = this.state.lsPropertiesData
        let filteredTaskObj = lsPropertiesData.lsTextTaskData.filter(task => task.id === getTaskId)[0]
        let filteredAnnotationsObj = filteredTaskObj.annotations[0]

        if (annotationSerializedArr.length !== filteredResponseObj.annotation.entities.length) {

            let updatedSerializeAnnotation = annotationSerializedArr.filter(({ id: id1 }) => !filteredAnnotationsObj.result.some(({ id: id2 }) => id2 === id1))

            for (const latestSerializeObj of updatedSerializeAnnotation) {
                let resultObj = {
                    end: latestSerializeObj.value.end,
                    label: latestSerializeObj.value.labels[0],
                    start: latestSerializeObj.value.start,
                    text: latestSerializeObj.value.text
                }
                filteredResponseObj.annotation.entities.push(resultObj)
            }
            console.log("response", response)
            this.setState({ responseAnnotationData: response, lsPropertiesData: lsPropertiesData })
        }
    }

    render() {
        let { taskCount, lsConfigData, lsPropertiesData, responseAnnotationData } = this.state;
        console.log("responseAnnotationData", responseAnnotationData)
        var labelStudio = new LabelStudio('label-studio', {
            config: `<View>
            <Labels name="label" toName="text">
                ${lsConfigData.map((item, itemIdx) =>
                `<Label key='${itemIdx}' value='${item.displayName}' background='${item.background}' />`
            )}
            </Labels>
            <Text name="text" value="$text" />
            </View>`,
            interfaces: lsPropertiesData.lsInterfacesData,
            task: Object.keys(lsPropertiesData).length !== 0 ? lsPropertiesData.lsTextTaskData[taskCount] : {
                annotations: [],
                predictions: [],
                id: 1,
                data: {
                    text: "First Experiment in the label studio"
                }
            },
            onLabelStudioLoad: function (LS) {
                var c = LS.annotationStore.addAnnotation({
                    userGenerate: true
                });
                LS.annotationStore.selectAnnotation(c.id);
            },
            onSubmitAnnotation: this.submitAnnotation.bind(this),
            onUpdateAnnotation: this.updateAnotation.bind(this)
        });
        return (
            <div className="my-3">
                <Button onClick={this.addLabels.bind(this)}> Add labels + </Button>
                <i className="fa fa-arrow-left m-3" onClick={this.navigateTask.bind(this, "prev")} />
                <i className="fa fa-arrow-right m-3" onClick={this.navigateTask.bind(this, "next")} />
            </div>
        );
    }
}