import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    let { gioHang, xoaGioHang, tangGiam } = this.props;
    let total = 0;
    return (
      <div>
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Giỏ hàng</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã sản phẩm</th>
                      <th>Hình ảnh</th>
                      <th>Tên SP</th>
                      <th>Số lượng</th>
                      <th>Đơn giá</th>
                      <th>Thành tiền</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {gioHang.map((shoes) => {
                      if (shoes.id > 0) {
                        total += shoes.soLuong * shoes.price;
                        return (
                          <tr key={shoes.id}>
                            <td>{shoes.id}</td>
                            <td>
                              <img
                                src={shoes.image}
                                alt="..."
                                width={50}
                                height={50}
                              />
                            </td>
                            <td>{shoes.name}</td>
                            <td>
                              <button
                                className="btn btn-primary mx-2"
                                onClick={() => {
                                  tangGiam(shoes.id, 1);
                                }}
                              >
                                +
                              </button>
                              {shoes.soLuong}
                              <button
                                className="btn btn-primary mx-2"
                                onClick={() => {
                                  tangGiam(shoes.id, -1);
                                }}
                              >
                                -
                              </button>
                            </td>
                            <td>{shoes.price}</td>
                            <td>{shoes.soLuong * shoes.price}</td>
                            <td>
                              <button
                                className="btn btn-danger mx-2"
                                onClick={() => {
                                  xoaGioHang(shoes.id);
                                }}
                              >
                                Xóa
                              </button>
                            </td>
                          </tr>
                        );
                      }
                    })}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">  
                <h5 className="text-danger">Total: ${total}</h5>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
