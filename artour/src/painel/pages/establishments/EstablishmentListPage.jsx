import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import EstablishmentGrid from "./EstablishmentGrid.jsx";
import { deleteEstablishmentApi, getAllEstablishmentApi } from "../../../api/Services";
import ModalConfirm from "../../components/ModalConfirm.jsx";

function EstablishmentListPage() {
  const [establishments, setEstablishments] = useState([]);
  const [establishmentSelected, setEstablishmentSelected] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const mensage = "Tem certeza que você deseja excluir o estabelecimento ?";

    useEffect(() => {
    getEstablishmentList();
    }, []);

    function getEstablishmentList() {
        getAllEstablishmentApi()
            .then((response) => {
                setEstablishments(response.data);
        }).catch((erro) => console.log(erro));
    }

    function deleteEstablishment() {
        deleteEstablishmentApi(establishmentSelected.id).then(
            () => {
                getEstablishmentList();
            }
        ).catch((erro) => console.log(erro));
    setOpenModal(false);
  }

  return (
    <>
      <h3>Estabelecimentos</h3>
      <hr />
      <Link to="/painel/estabelecimento/criar">
        <Button variant="success">Novo Estabelecimento</Button>{" "}
      </Link>
      <Link to={`/painel/estabelecimento/${establishmentSelected?.id}/editar`}>
        <Button variant="primary">Alterar Estabelecimento</Button>{" "}
      </Link>
      <Link to={`/painel/estabelecimento/${establishmentSelected?.id}/visualizar`}>
        <Button variant="info">Visualizar Estabelecimento</Button>{" "}
      </Link>
      <Button variant="danger" onClick={() => setOpenModal(true)}>
        Excluir Estabelecimento
      </Button>{" "}
      <hr />
      <EstablishmentGrid EStablishmentList={establishments} onEstablishmentSelected={setEstablishmentSelected} />
      {openModal && (
        <ModalConfirm
          mensage={mensage}
          onConfirm={deleteEstablishment}
          open={openModal}
          setClose={() => setOpenModal(false)}
        />
      )}
    </>
  );
}

export default EstablishmentListPage;
