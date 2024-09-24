import React from 'react';

const Propose = ({ cigarettePropose, smokedToday }) => {
    let reaction;

    if (cigarettePropose < smokedToday) {
        reaction = 'Like';
    } else if (cigarettePropose > smokedToday) {
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
