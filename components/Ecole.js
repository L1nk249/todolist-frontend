"use client";
import { Box, TextField, Button, Grid } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import { useState } from "react";
import { toast } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css';
import toastMessages from "../config/toastMessages";

export default function Ecole() {
  const [todos, setTodos] = useState([]); //liste des todos 
  const [todo, setTodo] = useState("")  //to do en cours d'écriture


  const handleAdd = () => {
    if (todo.trim() === '') {// .trim()  valide les saisies utilisateur, pour éviter que des espaces ne soient pris en compte comme des caractères valides. trim()==='' alors tt est vide.
      toast.error(toastMessages.error.emptyField)
      return;
    }
    
    if (todos.includes(todo)) {
      toast.warning(toastMessages.warning.existingTodo)
       
      return;
    }
    setTodos((prev) => [...prev, todo]);// Ajoute le nouveau todo à la liste
    setTodo('');
  };

  const handleDelete = (index) => {  // index représente la position d'un todo spécifique dans le tableau todos)
    setTodos((prev) => prev.filter((_, i) => i !== index)); // i!== index signifie que tu gardes tous les todos dont l'index (i) n'est pas égal à celui que tu veux supprimer/
    // _ = on ignore le premier parametre on ne prend que i en compte/
    toast.info(toastMessages.info.deletedTodo)
  };
  
return (
        <>
   
         <div
      style={{
        height: '100vh', // hauteur de la fenêtre
        position: 'fixed', // Permet à l'image de rester fixe
        top: 0,
        left: 0,
        backgroundImage: 'url(/ecole.jpeg)', // chemin relatif à l'image
        backgroundSize: 'cover', // couvre toute la zone
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center', // centre l'image
        minHeight: '100vh',
        position: 'absolute', // permet de superposer avec le contenu
        width: '100%', // prend toute la largeur
        zIndex: -1, // met l'image en arrière-plan
      }}
    >
      
    </div>

    
          <Grid container justifyContent="center" alignItems="center" spacing={2} style={{ padding: '20px 0',marginTop:'165px' }}>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <Grid container justifyContent="center" alignItems="center"spacing={2}>
                  <Grid item xs={2}>
                    <TextField
                      id="outlined-basic"
                      placeholder='Ecrivez votre Todo'
                      variant="outlined"
                      fullWidth
                      sx={{ 
                        '& .MuiInputBase-input': { fontSize: '1.5rem' }, // Taille de la police
                        '& .MuiFormLabel-root': { fontSize: '1.25rem' }, // Taille de l'étiquette
                        '& .MuiInputBase-root': {
                          backgroundColor: "white", 
                           height: "56px"
                      }}}
                      value={todo}
                      onChange={(e) => setTodo(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{  height: "56px",fontSize: {
                        xs: "0.7rem",  // Petits écrans (mobile)
                        sm: "1rem",  // Écrans moyens (tablettes)
                        md: "1.2rem",  // Écrans plus grands (ordinateurs)
                        lg: "1,5rem",  // Très grands écrans
                      },
                        }}
                      onClick={handleAdd}
                    >
                      Ajouter un ToDo
                    </Button>
                  </Grid>
                

                  <Grid item xs={12}>
                    <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0 }}>
                      {todos.map((todo, index) => (
                          <li key={index} style={{ display: 'flex', alignItems: 'center', fontSize: '2rem', margin: '10px 0', color: 'black' }}> 
                           <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          background: "linear-gradient(to right top, #d1c26b, #d6c370, #dac575, #dec67a, #e2c87f, #e5c67d, #e8c37b, #ebc179, #efba71, #f3b269, #f7aa64, #fba15f)",
                          color: "#333", // Couleur du texte
                          padding: "10px 20px",
                          borderRadius: "25px", // Bordure arrondie pour effet capsule
                          fontSize: "1.5rem",
                          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Légère ombre pour un effet de relief
                          minWidth: "800px", // Largeur minimum pour la capsule
                          maxWidth: "800px", // Largeur maximum
                          width: "100%", // Ajuste la largeur au contenu
                        }}
                      >
                        <NoteAltIcon fontSize="small" sx={{ color: "rgb(24,118,210)", marginRight: "10px" }} />
                        {todo}
                        <Button aria-label="delete" onClick={() => handleDelete(index)} sx={{ marginLeft: "20px" }}>
                          <DeleteForeverIcon fontSize="large" sx={{ color: "red" }} />
                        </Button>
                      </Box>
                      
                        </li>
                      ))}
                    </ul>
                  </Grid>
                </Grid>
              </Box> 
            </Grid>
          
        </>
      );
  }