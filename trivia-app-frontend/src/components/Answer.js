import React from 'react';

const Answer = ({ answer, onButtonClick, highlightStatus }) => {
    console.log(answer, highlightStatus)
    return (
        <div>
            <button 
            // className='btn' 
            className={highlightStatus}
            // style={{backgroundColor: highlightStatus}} 
            onClick={(event) => onButtonClick(event, answer)}
            >{answer.answer}</button>
        </div>
    )
}

export default Answer;
