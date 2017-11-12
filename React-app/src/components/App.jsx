import React from "react";
import PropTypes from "prop-types";

export default class App extends React.Component{

    static propTypes = {
        children: PropTypes.object.isRequired
    }

    render(){
        return(
            <div className="container-fluid">
                <p>iDA Mediafoundry</p>
                {this.props.children}
            </div>
        );
    }
}