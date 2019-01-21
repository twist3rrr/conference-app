import React from 'react'

export default function ErrorField(props) {
    const { input, type, meta: { error, touched } } = props;
    const errorText = touched && error && <div style={{color: 'red'}}>{error}</div>;
    return (
        <div>
            <div>{input.name}</div>
            <input {...input} {...{type}}/>
            { errorText }
        </div>
    );
}
