import React from "react";
import { storiesOf } from "@storybook/react";
import Table from "./Table";

// Oops its 1-based
const tableData = {
  headings: ["col1", "col2", "col3"],
  body: [
    ["row1 cell 1", "row1 cell 2", "row1 cell 3"],
    ["row2 cell 1", "row2 cell 2", "row2 cell 3"],
    ["row3 cell 1", "row3 cell 2", "row3 cell 3"]
  ]
};

storiesOf("Table", module).add("default", () => <Table table={tableData} />);
