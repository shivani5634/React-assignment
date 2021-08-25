import React from "react";
import MainPageLayout from "../components/MainPageLayout";
import Button, { Icon } from "rsuite";

const Home = () => {
  return (
    <MainPageLayout>
      this is Home
      <Button>
        <Icon icon="cart"></Icon>
      </Button>
    </MainPageLayout>
  );
};

export default Home;
