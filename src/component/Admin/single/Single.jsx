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

const Single = ({ emprende }) => {
  return (
    <div className="flex">
      {emprende && ( // Verifica si emprende no es nulo antes de continuar
        <div className="flex-1 ">
          <div>
            <div className="flex items-center gap-[20px] w-[36vw]">
              <img
                className="w-[100px] h-[100px] rounded-[20px] object-cover"
                src={emprende?.img_url || "https://via.placeholder.com/150"}
                alt="img"
              />
              <h1 className=" font-bold text-2xl text-center">
                {emprende.nombre}
              </h1>
              <button
                onClick={() => console.log("Editar")}
                className="flex items-center bg-[#026937] rounded-sm
                        text-lg transition duration-300 ease-in-out hover:bg-[#8DC63F]"
                style={{ boxShadow: "0px 4px 5px 0px rgba(0, 0, 0, 0.7)" }}
                title="Agregar"
                name="Agregar"
              >
                <div className="mx-4 my-2 flex flex-row gap-[10px] items-center justify-center">
                  <span className="font-roboto-slab text-base text-white">
                    Editar
                  </span>
                </div>
              </button>
            </div>
            <div className="flex flex-wrap text-[18px] w-[30vw] justify-between">
              {emprende && (
                <div className=" text-[15px]">
                  {Object.entries(emprende).map(([key, value]) => (
                    <div className="my-[20px]" key={key}>
                      <span className="font-[600] mr-[10px] capitalize">
                        {key}:
                      </span>
                      {typeof value === "object" ? (
                        // Si el valor es un objeto, iteramos sobre sus propiedades
                        Object.entries(value).map(([subKey, subValue]) => (
                          <div key={subKey} className="ml-[20px]">
                            <span className="font-[600] mr-[10px] capitalize">
                              {subKey}:
                            </span>
                            <span>{subValue}</span>
                          </div>
                        ))
                      ) : (
                        // Si no es un objeto, mostramos el valor directamente
                        <span>{value}</span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <hr className="w-[90%] h-0 border-[0.5px] border-solid border-gray-600 my-[20px]" />
          {/*<div className="mt-[50px] w-[80%] h-[400px]">
            {/*emprende && emprende.chart && emprende.chart.data && (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={500}
                  height={300}
                  data={emprende.chart.data}
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
                  {emprende.chart.dataKeys.map((key) => (
                    <Line
                      type="monotone"
                      dataKey={key.name}
                      stroke={key.color}
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            )}
          </div>*/}
        </div>
      )}
      {
        /* Si emprende es nulo, no se muestra nada */
        emprende?.actualizaciones && (
          <div className="flex-1">
            <h2 className="mb-[20px] font-bold text-2xl text-center pt-8">
              Ultimas actualizaciones
            </h2>
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

              {/*<li
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
                  </li>*/}
            </ul>
          </div>
        )
      }
    </div>
  );
};

export default Single;
