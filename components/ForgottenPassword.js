"use client"; // Assurez-vous d'ajouter cette ligne si vous utilisez Next.js avec des composants côté client

import { Box, Button, TextField,Dialog,DialogTitle ,DialogContent,DialogActions } from "@mui/material";

import { ToastContainer, toast } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css';




    function ForgottenPassword({ open, onClose }) {
       
      const handleSendResetLink = () => {
        // Logique pour envoyer un email de réinitialisation
        onClose(); // Ferme la modal après l'envoi du lien
      };
          return (
            <Dialog open={open} onClose={onClose}>
            <DialogTitle>Réinitialiser le mot de passe</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                label="Email"
                type="email"
                fullWidth
                variant="outlined"
                required
                sx={{ '& .MuiInputBase-input': { fontSize: '1.5rem' } }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={onClose} color="primary">
                Annuler
              </Button>
              <Button onClick={handleSendResetLink} color="primary">
                Envoyer
              </Button>
            </DialogActions>
          </Dialog>
        );
      };
      
      
export default ForgottenPassword