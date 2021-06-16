import React, { Component } from 'react'

import Question from './Question'

class QuestionList extends Component {
    
    constructor(props) {
        super(props)
        // console.log(props)
        //let first = props.questionObjs.find(first => first)
        console.log(props.questionObjs[0])
        
        this.state = {
            question: props.questionObjs[this.props.counter],
        }
    }


    render() {
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
                    <li><Question questionObj={this.state.question} onButtonClick={this.props.onButtonClick} btnClass={this.props.btnClass}/></li>
                </ul>
            </div>
        )
    }
}

export default QuestionList;