"use client"; // Si tu utilises Next.js avec les composants côté client

import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';


export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const router = useRouter()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
  
    toast.info("Message envoyé avec succès!",{
      style: { 
          fontSize: '1.5rem',  // Double la taille de la police
          padding: '20px',   // Ajoute plus de padding pour rendre la bulle plus grande
          transform: 'scale(1)', 
          transformOrigin: 'center', // Garde le centre comme point de référence pour l'agrandissement
}}) 
setTimeout(() => {
  router.push("/"); // Redirection vers la page d'accueil
}, 3000); // 3 secondes pour permettre à l'utilisateur de voir le message
};

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: 4,
        backgroundColor: "#f5f5f5",
        zIndex: 1
      }}
    >
      <Typography variant="h4" gutterBottomsx={{ marginTop: "80px" }}>
        Me contacter
      </Typography>

      <Grid container spacing={2} sx={{ maxWidth: 600, margin: "auto" }}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="name"
            label="Nom"
            name="name"
            variant="outlined"
            value={form.name}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="email"
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            value={form.email}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="message"
            label="Message"
            name="message"
            multiline
            rows={4}
            variant="outlined"
            value={form.message}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
            fullWidth
          >
            Envoyer
            
          </Button>
        </Grid>
      </Grid>
      <ToastContainer
            position="top-center" // Positionnez le toast en haut et au centre
            autoClose={3000} // Ferme automatiquement après 3 secondes
            hideProgressBar={true} // Masque la barre de progression
            closeOnClick // Ferme le toast au clic
            pauseOnHover // Met en pause l'auto-fermeture au survol
            draggable // Permet le glissement
            pauseOnFocusLoss // Met en pause l'auto-fermeture si le toast perd le focus
            theme="light" // Choisissez un thème (light ou dark)
            />
    </Box>
  );
}