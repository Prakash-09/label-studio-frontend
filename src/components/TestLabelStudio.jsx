import React from "react";
import LabelStudio from 'label-studio';
import 'label-studio/build/static/css/main.css';
import TestLabelStudioData from './TestLabelStudioData';
import { Button } from 'react-bootstrap';

export default class TestLabelStudio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            annotationType: "text",
            labelStudioObj: TestLabelStudioData.SAMPLETEST
        }
    }
    // componentDidMount() {
    //     let annotationType = this.state.annotationType
    //     let labelStudioObj = this.state.labelStudioObj

    //     var labelStudio = new LabelStudio('label-studio', {
    //         config: `${annotationType === "image" ? labelStudioObj.configImageData : annotationType === "text" && `<View>
    //         <Labels name="label" toName="text">
    //             ${labelStudioObj.configTextData.map((item, itemIdx) =>
    //             `<Label key='${itemIdx}' value='${item.displayName}' background='${item.background}' />`
    //         )}
    //         </Labels>
    //         <Text name="text" value="$text" />
    //         </View>`}`,

    //         interfaces: labelStudioObj.interfacesData,

    //         // messages: labelStudioObj.messagesData,
    //         // user: { pk: 1, firstName: "James", lastName: "Dean" },

    //         task: labelStudioObj.taskData,

    //         onLabelStudioLoad: function (LS) {
    //             var c = LS.annotationStore.addAnnotation({
    //                 userGenerate: true
    //             });
    //             LS.annotationStore.selectAnnotation(c.id);
    //         },

    //         onSubmitAnnotation: function (LS, annotation) {
    //             // retrive an annotation 
    //             console.log(annotation.serializeAnnotation())
    //         }

    //     });
    // }

    handleAddLabel(e) {
        let labelStudioObj = this.state.labelStudioObj;
        let newLabelObj = {
            id: "Added New",
            displayName: "Added New",
            description: "Added New",
            background: "yellow",
        }
        labelStudioObj.configTextData.push(newLabelObj)
        this.setState({
            labelStudioObj: labelStudioObj
        })
    }

    render() {
        console.log("labelStudioObj", this.state.labelStudioObj)
        let { annotationType, labelStudioObj } = this.state;
        var labelStudio = new LabelStudio('label-studio', {
            config: `${annotationType === "image" ? labelStudioObj.configImageData
                : annotationType === "text" &&
                `<View>
                    <Labels name="label" toName="text">
                        ${labelStudioObj.configTextData.map((item, itemIdx) =>
                    `<Label key='${itemIdx}' value='${item.displayName}' background='${item.background}' />`
                )}
                    </Labels>
                    <Text name="text" value="$text" />
                </View>`
                }`,

            interfaces: labelStudioObj.interfacesData,

            // task: annotationType === "image" ? labelStudioObj.imageTaskData : annotationType === "text" && labelStudioObj.textTaskData,
            task: labelStudioObj.textTaskData[0],
            onLabelStudioLoad: function (LS) {
                var c = LS.annotationStore.addAnnotation({
                    userGenerate: true
                });
                LS.annotationStore.selectAnnotation(c.id);
            },
            onSubmitAnnotation: function (LS, annotation) {
                // retrive an annotation 
                console.log(annotation.serializeAnnotation())
            },
        });
        return (
            <div className="mt-3">
                <Button onClick={this.handleAddLabel.bind(this)}>Add Label +</Button>
                {/* <div id="label-studio"></div> */}
            </div>
        );
    }
}