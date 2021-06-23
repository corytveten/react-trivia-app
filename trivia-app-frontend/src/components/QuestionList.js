import React, { Component } from 'react'

import Question from './Question';
import User from './User';

class QuestionList extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            complete: false,
            counter: 0
        }

        
    }

    componentDidMount(){
        this.randomizeAnswers()
    }

    randomizeAnswers = () => {
        // console.log(this.props.questions)
        // this.props.questions.map
        let currentQuestion = this.props.questions.questions[this.state.counter];
        console.log(currentQuestion.answers)
        let obj = currentQuestion.answers.find(obj => obj.correct);
        console.log(obj);

    }

    onButtonClick = (question, event) => {
        // console.log('Correct was clicked')
        console.log(event.target)

        this.setState({
            complete: true,
        })
        

        
        // if (question.correct_answer === event.target.innerText) {
        //     console.log("right")
        //     this.setState({
        //         btnClass: 'btn-green'
        //     })
        //  } else {
        //     console.log('wrong')
        //  }     
        
        // setTimeout( () => {
        //     console.log('next question')
        //     // this.setState(previousState => {
        //     //     return {
        //     //         counter: previousState.counter + 1
        //     //     }
        //     // })
        //     this.setState(function(previousState) {
        //         return {
        //             counter: previousState.counter + 1
        //         }
        //     })
        //     // let newCount = this.state.count + 1
        //     // this.setState({
        //     //     count: newCount
        //     // })
        // }, 1000)
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

    // componentDidUpdate(prevProps) {
    //     console.log(prevProps)
    // }

    render(){
        console.log(this.props)
        return(
            <div className="question-list">
                <p>question list</p>
                <ul>
                    {/* {this.props.questionObjs.map(questionObj => (
                        <li key={questionObj.id}>
                            <Question questionObj={questionObj}/>
                        </li>
                    )
                        
                    )} */}
                        <li>
                            <Question 
                                question={this.props.questions.questions[this.state.counter]} 
                                onButtonClick={this.onButtonClick} 
                                //btnClass={this.props.btnClass}
                                />
                        </li>
                </ul>
                {this.state.complete? <button className='next-button' onClick={this.nextButtonClick}>Next Question</button> : null}
                < User />
            </div>
        )
    }

}

export default QuestionList;