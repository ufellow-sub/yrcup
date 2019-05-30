import React , { Fragment } from 'react';
import './assets/font/font.css'
class App extends React.Component {

    render() {
        return (
            <Fragment>
                {this.props.children}
            </Fragment>
        )
    }
}
export default App;