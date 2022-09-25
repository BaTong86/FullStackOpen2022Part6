const initialState = {
    good: 0,
    ok: 0,
    bad: 0,
};

let clone;
const counterReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case 'GOOD':
            clone = { ...state, good: state.good + 1 };
            return clone;
        case 'OK':
            clone = { ...state, ok: state.ok + 1 };
            return clone;
        case 'BAD':
            clone = { ...state, bad: state.bad + 1 };
            return clone;
        case 'ZERO':
            return initialState;
        default:
            return state;
    }
};

export default counterReducer;
