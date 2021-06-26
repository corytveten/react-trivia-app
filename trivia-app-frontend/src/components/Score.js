import React from 'react';
import { connect } from 'react-redux';

const Score = ({ score }) => {

    return (
        <h3>Score: { currentUser.currentUser? currentUser.currentUser.score : null }</h3>
    )
}

const mapStateToProps = state => {
    return {
        score: state.UsersReducer.currentUser.score
    }
}

export default connect (mapStateToProps)(Score)