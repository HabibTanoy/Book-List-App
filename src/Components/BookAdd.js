import React, { Component } from 'react';
import axios from 'axios';

class BookAdd extends Component {

    state = {
      bookName:'',
      author:'',
      year:'',
      result:[]
    }
    
     changeHandler = (e) => {
         this.setState({
             [e.target.name]: e.target.value
         })
     }

     submitHandler = (e) => {
         e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response => {
            this.setState({
                result: this.state.result.concat(response.data)
            })
        })
        .catch(error => {
            console.log(error)
        })
     }
    
    render() { 
        const { bookName, author, year } = this.state;
        const newData = this.state.result.map(data => {
          return(
              <tbody>
                <tr>
          <td>{data.bookName}</td>
          <td>{data.author}</td>
          <td>{data.year}</td>
                </tr>
              </tbody>              
          )
        })
        return ( 
            <div className="text-center">
                <form onSubmit={this.submitHandler}>
                  <div className="form-group">
                    <label>Book Name</label>
                    <input type="text" className="form-control" name="bookName" onChange={this.changeHandler} value={bookName} />
                  </div>
                  <div className="form-group">
                    <label>Author</label>
                    <input type="text" className="form-control" name="author" onChange={this.changeHandler} value={author} />
                  </div>
                  <div className="form-group">
                    <label>year</label>
                    <input type="text" className="form-control" name="year" onChange={this.changeHandler} value={year} />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <br/>
                <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">BookName</th>
                        <th scope="col">Author</th>
                        <th scope="col">Year</th>
                      </tr>
                    </thead>
                {newData}
              </table>
            </div>
         );
    }
}
 
export default BookAdd;