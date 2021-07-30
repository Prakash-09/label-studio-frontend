import React from 'react';
import { DATA } from './JsonData';

export default class RandomColors extends React.Component {
    componentDidMount() {
        let storeRandom = DATA
        console.log("storeRandom", storeRandom)
        for (const dataObj of storeRandom) {
            dataObj.background = this.generateDynamicColors(dataObj)
        }
    }
    generateDynamicColors(dataObjParam) {
        let uniqueNum = Math.floor((Math.random() * 0xfffff * new Date().getTime())).toString(16);
        console.log("uniqueNum", "#" + uniqueNum, dataObjParam.displayName)
        // console.log("dynamic", Date.now())
    }
    render() {
        const randomVal = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;
        return (
            <section>
                Hello random colors
                {DATA.map((item, itemIdx) =>
                    <div key={itemIdx} className="dashboard-canvas-item"
                        style={{ backgroundColor: `hsl(${randomVal(0, 360)}, ${randomVal(30, 95)}%, ${randomVal(30, 80)}%)` }}>
                        <p>{item.displayName}</p>
                    </div>
                )}
            </section>
        );
    }
}