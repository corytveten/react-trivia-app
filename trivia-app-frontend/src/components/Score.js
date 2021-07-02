import React from 'react';
import { connect } from 'react-redux';

const Score = ({ currentUser }) => {

    return (
        <h2>Score: { currentUser.currentUser? currentUser.currentUser.score : null }</h2>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.UsersReducer
    }
}

export default connect (mapStateToProps)(Score)