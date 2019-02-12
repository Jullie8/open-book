import React from 'react';
import { Button, Icon } from 'semantic-ui-react'
import CreateForm from '../Components/CreateForm';
import Board from '../Components/Board'

class BoardContainer extends React.Component {
    state = {
        addButton: false

    }

    handleButtonAddBoard = () =>{
        this.setState({
            addButton: !this.state.addButton
        })
    }

    render (){
        let renderCreateForm = this.state.addButton ? <CreateForm handleCreateBoardSubmit={this.props.handleCreateBoardSubmit} /> : null
        const boardList = this.props.boards.map(board => <Board key={board.id} board_id={board.id} board={board} boards={this.props.boards} addBookToBoard={this.props.addBookToBoard} handleBoardDelete={this.props.handleBoardDelete}/> )
        return (
            <div>

                <Button onClick={this.handleButtonAddBoard}>
                    <Button.Content hidden>
                        <Icon name='add' />
                    </Button.Content> <br />
                    <Button.Content visible>Add Board</Button.Content>
                </Button>

                {renderCreateForm}
                
                <ul>
                    <h1>Your Boards </h1>
                        {boardList}
                </ul>


            </div>
        )
    }
}

export default BoardContainer;