import React from 'react'

class MyFormInput extends React.Component {

    constructor(props) {
        super(props);

        this.handleOnInputChange = this.onInputChange.bind(this);
    }

    onInputChange(e) {
        this.props.onChange(e);
    }

    render() {
        const type = this.props.type;

        return (
            <input type={type} onChange={this.handleOnInputChange} />
        )
    }

}

export default MyFormInput
