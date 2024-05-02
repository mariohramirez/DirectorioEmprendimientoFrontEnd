import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Single = ({ emprendimiento }) => {
  return (
    <div className="flex">
      <div className="flex-1">
        <div>
          <div className="flex items-center gap-[20px]">
            <img
              className="w-[100px] h-[100px] rounded-[20px] object-cover"
              src="/png/Logos/logoipsum-300.png"
              alt="img"
            />
            <h1 className=" font-[500]">{emprendimiento.titulo}</h1>
            <button>Editar</button>
          </div>
          <div className=" text-[18px]">
            {Object.entries(emprendimiento.informacion).map((info) => (
              <div className="my-[30px]" key={info[0]}>
                <span className="font-[600] mr-[10px] capitalize">
                  {info[0]}:
                </span>
                <span>{info[1]}</span>
              </div>
            ))}
          </div>
        </div>
        <hr className="w-[90%] h-0 border-[0.5px] border-solid border-gray-600 my-[20px]" />
        <div className="mt-[50px] w-[80%] h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={emprendimiento.chart.data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              {emprendimiento.chart.dataKeys.map((key) => (
                <Line type="monotone" dataKey={key.name} stroke={key.color} />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="flex-1">
        <h2 className="mb-[20px]">Ultimas actualizaciones</h2>
        <ul>
          <li
            className=" list-none relative w-[1px] pt-[50px] bg-red-600 
          after:content-none after:absolute after:left-[50%] after:bottom-0 after:w-[10px] 
          after:h-[10px] after:bg-red-600 after:rounded-[50%] after:transform-[translateX(-50%)]"
          >
            <div className=" min-w-[480px] p-[15px] bg-red-600/50">
              <p className="mb-[5px]">Emprendimiento creado</p>
              <time className="text-[12px]">Hace 3 dias</time>
            </div>
          </li>
          <li
            className=" list-none relative w-[1px] pt-[50px] bg-red-600 
          after:content-none after:absolute after:left-[50%] after:bottom-0 after:w-[10px] 
          after:h-[10px] after:bg-red-600 after:rounded-[50%] after:transform-[translateX(-50%)]"
          >
            <div className=" min-w-[480px] p-[15px] bg-red-600/50">
              <p className="mb-[5px]">Emprendimiento creado</p>
              <time className="text-[12px]">Hace 3 dias</time>
            </div>
          </li>
          <li
            className=" list-none relative w-[1px] pt-[50px] bg-red-600 
          after:content-none after:absolute after:left-[50%] after:bottom-0 after:w-[10px] 
          after:h-[10px] after:bg-red-600 after:rounded-[50%] after:transform-[translateX(-50%)]"
          >
            <div className=" min-w-[480px] p-[15px] bg-red-600/50">
              <p className="mb-[5px]">Emprendimiento creado</p>
              <time className="text-[12px]">Hace 3 dias</time>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Single;
