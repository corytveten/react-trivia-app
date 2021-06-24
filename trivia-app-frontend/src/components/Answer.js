import React from 'react';

const Answer = ({ answer, onButtonClick }) => {

    return (
        <div>
            <button onClick={onButtonClick}>{answer.answer}</button>
        </div>
    )
}

export default Answer;
