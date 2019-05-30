import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    TopGoBackBox
} from './style'

class TopGoBack extends React.Component {

    render() {
        return (
            <TopGoBackBox>
                <i className='iconfont icon-portal-icon-zuojiantou' onClick={this.handleGoBack.bind(this)}></i>
                <span onClick={this.handleGoBack.bind(this)}>返回</span>
            </TopGoBackBox>
        )
    }

    handleGoBack() {
        this.props.history.goBack();
    }
}

export default withRouter(TopGoBack);