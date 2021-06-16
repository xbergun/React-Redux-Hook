import * as actionTypes from "./actionTypes";

export function getProductsSuccess(products) {
  return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products };
}

export function createProductSuccess(product) {
  return { type: actionTypes.CREATE_PRODUCT_SUCCESS, payload: product };
}

export function saveProductApi(product) {
  return fetch("http://localhost:3000/products/" + (product.productID || ""), {
    method: product.productID ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(product),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function saveProduct(product) {
  //action u devreye sokar
  return function (dispatch) {
    return saveProductApi(product)
      .then((savedProduct) => {
        product.productID
          ? dispatch(updateProductSuccess(savedProduct))
          : dispatch(createProductSuccess(savedProduct));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export async function handleResponse(response){
  if(response.ok){
    return response.json();
  }
  const error=await response.text()
  throw new Error(error)
}

export function handleError(error){
  console.log("bir hata oluştu")
  throw error;
}

export function updateProductSuccess(product) {
  return { type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: product };
}

export function getProducts(categoryID) {
  return function (dispatch) {
    let url = "http://localhost:3000/products";
    if (categoryID) {
      url = url + "?categoryID=" + categoryID;
    }
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getProductsSuccess(result)));
  };
}
