import React from "react";
import SelectInput from "../toolbox/SelectInput";
import TextInput from  "../toolbox/TextInput"

const ProductDetail = ({
    categories,
    product,
    onSave,
    onChange,
    errors
}
) => {
    return(
        <form onSubmit={onSave}>
          <h2>{product.id ? "Güncelle" : "Ekle"}</h2>

          <TextInput
          name = "productName"
          label = "Product Name"
          value = {product.productName}
          onchange = {onChange}
          error = {errors.productName}
          />

          <SelectInput
          name = "categoryId"
          label = "Category"
          value = {product.categoryId || ""}
          defaultOption = "Seçiniz"
          options = {categories.map(category =>({
              value:category.id,
              text:category.categoryName
          }))}

          onChange = {onChange}
          error = {errors.categoryId}
          />


          <TextInput
          name = "unitPrice"
          label = "Unit Price"
          value = {product.unitPrice}
          onchange = {onChange}
          error = {errors.unitPrice}
          />

         <TextInput
          name = "quantityPerUnit"
          label = "Quantity Per Unit"
          value = {product.quantityPerUnit}
          onchange = {onChange}
          error = {errors.quantityPerUnit}
          />  

          <TextInput
          name = "unitsInStock"
          label = "Units In Stock"
          value = {product.unitsInStock}
          onchange = {onChange}
          error = {errors.unitsInStock}
          />

          <button type = "submit" className = "btn btn-success">Kaydet</button>
        </form>
    );
};

export default ProductDetail;