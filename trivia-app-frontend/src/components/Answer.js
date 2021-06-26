import React from 'react';

const Answer = ({ className, answer, onButtonClick }) => {

    return (
        <div>
            <button className={className} onClick={(event) => onButtonClick(event)}>{answer.answer}</button>
        </div>
    )
}

export default Answer;
