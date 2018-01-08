import React, { Component,PropTypes } from 'react'
import ThemeSwitch from './Theme-switch'


class Content extends Component {
    render() {
        return (
            <div>
                <p>React.js book 内容</p>
                <ThemeSwitch/>
            </div>
        )
    }
}

export default Content
