import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createNewAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';
const AnecdoteForm = (props) => {
    const [content, setContent] = useState('');

    const create = (e) => {
        e.preventDefault();
        props.createNewAnecdote(content);
        props.setNotification(`You added "${content}"`, 5);
        setContent('');
    };
    return (
        <form
            onSubmit={(e) => {
                create(e);
            }}
        >
            <div>
                <input
                    value={content}
                    onChange={(e) => {
                        setContent(e.target.value);
                    }}
                />
            </div>
            <button>create</button>
        </form>
    );
};

const mapDispatchToProps = {
    createNewAnecdote,
    setNotification,
};

export default connect(null, mapDispatchToProps)(AnecdoteForm);
