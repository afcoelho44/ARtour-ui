import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import UserGrid from "./UserGrid.jsx";
import { deleteUserApi, getAllUsersApi } from "../../../api/Services";
import ModalConfirm from "../../components/ModalConfirm.jsx";

function UserListPage() {
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const mensage = "Tem certeza que você deseja excluir o usuário ?";

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

  function deleteUser() {
    deleteUserApi(userSelected.id)
      .then(() => {
        getUsersList();
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
      <Button variant="danger" onClick={() => setOpenModal(true)}>
        Excluir Usuário
      </Button>{" "}
      <hr />
      <UserGrid usersList={users} onUserSelected={setUserSelected} />
      {openModal && (
        <ModalConfirm
          mensage={mensage}
          onConfirm={deleteUser}
          open={openModal}
          setClose={() => setOpenModal(false)}
        />
      )}
    </>
  );
}

export default UserListPage;
