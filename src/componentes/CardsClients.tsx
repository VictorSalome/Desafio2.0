import BasicMenu from "./DropdownHome";
import { IUser } from "../interfaces/user.Interface";
import ModalEdit from "./ModalEdit";
import useUser from "../hooks/useUser";

const CardsClients = () => {
  const data = useUser();

  const TotalClients = data.users.length;

  return (
    <div className="flex flex-col gap-5 text-lg font-sans text-gray-500 ">
      {data.users.map((cliente: IUser) => (
        <div
          key={cliente.id}
          className="border border-gray-200 rounded-md flex flex-col justify-between items-center md:flex-row p-4 "
        >
          <div className="w-full">
            <h2 className="text-base">
              <strong>Nome:</strong> {cliente.name}
            </h2>
            <p className="text-base">
              <strong>Email:</strong> {cliente.email}
            </p>
          </div>

          <div className="flex w-full mb-3 flex-col md:items-center">
            <p className="text-sm">
              <strong>CPF:</strong> {cliente.cpf}
            </p>
            <p className="text-sm">
              <strong>Telefone:</strong> {cliente.telefone}
            </p>
          </div>

          <div className="flex w-full  md:items-center">
            <BasicMenu status={cliente.status} id={cliente.id} />
          </div>
          <div>
            <ModalEdit users={data} cliente={cliente} />
          </div>
        </div>
      ))}
      <h1>Total de Clientes: {<strong>{TotalClients}</strong>}</h1>
    </div>
  );
};

export default CardsClients;
