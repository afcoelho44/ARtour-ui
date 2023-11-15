import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import CurationGrid from "./CurationGrid.jsx";
import { getAllCommentsApi } from "../../../api/Services.js";

function CurationListPage() {
  const [comments, setComments] = useState([]);
  const [commentSelected, setCommentSelected] = useState(null);

  useEffect(() => {
    getCommentsList();
  }, []);

  function getCommentsList() {
    getAllCommentsApi()
      .then((response) => {
        setComments(response.data);
      })
      .catch((erro) => console.log(erro));
  }

  return (
    <>
      <h3>Curadoria de Comentários</h3>
      <hr />
      <Link to={`/painel/curadoria/${commentSelected?.id}/visualizar`}>
        <Button variant="info">Visualizar Comentário</Button>{" "}
      </Link>
      <Link to={`/painel/curadoria/${commentSelected?.id}/analise`}>
        <Button variant="primary">Analisar Comentário</Button>{" "}
      </Link>
      <hr />
      <CurationGrid
        commentsList={comments}
        onCommentSelected={setCommentSelected}
      />
    </>
  );
}

export default CurationListPage;