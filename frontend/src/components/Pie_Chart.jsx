import './Pie_Chart.css'
import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";


const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// PIE CHART COMPONENT
// input: stocks of logged user
// pie chart that shows the allocation of the money of user in different stocks
//datakey is current value of stocks
// namekey is name of stocks

export default function Pie_Chart({prop}) {
  return (
    <div className="piechart">
      <div className="title">Stocks</div>

      
    <PieChart width={600} height={400}>
      <Pie
        data={prop}
        cx={300}
        cy={200}
        labelLine={true}
        label
        outerRadius={180}
        fill="#8884d8"
        dataKey="current_value"
        nameKey="stock_name"
      >
        
        {prop.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  
    </div>
  );
}
