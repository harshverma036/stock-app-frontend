import React from "react";
import MainLayout from "./MainLayout";

import Button from "../components/Button";
import Input from "../components/Input";

const SearchClient = () => {
  return (
    <MainLayout pages="form">
      <Input
        name="client_id"
        placeholder={"Enter Client ID"}
        required={true}
        label={"Client Id"}
      />
      <div className="flex justify-center">
        <Button type={"button"} name={"submit"} text={"Search Client"} />
      </div>
    </MainLayout>
  );
};

export default SearchClient;
