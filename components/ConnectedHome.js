"use client";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// Composant réutilisable pour une section avec image et titre
const Section = ({ imageSrc, altText, title }) => (
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
      textAlign: "center",
      marginBottom: "20px", // Espace entre les sections
    }}
  >
    <Box
      component="img"
      src={imageSrc}
      alt={altText}
      sx={{
        width: "100%", // Prend toute la largeur disponible
        maxWidth: "300px", // Taille maximale de l'image pour limiter la largeur
        height: "auto", // Maintient les proportions de l'image
        borderRadius: "15px", // Arrondi les coins de l'image
        marginBottom: "20px", // Espace entre l'image et le texte
      }}
    />
    <Typography
      variant="h5"
      sx={{
        fontSize: "1.5rem", // Taille du titre
        color: "#333", // Couleur du titre
        fontWeight: "bold", // Style gras pour le titre
      }}
    >
      {title}
    </Typography>
  </Box>
);

export default function ConnectedHome() {
  return (
    <>
      <div
        style={{
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          backgroundImage: "url(/backgroundBisConnected.jpeg)", // chemin relatif à l'image
          backgroundSize: "cover", // couvre toute la zone
          backgroundAttachment: "fixed",
          backgroundPosition: "center", // centre l'image
          minHeight: "100vh",
          width: "100%",
          zIndex: -1, // met l'image en arrière-plan
        }}
      >
        {/* Utilisation du composant réutilisable Section pour chaque contenu */}
        <Section imageSrc="/bricolage.jpeg" altText="Bricolage" title="Bricolage" />
        <Section imageSrc="/ecole.jpeg" altText="Ecole" title="Ecole" />
        <Section imageSrc="/sport.jpeg" altText="Sport" title="Sport" />
        <Section imageSrc="/courses.jpeg" altText="Liste de courses" title="Liste de courses" />
        <Section imageSrc="/historique.jpeg" altText="Todos sauvegardés" title="Todos sauvegardés" />
      </div>
    </>
  );
}