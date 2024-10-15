"use client";

import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { Box,Typography } from '@mui/material';
import { removeAllTodosByCategory, selectTodos } from '../features/todoSlice'; // Assurez-vous d'importer votre sélecteur de todos


export default function Sauvegarde() {
  // Utilisez useSelector pour obtenir les todos de l'état Redux
  const todos = useSelector(selectTodos); // Assurez-vous que vous avez un sélecteur qui récupère les todos
  const categories = Array.from(new Set(todos.map(todo => todo.category))); // Obtenir les catégories uniques

  return (
    <>
      <div
        style={{
          height: '100vh',
          top: 0,
          left: 0,
          backgroundImage: 'url(/todos.jpeg)',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          minHeight: '100vh',
          width: '100%',
   
        }}
      >
      </div>

      {/* Afficher les todos */}
      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        justifyContent="center" 
        sx={{  position: 'relative', padding: '200px', color: 'white' }} 
      >
           {categories.length > 0 ? (
          categories.map((category) => (
            <Box key={category} sx={{ marginBottom: "20px" }}>
              <Typography variant="h4" sx={{ color: 'white', textAlign: 'center' }}>
                {category}
              </Typography>
              {todos.filter(todo => todo.category === category).map((todo, index) => (
                <Box key={index} sx={{
                  background: "#E67753",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "25px",
                  fontSize: "1.5rem",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  margin: "10px 0",
                  width: "80%",
                  textAlign: "center",
                }}>
                  {todo.text}
                </Box>
              ))}
            </Box>
          ))
        ) : (
          <Box sx={{ color: 'white', fontSize: '3rem' }}>
            Aucun Todo enregistrée.
          </Box>
        )}
      </Box>
    </>
  );
}
