import React from 'react';

function HelloWorld(props) {
    console.log('props :', props);
    return <h1 onClick={props.onmaclicke}>hello world composant {props.name}</h1>;
}

  export default HelloWorld;