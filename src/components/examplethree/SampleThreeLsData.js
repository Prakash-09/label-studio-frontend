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
                // { direction: "right", from_id: "001", to_id: "101", type: "relation" }
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
    {
        NER_html: "<div style=\"overflow-x: auto; border: 1px solid #E6E9EF; border-radius: 0.25rem; padding: 1rem\"><div class=\"entities\" style=\"line-height: 2.5; direction: ltr\">trying to open to book an appointment but it keeps stopping</div></div>",
        NER_labels: [],
        annotation: {
            entities: [
                { end: 59, label: "Technical Issue", start: 0, text: "trying to open to book an appointment but it keeps stopping" },
            ],
        },
        document: "trying to open to book an appointment but it keeps stopping",
        id: "60ca02bb665765fad5dd5f33",
        reannotateComment: "tesing the technical issues",
        reannotateStatus: "COMPLETED",
    },
    {
        NER_html: "<div style=\"overflow-x: auto; border: 1px solid #E6E9EF; border-radius: 0.25rem; padding: 1rem\"><div class=\"entities\" style=\"line-height: 2.5; direction: ltr\">\n<mark class=\"entity\" style=\"background: #ddd; padding: 0.45em 0.6em; margin: 0 0.25em; line-height: 1; border-radius: 0.35em;\">\n    This app has been a life saver.\n    <span style=\"font-size: 0.8em; font-weight: bold; line-height: 1; border-radius: 0.35em; vertical-align: middle; margin-left: 0.5rem\">General Satisfaction</span>\n</mark>\n With my current work schedule and with doctors only taking phone calls lately, I have been struggling to see my own family doctor for a few ongoing issues. \n<mark class=\"entity\" style=\"background: #ddd; padding: 0.45em 0.6em; margin: 0 0.25em; line-height: 1; border-radius: 0.35em;\">\n    The doctor I have seen on Telus health has been amazing and listens to my concerns and provides a treatment plan that is actually helpful.\n    <span style=\"font-size: 0.8em; font-weight: bold; line-height: 1; border-radius: 0.35em; vertical-align: middle; margin-left: 0.5rem\">Doctor Proficiency</span>\n</mark>\n \n<mark class=\"entity\" style=\"background: #ddd; padding: 0.45em 0.6em; margin: 0 0.25em; line-height: 1; border-radius: 0.35em;\">\n    I highly recommend this app, and will continue to use it as long as it is being offered.\n    <span style=\"font-size: 0.8em; font-weight: bold; line-height: 1; border-radius: 0.35em; vertical-align: middle; margin-left: 0.5rem\">Recommendation</span>\n</mark>\n</div></div>",
        NER_labels: [
            { end: 31, entity: "General Satisfaction", start: 0 },
            { end: 326, entity: "Doctor Proficiency", start: 188 },
            { end: 415, entity: "Recommendation", start: 327 },
        ],
        annotation: {
            entities: [
                { end: 31, label: "General Satisfaction", start: 0, text: "This app has been a life saver.", },
                { end: 326, label: "Doctor Proficiency", start: 188, text: "The doctor I have seen on Telus health has been amazing and listens to my concerns and provides a treatment plan that is actually helpful.", },
                { end: 415, label: "Recommendation", start: 327, text: "I highly recommend this app, and will continue to use it as long as it is being offered.", },
            ],
        },
        document: "This app has been a life saver. With my current work schedule and with doctors only taking phone calls lately, I have been struggling to see my own family doctor for a few ongoing issues. The doctor I have seen on Telus health has been amazing and listens to my concerns and provides a treatment plan that is actually helpful. I highly recommend this app, and will continue to use it as long as it is being offered.",
        id: "60c9ef9c665765fad5dd5ee4",
        reannotateComment: "Please review the tags",
        reannotateStatus: "INPROGRESS",
    },
    {
        NER_html: "<div style=\"overflow-x: auto; border: 1px solid #E6E9EF; border-radius: 0.25rem; padding: 1rem\"><div class=\"entities\" style=\"line-height: 2.5; direction: ltr\">\n<mark class=\"entity\" style=\"background: #ddd; padding: 0.45em 0.6em; margin: 0 0.25em; line-height: 1; border-radius: 0.35em;\">\n    The doctor was great.\n    <span style=\"font-size: 0.8em; font-weight: bold; line-height: 1; border-radius: 0.35em; vertical-align: middle; margin-left: 0.5rem\">Doctor Proficiency</span>\n</mark>\n Still waiting for notification of presciption though.</div></div>",
        NER_labels: [
            { end: 21, entity: "Doctor Proficiency", start: 0 },
        ],
        annotation: {
            entities: [
                { end: 21, label: "Doctor Proficiency", start: 0, text: "The doctor was great." }
            ],
        },
        document: "The doctor was great. Still waiting for notification of presciption though.",
        id: "60c9f0f3665765fad5dd5ee7",
        reannotateComment: "ress",
        reannotateStatus: "INPROGRESS",
    },
    {
        NER_html: "<div style=\"overflow-x: auto; border: 1px solid #E6E9EF; border-radius: 0.25rem; padding: 1rem\"><div class=\"entities\" style=\"line-height: 2.5; direction: ltr\">\n<mark class=\"entity\" style=\"background: #ddd; padding: 0.45em 0.6em; margin: 0 0.25em; line-height: 1; border-radius: 0.35em;\">\n    Easy to book and have the appointment\n    <span style=\"font-size: 0.8em; font-weight: bold; line-height: 1; border-radius: 0.35em; vertical-align: middle; margin-left: 0.5rem\">Pre Appointment Experience</span>\n</mark>\n</div></div>",
        NER_labels: [
            { end: 37, entity: "Pre Appointment Experience", start: 0 },
        ],
        annotation: {
            entities: [
                { end: 37, label: "Pre Appointment Experience", start: 0, text: "Easy to book and have the appointment" },
            ],
        },
        document: "Easy to book and have the appointment",
        id: "60ca1003665765fad5dd5f5f",
        reannotateComment: "test",
        reannotateStatus: "INPROGRESS",
    },
]

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
        id: "Pre Appointment Experience",
        displayName: "Pre Appointment Experience",
        description: "Pre Appointment Experience",
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
        id: "Recommendation",
        displayName: "Recommendation",
        description: "Recommendation",
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