import React from 'react'

class AddBookToBoardForm extends React.Component {
    state = {
        boardVal: ''
    } 

    handleChange = (e) =>{
        this.setState({
            boardVal:e.target.value
        })
    }
    renderBookBoardOptions = () =>{
       return this.props.boards.map(board => (<option key={board.id} value={board.id}>{board.title} </option>))
    }

    handleSubmit = (e) => {
        // alert('Your favorite flavor is: ' + this.state.houseVal);
        e.preventDefault();
        this.props.addBookToBoard(this.props.bookObj, this.state.boardVal, this.props.board_book_id)
        // # this.props.board_book_id
    }

    render (){
        console.log(this.props.data)
        return (
            <div>
                <h3>Add To A Board </h3>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        New Board:
                         <select name="type" id="type" onChange={this.handleChange}>
                            {this.renderBookBoardOptions()}
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>

            </div>
        )
    }
}

export default AddBookToBoardForm;