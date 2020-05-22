import React from 'react';
import {Button, FormControl, TextField} from '@material-ui/core';
import '../CSS/Container.css';
import faker from 'faker';

export class SearchContainer extends React.Component {
    ProfileData = []

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            company: '',
            address: ''
        };
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };
    handleSearch = (event) => {
        this.props.sendData(this.ProfileData.filter(profile =>
            profile.name.match(this.state.name) &&
            profile.description.match(this.state.description) &&
            profile.company.match(this.state.company) &&
            profile.address.match(this.state.address)
        ))
    }

    componentDidMount() {
        for (let i = 0; i < 1000; i++) {
            const profile = {
                image: faker.image.avatar(),
                name: faker.name.findName(),
                description: faker.name.jobDescriptor(),
                company: faker.company.companyName(),
                address: faker.address.streetAddress() + faker.address.city()

            }
            this.ProfileData.push(profile)
        }
        console.log(this.ProfileData)

    }

    render() {
        return (
            <div className="SearchContainer">
                <FormControl className="SearchForm" aria-autocomplete={"none"}>
                    <TextField
                        label="Search by name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <TextField
                        label="Search by description"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                    />
                    <TextField
                        label="Search by company"
                        name="company"
                        value={this.state.company}
                        onChange={this.handleChange}
                    />
                    <TextField
                        label="Search by address"
                        name="address"
                        value={this.state.address}
                        onChange={this.handleChange}
                    />
                    <Button variant="contained" color="primary" onClick={this.handleSearch}>
                        Search
                    </Button>
                </FormControl>
            </div>
        )
    }
}