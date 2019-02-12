import React, { Component } from 'react';
import BoardContainer from './Container/BoardContainer';
import './App.css';
// import LoginPage from './Components/LoginPage';
import BookContainer from './Container/BookContainer';
import HeaderComponent from './Components/HeaderComponent';
import { Link, Switch, Route } from "react-router-dom";
import { Input } from 'semantic-ui-react'

class App extends Component {

  state = {
    user: {},
    books: [],
    boards: [],
    filteredTerm:''
  }
  
  componentDidMount(){
    fetch('http://localhost:3000/api/v1/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user:{
          email: 'cardi@bacardi.com',
          password:'People1@'
        }
      })

    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        user: data.user,
        boards: data.user.boards
      })
      localStorage.setItem("token", data.jwt)
    })
    .then( () => fetch('http://localhost:3000/api/v1/books', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then((res)=>{
      return res.json()
    })
    .then((books)=>{
      //filter the arr for unique title so it only return those that do not have the same title
      let booksArr = books.slice(0,80)
      this.setState({
        books: booksArr
        })
    })
  )}
  handleCreateBoardSubmit = (boardObj) => {
    fetch('http://localhost:3000/api/v1/boards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
        'Accepts': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({board:boardObj})
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
        let newArrOfBoards = [...this.state.boards, data];
        this.setState({
          boards: newArrOfBoards
        })
      })
      .catch(console.error)
    }



    
  addBookToBoard = (bookObj, board, a=0) =>{
      console.log(bookObj)
      fetch('http://localhost:3000/api/v1/board_books',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({board_book:{
          board_id: board,
          book_id: bookObj.id
        }})
      })
      .then((res)=>{
        return res.json()
      })
      .then(console.log)
  }

  updateBookToBoard = (bookObj, val, x = x || 0) => {
    console.log(bookObj.id, val, x)

    //this is what will be passed down to FORM so that on submit this is executed 
    //make a copy of the obj

    fetch(`http://localhost:3000/api/v1/board_books/${x}`,{
      method:'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }, 
      body: JSON.stringify({
        board_id: val,
        book_id: bookObj.id
      })
    })
    .then(res => res.json())
      .then((responseObj)=>{
      // console.log(data)
      // let copyBoardBookObj = {...responseObj}
      // let newArray = this.state.characters.map((character) => {
      // //compare ids of pets with the responseObj id 
      // if (character.id === responseObj.id) {
      //       return responseObj
      // } else {
      //       return character
      //   }
      // })
      //   //set State so that the array now contains the newObj copy  with new val
      //   this.setState({
      //     characters: newArrayCharacters
      //   })
    })
  }

  handleChange = (e) => {
    //this will hear the letter in the search input 
    this.setState({
      filteredTerm: e.target.value
    })
  }

  filteredArr = () => {
    return this.state.books.filter((book) => {
      return book.title.toLowerCase().includes(this.state.filteredTerm.toLowerCase() );
    })
  }


  handleBoardDelete = (boardObj) => {
    console.log(boardObj)
    fetch(`http://localhost:3000/api/v1/boards/${boardObj.id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      } 
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        //remove from DOM HOW??
        console.log('hey', data)
        // filter for the id that is not that id 
        let arrWithRemovedObj = this.state.boards.filter((board) => {
          return board.id !== boardObj.id
        })
        this.setState({
          boards: arrWithRemovedObj
        })

      })
  }
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/home" > Home </Link>
          {' '}
          <Link to="/boards">Boards</Link>
          {"  "}
        </nav>

        <div>
          <Switch >
            <Route path="/boards" render={() => <BoardContainer 
                                                addBookToBoard={this.updateBookToBoard}
                                                handleCreateBoardSubmit={this.handleCreateBoardSubmit} 
                                                boards={this.state.boards} 
                                                handleBoardDelete={this.handleBoardDelete}/>} />
            <Route path="/home" render={() => (<div>
            <h3>Welcome to Your Library </h3>

            <Input 
            focus placeholder='Search By Title...'
            type='text' 
            name="filteredTerm" 
            value={this.state.filteredTerm} 
            onChange={this.handleChange}
            />

            <HeaderComponent />

            <BookContainer 
            books={this.filteredArr()}
            boards={this.state.boards}
            addBookToBoard={this.addBookToBoard} />
          </div>)}/>
          </Switch>
            
        </div>

      </div>

    );
  }
}

export default App;
