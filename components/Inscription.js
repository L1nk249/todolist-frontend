"use client"; // Assurez-vous d'ajouter cette ligne si vous utilisez Next.js avec des composants côté client

import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useRouter } from 'next/navigation';

const Inscription = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'inscription ici
    // Exemple de redirection après inscription
    router.push("/"); // Redirection vers la page d'accueil après inscription
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
      }}
    >
      <Typography variant="h4" gutterBottom>
        S'inscrire
      </Typography>
      <TextField
        fullWidth
        label="Nom"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        sx={{ marginBottom: 2 }}
      />
      <TextField
        fullWidth
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        sx={{ marginBottom: 2 }}
      />
      <TextField
        fullWidth
        label="Mot de passe"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        sx={{ marginBottom: 2 }}
      />
      <Button type="submit" variant="contained" color="primary">
        Inscription
      </Button>
    </Box>
  );
};

export default Inscription;