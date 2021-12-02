import React from 'react';
import { createElement } from 'react';
import SupportView from '../view/Support';
import SupportService from '../../services/Support';
class Support extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idnp: "",
            phone: "",
            date: null,
            loading: false,
            data: []
        }
    }

    componentDidMount = () => {
        this.setState({
            loading: true
        })
        SupportService.getSupportData().then(res => {
            this.setState({
                data: res,
                loading: false
            })
        })
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

    search = () => {
        const { idnp, phone, date } = this.state

        if (idnp || phone || date) {
            this.setState({
                loading: true
            })
            SupportService.searchByParams(idnp, phone, date).then(res => {
                this.setState({
                    data: res,
                    loading: false
                })
            })
        }
    }

    render() {
        return createElement(SupportView, {
            ...this
        })
    }
}

export default Support;