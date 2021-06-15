import React, { Component } from 'react'

import Question from './Question'

class QuestionList extends Component {

    constructor(props) {
        console.log(props.questionObjs)
        let first = props.questionObjs.find(first => first === first)
        console.log(first)
        super(props)
        
        this.state = {
            question: first
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
                    <li><Question questionObj={this.state.question} /></li>
                </ul>
            </div>
        )
    }
}

export default QuestionList;