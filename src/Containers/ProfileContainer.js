import React from 'react';
import '../CSS/Container.css'

export class ProfileContainer extends React.Component {
    render() {
        const {image,name,description,company,address} = this.props
        return (
            <div className="ProfileContainer">
                <img src={image}/>
                <div><strong>Name</strong>: {name}</div>
                <div><strong>Description</strong>: {description}</div>
                <div><strong>Company</strong>: {company}</div>
                <div><strong>Address</strong>: {address}</div>
            </div>
        )
    }
}