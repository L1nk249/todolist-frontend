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

  const handleForgotPasswordClick = () => {
    router.push("/")
  }
  
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle >Connexion</DialogTitle>
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
              sx={{ 
                mb: 2, // Marge en bas pour espacer les champs
                '& .MuiInputBase-input': { fontSize: '1.5rem' }, // Taille de la police d'entrée
              }}
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
              sx={{ 
                mb: 2,
                '& .MuiInputBase-input': { fontSize: '1.5rem' },
              }}
            />
            
          <Button onClick={handleForgotPasswordClick} color="primary">
           Mot de passe oublié
          </Button>
         
          </form>
        </DialogContent>
        <DialogActions>
         

          <Button onClick={()=>{onClose();router.push('/')}} color="primary">
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