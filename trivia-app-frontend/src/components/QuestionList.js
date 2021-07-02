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

    // onButtonClick = (event, question, isCorrect) => {

    //     console.log({ event: event.target, question: question, isCorrect: isCorrect })
        

    //     this.setState({
    //         complete: true,
    //     })
    // }

    // nextButtonClick = () => {
        
    //     this.setState(function(previousState) {
    //         return {
    //             counter: previousState.counter + 1
    //         }
    //     })

    //     this.setState({
    //         complete: false
    //     })
    // }


    render(){
        // console.log(this.props)
        // {console.log(this.state.answers)}
        return(
            <>
                <div className='question-container'>
                    <p>question list</p>
                    <ul className='question-list'> 
                    {/* {this.state.answers !== [] ? */}
                        <li><Question /></li>
                            {/* // question={this.props.questions.questions[this.state.counter]} 
                            // answers={this.state.answers}
                            // onButtonClick={this.onButtonClick} 
                            // btnClass={this.props.btnClass}
                            /> */}
                        {/* </li> : */}
                            {/* null     */}
                    {/* } */}
                    </ul>
                    {/* {this.state.complete? <button className='next-button' onClick={this.nextButtonClick}>Next Question</button> : null} */}
                </div>
                <User />
            </>
        )
    }

}

export default QuestionList;

//logic removed from questionList and put into question. This is basically a presentation component now for question card styling and
  

