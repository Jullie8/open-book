import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import AddBookToBoardForm from './AddBookToBoardForm';

class BookCard extends React.Component {
    state= {
        isClicked: false
    }

    handleClick = () =>{
        this.setState({
            isClicked: !this.state.isClicked
        })
    }
    render () {
        let renderForm = this.state.isClicked ? <AddBookToBoardForm bookObj={this.props.book} boards={this.props.boards} addBookToBoard={this.props.addBookToBoard} board_book_id={this.props.board_book_id} data={this.props.data} /> : null

        return(
        <div className= "card">
            <Card>
                <Image src={this.props.book.img} />
                <Card.Content>
                    <Card.Description>{this.props.book.title}.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a onClick={this.handleClick}>
                        <Icon name='book' />
                         Add To A Board
                    </a>
                        {renderForm}
                </Card.Content>
            </Card>
        </div>
    )}
    
};

export default BookCard;