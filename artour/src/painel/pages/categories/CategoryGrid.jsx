import DataTable from "react-data-table-component";

function CategoryGrid({ categoryList, onCategorySelected }) {
  const columns = [
    {
      name: "Nome",
      selector: (row) => row.nome,
    }
  ];

  const data = categoryList.map((category) => ({
    id: category.id,
    nome: category.name,
  }));

  const categoryHandleSelected = ({ selectedRows }) => {
    selectedRows.map((category) => {
    onCategorySelected(category);
    })
  };

  return (
    <DataTable
      columns={columns}
      data={data}
      selectableRows
      onSelectedRowsChange={categoryHandleSelected}
      selectableRowsSingle
    />
  );
}

export default CategoryGrid;