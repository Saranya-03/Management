import "./home.css";
import React from 'react';
import Info from "../../Components/InformationHome/info";
import Chart from "../../Components/Chart/chart";
import {chartData} from "../../dataCollection";

export default function Home() {
    return (
        <div className="home">
            <Info />
            <Chart data={chartData} title="Total Profit Analysis" dataKey="month"/>
        </div>
    )
}
