import React, { Component } from 'react';
import axios from 'axios'

class PostApi extends Component {
    state = { 
        firstName:'',
        lastName:'',
        surName:''
     }

     changeHandler = (e) => {
         this.setState({
             [e.target.name]: e.target.value
            })
     }

    //  onClickHandler = () => {

    //  }

     onSubmitHandler = (e) => {
         e.preventDefault()
         console.log(this.state)
         axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
         .then(response => {
             console.log(response)
         })
         .catch(error => {
             console.log(error)
         })
     }

    render() { 
        const { firstName, lastName, surName } = this.state
        // console.log(this.state.firstName)
        return ( 
            <div>
                <form onSubmit={this.onSubmitHandler}>
        <p>{this.state.firstName}</p>
                    <input type="text" name="firstName" value={firstName} onChange={this.changeHandler} />
                    <input type="text" name="lastName" value={lastName} onChange={this.changeHandler} />
                    <input type="text" name="surName" value={surName} onChange={this.changeHandler} />
                    <button>Submit</button>
                </form>
            </div>
         );
    }
}
 
export default PostApi;