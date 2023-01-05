import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 }
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];



export default function Pie_Chart() {
  return (
    <div className="chart">
      <div className="title">Stocks</div>

    
    <PieChart width={600} height={400}>
      <Pie
        data={data}
        cx={300}
        cy={200}
        labelLine={true}
        label
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
    </div>
  );
}
