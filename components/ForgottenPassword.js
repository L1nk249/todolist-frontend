"use client"; // Assurez-vous d'ajouter cette ligne si vous utilisez Next.js avec des composants côté client

import {  Button, TextField,Dialog,DialogTitle ,DialogContent,DialogActions } from "@mui/material";
import { ToastContainer, toast } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css';




    function ForgottenPassword({ open, onClose }) {
       
      const handleSendResetLink = () => {
        // Logique pour envoyer un email de réinitialisation
        toast.success("Mot de passe réinitialisé avec succès !", {
          style: { 
            fontSize: '2rem',  // Double la taille de la police
            padding: '20px',   // Ajoute plus de padding pour rendre la bulle plus grande
            transform: 'scale(1)', 
            transformOrigin: 'center', // Garde le centre comme point de référence pour l'agrandissement
          },
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: true,
      });

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
          <ToastContainer/>
       </>
        );
      };
      
      
export default ForgottenPassword