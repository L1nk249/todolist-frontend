"use client";
import { Box, TextField, Button, Grid } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css';
import Connexion from '../components/Connexion'

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [openModal, setOpenModal] = useState(false); // Gérer la visibilité de la modale (Connexion)

  const handleAdd = () => {
    if (todo.trim() === '') {
      toast.error("Le ToDo ne peut pas être vide!", {
        style: { 
            fontSize: '2rem',  // Double la taille de la police
            padding: '20px',   // Ajoute plus de padding pour rendre la bulle plus grande
            transform: 'scale(1)', 
            transformOrigin: 'center', // Garde le centre comme point de référence pour l'agrandissement
          },
        position: "center",
        autoClose: 2000,
        hideProgressBar: true,
      });
      return;
    }
    
    if (todos.includes(todo)) {
      toast.warning("Ce ToDo existe déjà!", {
        style: { 
            fontSize: '2rem',  // Double la taille de la police
            padding: '20px',   // Ajoute plus de padding pour rendre la bulle plus grande
            transform: 'scale(1)', 
            transformOrigin: 'center', // Garde le centre comme point de référence pour l'agrandissement
          },
        position: "center",
        autoClose: 2000,
        hideProgressBar: true,
      });
      return;
    }

   if (todos.length>9){
    toast.info("Limite atteinte, connectez vous pour poursuivre",{
        style: { 
            fontSize: '2rem',  // Double la taille de la police
            padding: '20px',   // Ajoute plus de padding pour rendre la bulle plus grande
            transform: 'scale(1)', 
            transformOrigin: 'center', // Garde le centre comme point de référence pour l'agrandissement
          },
position: "center",
        autoClose: 2000,
    })
    setTimeout(() => {
      setOpenModal(true)
    }, 2000);
   } else {setTodos((prev) => [...prev, todo]);
    setTodo("");}

  };

  const handleDelete = (index) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
    toast.info("Todo supprimé.", {
        position: "center",
        autoClose: 2000,})
  };
  const closeModal = () => {
    setOpenModal(false); // Function to close the modal
  };
return (
        <>
        <Connexion open={openModal} onClose={closeModal} />
    <ToastContainer />

         <div
      style={{
        height: '100vh', // hauteur de la fenêtre
        position: 'fixed', // Permet à l'image de rester fixe
        top: 0,
        left: 0,
        backgroundImage: 'url(/background.jpeg)', // chemin relatif à l'image
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




    
          <Grid container justifyContent="center" alignItems="center" spacing={2} style={{ padding: '20px 0',marginTop:'175px' }}>
           
            
            </Grid>
            <Grid item xs={12}>
              <Box>
                <Grid container justifyContent="center" alignItems="center"spacing={2}>
                  <Grid item xs={3}>
                    <TextField
                      id="outlined-basic"
                      placeholder='Ecrivez votre Todo'
                      variant="outlined"
                      fullWidth
                      sx={{ 
                        '& .MuiInputBase-input': { fontSize: '1.5rem' }, // Taille de la police
                        '& .MuiFormLabel-root': { fontSize: '1.25rem' }, // Taille de l'étiquette
                        '& .MuiInputBase-root': {
                          backgroundColor: "white", // Appliquer la même couleur à l'arrière-plan de l'entrée
                      }}}
                      value={todo}
                      onChange={(e) => setTodo(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{ height: "100%",fontSize: "1.5rem"  }}
                      onClick={handleAdd}
                    >
                      Ajouter un ToDo
                    </Button>
                  </Grid>
                

                  <Grid item xs={12}>
                    <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0 }}>
                      {todos.map((todo, index) => (
                          <li key={index} style={{ display: 'flex', alignItems: 'center', fontSize: '2rem', margin: '10px 0', color: 'blaxk' }}> 
                           <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          backgroundColor: "#f0f0f0", // Fond gris clair
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