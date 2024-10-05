"use client"; // Si tu utilises Next.js avec les composants côté client

import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import {  toast } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import toastMessages from "../../config/toastMessages";


export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });   // valeurs de useState initialisées à null)
  const router = useRouter()
  const handleChange = (e) => {
    const { name, value } = e.target;//e.target:: C'est l'élément qui a déclenché l'événement, ici un champ de formulaire
    // name et value destructuration: name correspond au nom de l'inoput et value à sa valeur )
    setForm((prev) => ({
      ...prev,
      [name]: value,  // [name]: value : Cela met à jour la propriété correspondante dans l'objet
    }));
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
  
    toast.info(toastMessages.info.sentMessage)
setTimeout(() => {
  router.push("/"); // Redirection vers la page d'accueil
}, 3000); // 3 secondes pour permettre à l'utilisateur de voir le message
};

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{    // SX: prop de MUI pour définir du style direcement sans utiliser du css.
        marginTop:"120px",
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
      <Typography variant="h4" gutterBottomsx sx={{ fontSize: '4rem',marginTop:"20px" }}>
        Me contacter
      </Typography>

      <Grid container spacing={2} sx={{ maxWidth: 600, margin: "auto",marginTop:"60px" }}>
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
    
    </Box>
  );
}