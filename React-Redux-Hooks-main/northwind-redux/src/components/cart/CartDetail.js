import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { Table,Button } from "reactstrap";
import alertify from "alertifyjs"

class CartDetail extends Component {
    removeFromCart(product){
        this.props.actions.removeFromCart(product);
        alertify.error(product.name + " sepetten silindi")
    }
  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((cartItem) => (
              <tr key={cartItem.product.productID}>
                <th scope="row">{cartItem.product.productID}</th>
                <td>{cartItem.product.name}</td>
                <td>{cartItem.product.unitPrice}</td>
                <td>{cartItem.product.quantityPerUnit}</td>
                <td>
                  <Button
                    style={{ backgroundColor: "#E74C3C" }}
                    onClick={() => this.removeFromCart(cartItem.product)}
                  >
                    sil
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}

function mapStateToProps(state) {
  return {
    //proplarda cart diye bir şey var ve bunu cartReducer dan al
    cart: state.cartReducer,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
