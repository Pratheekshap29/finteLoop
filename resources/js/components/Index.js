import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';


function Index() {
    return <Main />;
}

export default Index;

if (document.getElementById('landing')) {
    ReactDOM.render(<Index />, document.getElementById('landing'));
}
