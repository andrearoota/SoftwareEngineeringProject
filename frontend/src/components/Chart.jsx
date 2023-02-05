import React from 'react';
import classes from "./Chart.module.css";
import { calculate_curr, calculate_invested } from './Card';
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// CHART COMPONENT
// input: stocks of logged user, wallet (available funds) of logged user, aspect ratio of chart and title
// shows the increment of value of wallet from purchase to now


class Chart extends React.Component {
  constructor(props) {
    super(props);
    let current_value= calculate_curr(props.prop);
    let invested_money= calculate_invested(props.prop);
    const datas = [
      { name: "Purchase_costs", Total: invested_money+wallet},
      { name: "Current_value", Total: current_value+wallet},
      
    ];
  
  }
  render() {
    return (
      <div className={classes.chart}>
      <div className={classes.title}>{this.props.title}</div>
      <ResponsiveContainer width="100%" aspect={this.props.aspect}>
        <AreaChart
          width={500}
          height={250}
          data={this.datas}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className={classes.chartGrid} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
    );
  }
}

export default Chart