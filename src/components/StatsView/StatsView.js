import React from "react";
import { Box, DataTable, Text, Meter } from "grommet";
import TitleBar from "../TitleBar";
import DefaultBox from "../DefaultBox";

const renderData = ({ stat, value }) => {
  return (
    <Box>
      {stat === "hp" && !isNaN(parseInt(value)) ? (
        <>
          <Meter
            values={[{ value }, { value: 10 - value, color: "#aaa" }]}
            thickness="small"
            size="small"
          />
          {value} / 10
        </>
      ) : (
        <Text>{value}</Text>
      )}
    </Box>
  );
};

const formatData = dataset => {
  // data is {a:1, b:2, c:3}
  // we want { columns:[stat, value] data:[{stat:a, value:1}, {stat:b, value:2}, {stat:c, value:3}] }

  const columns = [
    { property: "stat", header: <Text>Stat</Text> },
    { property: "value", header: <Text>Value</Text>, render: renderData }
  ];

  const data = Object.keys(dataset).map(k => ({
    stat: k,
    value: dataset[k]
  }));

  return {
    columns,
    data
  };
};

export default ({ data }) => (
  <DefaultBox title="Stats">
    <DataTable {...formatData(data)} />
  </DefaultBox>
);
