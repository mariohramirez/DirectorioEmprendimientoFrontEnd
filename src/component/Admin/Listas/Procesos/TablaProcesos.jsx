import React from "react";

import { esES } from "@mui/x-data-grid/locales";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { ThemeProvider, createTheme, alpha } from "@mui/material";
import { useDispatch } from "react-redux";
import { deletUser } from "../../../State/Authentication/Action";
import { deleteNovedad } from "../../../State/Novedades/Action";

const theme = createTheme(
  {
    palette: {
      primary: { main: "#026937" },
      secondary: { main: "#8DC63F" },
    },
    components: {
      MuiDataGrid: {
        styleOverrides: {
          root: {
            "& .MuiDataGrid-columnHeader": {
              backgroundColor: "#026937", // Cambia el color de fondo del header
            },
            "& .MuiSvgIcon-root.MuiDataGrid-sortIcon": {
              color: "white", // Cambia el color de los iconos
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: "bold", // Pone en negrita los elementos del header
              color: "white", // Cambia el color de la letra del header
            },
            "& .MuiDataGrid-columnHeaderWrapper": {
              color: "white", // Cambia el color de la letra del header
            },
          },
        },
      },
    },
  },
  esES // x-data-grid translations
);

const ODD_OPACITY = 0.2;



const TablaProcesos = ({ slug, columns, rows }) => {

  const dispatch = useDispatch();

  const jwt = localStorage.getItem("jwt");

  const [open, setOpen] = React.useState(false);
  const handleDelete = (id) => {
    //Eliminar el item
    switch (slug) {
      case "emprendimientos":
        //dispatch(deleteEmprendimiento(id));
        break;
      case "usuario":
        dispatch(deletUser(jwt, { userId: id }));
        window.location.reload();
        break;
      case "novedad":
        dispatch(deleteNovedad(jwt, { novedadId: id }));
      default:
        break;
    }
    console.log("Eliminando el item con id: ", id);
    setOpen(true);
  };

  const actionColumn = {
    field: "acciones",
    headerName: "Acciones",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="z-10 flex gap-[15px]">
          <Link to={`${slug}/${params.row.id}`}>
            <EditIcon sx={{ fontSize: 20 }} />
          </Link>
        </div>
      );
    },
  };

  const updatedColumns = [...columns, actionColumn];

  return (
    <ThemeProvider theme={theme}>
      <div>
        <DataGrid
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
          }
          className="p-[20px] text-black mx-10"
          rows={rows}
          columns={updatedColumns}
          headerClassName="bg-[#242B2E] text-white font-bold"
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
          disableRowSelectionOnClick
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          disableMultipleRowSelection
          sx={{
            boxShadow: 2,
            border: 2,
            color: "black.main",
            borderColor: "primary.light",
            "& .MuiDataGrid-cell:hover": {
              color: "primary.main",
            },
            "& .even": {
              backgroundColor: theme.palette.grey[400],
              "&:hover": {
                backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
                "@media (hover: none)": {
                  backgroundColor: "transparent",
                },
              },
            },
            "& .odd": {
              "&:hover": {
                backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
                "@media (hover: none)": {
                  backgroundColor: "transparent",
                },
              },
            },
            "& .Mui-selected": {
              backgroundColor: alpha(
                theme.palette.primary.main,
                ODD_OPACITY + theme.palette.action.selectedOpacity
              ),
              "&:hover": {
                backgroundColor: alpha(
                  theme.palette.primary.main,
                  ODD_OPACITY +
                    theme.palette.action.selectedOpacity +
                    theme.palette.action.hoverOpacity
                ),
                "@media (hover: none)": {
                  backgroundColor: alpha(
                    theme.palette.primary.main,
                    ODD_OPACITY + theme.palette.action.selectedOpacity
                  ),
                },
              },
            },
          }}
        />
      </div>
    </ThemeProvider>
  );
};

export default TablaProcesos;
