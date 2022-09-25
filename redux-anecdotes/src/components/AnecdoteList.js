import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { voteAnAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteList = () => {
    const anecdotes = useSelector((state) => state.anecdote);
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();
    const vote = (anecdote) => {
        dispatch(voteAnAnecdote(anecdote));
        dispatch(setNotification(`You voted "${anecdote.content}"`, 5));
    };
    console.log('anecdotes', anecdotes);

    return [...anecdotes]
        .sort((a, b) => {
            return b.votes - a.votes;
        })
        .filter((anecdote) => anecdote.content.includes(filter))
        .map((anecdote) => (
            <div key={anecdote.id}>
                <div>{anecdote.content}</div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote)}>vote</button>
                </div>
            </div>
        ));
};

export default AnecdoteList;
