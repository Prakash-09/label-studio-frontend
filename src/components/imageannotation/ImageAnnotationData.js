module.exports.RESPONSE_DATA = [
    {
        NER_html: "<div style=\"overflow-x: auto; border: 1px solid #E6E9EF; border-radius: 0.25rem; padding: 1rem\"><div class=\"entities\" style=\"line-height: 2.5; direction: ltr\">\n<mark class=\"entity\" style=\"background: #ddd; padding: 0.45em 0.6em; margin: 0 0.25em; line-height: 1; border-radius: 0.35em;\">\n    Awesome, very helpful\n    <span style=\"font-size: 0.8em; font-weight: bold; line-height: 1; border-radius: 0.35em; vertical-align: middle; margin-left: 0.5rem\">General Satisfaction</span>\n</mark>\n, \n<mark class=\"entity\" style=\"background: #ddd; padding: 0.45em 0.6em; margin: 0 0.25em; line-height: 1; border-radius: 0.35em;\">\n    Dr was very thorough with questions and very attentive.\n    <span style=\"font-size: 0.8em; font-weight: bold; line-height: 1; border-radius: 0.35em; vertical-align: middle; margin-left: 0.5rem\">Doctor Proficiency</span>\n</mark>\n \n<mark class=\"entity\" style=\"background: #ddd; padding: 0.45em 0.6em; margin: 0 0.25em; line-height: 1; border-radius: 0.35em;\">\n    I feel hopeful I will get some answers now for my pain.\n    <span style=\"font-size: 0.8em; font-weight: bold; line-height: 1; border-radius: 0.35em; vertical-align: middle; margin-left: 0.5rem\">General Satisfaction</span>\n</mark>\n</div></div>",
        NER_labels: [
            { end: 21, entity: "General Satisfaction", start: 0 },
            { end: 78, entity: "Doctor Proficiency", start: 23 },
            { end: 134, entity: "General Satisfaction", start: 79 },
        ],
        annotation: {
            type: "text",
            entities: [
                { end: 21, label: "General Satisfaction", start: 0, text: "Awesome, very helpful" },
                { end: 78, label: "Doctor Proficiency", start: 23, text: "Dr was very thorough with questions and very attentive." },
                { end: 134, label: "General Satisfaction", start: 79, text: "I feel hopeful I will get some answers now for my pain." },
                // { direction: "right", from_id: "001", to_id: "101", type: "relation" }
            ]
        },
        document: "Awesome, very helpful, Dr was very thorough with questions and very attentive. I feel hopeful I will get some answers now for my pain.",
        id: "60c9f255665765fad5dd5eed",
        comments: [
            { id: "", commentedBy: "Admin", comment: "please tag the review again", commentedAt: "1 hour ago" },
            { id: "", commentedBy: "Admin", comment: "please tag the review again", commentedAt: "2 hours ago" },
        ]
    },
    {
        NER_html: "<div style=\"overflow-x: auto; border: 1px solid #E6E9EF; border-radius: 0.25rem; padding: 1rem\"><div class=\"entities\" style=\"line-height: 2.5; direction: ltr\">\n<mark class=\"entity\" style=\"background: #ddd; padding: 0.45em 0.6em; margin: 0 0.25em; line-height: 1; border-radius: 0.35em;\">\n    Simply the best I am willing to do a commercial 😊 for u guys 2 thumb's up !\n    <span style=\"font-size: 0.8em; font-weight: bold; line-height: 1; border-radius: 0.35em; vertical-align: middle; margin-left: 0.5rem\">General Satisfaction</span>\n</mark>\n!</div></div>",
        NER_labels: [
            { end: 75, entity: "General Satisfaction", start: 0 },
        ],
        annotation: {
            type: "image rectangle",
            entities: []
        },
        document: "https://htx-misc.s3.amazonaws.com/opensource/label-studio/examples/images/nick-owuor-astro-nic-visuals-wDifg5xc9Z4-unsplash.jpg",
        id: "60ca1215665765fad5dd5f68",
        comments: [
            { id: "", commentedBy: "", comment: "comment for simply the best", commentedAt: "" }
        ]
    },
    {
        NER_html: "<div style=\"overflow-x: auto; border: 1px solid #E6E9EF; border-radius: 0.25rem; padding: 1rem\"><div class=\"entities\" style=\"line-height: 2.5; direction: ltr\">\n<mark class=\"entity\" style=\"background: #ddd; padding: 0.45em 0.6em; margin: 0 0.25em; line-height: 1; border-radius: 0.35em;\">\n    Simply the best I am willing to do a commercial 😊 for u guys 2 thumb's up !\n    <span style=\"font-size: 0.8em; font-weight: bold; line-height: 1; border-radius: 0.35em; vertical-align: middle; margin-left: 0.5rem\">General Satisfaction</span>\n</mark>\n!</div></div>",
        NER_labels: [
            { end: 75, entity: "General Satisfaction", start: 0 },
        ],
        annotation: {
            type: "image polygon",
            entities: []
        },
        document: "https://imgflip.com/s/meme/Leonardo-Dicaprio-Cheers.jpg",
        id: "60ca02bb665765fad5dd5f33",
        comments: [
            { id: "", commentedBy: "", comment: "comment for simply the best", commentedAt: "" }
        ]
    },
]

module.exports.OUTPUT_STRUCTURE = {
    textTaskData: {
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
        ],
        predictions: [],
        id: 1,
        data: {
            text: "First Experiment in the label studio"
        }
    },
    rectangleImageTaskData: {
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
    polygonImageTaskData: {
        annotations: [
            {
                id: "1004",
                result: [
                    {
                        from_name: "tag",
                        id: "8j6ZYju9mE",
                        image_rotation: 0,
                        original_height: 400,
                        original_width: 600,
                        to_name: "img",
                        type: "polygonlabels",
                        value: {
                            points: [
                                [61.97802197802198, 0.6600660066006601],
                                [65.05494505494505, 5.2805280528052805],
                                [65.49450549450549, 12.211221122112212],
                                [66.81318681318682, 19.471947194719473],
                                [67.25274725274726, 22.77227722772277],
                                [66.15384615384616, 31.353135313531354],
                                [65.49450549450549, 37.95379537953795],
                                [65.71428571428571, 48.51485148514851],
                                [62.857142857142854, 56.43564356435643],
                                [58.24175824175824, 66.33663366336634],
                                [50.32967032967033, 66.996699669967],
                                [45.27472527472528, 64.02640264026402],
                                [40, 50.82508250825082],
                                [37.582417582417584, 44.884488448844884],
                                [35.16483516483517, 41.254125412541256],
                                [32.967032967032964, 33.333333333333336],
                                [32.08791208791209, 27.392739273927393],
                                [32.967032967032964, 27.392739273927393],
                                [32.747252747252745, 15.511551155115512],
                                [32.967032967032964, 8.910891089108912],
                                [36.48351648351648, 0.9900990099009901],
                                [38.68131868131868, 0],
                            ],
                            polygonlabels: ["General Satisfaction"]
                        }
                    }
                ],
            },
        ],
        predictions: [],
        id: 1,
        data: {
            image: "https://imgflip.com/s/meme/Leonardo-Dicaprio-Cheers.jpg",
        }
    }
}