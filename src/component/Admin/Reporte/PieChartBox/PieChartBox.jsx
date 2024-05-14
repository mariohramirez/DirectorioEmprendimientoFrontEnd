import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";


const PieChartBox = ({slug, data}) => {
  return (
    <div className="h-[100%] flex flex-col justify-between">
      <h1 className="text-center">{slug}</h1>
      <div className="flex items-center justify-center w-[100%] h-[100%]">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip contentStyle={{ borderRadius: "5px" }} />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
              nameKey="name"
              label
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-between gap-[10px] text-[14px]">
        {data.map((item) => (
          <div
            className="flex flex-col gap-[10px] items-center"
            key={item.name}
          >
            <div className="flex gap-[10px] items-center">
              <div
                className="w-[10px] h-[10px] rounded-[50%]"
                style={{ backgroundColor: item.color }}
              />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
