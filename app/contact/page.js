"use client"; // Si tu utilises Next.js avec les composants côté client

import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'envoi du formulaire ici (API, Email service...)
    console.log("Formulaire envoyé:", form);
    alert("Message envoyé avec succès!");
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
        backgroundColor: "#f5f5f5"
      }}
    >
      <Typography variant="h4" gutterBottom>
        Contactez-nous
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
    </Box>
  );
}