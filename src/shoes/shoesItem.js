import React, { Component } from "react";

export default class ShoesItem extends Component {
  handleDetail = () => {
    this.props.getDetail(this.props.shoes);
  };

  render() {
    const { shoes, themVaoGio } = this.props;
    return (
      <div className="col-md-4 mt-4">
        <div className="card">
          <img className="card-img-top" src={shoes.image} alt="" />
          <div className="card-body">
            <h5 className="card-title">{shoes.name}</h5>
            <p className="card-text">${shoes.price}</p>
            <div className="card-body d-flex justify-content-between">
              <button className="btn btn-info" onClick={this.handleDetail}>
                Detail
              </button>
              <button
                className="btn btn-danger"
                data-toggle="modal"
                data-target="#modelId"
                onClick={() => {
                  themVaoGio(shoes);
                }}
              >
                  Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
