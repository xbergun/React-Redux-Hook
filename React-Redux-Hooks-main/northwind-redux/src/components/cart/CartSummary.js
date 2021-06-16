import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import {Link } from "react-router-dom";
import alertify from "alertifyjs"
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
  Badge,
} from "reactstrap";

class CartSummary extends Component {
  removeFromCart(product){
    this.props.actions.removeFromCart(product);
    alertify.error(product.name + " sepetten silindi")
}
  renderEmpty() {
    return (
      <NavItem>
        <NavLink>Sepetiniz Boş</NavLink>
      </NavItem>
    );
  }

  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Sepetiniz
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.productID}>
              <Badge style={{ backgroundColor: "#E74C3C" }} onClick={()=> this.removeFromCart(cartItem.product)}> X </Badge>
               {cartItem.product.name}
               <Badge style={{ color: "#17202A" }}>-</Badge>
              <Badge style={{ backgroundColor: "#3349FF" }}>
                 {cartItem.quantityPerUnit}
              </Badge>
            </DropdownItem>
          ))}

          <DropdownItem divider />
          <DropdownItem><Link to={"/cart"}>Sepete git</Link></DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions:{
      removeFromCart:bindActionCreators(cartActions.removeFromCart, dispatch),
    }
  }
}

function mapStateToProps(state) {
  return {
    //proplarda cart diye bir şey var ve bunu cartReducer dan al
    cart: state.cartReducer,
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(CartSummary);
