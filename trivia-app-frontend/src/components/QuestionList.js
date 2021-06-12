import React, { Component } from 'react'

import Question from './Question'

class QuestionList extends Component {

    render() {
        return(
            <div>
                <p>question list</p>
                <Question />
            </div>
        )
    }
}

export default QuestionList;