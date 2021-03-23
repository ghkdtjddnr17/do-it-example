import React, {Component} from 'react';
import PropTypes from 'prop-types'
class Input extends Component {
    constructor(props) {
        super(props);
        this.setRef = this.setRef.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        if (this.props.autoFocus) {
            this.ref.focus();
        }
    }

    componentWillMount() {
        if (this.props.autoFocus) {
            this.ref.focus();
        }
    }

    setRef(ref) {
        this.ref = ref;
    }

    handleClick(e) {
        const {name, onChange} = this.props;
        if (onChange) {
            console.log(e.target.value);
            onChange(name, e.target.value);
        }
    }

    render() {
        const {errorMessage, label, name, value, type, onFocus} = this.props;
        return (
            <label>
                {label}
                <input id={`input_${name}`}
                       ref={this.setRef}
                       onChange={this.handleClick}
                       onFocus={onFocus}
                       value={value}
                       type={type}
                />
                {errorMessage && <span className="error">{errorMessage}</span>}
            </label>
        );
    }
}

Input.propTypes = {
    type: PropTypes.oneOf(['text', 'number', 'price']),
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    errorMessage: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    autoFocus: PropTypes.bool,
}
Input.defaultProps = {
    onChange: () =>{},
    onFocus: () =>{},
    autoFocus: false,
    type: 'text',
}
export default Input;