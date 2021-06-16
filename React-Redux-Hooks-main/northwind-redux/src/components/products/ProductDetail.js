import React from "react";
import { Button } from "reactstrap";
import SelectInput from "../toolBox/SelectInput";
import TextInput from "../toolBox/TextInput";

const ProductDetail = ({ categories, product, onSave, onChange,errors }) => {
  return (
    <form onSubmit={onSave}>
      {/*product ın içinde id si varsa güncelle yaz yoksa ekle yaz */}
      <h2>{product.productID ? "Güncelle" : "Ekle"}</h2>
      <TextInput
        name="name"
        label="Product Name"
        value={product.name}
        onChange={onChange}
        error={errors.name}
      ></TextInput>

      <SelectInput
        name="categoryID"
        label="Category"
        value={product.categoryID || ""}
        defaultOption="Seçiniz"
        options={categories.map((category) => ({
          value: category.categoryID,
          text: category.name,
        }))}
        onChange={onChange}
        error={errors.categoryID}
      />

      <TextInput 
        name="unitPrice"
        label="Unit Price"
        value={product.unitPrice}
        onChange={onChange}
        error={errors.unitPrice}
      ></TextInput>

      <TextInput
        name="quantityPerUnit"
        label="Quantity Per Unit"
        value={product.quantityPerUnit}
        onChange={onChange}
        error={errors.quantityPerUnit}
      ></TextInput>

      <TextInput
        name="unitsInStock"
        label="Units In Stock"
        value={product.unitsInStock}
        onChange={onChange}
        error={errors.unitsInStock}
      ></TextInput>

      <Button type="submit" className="btn btn-success">
        Kaydet
      </Button>
    </form>
  );
};

export default ProductDetail;
