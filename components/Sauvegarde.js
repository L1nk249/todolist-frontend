"use client";

import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { Box,Typography,Button } from '@mui/material';
import { removeAllTodosByCategory, selectTodos } from '../features/todoSlice'; // Assurez-vous d'importer votre sélecteur de todos
//

export default function Sauvegarde() {
  const dispatch=useDispatch()
  // Utilisez useSelector pour obtenir les todos de l'état Redux
  const todosByCategory = useSelector(selectTodos); // Accès aux todos par catégorie
  const handleRemoveAllTodos = (category) => {
    dispatch(removeAllTodosByCategory(category));
  };
  const categories = Object.keys(todosByCategory); // Obtenir les noms des catégories (clés de l'objet)
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundImage: 'url(/todos.jpeg)',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
        }}
      >
        {/* Contenu principal entre le header et le footer */}
        <Box 
          display="flex" 
          flexDirection="column" 
          alignItems="center" 
          justifyContent="center" 
          flexGrow={1} // Permet à cette section d'occuper l'espace restant
          sx={{ padding: '50px 20px', color: 'white' }} 
        >
          {categories.length > 0 ? (
            categories.map((category) => (
              <Box key={category} sx={{ marginBottom: "40px", width: "100%", maxWidth: "800px" }}>
                <Typography variant="h4" sx={{ color: 'white', textAlign: 'center', marginBottom: '20px' }}>
                  {category}
                </Typography>
                {todosByCategory[category].length > 0 ? (
                  todosByCategory[category].map((todo, index) => (
                    <Box key={index} sx={{
                      background: "#E67753",
                      color: "white",
                      padding: "10px 20px",
                      borderRadius: "25px",
                      fontSize: "1.5rem",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      margin: "10px 0",
                      width: "100%",
                      textAlign: "center",
                    }}>
                      {todo}
                    </Box>
                  ))
                ) : (
                  <Typography variant="body1" sx={{ color: 'white', textAlign: 'center' }}>
                    Aucun todo dans cette catégorie.
                  </Typography>
                )}
                <Button 
                  variant="contained" 
                  color="secondary" 
                  sx={{ marginTop: '20px' }}
                  onClick={() => handleRemoveAllTodos(category)}
                >
                  Supprimer tous les Todos de {category}
                </Button>
              </Box>
            ))
          ) : (
            <Box sx={{ color: 'white', fontSize: '3rem', textAlign: 'center' }}>
              Aucun Todo enregistré.
            </Box>
          )}
        </Box>
        
        {/* Footer (si nécessaire) */}
        <Box sx={{ padding: '20px', textAlign: 'center', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          Footer ici (si besoin)
        </Box>
      </div>
    </>
  );
}