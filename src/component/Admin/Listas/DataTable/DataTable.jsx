import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const handleDelete = (id) => {
  //Eliminar el item
  console.log("Eliminando el item con id: ", id);
}

const DataTable = ({ slug, columns, rows }) => {
  const actionColumn = {
    field: "acciones",
    headerName: "Acciones",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="z-10 flex gap-[15px]">
          <Link to={`${slug}/${params.row.id}`}>
            <EditIcon sx={{fontSize: 20}}/>
          </Link>
          <Link>
            <div onClick={() => handleDelete(params.row.id)}>
              <DeleteForeverIcon sx={{fontsize: 20}}/>
            </div>
          </Link>
        </div>
      );
    },
  };

  const updatedColumns = [...columns, actionColumn];

  return (
    <div>
      <DataGrid
        className="p-[20px] text-black mx-10"
        rows={rows}
        columns={updatedColumns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={5}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnResize
        disableColumnSelector
        disableDensitySelector
        sx={{
          boxShadow: 2,
          border: 2,
          color: "black.main",
          borderColor: "primary.light",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
        }}
        localeText={{
          toolbarDensity: "Size",
          toolbarExport: "Exportar",
          toolbarExportCSV: "Exportar a CSV",
          toolbarExportPrint: "Imprimir",
          toolbarQuickFilterLabel: "Buscar",
          toolbarQuickFilterPlaceholder: "Buscar",
        }}
      />
    </div>
  );
};

export default DataTable;
