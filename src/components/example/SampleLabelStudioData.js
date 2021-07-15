module.exports.RESPONSE_DATA = [
    {
        NER_html: "<div style=\"overflow-x: auto; border: 1px solid #E6E9EF; border-radius: 0.25rem; padding: 1rem\"><div class=\"entities\" style=\"line-height: 2.5; direction: ltr\">\n<mark class=\"entity\" style=\"background: #ddd; padding: 0.45em 0.6em; margin: 0 0.25em; line-height: 1; border-radius: 0.35em;\">\n    Awesome, very helpful\n    <span style=\"font-size: 0.8em; font-weight: bold; line-height: 1; border-radius: 0.35em; vertical-align: middle; margin-left: 0.5rem\">General Satisfaction</span>\n</mark>\n, \n<mark class=\"entity\" style=\"background: #ddd; padding: 0.45em 0.6em; margin: 0 0.25em; line-height: 1; border-radius: 0.35em;\">\n    Dr was very thorough with questions and very attentive.\n    <span style=\"font-size: 0.8em; font-weight: bold; line-height: 1; border-radius: 0.35em; vertical-align: middle; margin-left: 0.5rem\">Doctor Proficiency</span>\n</mark>\n \n<mark class=\"entity\" style=\"background: #ddd; padding: 0.45em 0.6em; margin: 0 0.25em; line-height: 1; border-radius: 0.35em;\">\n    I feel hopeful I will get some answers now for my pain.\n    <span style=\"font-size: 0.8em; font-weight: bold; line-height: 1; border-radius: 0.35em; vertical-align: middle; margin-left: 0.5rem\">General Satisfaction</span>\n</mark>\n</div></div>",
        NER_labels: [
            { end: 21, entity: "General Satisfaction", start: 0 },
            { end: 78, entity: "Doctor Proficiency", start: 23 },
            { end: 134, entity: "General Satisfaction", start: 79 },
        ],
        annotation: {
            entities: [
                { end: 21, label: "General Satisfaction", start: 0, text: "Awesome, very helpful" },
                { end: 78, label: "Doctor Proficiency", start: 23, text: "Dr was very thorough with questions and very attentive." },
                { end: 134, label: "General Satisfaction", start: 79, text: "I feel hopeful I will get some answers now for my pain." },
            ]
        },
        document: "Awesome, very helpful, Dr was very thorough with questions and very attentive. I feel hopeful I will get some answers now for my pain.",
        id: "60c9f255665765fad5dd5eed",
        reannotateComment: "hey there",
        notateStatus: "INPROGRESS",
    },
    {
        NER_html: "<div style=\"overflow-x: auto; border: 1px solid #E6E9EF; border-radius: 0.25rem; padding: 1rem\"><div class=\"entities\" style=\"line-height: 2.5; direction: ltr\">\n<mark class=\"entity\" style=\"background: #ddd; padding: 0.45em 0.6em; margin: 0 0.25em; line-height: 1; border-radius: 0.35em;\">\n    Simply the best I am willing to do a commercial 😊 for u guys 2 thumb's up !\n    <span style=\"font-size: 0.8em; font-weight: bold; line-height: 1; border-radius: 0.35em; vertical-align: middle; margin-left: 0.5rem\">General Satisfaction</span>\n</mark>\n!</div></div>",
        NER_labels: [
            { end: 75, entity: "General Satisfaction", start: 0 },
        ],
        annotation: {
            entities: [
                { end: 75, label: "General Satisfaction", start: 0, text: "Simply the best I am willing to do a commercial 😊 for u guys 2 thumb's up !" }
            ]
        },
        document: "Simply the best I am willing to do a commercial 😊 for u guys 2 thumb's up !!",
        id: "60ca1215665765fad5dd5f68",
        reannotateComment: "testing flag test",
        reannotateStatus: "INPROGRESS",
    },
]

module.exports.LABEL_STUDIO_DATA_PROPERTIES = {
    lsInterfacesData: [
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
    lsTextTaskData: [
        // {
        //     annotations: [
        //         {
        //             id: "1001",
        //             result: [
        //                 {
        //                     from_name: "label",
        //                     id: "1111111",
        //                     to_name: "text",
        //                     type: "labels",
        //                     value: {
        //                         end: 36,
        //                         labels: ["Care Continuity"],
        //                         start: 0,
        //                         text: "First Experiment in the label studio",
        //                     }
        //                 }
        //             ],
        //         },
        //         {
        //             id: "1002",
        //             result: [
        //                 {
        //                     from_name: "label",
        //                     id: "FYMFfaOCUb",
        //                     to_name: "text",
        //                     type: "labels",
        //                     value: {
        //                         end: 36,
        //                         labels: ["General Sastisfaction"],
        //                         start: 30,
        //                         text: "studio",
        //                     }
        //                 }
        //             ],
        //         },
        //         {
        //             id: "1003",
        //             result: [
        //                 {
        //                     from_name: "label",
        //                     id: "4RmgpNd4MA",
        //                     to_name: "text",
        //                     type: "labels",
        //                     value: {
        //                         end: 36,
        //                         labels: ["App Usability"],
        //                         start: 0,
        //                         text: "First Experiment in the label studio",
        //                     }
        //                 },
        //                 {
        //                     from_name: "label",
        //                     id: "p8JP3S9RVS",
        //                     to_name: "text",
        //                     type: "labels",
        //                     value: {
        //                         end: 23,
        //                         labels: ["Care Continuity"],
        //                         start: 17,
        //                         text: "in the",
        //                     },
        //                 }
        //             ],
        //         },
        //     ],
        //     predictions: [],
        //     id: 1,
        //     data: {
        //         text: "Awesome, very helpful, Dr was very thorough with questions and very attentive. I feel hopeful I will get some answers now for my pain."
        //     }
        // },
        // {
        //     annotations: [
        //         {
        //             id: "2001",
        //             result: [
        //                 {
        //                     from_name: "label",
        //                     id: "1111111",
        //                     to_name: "text",
        //                     type: "labels",
        //                     value: {
        //                         end: 74,
        //                         labels: ["General Satisfaction"],
        //                         start: 0,
        //                         text: "Simply the best I am willing to do a commercial 😊 for u guys 2 thumb's up !!",
        //                     }
        //                 }
        //             ],
        //         },
        //         {
        //             id: "2002",
        //             result: [
        //                 {
        //                     from_name: "label",
        //                     id: "FYMFfaOCUb",
        //                     to_name: "text",
        //                     type: "labels",
        //                     value: {
        //                         end: 36,
        //                         labels: ["General Sastisfaction"],
        //                         start: 30,
        //                         text: "studio",
        //                     }
        //                 }
        //             ],
        //         },
        //     ],
        //     predictions: [],
        //     id: 2,
        //     data: {
        //         text: "Simply the best I am willing to do a commercial 😊 for u guys 2 thumb's up !!"
        //     }
        // },
    ],
}

module.exports.LABEL_CONFIG = [
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
        id: "General Satisfaction",
        displayName: "General Satisfaction",
        description: "General Satisfaction",
        background: "#475",
    }
]