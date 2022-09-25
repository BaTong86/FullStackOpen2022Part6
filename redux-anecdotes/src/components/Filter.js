import { connect } from 'react-redux';
import { setfilter } from '../reducers/filterReducer';

const Filter = (props) => {
    const handleChange = (event) => {
        props.setfilter(event.target.value);
    };
    const style = {
        marginBottom: 10,
    };

    return (
        <div style={style}>
            filter <input onChange={handleChange} />
        </div>
    );
};

const mapDispatchToProps = {
    setfilter,
};

export default connect(null, mapDispatchToProps)(Filter);
