import React, { Component } from 'react'

import Question from './Question';
import User from './User';

class QuestionList extends Component {
    
    constructor(props) {
        super(props)
        // console.log(props)
        //let first = props.questionObjs.find(first => first)
        // console.log(props.questionObjs[0])
        
        // this.state = {
        //     question: props.questionObjs[this.props.counter],
        // }
    }

    // componentDidUpdate(prevProps) {
    //     console.log(prevProps)
    // }

    render(){
        console.log(this.props)
        return(
            <div>
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
                                question={this.props.questions.questions[0]} 
                                onButtonClick={this.props.onButtonClick} 
                                //btnClass={this.props.btnClass}
                                />
                        </li>
                </ul>
                < User />
            </div>
        )
    }
}

export default QuestionList;