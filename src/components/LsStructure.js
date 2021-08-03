module.exports.OUTPUT_STRUCTURE = {
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
                            end: 36,
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
            image: "https://htx-misc.s3.amazonaws.com/opensource/label-studio/examples/images/nick-owuor-astro-nic-visuals-wDifg5xc9Z4-unsplash.jpg",
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
            video: "https://app.heartex.ai/static/samples/opossum_snow.mp4",
            videoSource: `<video src='https://app.heartex.ai/static/samples/opossum_snow.mp4' width=100% muted /><img src onerror="$=n => document.getElementsByTagName(n)[0]; a=$('audio'); v=$('video'); a.onseeked = () => { v.currentTime = a.currentTime }; a.onplay = () => v.play(); a.onpause = () => v.pause()" />`
        }
    },
    audioTaskData: {
        annotations: [
            {
                id: "1009",
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
                            labels: ["General Satisfaction", "Doctor Proficiency"],
                            start: 2.1318997252747254,
                        }
                    },
                ],
            },
        ],
        predictions: [],
        id: 1,
        data: {
            audio: "https://app.heartex.ai/static/samples/game.wav",
        }
    },
    pairwiseTaskData: {
        annotations: [
            {
                from_name: "pw",
                id: "zMCrW5IEeL",
                to_name: "pw",
                type: "pairwise",
                value: {
                    selected: "left"
                },
            },
        ],
        predictions: [],
        id: 1,
        data: {
            text1: "To have faith is to trust yourself to the water",
            text2: "To have faith is to trust yourself to the water"
        }
    }
}