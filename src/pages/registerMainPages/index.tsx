import { FaRegUser } from "react-icons/fa";
import FormRegister from "../../componentes/FormRegister";
import { Link } from 'react-router-dom';


const Cadastro = () => {


  return (
    <main className="flex items-center justify-center w-full h-screen">
      <div className="w-full max-w-screen-xl">
        <section className="flex flex-col mx-auto">
          <div className="flex items-center">
            <div className="text-2xl mr-2"> <FaRegUser /></div>
            <h1 className="text-2xl font-sans">Painel do cliente</h1>
          </div>
          <div className="border-b border-black mt-4 mb-4"></div>
          <div className="flex justify-between">
            <div>
              <h2 className="text-xl font-sans mb-3">Novo usuário</h2>
              <p className="mb-14">Informe os campos a seguir para criar novo usuario:</p>
            </div>
            <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded w-36 h-14"><Link to="/">Lista de clientes</Link></button>
          </div>
          <FormRegister />
        </section>
      </div>
    </main>
  );
}

export default Cadastro;
