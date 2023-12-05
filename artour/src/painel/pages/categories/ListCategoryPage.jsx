import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import CategoryGrid from "./CategoryGrid.jsx";
import { deleteCategoryApi, getAllCategoriesApi } from "../../../api/Services.js";
import ModalConfirm from "../../components/ModalConfirm.jsx";

function ListCategoryPage() {
  const [categories, setCategories] = useState([]);
  const [categorySelected, setCategorySelected] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const mensage = "Tem certeza que você deseja excluir a categoria ?";

  useEffect(() => {
    getCategoriesList();
  }, []);

  function getCategoriesList() {
    getAllCategoriesApi().then((response) => { setCategories(response.data);})
      .catch((erro) => console.log(erro));
    
    console.log(categories);
  }

  function deleteCategory() {
    deleteCategoryApi(categorySelected.id)
      .then(() => {
        getCategoriesList();
      })
      .catch((erro) => console.log(erro));
    setOpenModal(false);
  }

  return (
    <>
      <h3>Categorias</h3>
      <hr />
      <Link to="/painel/categoria/criar">
        <Button variant="success">Nova Categoria</Button>{" "}
      </Link>
      <Link to={`/painel/categoria/${categorySelected?.id}/editar`}>
        <Button variant="primary">Alterar Categoria</Button>{" "}
      </Link>
      <Link to={`/painel/categoria/${categorySelected?.id}/visualizar`}>
        <Button variant="info">Visualizar Categoria</Button>{" "}
      </Link>
      <Button variant="danger" onClick={() => setOpenModal(true)}>
        Excluir Categoria
      </Button>{" "}
      <hr />
      <CategoryGrid categoryList={categories} onCategorySelected={setCategorySelected} />
      {openModal && (
        <ModalConfirm
          mensage={mensage}
          onConfirm={deleteCategory}
          open={openModal}
          setClose={() => setOpenModal(false)}
        />
      )}
    </>
  );
}

export default ListCategoryPage;
