/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Container, Grid, Row } from "rsuite";
import MainPageLayout from "../components/MainPageLayout";
import CategoryJsonArray from "../data/categories.json";

const Category = () => {
  const [categories, setCategories] = useState(CategoryJsonArray);
  return (
    <MainPageLayout>
      <Container>
        <Grid>
          <Row>
            {categories.map((item, index) => {
              return (
                <a class="text-center" href={item.id}>
                  <span className="setting">
                    <h2>{item.name}</h2>
                    <h5>{item.description}</h5>
                  </span>
                </a>
              );
            })}
          </Row>
        </Grid>
      </Container>
    </MainPageLayout>
  );
};

export default Category;
