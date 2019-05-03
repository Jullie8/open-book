import React from 'react';

class CreateForm extends React.Component {
    state = {
        title: ''
    }

handleChange = (e) =>{
   
    this.setState({
        [e.target.name]: e.target.value
    })

}
handleSubmit = (e) =>{
    e.preventDefault()
    this.props.handleCreateBoardSubmit(this.state)
}
    render () {
        console.log(this.state)
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    Board Title: <input type="text" value={this.state.title} name="title" onChange={this.handleChange} /> {''}
                    <input type='submit' />
                </form>
            </React.Fragment>
        )
    }
}

export default CreateForm; 