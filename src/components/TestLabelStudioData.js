module.exports.SAMPLETEST = {
    configImageData: `
    <View>
        <Image name="img" value="$image"></Image>
        <RectangleLabels name="tag" toName="img">
            <Label value="Moon" background="red"></Label>
            <Label value="Earth" background="green"></Label>
        </RectangleLabels>
    </View>`,
    configRelationData: `
    <View>
        <Relations>
            <Relation value="hello" />
            <Relation value="world" />
        </Relations>

        <Text name="txt-1" value="$text" />
        <Labels name="lbl-1" toName="txt-1">
            <Label value="Relevant" />
            <Label value="Not Relevant" />
        </Labels>
    </View>`,
    configTextData: [
        {
            id: "Care Continuity",
            displayName: "Care Continuity",
            description: "Care Continuity",
            background: "red",
        },
        {
            id: "Cancelled Appointment",
            displayName: "Cancelled Appointment",
            description: "Cancelled Appointment",
            background: "darkorange",
        },
        {
            id: "Appointment Experience",
            displayName: "Appointment Experience",
            description: "Appointment Experience",
            background: "orange",

        },
        {
            id: "App Usability",
            displayName: "App Usability",
            description: "App Usability",
            background: "green",
        },
        {
            id: "App Onboarding",
            displayName: "App Onboarding",
            description: "App Onboarding",
            background: "darkblue",
        },
        {
            id: "Technical Issue",
            displayName: "Technical Issue",
            description: "Technical Issue",
            background: "blue",
        },
        {
            id: "Existing Feature Feedback",
            displayName: "Existing Feature Feedback",
            description: "Existing Feature Feedback",
            background: "purple",
        },
        {
            id: "Symptom Checker Experience",
            displayName: "Symptom Checker Experience",
            description: "Symptom Checker Experience",
            background: "#842",
        },
        {
            id: "Doctor Proficiency",
            displayName: "Doctor Proficiency",
            description: "Doctor Proficiency",
            background: "#428",
        },
        {
            id: "Service Excellence",
            displayName: "Service Excellence",
            description: "Service Excellence",
            background: "#482",
        },
        {
            id: "Reccomendation",
            displayName: "Reccomendation",
            description: "Reccomendation",
            background: "rgba(0,0,0,0.8)",
        },
        {
            id: "Family Doctor Experience Comparision",
            displayName: "Family Doctor Experience Comparision",
            description: "Family Doctor Experience Comparision",
            background: "#415",
        },
        {
            id: "Clinic Experience Comparision",
            displayName: "Clinic Experience Comparision",
            description: "Clinic Experience Comparision",
            background: "#435",
        },
        {
            id: "General Dissatisfaction",
            displayName: "General Dissatisfaction",
            description: "General Dissatisfaction",
            background: "#445",
        },
        {
            id: "Data Privacy",
            displayName: "Data Privacy",
            description: "Data Privacy",
            background: "#455",
        },
        {
            id: "Connection Issue",
            displayName: "Connection Issue",
            description: "Connection Issue",
            background: "#465",
        },
        {
            id: "General Sastisfaction",
            displayName: "General Sastisfaction",
            description: "General Sastisfaction",
            background: "#475",
        }
    ],
    interfacesData: [
        "panel",
        "update",
        "controls",
        "side-column",
        "annotations:menu",
        "annotations:add-new",
        "annotatiosns:delete",
        "predictions:menu",
        "skip",
        "submit"
    ],
    textTaskData: [
        {
            annotations: [
                {
                    id: "1001",
                    result: [
                        {
                            from_name: "label",
                            id: "1111111",
                            to_name: "text",
                            type: "labels",
                            value: {
                                end: 36,
                                labels: ["Care Continuity"],
                                start: 0,
                                text: "First Experiment in the label studio",
                            }
                        }
                    ],
                },
                {
                    id: "1002",
                    result: [
                        {
                            from_name: "label",
                            id: "FYMFfaOCUb",
                            to_name: "text",
                            type: "labels",
                            value: {
                                end: 36,
                                labels: ["General Sastisfaction"],
                                start: 30,
                                text: "studio",
                            }
                        },
                        {
                            from_name: "label",
                            id: "xyzppp",
                            to_name: "text",
                            type: "labels",
                            value: {
                                end: 5,
                                labels: ["Care Continuity"],
                                start: 0,
                                text: "First",
                            }
                        },
                        {
                            direction: "right",
                            from_id: "xyzppp",
                            to_id: "FYMFfaOCUb",
                            type: "relation",
                        },
                    ],
                },
                {
                    id: "1003",
                    result: [
                        {
                            from_name: "label",
                            id: "4RmgpNd4MA",
                            to_name: "text",
                            type: "labels",
                            value: {
                                end: 36,
                                labels: ["App Usability"],
                                start: 0,
                                text: "First Experiment in the label studio",
                            }
                        },
                        {
                            from_name: "label",
                            id: "p8JP3S9RVS",
                            to_name: "text",
                            type: "labels",
                            value: {
                                end: 23,
                                labels: ["Care Continuity"],
                                start: 17,
                                text: "in the",
                            },
                        },
                    ],
                },
            ],
            predictions: [],
            id: 1,
            data: {
                text: "First Experiment in the label studio"
            }
        },
        {
            annotations: [
                {
                    id: "2001",
                    result: [
                        {
                            from_name: "label",
                            id: "1111111",
                            to_name: "text",
                            type: "labels",
                            value: {
                                end: 36,
                                labels: ["Care Continuity"],
                                start: 0,
                                text: "First Experiment in the label studio",
                            }
                        }
                    ],
                },
                {
                    id: "2002",
                    result: [
                        {
                            from_name: "label",
                            id: "FYMFfaOCUb",
                            to_name: "text",
                            type: "labels",
                            value: {
                                end: 36,
                                labels: ["General Sastisfaction"],
                                start: 30,
                                text: "studio",
                            }
                        }
                    ],
                },
            ],
            predictions: [],
            id: 2,
            data: {
                text: "Second Experiment in the label studio"
            }
        },
    ],
    imageTaskData: {
        annotations: [
            {
                id: "1004",
                result: [
                    {
                        from_name: "tag",
                        id: "ItuiGIXL21",
                        image_rotation: 0,
                        original_height: 2802,
                        original_width: 2242,
                        to_name: "img",
                        type: "rectanglelabels",
                        value: {
                            height: 7.470288624787776,
                            rectanglelabels: ["Moon"],
                            rotation: 0,
                            width: 12.738853503184714,
                            x: 50.530785562632694,
                            y: 7.300509337860781,
                        }
                    },
                    {
                        from_name: "tag",
                        id: "mD1CJrZgq9",
                        image_rotation: 0,
                        original_height: 2802,
                        original_width: 2242,
                        to_name: "img",
                        type: "rectanglelabels",
                        value: {
                            height: 7.470288624787776,
                            rectanglelabels: ["Earth"],
                            rotation: 0,
                            width: 93.20594479830149,
                            x: 3.6093418259023355,
                            y: 91.68081494057725,
                        },
                    }
                ],
            },
        ],
        predictions: [],
        id: 1,
        data: {
            image: "https://htx-misc.s3.amazonaws.com/opensource/label-studio/examples/images/nick-owuor-astro-nic-visuals-wDifg5xc9Z4-unsplash.jpg",
            // text: "First Experiment in the label studio"
        }
    },
    // messagesData: {
    //     DONE: "Done!",
    //     NO_COMP_LEFT: "No more annotations",
    //     NO_NEXT_TASK: "No more data available for labeling",
    //     NO_ACCESS: "You don't have access to this task"
    // },
}

//label studio format: https://labelstud.io/guide/frontend_reference.html#interfaces
//label studio variations: https://app.labelstud.io/settings