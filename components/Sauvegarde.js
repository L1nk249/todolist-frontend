"use client";

import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { selectTodos } from '../features/todoSlice'; // Assurez-vous d'importer votre sélecteur de todos

export default function Sauvegarde() {
  // Utilisez useSelector pour obtenir les todos de l'état Redux
  const todos = useSelector(selectTodos); // Assurez-vous que vous avez un sélecteur qui récupère les todos

  return (
    <>
      <div
        style={{
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          backgroundImage: 'url(/todos.jpeg)',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          minHeight: '100vh',
          position: 'absolute',
          width: '100%',
          zIndex: -1,
        }}
      >
      </div>

      {/* Afficher les todos */}
      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        justifyContent="center" 
        sx={{ zIndex: 1, position: 'relative', padding: '20px', color: 'white' }} 
      >
        {todos.length > 0 ? (
          todos.map((todo, index) => (
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
              {todo}
            </Box>
          ))
        ) : (
          <Box sx={{ color: 'white', fontSize: '1.5rem' }}>
            Aucune Todo enregistrée.
          </Box>
        )}
      </Box>
    </>
  );
}
