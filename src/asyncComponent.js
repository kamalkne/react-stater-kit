// hoc/asyncComponent.js
/* eslint-disable */
import React, {Component} from 'react';

const asyncComponent = importComponent => class extends Component {
    constructor() {
        super();
        this.state = {
            component: null
        };
    }

    componentDidMount() {
        importComponent()
            .then(cmp => {
                this.setState({component: cmp.default});
            });
    }

    render() {
        const C = this.state.component;
        return C ? <C {...this.props}/> : null;
    }
};

export default asyncComponent;
/* eslint-enable */
