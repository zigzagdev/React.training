import React, { Component } from 'react'

 class Form extends  Component{
    constructor(props) {
     super(props)
       this.state = {
         username: '',
         comments: '',
         topics: ''

       }
    }

    handleUsernameChange = (event) => {
      this.setState({
       username: event.target.value
      })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicsChange = (event) => {
        this.setState({
            topics: event.target.value
        })
    }


     render() {
      const { username, comments, topic }  = this.state
      return(
       <form>
         <div>
             <labal>Username</labal>
             <input type="text" value={username}  onChange={this.handleUsernameChange}/>
         </div>

         <div>
             <label>Comments</label>
             <textarea value={comments} onChange={this.handleCommentsChange}/>
         </div>

         <div>
             <label>Topic</label>
             <select value={topic} onChange={this.handleTopicsChange}>
              <option value="fuck">Fuck</option>
              <option value="shit">Shit</option>
              <option value="fuckin">Fuckin</option>
         </select>
         </div>

         <div>
           <button type="submit">Submit</button>
         </div>
       </form>
      )
     }
}

export default Form ;