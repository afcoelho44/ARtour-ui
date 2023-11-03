import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import UserGrid from "../components/UserGrid";
import { getAllUsersApi } from "../../api/Services";

function UserListPage() {
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  useEffect(() => {
    getUsersList();
  }, []);

  function getUsersList() {
    getAllUsersApi()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((erro) => console.log(erro));
  }

  return (
    <>
      <h3>Usuários do Sistema</h3>
      <hr />
      <Link to="/painel/usuario/cadastro">
        <Button variant="success">Novo Usuário</Button>{" "}
      </Link>
      <Link to={`/painel/usuario/${userSelected?.id}/editar`}>
        <Button variant="primary">Alterar Usuário</Button>{" "}
      </Link>
      <Link to={`/painel/usuario/${userSelected?.id}/visualizar`}>
        <Button variant="info">Visualizar Usuário</Button>{" "}
      </Link>
      <Button variant="danger">
          Excluir Evento
        </Button>{" "}
      <hr />
      <UserGrid usersList={users} onUserSelected={setUserSelected} />
    </>
  );
}

export default UserListPage;
