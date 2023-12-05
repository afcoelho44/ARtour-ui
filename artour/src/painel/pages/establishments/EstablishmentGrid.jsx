import DataTable from "react-data-table-component";

function EstablishmentGrid({ EStablishmentList, onEstablishmentSelected }) {
  const columns = [
    {
      name: "Nome",
      selector: (row) => row.nome,
    },
    {
      name: "Ativo",
      selector: (row) => row.ativo,
    },
  ];

  const data = EStablishmentList.map((establishment) => ({
    id: establishment.id,
    nome: establishment.name,
    ativo: establishment.active,
  }));

  const establishmentHandleSelected = ({ selectedRows }) => {
    selectedRows.map((establishment) => {
        onEstablishmentSelected(establishment);
    })
  };

  return (
    <DataTable
      columns={columns}
      data={data}
      selectableRows
      onSelectedRowsChange={establishmentHandleSelected}
      selectableRowsSingle
    />
  );
}

export default EstablishmentGrid;