import React from 'react';
import { createElement } from 'react';
import SupportView from '../view/Support'

class Support extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idnp: "",
            phone: "",
            date: null
        }
    }

    handleChangeInput = (e, key) => {
        this.setState({
            [key]: e.target.value
        })
    }

    handleChangeDate = value => {
        this.setState({
            date: value
        })
    }
    
    render() {
        return createElement(SupportView, {
            ...this
        })
    }
}

export default Support;