import React from 'react';

const Answer = ({ className, answer, onButtonClick, highlightStatus }) => {
    console.log(answer, highlightStatus)
    return (
        <div>
            <button 
            className='btn' 
            style={{backgroundColor: highlightStatus}} 
            onClick={(event) => onButtonClick(event, answer)}
            >{answer.answer}</button>
        </div>
    )
}

export default Answer;
