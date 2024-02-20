import { FaRegUser } from "react-icons/fa";
import CardsClients from "../../componentes/CardsClients";
import { Link } from "react-router-dom";

const HomeMainPages = () => {
  return (
    <main className="flex items-center justify-center  md: m-3">
      <div className="w-full max-w-screen-xl">
        <section className="flex flex-col mx-auto">
          <div className="flex items-center">
            <div className="text-2xl mr-2">
              {" "}
              <FaRegUser />
            </div>
            <h1 className="text-2xl font-sans">Painel do cliente</h1>
          </div>
          <div className="border-b border-black mt-4 mb-4"></div>
          <div className="flex justify-between">
            <div>
              <h2 className="text-xl font-sans mb-3">Listagem de usuários</h2>
              <p className="mb-14">
                Escolha um cliente para visualizar os detalhes
              </p>
            </div>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 rounded h-10  md: w-32 text-sm flex items-center "
            >
              <Link to="/register">Novo cliente</Link>
            </button>
          </div>
          <CardsClients />
        </section>
      </div>
    </main>
  );
};

export default HomeMainPages;
