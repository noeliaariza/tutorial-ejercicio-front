
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import styles from "./Author.module.css";
import { Author as AuthorModel } from "../../types/Author";
import CreateAuthor from "./components/CreateAuthor";
import { useState } from "react";
export const Author = () => {

  //manejar estado boton crear author
  const [openCreate, setOpenCreate] = useState(false);

  const createAuthor = () => {}

  const handleCloseCreate = () => {
     setOpenCreate(false);
  }

  const data = [
    {
      id: "1",
      name: "Test 1",
    },
    {
      id: "2",
      name: "Test 2",
    },
  ];

  return (
    <div className="container">
      <h1>Listado de Autores</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead
            sx={{
              "& th": {
                backgroundColor: "lightgrey",
              },
            }}
          >
            <TableRow>
              <TableCell>Identificador</TableCell>
              <TableCell>Nombre del autor</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((author: AuthorModel) => (
              <TableRow
                key={author.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {author.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {author.name}
                </TableCell>
                <TableCell>
                  <div className={styles.tableActions}>
                    <IconButton aria-label="update" color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" color="error">
                      <ClearIcon />
                    </IconButton>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="newButton">
        <Button variant="contained" onClick={() => setOpenCreate(true)}>Nuevo autor</Button>
      </div>
      {openCreate && (
        <CreateAuthor
        create={createAuthor}
        author={null}
        closeModal={handleCloseCreate}
      />
      )}
      
    </div>
    
  );
}
