module.exports.SAMPLETEST = {
    configImageData: `
    <View>
        <Image name="img" value="$image"></Image>
        <RectangleLabels name="tag" toName="img">
            <Label value="Moon" background="red"></Label>
            <Label value="Earth" background="green"></Label>
        </RectangleLabels>
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
    taskData: {
        annotations: [],
        predictions: [],
        id: 1,
        data: {
            image: "https://htx-misc.s3.amazonaws.com/opensource/label-studio/examples/images/nick-owuor-astro-nic-visuals-wDifg5xc9Z4-unsplash.jpg",
            text: "First Experiment in the label studio"
        }
    }
    // messagesData: {
    //     DONE: "Done!",
    //     NO_COMP_LEFT: "No more annotations",
    //     NO_NEXT_TASK: "No more data available for labeling",
    //     NO_ACCESS: "You don't have access to this task"
    // },
}

//label studio format: https://labelstud.io/guide/frontend_reference.html#interfaces
//label studio variations: https://app.labelstud.io/settings