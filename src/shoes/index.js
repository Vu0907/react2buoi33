import React, { Component } from "react";
import ShoesItem from "./shoesItem";
import data from "./data.json";
import Cart from "./Cart";

export default class Shoes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listShoes: data,
      detail: data[0],
      gioHang: [
        {
          id: "",
          name: "",
          price: 0,
          description: "",
          image: "",
          soLuong: 1,
        },
      ],
    };
  }

  handleDetail = (detail) => {
    this.setState({
      detail,
    });
  };

  themVaoGio = (clickGioHang) => {
    clickGioHang = { ...clickGioHang, soLuong: 1 };

    let checkSP = this.state.gioHang.find((p) => p.id === clickGioHang.id);
    if (checkSP && clickGioHang.id > 0) {
      checkSP.soLuong += 1;
    } else {
      this.state.gioHang.push(clickGioHang);
    }

    this.setState({
      gioHang: this.state.gioHang,
    });
  };

  xoaGioHang = (spClick) => {
    this.state.gioHang = this.state.gioHang.filter((p) => p.id !== spClick);

    this.setState({ gioHang: this.state.gioHang });
  };

  tangGiam = (spClick, soLuong) => {
    let Shoes = this.state.gioHang.find((shoes) => shoes.id === spClick);
    if (Shoes) {
      Shoes.soLuong += soLuong;
      if (Shoes.soLuong < 1) {
        if (window.confirm("Bạn có muốn xóa sản phẩm này không ?")) {
          this.xoaGioHang(spClick);
        } else {
          Shoes.soLuong = 1;
        }
      }
    }

    this.setState({
      gioHang: this.state.gioHang,
    });
  };

  renderShoes = () => {
    const { listShoes } = this.state;
    return listShoes.map((item) => {
      return (
        <ShoesItem
          key={item.id}
          shoes={item}
          getDetail={this.handleDetail}
          themVaoGio={this.themVaoGio}
        />
      );
    });
  };

  render() {
    const { detail } = this.state;
    return (
      <div>
        <h1 className="text-center">SHOES</h1>
        <div className="container">
          <Cart
            gioHang={this.state.gioHang}
            xoaGioHang={this.xoaGioHang}
            tangGiam={this.tangGiam}
          />
          <div className="row">
            <div className="col-4">
              <h3>Detail Shoes</h3>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>{detail.name}</td>
                  </tr>
                  <tr>
                    <td>Price</td>
                    <td>${detail.price}</td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>{detail.description}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-8">
              <div className="row">{this.renderShoes()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
