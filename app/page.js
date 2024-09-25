"use client";
import Image from "next/image";
import { Box, TextField, Button, Grid } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const handleAdd = () => {
    if (todo.trim() === '') return
    if (todos.includes(todo)) 
        return alert ("Todo déja renseigné");
    setTodos((prev) => [...prev, todo]);
    setTodo("");
  };
  const handleDelete = (index) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

return (
        <>
         <div
      style={{
        height: '100vh', // hauteur de la fenêtre
        backgroundImage: 'url(/background.jpeg)', // chemin relatif à l'image
        backgroundSize: 'cover', // couvre toute la zone
        backgroundPosition: 'center', // centre l'image
        position: 'absolute', // permet de superposer avec le contenu
        width: '100%', // prend toute la largeur
        zIndex: -1, // met l'image en arrière-plan
      }}
    >
      
    </div>
          <Grid container justifyContent="center" alignItems="center" spacing={2} style={{ padding: '20px 0' }}>
            <Grid item xs={12} sm={6} container justifyContent="center"> {/* Image will take full width on extra-small screens and half width on small screens */}
              <Image
                src="/toutdoux.jpeg"   
                alt="logo" 
                width={200} 
                height={100}  
                style={{
                      width: '150px',
                    borderRadius:"30%",
                  maxWidth: '100%', 
                  height: 'auto',  
                  objectFit: 'contain' ,
                  marginBottom:'80px'
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Box>
                <Grid container justifyContent="center" alignItems="center"spacing={2}>
                  <Grid item xs={3}>
                    <TextField
                      id="outlined-basic"
                      label="TODO"
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
                          <NoteAltIcon fontSize="large"sx={{ color: 'rgb(24,118,210)',marginRight: '20px' }}/>{todo}
                          <Button
                            aria-label="delete"
                            onClick={() => handleDelete(index)}
                            sx={{ marginLeft: '40px' }}
                        
                          >
                            <DeleteForeverIcon fontSize="large"sx={{ color: 'red'}}  />
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </Grid>
                </Grid>
              </Box> {/* Cette balise Box était manquante */}
            </Grid>
          </Grid>
        </>
      );
    }