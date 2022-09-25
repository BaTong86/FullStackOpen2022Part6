import { createSlice } from '@reduxjs/toolkit';
import anecdotesService from '../services/anecdotes';

const initialState = [];

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
    return {
        content: anecdote,
        id: getId(),
        votes: 0,
    };
};

const anecdoteSlice = createSlice({
    name: 'anecdote',
    initialState,
    reducers: {
        createAnecdote(state, action) {
            state.push(action.payload);
        },
        voteAnecdote(state, action) {
            const cerAnecdote = state.find(
                (anecdote) => anecdote.id === action.payload.id
            );
            cerAnecdote.votes = cerAnecdote.votes + 1;
        },
        setAnecdotes(state, action) {
            return action.payload;
        },
    },
});

export const { createAnecdote, voteAnecdote, setAnecdotes } =
    anecdoteSlice.actions;

export const initializeAnecdotes = () => {
    return async (dispatch) => {
        const anecdotes = await anecdotesService.getAll();
        dispatch(setAnecdotes(anecdotes));
    };
};

export const createNewAnecdote = (content) => {
    return async (dispatch) => {
        const anecdote = await anecdotesService.createNew(asObject(content));
        dispatch(createAnecdote(anecdote));
    };
};

export const voteAnAnecdote = (anecdote) => {
    return async (dispatch) => {
        const newAnecdote = { ...anecdote, votes: anecdote.votes + 1 };

        const res = await anecdotesService.put(newAnecdote);
        console.log('res', res);
        dispatch(voteAnecdote(res));
    };
};

export default anecdoteSlice.reducer;
