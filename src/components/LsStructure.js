module.exports.LABEL_STUDIO_STRUCTURE = {
    textTaskData: {
        annotations: [
            {
                id: "1001",
                result: [
                    {
                        from_name: "label",
                        id: "001",
                        to_name: "text",
                        type: "labels",
                        value: {
                            end: 22,
                            labels: ["General Satisfaction"],
                            start: 0,
                            text: "Awesome, very helpful",
                        }
                    },
                    {
                        from_name: "label",
                        id: "101",
                        to_name: "text",
                        type: "labels",
                        value: {
                            end: 78,
                            labels: ["Doctor Proficiency"],
                            start: 23,
                            text: "Dr was very thorough with questions and very attentive.",
                        }
                    },
                ],
            },
        ],
        predictions: [],
        id: 1,
        data: {
            content1: "Awesome, very helpful, Dr was very thorough with questions and very attntive. I feel hopeful I will get some answers now for my pain.",
            content2: ""
        }
    },
    rectangleImageTaskData: {
        annotations: [
            {
                id: "1002",
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
                            rectanglelabels: ["General Satisfaction"],
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
                            rectanglelabels: ["Doctor Proficiency"],
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
            content1: "https://htx-misc.s3.amazonaws.com/opensource/label-studio/examples/images/nick-owuor-astro-nic-visuals-wDifg5xc9Z4-unsplash.jpg",
            content2: ""
        }
    },
    polygonImageTaskData: {
        annotations: [
            {
                id: "1003",
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
            content1: "https://imgflip.com/s/meme/Leonardo-Dicaprio-Cheers.jpg",
            content2: ""
        }
    },
    videoTaskData: {
        annotations: [
            {
                id: "1004",
                result: [
                    {
                        from_name: "tricks",
                        id: "wavesurfer_j9hbbcu5k68",
                        original_length: 42,
                        to_name: "audio",
                        type: "labels",
                        value: {
                            end: 6.461538461538462,
                            labels: ["General Satisfaction"],
                            start: 0.9230769230769231,
                        },
                    },
                    {
                        from_name: "tricks",
                        id: "wavesurfer_8l4t72v5a6",
                        original_length: 42,
                        to_name: "audio",
                        type: "labels",
                        value: {
                            end: 18.83076923076923,
                            labels: ["Doctor Proficiency"],
                            start: 10.153846153846153,
                        },
                    }
                ],
            },
        ],
        predictions: [],
        id: 1,
        data: {
            content1: "<video src='https://app.heartex.ai/static/samples/opossum_snow.mp4' width=100% muted /><img src onerror=\"$=n => document.getElementsByTagName(n)[0]; a=$('audio'); v=$('video'); a.onseeked = () => { v.currentTime = a.currentTime }; a.onplay = () => v.play(); a.onpause = () => v.pause()\" />",
            content2: "https://app.heartex.ai/static/samples/opossum_snow.mp4",
        }
    },
    audioTaskData: {
        annotations: [
            {
                id: "1005",
                result: [
                    {
                        from_name: "label",
                        id: "wavesurfer_eih8bpmmme",
                        original_length: 3.774375,
                        to_name: "audio",
                        type: "labels",
                        value: {
                            end: 1.9411071428571427,
                            labels: ["General Satisfaction"],
                            start: 0.4728337912087912,
                        }
                    },
                    {
                        from_name: "label",
                        id: "wavesurfer_7lh0lv8pa48",
                        original_length: 3.774375,
                        to_name: "audio",
                        type: "labels",
                        value: {
                            end: 3.0029093406593406,
                            labels: ["General Satisfaction"],
                            start: 2.1318997252747254,
                        }
                    },
                ],
            },
        ],
        predictions: [],
        id: 1,
        data: {
            content1: "https://app.heartex.ai/static/samples/game.wav",
            content2: ""
        }
    },
    pairwiseTaskData: {
        annotations: [
            {
                id: "1006",
                result: [
                    {
                        from_name: "pw",
                        id: "zMCrW5IEeL",
                        to_name: "pw",
                        type: "pairwise",
                        value: {
                            selected: "left"
                        },
                    },
                ]
            },
        ],
        predictions: [],
        id: 1,
        data: {
            content1: "To have faith is to trust yourself to the water",
            content2: "To have faith is to trust yourself to the water"
        }
    },
    keypointTaskData: {
        annotations: [
            {
                id: "1007",
                result: [
                    {
                        from_name: "label",
                        id: "8s7cNt07IP",
                        image_rotation: 0,
                        original_height: 2802,
                        original_width: 2242,
                        to_name: "img",
                        type: "keypointlabels",
                        value: {
                            keypointlabels: ["General Satisfaction"],
                            width: 0.49382716049382713,
                            x: 55.80246913580247,
                            y: 10.869565217391305,
                        },
                    },
                    {
                        from_name: "label",
                        id: "L1eE9q3KfG",
                        image_rotation: 0,
                        original_height: 2802,
                        original_width: 2242,
                        to_name: "img",
                        type: "keypointlabels",
                        value: {
                            keypointlabels: ["Doctor Proficiency"],
                            width: 0.49382716049382713,
                            x: 21.48148148148148,
                            y: 42.687747035573125,
                        }
                    },
                ]
            },
        ],
        predictions: [],
        id: 1,
        data: {
            content1: "https://htx-misc.s3.amazonaws.com/opensource/label-studio/examples/images/nick-owuor-astro-nic-visuals-wDifg5xc9Z4-unsplash.jpg",
            content2: ""
        }
    },
    HTMLNERTaskData: {
        annotations: [
            {
                id: "1008",
                result: [
                    {
                        from_name: "ner",
                        id: "Iz7Z7WEj3y",
                        to_name: "textner",
                        type: "hypertextlabels",
                        value: {
                            end: "/div[1]/div[1]/div[1]/p[1]/text()[1]",
                            endOffset: 75,
                            htmllabels: ["General Satisfaction"],
                            start: "/div[1]/div[1]/div[1]/p[1]/text()[1]",
                            startOffset: 64,
                            text: "appreciated",
                        }
                    },
                    {
                        from_name: "ner",
                        id: "S5JfuN-DdQ",
                        to_name: "textner",
                        type: "hypertextlabels",
                        value: {
                            end: "/div[1]/div[2]/div[1]/p[1]/text()[1]",
                            endOffset: 1,
                            htmllabels: ["Doctor Proficiency"],
                            start: "/div[1]/div[2]/div[1]/p[1]/b[1]/text()[1]",
                            startOffset: 0,
                            text: "Vincent:",
                        }
                    }
                ],
            },
        ],
        predictions: [],
        id: 1,
        data: {
            content1: "<div style=\"max-width: 750px\"><div style=\"clear: both\"><div style=\"float: right; display: inline-block; border: 1px solid #F2F3F4; background-color: #F8F9F9; border-radius: 5px; padding: 7px; margin: 10px 0;\"><p><b>Jules</b>: No no, Mr. Wolfe, it's not like that. Your help is definitely appreciated.</p></div></div><div style=\"clear: both\"><div style=\"float: right; display: inline-block; border: 1px solid #F2F3F4; background-color: #F8F9F9; border-radius: 5px; padding: 7px; margin: 10px 0;\"><p><b>Vincent</b>: Look, Mr. Wolfe, I respect you. I just don't like people barking orders at me, that's all.</p></div></div><div style=\"clear: both\"><div style=\"display: inline-block; border: 1px solid #D5F5E3; background-color: #EAFAF1; border-radius: 5px; padding: 7px; margin: 10px 0;\"><p><b>The Wolf</b>: If I'm curt with you, it's because time is a factor. I think fast, I talk fast, and I need you two guys to act fast if you want to get out of this. So pretty please, with sugar on top, clean the car.</p></div></div></div>",
            content2: ""
        }
    },
    audioClassificationTaskData: {
        annotations: [
            {
                id: "1009",
                result: [
                    {
                        from_name: "topic",
                        id: "k2eoHaq6dC",
                        to_name: "audio",
                        type: "choices",
                        value: {
                            choices: ["General Satisfaction"]
                        }
                    },
                ],
            },
        ],
        predictions: [],
        id: 1,
        data: {
            content1: "https://app.heartex.ai/static/samples/game.wav",
            content2: ""
        }
    },
    textClassificationTaskData: {
        annotations: [
            {
                id: "1010",
                result: [
                    {
                        from_name: "sentiment",
                        id: "x_KjDmvW5J",
                        to_name: "text",
                        type: "choices",
                        value: {
                            choices: ["General Satisfaction", "Doctor Proficiency"]
                        }
                    },
                ],
            },
        ],
        predictions: [],
        id: 1,
        data: {
            content1: "To have faith is to trust yourself to the water",
            content2: ""
        }
    }
}