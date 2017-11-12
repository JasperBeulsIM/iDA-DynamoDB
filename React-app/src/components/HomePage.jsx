import React from "react";
import {Link} from "react-router";

export default class HomePage extends React.Component{
    render(){
        return(
            <div className="jumbotron">
                <h1>iDA Mediafoundry DynamoDB site</h1>
                <Link to="personen" ClassName="btn btn-primary btn-lg">Toon vriendenlijst</Link>
            </div>
        );
    }
}