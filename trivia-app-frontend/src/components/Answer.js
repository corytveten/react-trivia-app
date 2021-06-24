import React from 'react';

const Answer = ({ answer }) => {

    return (
        <div>
            <button>{answer.answer}</button>
        </div>
    )
}

export default Answer;