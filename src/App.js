import React from 'react';
import './App.css';
// import TestLabelStudio from './components/TestLabelStudio';
// import SampleLabelStuio from './components/example/SampleLabelStudio';
// import SampleTwoLs from './components/exampletwo/SampleTwoLs';
// import SampleThreeLs from './components/examplethree/SampleThreeLs';
// import SampleFourLs from './components/examplefour/SampleFourLs';
// import Test from './components/examplefour/Test';
// import RandomColors from './components/randomcolors/RandomColors';
import AllAnnotations from './components/annotations/AllAnnotations';
// import TestAllAnnoatations from './components/TestAllAnnotations';
// import BackupAllAnnotations from './components/backup/BackupAllAnnotations'
// import TesseractOne from './components/tesseract/tesseractone/TesseractOne';

function App() {
    return (
        <div className="App container-fluid">
            <AllAnnotations />
            {/* <TestAllAnnoatations /> */}
            {/* < TesseractOne /> */}
        </div>
    );
}

export default App;
