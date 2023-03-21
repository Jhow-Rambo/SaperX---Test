import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const Welcome: FunctionComponent = () => {
  return (
    <div className=" w-full md:px-48 py-10 h-screen pl-24 pr-5">
      <div className="w-full h-full flex flex-col space-x-2 text-start">
        <h1 className="text-[#2E3646] font-bold md:text-5xl text-2xl">
          Agenda Telefônica
        </h1>
        <p className="text-[#5F6D7E] my-6">
          Projeto realizado para o teste da empresa SaperX com o objetivo de
          criar uma agenda telefônica.
        </p>
        <div className="w-12">
          <Link to="/contacts">
            <button className="bg-[#2E3646] text-white p-4 rounded-md">
              Começar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
