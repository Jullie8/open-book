import React from 'react';
import { Link, Switch, Route } from "react-router-dom";
import BookCard from './BookCard';
import { Icon } from 'semantic-ui-react'

class Board extends React.Component {
    state = {
        board_books: [],
        isDeleteClicked:false
    }

    handleDeleteClick = ()=>{
        this.props.handleBoardDelete(this.props.board)
    }

    handleClick = () =>{
        fetch(`http://localhost:3000/api/v1/boards/${this.props.board.id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => console.log(data) || this.setState({ board_books: data.books.board_books }))

    }

    render () {
        let books = this.state.board_books.map(board_book => <BookCard
                                                data={this.state.board_books}
                                                key={board_book.id}
                                                board_book_id={board_book.id}
                                                board_id={this.props.board_id}
                                                book={board_book.book} 
                                                boards={this.props.boards} 
                                                addBookToBoard={this.props.addBookToBoard}/>)
        
        return (
            <div>
                <span onClick={this.handleClick}> {this.props.board.title} </span>
                <Icon name='delete' onClick={this.handleDeleteClick}/>
               
                <div>
                {books}
                </div>
            </div>
        )
    }
}

export default Board;