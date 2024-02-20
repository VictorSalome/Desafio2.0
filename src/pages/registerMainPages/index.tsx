import { FaRegUser } from "react-icons/fa";
import FormRegister from "../../componentes/FormRegister";
import { Link } from "react-router-dom";

const Cadastro = () => {
  return (
    <main className="flex items-center justify-center w-full h-screen md: ml-4">
      <div className="w-full max-w-screen-md">
        <section className="flex flex-col mx-auto">
          <div className="flex items-center">
            <div className="text-2xl mr-2">
              {" "}
              <FaRegUser />
            </div>
            <h1 className="text-2xl font-sans">Painel do cliente</h1>
          </div>
          <div className="border-b border-black mt-4 mb-4"></div>
          <div className="flex flex-col md:flex-row md:justify-between items-center mb-4">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-sans mb-3">Novo usuário</h2>
              <p className="mb-3">
                Informe os campos a seguir para criar um novo usuário:
              </p>
            </div>
            <ul className="flex flex-col md:flex-row list-none p-0 m-0 ml-20 ">
              <li className="md:mr-4 mb-2 md:mb-0">
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 rounded h-10 text-sm md:text-base"
                >
                  <Link to="/">Lista de clientes</Link>
                </button>
              </li>
            </ul>
          </div>
          <FormRegister />
        </section>
      </div>
    </main>
  );
};

export default Cadastro;
