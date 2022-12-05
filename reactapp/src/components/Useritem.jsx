import React, { Component } from 'react'

 class Useritem extends Component {
  render(_props) {
    const {name,lastname,img,country}=this.props;
    return (
      <div>
        <div className="container">
          <div className="row w-100 justify-content-center g-4">
          <div className="col-lg-4 col-12 ">
          <div className="card">
          <img className="card-img-top" src={img} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{name} {lastname}</h5>
    <p className="card-text">{country}</p>
  </div>
</div>      
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Useritem