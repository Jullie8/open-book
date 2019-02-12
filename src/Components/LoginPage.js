import React from 'react';
import { Form } from 'semantic-ui-react'

class LoginPage extends React.Component {
    state = {
        username:'',
        email: '',
        password: ''
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = () =>{
        
    }

    render() {
        console.log(this.state.username, this.state.email, this.state.password)
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                   Username: <Form.Input placeholder='username' name='username' value={this.state.username} onChange={this.handleChange} />
                   Email <Form.Input placeholder='email' name='email' value={this.state.email} onChange={this.handleChange} />
                   Password:<Form.Input placeholder='password' name='password' value={this.state.password} onChange={this.handleChange} />
                <Form.Button content='Submit' />
                </Form.Group>
            </Form>
        )
    }
}

export default LoginPage;