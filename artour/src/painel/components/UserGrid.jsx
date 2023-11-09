import DataTable from "react-data-table-component";
import { useState } from "react";

function UserGrid({ usersList, onUserSelected }) {
  const columns = [
    {
      name: "#",
      selector: (row) => row.id,
    },
    {
      name: "Nome",
      selector: (row) => row.nome,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
  ];

  const data = usersList.map((user) => ({
    id: user.id,
    nome: user.name,
    email: user.email,
  }));

  const userHandleSelected = ({ selectedRows }) => {
    selectedRows.map((user) => {
      onUserSelected(user);
    })
  };

  return (
    <DataTable
      columns={columns}
      data={data}
      selectableRows
      onSelectedRowsChange={userHandleSelected}
      selectableRowsSingle
    />
  );
}

export default UserGrid;
