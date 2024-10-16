"use client";
import { Box, TextField, Button, Grid } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import { useState } from "react";
import { toast } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css';
import toastMessages from "../config/toastMessages";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";


export default function Ecole() {
  const [todos, setTodos] = useState([]); //liste des todos 
  const [todo, setTodo] = useState("")  //to do en cours d'écriture
  const dispatch=useDispatch()

  const handleAdd = () => {
    if (todo.trim() === '') {// .trim()  valide les saisies utilisateur, pour éviter que des espaces ne soient pris en compte comme des caractères valides. trim()==='' alors tt est vide.
      toast.error(toastMessages.error.emptyField)
      return;
    }
    
    if (todos.includes(todo)) {
      toast.warning(toastMessages.warning.existingTodo)
       
      return;}
      if (todos.length>29){
        toast.info(toastMessages.info.endOfTodos)
        
    
       } else {setTodos((prev) => [...prev, todo]);// si todo pas superieur à 9 alors rajoute les todos à la liste et réinitialise le champ de saisie.
        setTodo("");}
       }

  const handleDelete = (index) => {  // index représente la position d'un todo spécifique dans le tableau todos)
    setTodos((prev) => prev.filter((_, i) => i !== index)); // i!== index signifie que tu gardes tous les todos dont l'index (i) n'est pas égal à celui que tu veux supprimer/
    // _ = on ignore le premier parametre on ne prend que i en compte/
    toast.info(toastMessages.info.deletedTodo)
  };
  const handleSave=()=>{
    if (todos.length > 0) {
      // Enregistrer chaque todo dans le reducer
      todos.forEach((item) => {
        dispatch(addTodo(item)); // Ajouter le todo dans le reducer
      });
toast.success(toastMessages.success.todoSaved)
setTodos([]); // Réinitialiser la liste des todos après la sauvegarde
    }
  }


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
                      backgroundColor: "#CE5E5E", // Couleur de fond du bouton
                      color: "white", // Couleur du texte du bouton
                        }}
                      onClick={handleAdd}
                    >
                      Ajouter un ToDo
                    </Button>
                  </Grid>
                
                  <Grid item xs={2}sx={{ marginLeft: "150px" }}>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{  height: "60px",fontSize: {
                        xs: "0.7rem",  // Petits écrans (mobile)
                        sm: "1rem",  // Écrans moyens (tablettes)
                        md: "1.2rem",  // Écrans plus grands (ordinateurs)
                        lg: "1,5rem",  // Très grands écrans
                      },
                      backgroundColor: "#5C6696", // Couleur de fond du bouton
                      color: "white", // Couleur du texte du bouton
                        }}
                      onClick={handleSave}
                    >
                     Sauvegarder
                    </Button>
                  </Grid>



                
                  <Grid item xs={12}>
                <Box display="flex" justifyContent="space-between" flexDirection="row" width="100%">
                  {/* Colonne de gauche */}
                  <Box display="flex" flexDirection="column" alignItems="center" width="33%">
                    {todos.slice(0, 10).map((todo, index) => (
                      <Box
                        key={index}
                        sx={{
                          background: "#CE5E5E",
                          color: "white",
                          padding: "10px 20px",
                          borderRadius: "25px",
                          fontSize: "1.5rem",
                          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                          margin: "10px 0", // Espacement vertical entre les capsules
                          width: "80%", // Ajuste la largeur au contenu
                          textAlign: "center", // Centre le texte dans la capsule
                        }}
                      >
                        <NoteAltIcon fontSize="small" sx={{ color: "rgb(24,118,210)", marginRight: "10px" }} />
                        {todo}
                        <Button aria-label="delete" onClick={() => handleDelete(index)} sx={{ marginLeft: "20px", color: "white" }}>
                          <DeleteForeverIcon fontSize="large" />
                        </Button>
                      </Box>
                    ))}
                  </Box>

                  {/* Colonne du milieu */}
                  <Box display="flex" flexDirection="column" alignItems="center" width="33%">
                    {todos.slice(10, 20).map((todo, index) => (
                      <Box
                        key={index + 10}
                        sx={{
                          background: "#CE5E5E",
                          color: "white",
                          padding: "10px 20px",
                          borderRadius: "25px",
                          fontSize: "1.5rem",
                          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                          margin: "10px 0", // Espacement vertical entre les capsules
                          width: "80%", // Ajuste la largeur au contenu
                          textAlign: "center", // Centre le texte dans la capsule
                        }}
                      >
                        <NoteAltIcon fontSize="small" sx={{ color: "rgb(24,118,210)", marginRight: "10px" }} />
                        {todo}
                        <Button aria-label="delete" onClick={() => handleDelete(index + 10)} sx={{ marginLeft: "20px", color: "white" }}>
                          <DeleteForeverIcon fontSize="large" />
                        </Button>
                      </Box>
                    ))}
                  </Box>

                  {/* Colonne de droite */}
                  <Box display="flex" flexDirection="column" alignItems="center" width="33%">
                    {todos.slice(20, 30).map((todo, index) => (
                      <Box
                        key={index + 20}
                        sx={{
                          background: "#CE5E5E",
                          color: "white",
                          padding: "10px 20px",
                          borderRadius: "25px",
                          fontSize: "1.5rem",
                          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                          margin: "10px 0", // Espacement vertical entre les capsules
                          width: "80%", // Ajuste la largeur au contenu
                          textAlign: "center", // Centre le texte dans la capsule
                        }}
                      >
                        <NoteAltIcon fontSize="small" sx={{ color: "rgb(24,118,210)", marginRight: "10px" }} />
                        {todo}
                        <Button aria-label="delete" onClick={() => handleDelete(index + 20)} sx={{ marginLeft: "20px", color: "white" }}>
                          <DeleteForeverIcon fontSize="large" />
                        </Button>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
    </>
  );
  }
                  