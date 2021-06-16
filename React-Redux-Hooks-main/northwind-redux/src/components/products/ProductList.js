import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";
import { Badge, Table } from "reactstrap";
import alertify from "alertifyjs"
import {Link} from "react-router-dom"

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }

  addToCart=(product)=>{
    this.props.actions.addToCart({quantityPerUnit:1,product})
    alertify.success(product.name + " sepete eklendi")
  }

  render() {
    return (
      <div>
        <h3>
          <Badge style={{ backgroundColor: "#FFC133" }}>
             Products
          </Badge>
          - 
          <Badge style={{ backgroundColor: "#FFC133" }}>
          {this.props.currentCategory.name}
          </Badge>
          </h3>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Unit Price</th>
                <th>Quantity Per Unit</th>
                <th>Units In Stock</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.products.map((product) => (
                <tr key={product.productID}>
                  <th scope="row">{product.productID}</th>
                  <td> <Link to={"/saveproduct/"+product.productID}>{product.name}</Link> </td>
                  <td>{product.unitPrice}</td>
                  <td>{product.quantityPerUnit}</td>
                  <td>{product.unitsInStock}</td>
                  <td>
                  <button style={{backgroundColor:"#5499C7 "}} onClick={()=>this.addToCart(product) } >
                        sepete ekle
                      </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart:bindActionCreators(cartActions.addToCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
