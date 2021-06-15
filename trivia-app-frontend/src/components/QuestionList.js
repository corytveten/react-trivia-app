import React, { Component } from 'react'

import Question from './Question'

class QuestionList extends Component {
    
    constructor(props) {
        super(props)
        // console.log(props)
        let first = props.questionObjs.find(first => first)
        console.log(first)
        
        this.state = {
            question: first,
            counter: 1
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