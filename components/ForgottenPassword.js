"use client"; // Assurez-vous d'ajouter cette ligne si vous utilisez Next.js avec des composants côté client

import {  Button, TextField,Dialog,DialogTitle ,DialogContent,DialogActions } from "@mui/material";
import { toast } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css';
import toastMessages from "../config/toastMessages";
import apiUrl from "../config";
import { useState } from "react";


    function ForgottenPassword({ open, onClose }) {
      const [email, setEmail] = useState("");

      const handleSendResetLink = () => {
        if (!email) {
          toast.error(toastMessages.error.missingField); // Alerte si aucun email n'est saisi

          return;}

        fetch(`${apiUrl}/users/forgot-password`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email}), // Envoyer l'email pour réinitialiser le mot de passe.
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (data.result) {
             toast.success (toastMessages.success.emailSent);
              onClose(); // Fermer la modal après l'envoi de l'email.
            } else {
              toast.error (toastMessages.error.errorOccured);
              };
            })
          .catch((error) => {
      console.log("error",error)
      toast.error(toastMessages.error.errorOccured);
            });
          
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
                onChange={(e) => setEmail(e.target.value)}
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
      
      export default ForgottenPassword;
