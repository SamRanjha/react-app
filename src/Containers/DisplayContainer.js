import React from 'react';
import '../CSS/Container.css'
import {ProfileContainer} from "./ProfileContainer";


export class DisplayContainer extends React.Component {
    render() {
        console.log("in Display container")
        console.log(this.props.displayData)
        return (
            <div id={"DisplayContainer"} className={"DisplayContainer"}>
                {this.props.displayData.map( data => <ProfileContainer {...data}/> )}
            </div>
        )
    }
}