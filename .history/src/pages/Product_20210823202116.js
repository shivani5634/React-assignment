import React from "react";
import MainPageLayout from "../components/MainPageLayout";
import { Button, Modal } from "rsuite";

const Product = () => {
  return (
    <MainPageLayout>
      <Modal>
        <Modal.Header>
          <Modal.Title>Filter</Modal.Title>
        </Modal.Header>
        <Modal.Body>hello</Modal.Body>
        <Modal.Footer>
          <Button>Reset</Button>
        </Modal.Footer>
      </Modal>
    </MainPageLayout>
  );
};

export default Product;
