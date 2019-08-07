import React from 'react';

const showLoader = (props) => {
    return (
        props.showLoader ? <h1>Loading...</h1>:
        props.children
    )
}

export default showLoader;