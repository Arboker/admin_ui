import React from 'react';
import { createElement } from 'react';
import SupportView from '../view/Support'

class Support extends React.Component {
    render() {
        return createElement(SupportView, {
            ...this
        })
    }
}

export default Support;