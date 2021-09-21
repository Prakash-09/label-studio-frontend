import React from 'react';
import { LABEL_STUDIO_STRUCTURE } from './LsStructure';
import LabelStudio from 'label-studio';
import 'label-studio/build/static/css/main.css';

export default class TestAllAnnoatations extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            interfacesData: ["update", "side-column", "controls", "submit"],
            lsLegendLabels: []
        }
    }
    componentDidMount() {
        let lsLegendLabels = [
            {
                id: "General Satisfaction",
                displayName: "General Satisfaction",
                background: "#51AEEA"
            },
            {
                id: "Doctor Proficiency",
                displayName: "Doctor Proficiency",
                background: "#E3EA51"
            },
        ]
        let interfacesData = this.state.interfacesData
        this.buildLabelStudio(lsLegendLabels, interfacesData);
        this.setState({ lsLegendLabels: lsLegendLabels, interfacesData: interfacesData })
    }
    buildLabelStudio(lsLegendLabelsParam, interfacesDataParam) {
        let lsLegendLabels = lsLegendLabelsParam
        let interfacesData = interfacesDataParam
        new LabelStudio('label-studio', {
            config: this.lsConfigImageHtml(lsLegendLabels, "rect"),
            interfaces: interfacesData,
            task: LABEL_STUDIO_STRUCTURE.rectangleImageTaskData,
            onLabelStudioLoad: function (LS) {
                var c = LS.annotationStore.addAnnotation({
                    userGenerate: true
                });
                LS.annotationStore.selectAnnotation(c.id);
            },
            onUpdateAnnotation: this.updateAnnotation.bind(this),
        })
    }
    lsConfigImageHtml(lsLegendLabelsParam, typeParam) {
        const lsLegendLabels = lsLegendLabelsParam
        const type = typeParam
        if (type === "rect") {
            return (
                `<View>
                    <Header value="Image rectangle labeling"/>
                    <RectangleLabels name="tag" toName="img">
                        ${lsLegendLabels.map((item, itemIdx) => `<Label key='${itemIdx}' value='${item.displayName}' background='${item.background}' />`)}
                    </RectangleLabels>
                    <Image name="img" value="$content1"></Image>
                </View>`
            )
        } else if (type === "poly") {
            return (
                `<View>
                    <Header value="Image polygon labeling"/>
                    <PolygonLabels name="tag" toName="img" strokeWidth="3" pointSize="small" opacity="0.9">
                        ${lsLegendLabels.map((item, itemIdx) => `<Label key='${itemIdx}' value='${item.displayName}' background='${item.background}' />`)}
                    </PolygonLabels>
                    <Image name="img" value="$content1"></Image>
                </View>`
            )
        }
    }
    lsConfigTextHtml(lsLegendLabelsParam) {
        const lsLegendLabels = lsLegendLabelsParam
        return (
            `<View>
                <Header value="Text labeling"/>
                <Text name="text" value="$content1" />
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
                <Header value="Video labeling"/>
                <Labels name="tricks" toName="audio" choice="multiple">
                ${lsLegendLabels.map((item, itemIdx) => `<Label key='${itemIdx}' value='${item.displayName}' background='${item.background}' />`)}
                </Labels>
                <HyperText name="video" value="$content1"/>
                <AudioPlus name="audio" value="$content2" speed="false"/>
            </View>`
        )
    }
    lsConfigAudioHtml(lsLegendLabelsParam) {
        const lsLegendLabels = lsLegendLabelsParam
        return (
            `< View >
                <Header value="Audio labeling"/>
                <Labels name="label" toName="audio" choice="multiple">
                ${lsLegendLabels.map((item, itemIdx) => `<Label key='${itemIdx}' value='${item.displayName}' background='${item.background}' />`)}
                </Labels>
                <AudioPlus name="audio" value="$content1"></AudioPlus>
            </View >`
        )
    }
    lsConfigPairwiseHtml(lsLegendLabelsParam) {
        const lsLegendLabels = lsLegendLabelsParam
        return (
            `<View>
                <Header>Pairwise labeling</Header>
                <Pairwise name="pw" toName="text1,text2" />
                <Text name="text1" value="$content1" />
                <Text name="text2" value="$content2" />
            </View>`
        )
    }
    lsConfigKeypointHtml(lsLegendLabelsParam) {
        const lsLegendLabels = lsLegendLabelsParam
        return (
            `<View>
                <Header value="Keypoint labeling"/>
                <KeyPointLabels name="label" toName="img" strokewidth="2" opacity="1" >
                    ${lsLegendLabels.map((item, itemIdx) => `<Label key='${itemIdx}' value='${item.displayName}' background='${item.background}' />`)}
                </KeyPointLabels>
                <Image name="img" value="$content1" zoom="true" zoomControl="true"></Image>
            </View>`
        )
    }
    lsConfigHTMLNERHtml(lsLegendLabelsParam) {
        const lsLegendLabels = lsLegendLabelsParam
        return (
            `<View>
            <Header value="HTML NER labeling"/>
            <HyperTextLabels name="ner" toName="textner">
            ${lsLegendLabels.map((item, itemIdx) => `<Label key='${itemIdx}' value='${item.displayName}' background='${item.background}' />`)}
            </HyperTextLabels>
            <View style="border: 1px solid #CCC; border-radius: 10px; padding: 5px">
                <HyperText name="textner" value="$content1"/>
            </View>
            </View>`
        )
    }
    lsConfigAudioClassicHtml(lsLegendLabelsParam) {
        const lsLegendLabels = lsLegendLabelsParam
        return (
            `<View>
            <Header value="Audio classification labeling"/>
            <Header value="Select its topic"/>
            <Choices name="topic" toName="audio" choice="single-radio" showInline="true">
                ${lsLegendLabels.map((item, itemIdx) => `<Choice key='${itemIdx}' value='${item.displayName}' />`)}
            </Choices>
            <Audio name="audio" value="$content1"/>
            </View>`
        )
    }
    lsConfigTextClassicHtml(lsLegendLabelsParam) {
        const lsLegendLabels = lsLegendLabelsParam
        return (
            `<View>
                <Choices name="sentiment" toName="text" choice="multiple">
                    ${lsLegendLabels.map((item, itemIdx) => `<Choice key='${itemIdx}' value='${item.displayName}' />`)}
                </Choices>
            <Text name="text" value="$content1"/>
            </View>`
        )
    }

    updateAnnotation(ls, annotation) {
        console.log("structure", annotation.serializeAnnotation())
    }
    render() {
        return (
            <div>
                <div>Test all annotations</div>
                <div id="label-studio"></div>
            </div>
        );
    }
}