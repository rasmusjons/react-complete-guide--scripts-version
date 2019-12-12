import React from 'react';

const person = props => {
    return (
        <div>
            <p>
                Namn: {props.name} Ålder: {props.age}
            </p>
        </div>
    );
};

export default person;
