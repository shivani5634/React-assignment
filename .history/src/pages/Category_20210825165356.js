/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import { Container } from "rsuite";
import MainPageLayout from "../components/MainPageLayout";
import CategoryJsonArray from "../data/categories.json";
import ProductJsonArray from "../data/products.json";

const Category = () => {
  const [categories, setCategories] = useState(CategoryJsonArray);
  const [products, setProducts] = useState(ProductJsonArray);
  return (
    <MainPageLayout>
      <Container>
        <Row>
          {categories.map((item, index) => {
            return (
              <Col>
                <a class="text-center" href={item.id}>
                  <span className="setting">
                    <h2>{item.name}</h2>
                    <h5>{item.description}</h5>
                  </span>
                </a>
              </Col>
            );
          })}
        </Row>
      </Container>
    </MainPageLayout>
  );
};

export default Category;
