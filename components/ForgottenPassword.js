"use client"; // Assurez-vous d'ajouter cette ligne si vous utilisez Next.js avec des composants côté client

import {  Button, TextField,Dialog,DialogTitle ,DialogContent,DialogActions } from "@mui/material";
import { toast } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css';
import toastMessages from "../config/toastMessages";



    function ForgottenPassword({ open, onClose }) {
       
      const handleSendResetLink = () => {
        // Logique pour envoyer un email de réinitialisation
        toast.success(toastMessages.success.passwordReset );

        onClose(); // Ferme la modal après l'envoi du lien
      };
          return (
            <>
          
            <Dialog open={open} onClose={onClose

            }maxWidth="sm" // Largeur maximale du Dialog
            fullWidth // Assure que le dialog prend toute la largeur disponible
            sx={{
              "& .MuiDialog-paper": {
                padding: 4, // Ajoute du padding au Dialog pour un rendu plus espacé
              }
            }}
          >
            <DialogTitle>Réinitialiser le mot de passe</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                  placeholder="Rentrez votre adresse mail"
                margin="dense"
                type="email"
                height="50px"
                width="50px"
              
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
        
       </>
        );
      };
      
      
export default ForgottenPassword