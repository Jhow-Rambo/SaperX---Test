import { FunctionComponent } from "react";

const ContactForm: FunctionComponent = () => {

  return (
    <div className=" w-full md:px-48 py-10 h-screen pl-24 pr-5">
      <div className="w-full h-full flex flex-col space-x-2 text-start">
        <h1 className="text-[#2E3646] font-bold md:text-5xl text-2xl">
          Criar Novo Contato
        </h1>
        <div className="w-full items-center flex flex-col space-y-3">
          <div className="max-w-4xl w-full mt-7 m-auto">
            <div className="flex justify-between md:space-x-20 mb-12 space-x-1">
              <div className="flex flex-col w-1/2">
                <label className="text-sm">Nome</label>
                <input
                  className="appearance-none w-full border-2 border-[##CCCCCC] outline-none rounded-md p-3"
                  placeholder="João da Silva"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label className="text-sm">Email</label>
                <input
                  className="appearance-none w-full border-2 border-[##CCCCCC] outline-none rounded-md p-3"
                  placeholder="joão@gmail.com"
                />
              </div>
            </div>

            <div className="flex justify-between md:space-x-20 space-x-1 items-end">
              <div className="flex flex-col w-1/2">
                <label className="text-sm">Data de nascimento</label>
                <input
                  className="appearance-none w-full border-2 border-[##CCCCCC] outline-none rounded-md p-3"
                  placeholder="15/02/1985"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label className="text-sm">CPF</label>
                <input
                  className="appearance-none w-full border-2 border-[##CCCCCC] outline-none rounded-md p-3"
                  placeholder="Ex: 232.240.300-89"
                />
              </div>
            </div>

            <div className="max-h-52 h-full border-2 border-[##CCCCCC] rounded-md p-2 mt-12 ">
              <div className="flex w-full justify-between mb-4">
                <button className="bg-[#6B54F8] text-white py-2 md:px-8 rounded-md right-0 px-2">
                  Adicionar
                </button>
                <button className="bg-primary-red text-white py-2 md:px-8 rounded-md right-0 px-2">
                  Limpar
                </button>
              </div>
              <div className="flex flex-col w-1/2">
                <input
                  className="appearance-none w-full border-2 border-[##CCCCCC] outline-none rounded-md p-2"
                  placeholder="Número"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
