import React from 'react';
import '../CSS/Container.css'
import {SearchContainer} from "./SearchContainer";
import {DisplayContainer} from "./DisplayContainer";

export class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data : []}
    }

    onGettingData = (data) => {
        this.setState({data: data})
    }

    render() {
        return (
            <div className="MainContainer" id={"MainContainer"}>
                <SearchContainer sendData={this.onGettingData}/>
                <DisplayContainer displayData={this.state.data}/>
            </div>
        )
    }
}