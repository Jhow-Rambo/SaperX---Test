import { FunctionComponent, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Contacts: FunctionComponent = () => {

  const baseURL = "http://teste-frontend.saperx.com.br/api/schedule";

  const [contacts, setContact] = useState([]);

  //TODO: Solve CORS error
  const getData = () => {
    axios.get(`${baseURL}`).then(async (response) => {
      setContact(response.data);
      console.log(response.data);
    }).catch((error) => { console.log(error); });
  }

  useEffect(() => { 
    getData();
  }, [])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/ability/?limit=20&offset=20")
      .then((response) => response.json())
      .then((data) => setContact(data));
  }, []);

  return (
    <div>
      {contacts ? (
        <div>
          <div className=" w-full md:px-48 py-10 h-screen pl-24 pr-5">
            <div className="w-full h-full flex flex-col space-x-2 text-start">
              <p className="text-[#2E3646] font-bold md:text-5xl text-2xl">
                Agenda Telefônica
              </p>
              <div className="w-full flex items-center mt-14 md:block">
                <div className="max-w-4xl w-full mt-5 m-auto">
                  <div className="flex justify-between flex-wrap">
                    <div className="flex flex-col xl:w-1/2 w-full">
                      <label className="text-sm">Nome</label>
                      <input className="appearance-none w-full border-b-2 border-black outline-none mb-10" />
                    </div>
                    <Link to="/create-contact">
                      <button className="bg-primary-green text-white py-4 px-10 md:px-20 rounded-md">
                        Criar
                      </button>
                    </Link>
                  </div>
                  <div>
                    {/* {contacts.map((contact) => (
                    <div key={contact}>{contact}</div>
                  ))} */}
                    <p className="text-[#2E3646] font-bold md:text-2xl mt-5 text-lg">
                      Contatos Não Encontrados
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Contacts;
