import DataTable from "react-data-table-component";

function CurationGrid({ commentsList, onCommentSelected }) {
  const columns = [
    {
      name: "#",
      selector: (row) => row.id,
    },
    {
      name: "Turista",
      selector: (row) => row.user,
    },
    {
      name: "Ponto Turístico",
      selector: (row) => row.establishment,
    },
    {
      name: "Título",
      selector: (row) => row.title,
    },
    {
      name: "Situação",
      selector: (row) => row.approved,
    },
  ];

  const data = commentsList.map((comment) => ({
    id: comment.id,
    user: comment.user,
    establishment: comment.establishment,
    title: comment.title,
    approved: comment.approved,
  }));

  const commentHandleSelected = ({ selectedRows }) => {
    selectedRows.map((comment) => {
      onCommentSelected(comment);
    });
  };

  return (
    <DataTable
      columns={columns}
      data={data}
      selectableRows
      onSelectedRowsChange={commentHandleSelected}
      selectableRowsSingle
    />
  );
}

export default CurationGrid;