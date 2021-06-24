import React from 'react';

const Answer = ({ className, answer, onButtonClick }) => {

    return (
        <div>
            <button className={className} onClick={() => onButtonClick()}>{answer.answer}</button>
        </div>
    )
}

export default Answer;
