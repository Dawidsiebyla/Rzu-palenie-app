import React from 'react';

const Propose = ({ cigarettePropose, count }) => {
    let reaction;

    if (cigarettePropose < count) {
        reaction = 'Like';
    } else if (cigarettePropose > count) {
        reaction = "Don't Like";
    } else {
        reaction = 'minke :I';
    }

    return (
        <div>

            <p>: {cigarettePropose} papierosów</p>
            <p>Reaction: {reaction}</p>
        </div>
    );
};

export default Propose;
