import { useParams } from "react-router-dom";

function EstablishmentPage() {

    const { id } = useParams();

  return (
    <>
      <h1>Página de exibição do ponto turístico: {id}</h1>
    </>
  );
}

export default EstablishmentPage;
