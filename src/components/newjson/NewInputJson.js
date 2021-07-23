[
    {
        NER_html: "<div style=\"overflow-x: auto; border: 1px solid #E6E9EF; border-radius: 0.25rem; padding: 1rem\"><div class=\"entities\" style=\"line-height: 2.5; direction: ltr\">\n<mark class=\"entity\" style=\"background: #ddd; padding: 0.45em 0.6em; margin: 0 0.25em; line-height: 1; border-radius: 0.35em;\">\n    Awesome, very helpful\n    <span style=\"font-size: 0.8em; font-weight: bold; line-height: 1; border-radius: 0.35em; vertical-align: middle; margin-left: 0.5rem\">General Satisfaction</span>\n</mark>\n, \n<mark class=\"entity\" style=\"background: #ddd; padding: 0.45em 0.6em; margin: 0 0.25em; line-height: 1; border-radius: 0.35em;\">\n    Dr was very thorough with questions and very attentive.\n    <span style=\"font-size: 0.8em; font-weight: bold; line-height: 1; border-radius: 0.35em; vertical-align: middle; margin-left: 0.5rem\">Doctor Proficiency</span>\n</mark>\n \n<mark class=\"entity\" style=\"background: #ddd; padding: 0.45em 0.6em; margin: 0 0.25em; line-height: 1; border-radius: 0.35em;\">\n    I feel hopeful I will get some answers now for my pain.\n    <span style=\"font-size: 0.8em; font-weight: bold; line-height: 1; border-radius: 0.35em; vertical-align: middle; margin-left: 0.5rem\">General Satisfaction</span>\n</mark>\n</div></div>",
        NER_labels: [
            { end: 21, entity: "General Satisfaction", start: 0 },
            { end: 78, entity: "Doctor Proficiency", start: 23 },
            { end: 134, entity: "General Satisfaction", start: 79 }
        ],
        annotation: {
            status: "COMPLETED",
            annotatedBy: "",
            annotatedAt: "",
            entities: [
                { end: 21, label: "General Satisfaction", start: 0, text: "Awesome, very helpful" },
                { end: 78, label: "Doctor Proficiency", start: 23, text: "Dr was very thorough with questions and very attentive." },
                { end: 134, label: "General Satisfaction", start: 79, text: "I feel hopeful I will get some answers now for my pain." }
            ]
        },
        document: "Awesome, very helpful, Dr was very thorough with questions and very attentive. I feel hopeful I will get some answers now for my pain.",
        id: "60c9f255665765fad5dd5eed",
        comments: [
            { id: "", commentedBy: "", comment: "please tag the review again", commentedAt: "" }
        ]
    }
]