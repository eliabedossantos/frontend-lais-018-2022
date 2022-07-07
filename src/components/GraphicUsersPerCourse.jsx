import { useState } from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["Language", "Speakers (in millions)"],
    ["German", 5.85],
    ["French", 1.66],
    ["Italian", 0.316],
    ["Romansh", 0.0791],
];


export const options = {
    legend: "none",
    pieSliceText: "h1",
    title: "Usuários por curso",
    pieStartAngle: 100,
};

export function GraphicUsersPerCourse() {

    return (
        <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    );
}