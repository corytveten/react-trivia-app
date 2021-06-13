import React, { Component } from 'react'

import Question from './Question'

class QuestionList extends Component {

    render() {
        return(
            <div>
                <p>question list</p>
                <ul>
                    {this.props.questionObjs.map(questionObj => (
                        <li key={questionObj.id}>
                            <Question questionObj={questionObj}/>
                        </li>
                    )
                        
                    )}
                </ul>
            </div>
        )
    }
}

export default QuestionList;