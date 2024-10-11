"use client";
import { Box, TextField, Button, Grid } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import { useState } from "react";
import { toast } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css';


export default function ConnectedHome() {
  
return (
        <>
   
         <div
      style={{
        height: '100vh', // hauteur de la fenêtre
        position: 'fixed', // Permet à l'image de rester fixe
        top: 0,
        left: 0,
        backgroundImage: 'url(/backgroundBisConnected.jpeg)', // chemin relatif à l'image
        backgroundSize: 'cover', // couvre toute la zone
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center', // centre l'image
        minHeight: '100vh',
        position: 'absolute', // permet de superposer avec le contenu
        width: '100%', // prend toute la largeur
        zIndex: -1, // met l'image en arrière-plan
      }}
    >
 
 <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          color: "#333", // Couleur du texte
                          padding: "10px 20px",
                          borderRadius: "25px", // Bordure arrondie pour effet capsule
                          fontSize: "1.5rem",
                          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Légère ombre pour un effet de relief
                          minWidth: "800px", // Largeur minimum pour la capsule
                          maxWidth: "800px", // Largeur maximum
                          width: "100%", // Ajuste la largeur au contenu
                          textAlign: "center"
                        }}
                      >
                      </Box>
                      <Box
    component="img"
    src="/chemin-de-ton-image.jpg" // Remplace par le chemin de ton image
    alt="Description de l'image"
    sx={{
      width: "100%", // Prend toute la largeur disponible
      maxWidth: "300px", // Taille maximale de l'image pour limiter la largeur
      height: "auto", // Maintient les proportions de l'image
      borderRadius: "15px", // Arrondi les coins de l'image
      marginBottom: "20px", // Espace entre l'image et le texte
    }}
  />

  {/* Titre en dessous de l'image */}
  <Typography
    variant="h5"
    sx={{
      fontSize: "1.5rem", // Taille du titre
      color: "#333", // Couleur du titre
      fontWeight: "bold", // Style gras pour le titre
    }}
  >
    Titre de ton cadre
  </Typography>
</Box>
    </div>
)

  }