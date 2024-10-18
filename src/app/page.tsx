import React from "react";
import { Button, Input, Select } from "antd";

const options = [
  { label: "shey", value: "shey" },
  { label: "hos", value: "hospitale" },
  { label: "hos1", value: "shey-hospitale" },
];

function HomePage() {
  return (
    <div className="p-5 flex flex-col gap-5 w-max">
      <h1>Shey-Hospitale</h1>
      <Button>Default Button</Button>
      <Button type="primary" className="bg-black hover:bg-black">
        Primary Button
      </Button>
      <Input placeholder="Basic usage" />
      <Select
        options={options}
        style={{ width: 120 }}
        placeholder="Select a person"
      />
    </div>
  );
}

export default HomePage;
