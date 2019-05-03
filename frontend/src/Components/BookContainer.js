import React from 'react';
import BookCard from '../Components/BookCard'


class BookContainer extends React.Component {

        // renderAllBooks = () =>{
        //     const allBooks = this.props.books.map(book => <BookCard key={book.id} 
        //                                                 book={book} 
        //                                                 boards={this.props.boards} 
        //                                                 addBookToBoard={this.props.addBookToBoard}
        //                                                 />)
        //     return allBooks;
        // }


    render () {
        let allBooks = this.props.books.map(book => <BookCard key={book.id} book={book} boards={this.props.boards} addBookToBoard={this.props.addBookToBoard}/>)

        return (
            <div className="band">
            { allBooks }
            {/* {this.renderAllBooks()} */}

            </div>
        )
    } 
 }

 export default BookContainer;
