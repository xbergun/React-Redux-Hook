//useState i setState yerine kullanıcaz
//useEffect i componentDidMount yerine kullanıcaz
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../redux/actions/categoryActions";
import { saveProduct } from "../../redux/actions/productActions";
import ProductDetail from "./ProductDetail";

function AddOrUpdateProduct({
  //parametreler
  products,
  categories,
  getProducts,
  getCategories,
  saveProducts,
  history,
  //mevcut propları genişletiyoruz
  ...props
}) {
  //product state ini setproduct fonksiyonu ile set edebilirim
  const [product, setProduct] = useState({ ...props.product });
  const [errors,setState]=useState({})
  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
    setProduct({ ...props.product });
  }, [props.product]);
  //yukarıdaki satırı yazmazsak program sonsuz döngüye girer(hooks bug ı)

  function handleChange(event) {
    const { name, value } = event.target;
    setProduct((previousProduct) => ({
      ...previousProduct,
      //categoryID alanımız varsa değeri int a çevir yoksa olduğu gibi bas yani value olarak
      [name]: name === "categoryID" ? parseInt(value, 10) : value,
    }));
    setErrors(previousErrors=>({...previousErrors,name:"Ürün ismi olmalıdır"}))
  }

  function handleSave(event) {
    //sayfanın refresh olmasını engeller
    event.preventDefault();
    saveProduct(product).then(() => {
      //history : daha önce geldiğimiz sayfalara yönlendirme yapar
      history.push("/");
    });
  }
  return (
    <ProductDetail
      product={product}
      categories={categories}
      onChange={handleChange}
      onSave={handleSave}
      errors={errors}
    ></ProductDetail>
  );
}

export function getProductById(products, productID) {
  let product =
    products.find((product) => product.productID == productID) || null;
  return product;
}

function mapStateToProps(state, ownProps) {
  const productID = ownProps.match.params.productId;
  const product =
    productID && state.productListReducer.length > 0
      ? getProductById(state.productListReducer, productID)
      : {};
  return {
    product,
    products: state.productListReducer,
    categories: state.categoryListReducer,
  };
}

const mapDispatchToProps = {
  getCategories,
  saveProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct);
