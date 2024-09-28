"use client"; // Assurez-vous d'ajouter cette ligne si vous utilisez Next.js avec des composants côté client

import { useState } from "react";
import { useRouter } from 'next/navigation';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Typography } from '@mui/material';


const Connexion = ({ open, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'authentification ici
    // Exemple de redirection après connexion
    router.push("/"); // Redirection vers la page d'accueil après connexion
  };

  

  
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Connexion</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus
              margin="dense"
              label="Email"
              type="email"
              fullWidth
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              margin="dense"
              label="Mot de passe"
              type="password"
              fullWidth
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Typography variant="body2" sx={{ marginTop: 2 }}>
              Mot de passe oublié ?
            </Typography>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Annuler
          </Button>
          <Button type="submit" color="primary" onClick={handleSubmit}>
            Se connecter
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  

export default Connexion;