import './Pie_Chart.css'
import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";


const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];



export default function Pie_Chart({data}) {
  return (
    <div className="piechart">
      <div className="title">Stocks</div>

      
    <PieChart width={600} height={400}>
      <Pie
        data={data}
        cx={300}
        cy={200}
        labelLine={true}
        label
        outerRadius={180}
        fill="#8884d8"
        dataKey="amount"
        nameKey="title"
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
