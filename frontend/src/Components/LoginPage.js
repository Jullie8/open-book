import React from 'react';
import { Form } from 'semantic-ui-react'
import { Card, CardTitle } from 'react-materialize'

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
            <Card className="halo" header={<CardTitle reveal image={"http://books.google.com/books/content?id=IEhiCAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"} waves='light' />}
                title="Card Title"
                reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
            <p><a href="#">This is a link</a></p>
            </Card>

        )
    }
}

export default LoginPage;



    {/* <Form onSubmit={this.handleSubmit}>
        <Form.Group>
            Username: <Form.Input placeholder='username' name='username' value={this.state.username} onChange={this.handleChange} />
            Email <Form.Input placeholder='email' name='email' value={this.state.email} onChange={this.handleChange} />
            Password:<Form.Input placeholder='password' name='password' value={this.state.password} onChange={this.handleChange} />
            <Form.Button content='Submit' />
        </Form.Group>
    </Form> */}