import { CssBaseline, Container } from "@mui/material";
import { useState } from "react";
import "./App.css";
import AddNoteForm from "./Components/AddNoteForm/AddNoteForm";
import Popup from "./Components/Popup/Popup";
import { createTheme } from "@mui/system";
import TableBodyMain from "./Components/Table/TableBody/TableBody";
import ButtonComponent from "./Components/ButtonComponent";

export default function App() {
 
  const [open, setOpen] = useState(false);
  const [recordForEdit, setRecordsForEdit] = useState(false);
  

  const handleOpenForm = () => {
    setOpen(true);
  };

  const theme = createTheme();
  return (
    <>
      <CssBaseline>
         <Container
          sx={{
            display: "grid",
            gap: 5,
            maxWidth: "90%",
            margin: "0 auto",
            marginTop: theme.spacing(4),
          }}
        >
        
          <ButtonComponent
            variant="contained"
            onClick={handleOpenForm}
            sx={{
              width: theme.spacing(16),
              margin: "0 auto",
            }}
            text="Add note"
          />
          <Popup open={open} setOpenPopup={setOpen}>
            <AddNoteForm  recordForEdit={recordForEdit} setOpen={setOpen}/>
          </Popup>
          
           <TableBodyMain
            main={true}
            setRecordsForEdit={setRecordsForEdit}
            setOpen={setOpen}
          
          />
          
          <TableBodyMain main={false}  /> 
        </Container> 
      </CssBaseline>
    </>
  );
}
