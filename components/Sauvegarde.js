"use client";

import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { Box,Typography,Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { removeAllTodosByCategory, selectTodos } from '../features/todoSlice'; // Assurez-vous d'importer votre sélecteur de todos


export default function Sauvegarde() {
  const dispatch=useDispatch()
  // Utilisez useSelector pour obtenir les todos de l'état Redux
  const todosByCategory = useSelector(selectTodos); // Accès aux todos par catégorie
  const handleRemoveAllTodos = (category) => {
    dispatch(removeAllTodosByCategory(category));
  };
  const categories = Object.keys(todosByCategory).filter(category => category !== 'undefined'); // Obtenir les noms des catégories (clés de l'objet)
  const categoryColors={
    sport: "#902F66",
  courses: "#996868",
ecole: "#CE5E5E",
  bricolage:'#E67753',
  }
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
          flexDirection="row" 
          alignItems="center" 
          justifyContent="center" 
          flexGrow={1} // Permet à cette section d'occuper l'espace restant
          sx={{ padding: '50px 20px', color: 'white' }} 
        >
          {categories.length > 0 ? (
            categories.map((category) => (
              <Accordion key={category} sx={{ maxWidth: '800px', width: '100%', marginBottom: '20px',padding:"20px" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                  aria-controls={`panel-${category}-content`}
                  id={`panel-${category}-header`}
                  sx={{ backgroundColor:categoryColors[category] , color: 'white' }}
                >
                  <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: '1.8rem' }}>
                    {category}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: '#333', color: 'white' }}>
                  {todosByCategory[category].length > 0 ? (
                    todosByCategory[category].map((todo, index) => (
                      <Box
                        key={index}
                        sx={{
                         
                          background: categoryColors[category] ,
                          color: "white",
                          padding: "10px 20px",
                          borderRadius: "25px",
                          fontSize: "1.5rem",
                          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                          margin: "10px 0",
                          width: "80%",
                          textAlign: "center",
                          marginLeft: "auto", // Centre horizontalement
                          marginRight: "auto", // Centre horizontalement
                        }}
                      >
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
                    sx={{ backgroundColor: '#850D27', marginTop: '20px' }}
                    onClick={() => handleRemoveAllTodos(category)}
                  >
                    Supprimer tous les Todos
                  </Button>
                </AccordionDetails>
              </Accordion>
            ))
          ) : (
            <Box sx={{ color: 'white', fontSize: '8rem', textAlign: 'center' }}>
              Aucun Todo enregistré.
            </Box>
          )}
        </Box>
      </div>
    </>
  )}