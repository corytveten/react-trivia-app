import React, { Component } from 'react'

import Question from './Question';
import User from './User';

class QuestionList extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            complete: false,
            counter: 0,
            answers: [],
        }
    }

    randomizeAnswers = () => {

        let currentQuestion = this.props.questions.questions[0];
        debugger;
        console.log(currentQuestion.answers);

        let shuffledArray = this.shuffleCorrect(currentQuestion.answers)
        console.log(shuffledArray)
        return shuffledArray;
    }

    shuffleCorrect(array) {
        const correctAnswer = array[0];
        const newArray = array.shift();
        const randomIndex = Math.floor(Math.random() * 4);
        console.log({newArray: newArray, randomIndex: randomIndex})
        return newArray.splice(randomIndex, 0, correctAnswer);
    }


    onButtonClick = (event, question, isCorrect) => {

        console.log({ event: event.target, question: question, isCorrect: isCorrect })
        

        this.setState({
            complete: true,
        })
    }

    nextButtonClick = () => {
        
        this.setState(function(previousState) {
            return {
                counter: previousState.counter + 1
            }
        })

        this.setState({
            complete: false
        })
    }


    render(){
        console.log(this.props)
        {console.log(this.state.answers)}
        return(
            <>
                <div className='question-container'>
                    <p>question list</p>
                    <ul className='question-list'> 
                    {this.state.answers !== [] ?
                        <li><Question 
                            question={this.props.questions.questions[this.state.counter]} 
                            answers={this.state.answers}
                            onButtonClick={this.onButtonClick} 
                            btnClass={this.props.btnClass}
                            />
                        </li> :
                            null    
                    }
                    </ul>
                    {this.state.complete? <button className='next-button' onClick={this.nextButtonClick}>Next Question</button> : null}
                </div>
                <User />
            </>
        )
    }

}

export default QuestionList;

  