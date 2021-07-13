import React from "react";
import LabelStudio from 'label-studio';
import 'label-studio/build/static/css/main.css';
import TestLabelStudioData from './TestLabelStudioData';

export default class TestLabelStudio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            annotation: "text"
        }
    }
    componentDidMount() {
        let annotation = this.state.annotation

        var labelStudio = new LabelStudio('label-studio', {
            config: `${annotation === "image" ? TestLabelStudioData.SAMPLETEST.configImageData : annotation === "text" && `<View>
            <Labels name="label" toName="text">
                ${TestLabelStudioData.SAMPLETEST.configTextData.map((item, itemIdx) =>
                `<Label key='${itemIdx}' value='${item.displayName}' background='${item.background}' />`
            )}
            </Labels>
            <Text name="text" value="$text" />
            </View>`}`,

            interfaces: TestLabelStudioData.SAMPLETEST.interfacesData,

            // messages: TestLabelStudioData.SAMPLETEST.messagesData,
            // user: { pk: 1, firstName: "James", lastName: "Dean" },

            task: TestLabelStudioData.SAMPLETEST.taskData,

            onLabelStudioLoad: function (LS) {
                var c = LS.annotationStore.addAnnotation({
                    userGenerate: true
                });
                LS.annotationStore.selectAnnotation(c.id);
            },

            onSubmitAnnotation: function (LS, annotation) {
                // retrive an annotation 
                console.log(annotation.serializeAnnotation())
            }

        });
    }
    render() {
        return (
            <div className="mt-3">
                <div id="label-studio"></div>
            </div>
        );
    }
}