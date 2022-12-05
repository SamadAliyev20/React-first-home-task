import React, { Component } from 'react'
import Useritem from './Useritem'
import users from '../users.json'

export class Userlist extends Component {
  render() {
    return (
      <div>
        {
          users.results.map(user => {
            return(
              <Useritem 
              name={user.name.first}
              lastname={user.name.last}
              img={user.picture.large}
              country={user.location.country}
              
              
              />
            )
          })
        }
      </div>
    )
  }
}

export default Userlist