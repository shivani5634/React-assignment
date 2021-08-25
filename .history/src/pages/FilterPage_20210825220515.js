/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useCallback, useState } from "react";

import fakeProducts from "../data/products.json";
import Categories from "../data/categories.json";
import Product from "./Product";
import { useFilter } from "../context/useFilters";
import { Col, Row } from "reactstrap";
import FilterCheckbox from "../components/FilterCheckbox";
import { useParams } from "react-router-dom";

function getComputedProducts(products, filters) {
  let result = [...products];
  if (filters.delivery) {
    result = result.filter((p) => p.delivery === true);
  }

  if (filters.inStock) {
    result = result.filter((p) => p.inStock === true);
  }
  if (filters.expensive) {
    result = result.filter((p) => p.price > 100);
  }
  return result;
}

const FilterPage = ({ category }) => {
  const [products] = useState(
    fakeProducts.filter((p) => p.categoryId === categoryId)
  );
  const [filter, dispatchFilter] = useFilter({
    delivery: false,
    inStock: false,
    expensive: false,
  });

  const filteredProducts = getComputedProducts(products, filter);

  const onCheckboxChange = useCallback(
    (ev) => {
      const checkbox = ev.target;

      dispatchFilter({
        type: "SET",
        filterName: checkbox.name,
        value: checkbox.checked,
      });
    },
    [dispatchFilter]
  );
  return (
    <Row>
      <Col xs={12} md={6} className="position-relative">
        <div className="fixed-md">
          <h2 className="h3">Filters</h2>
          <FilterCheckbox
            id="delivery"
            name="delivery"
            checked={filter.delivery}
            onChange={onCheckboxChange}
            label="Delivery"
          />
          <FilterCheckbox
            id="inStock"
            name="inStock"
            checked={filter.inStock}
            onChange={onCheckboxChange}
            label="In Stock only"
          />
          <FilterCheckbox
            id="expensive"
            name="expensive"
            checked={filter.expensive}
            onChange={onCheckboxChange}
            label="Expensive (100+USD)"
          />

          <div className="mt-">
            Showing {filteredProducts.length} out of {products.length}
          </div>
        </div>
      </Col>
      <Col xs={12} md={6} className="mt-3 mt-md-0">
        <h1 className="h3">{category.name}</h1>
        <div>
          <Product products={filteredProducts} />
        </div>
      </Col>
    </Row>
  );
};
const CategoryContainer = () => {
  const { categoryId } = useParams();
  const category = Categories.find((c) => c.categoryId === categoryId);

  if (!category) {
    return <div>Cateory with id {catgeoryId} does not exist</div>;
  }
  return <FilterPage category={category} />;
};

export default CategoryContainer;
