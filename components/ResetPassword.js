"use client";


import React, { useState,useEffect } from "react";
import apiUrl from "../config";
import toastMessages from "../config/toastMessages";
import { Dialog, TextField, Box, Button, DialogTitle, DialogContent, DialogActions, InputAdornment, IconButton } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useRouter } from "next/router";

function ResetPassword({onClose}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [signInPassword, setSignInPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  

    const { token } = router.query; // Récupère le token de l'URL
    useEffect(() => {
      if (!router.isReady) return; // Vérifie que le router est prêt
      const { token } = router.query; // Récupère le token de l'URL
  
      if (token) {
        console.log("Token trouvé :", token);
        setOpen(true);
      } else {
        console.error("Token manquant.");
      }
    }, [router.isReady, router.query]);
  

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

 

  
  const handleSubmit = async (e) => {
    e.preventDefault();
const passwordRegex = /^(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?])(?=.*[0-9])[A-Za-z0-9!@#$%^&*()_+[\]{};':"\\|,.<>/?]{8,}$/
if (!passwordRegex.test(signInPasswordpassword)) {// Si le password ne correspond pas (test method) alors alert error 
  toast.warning(toastMessages.warning.invalidPassword)
  return;
}
    if (signInPassword !== confirmPassword) {
     toast.error(toastMessages.error.incorrectPassword)
      return;


    }

    try {
      const response = await fetch(`${apiUrl}/users/reset-password?token=${token}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: signInPassword }),
      });
      const data = await response.json();

      console.log("Données reçues du serveur :", data);

        if (data.result) {
      toast.success(toastMessages.success.passwordReset)
      setTimeout(() => { onClose()
        router.push("/");}, 1500)
    
        } else {
         toast.error(toastMessages.error.errorOccured)
        }}
        catch(error) {
          console.error("Erreur:", error);
        }
    };
  return (

    <Dialog open={open} onClose={onClose}>
     <Box sx={{ padding: 3, minWidth: 400 }}>
      <DialogTitle >Réinitialiser le mot de passe </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            autoFocus
            margin="dense"
            label="Nouveau mot de passe "
            type={showPassword ? "text" : "password"}
            fullWidth
            variant="outlined"
            value={signInPassword}
            onChange={(e) => setSignInPassword(e.target.value)}
            required
            sx={{ 
              mb: 2, // Marge en bas pour espacer les champs
              height: "5vh", 
              width: "15vw",
              '& .MuiInputBase-input': { fontSize: '1.5rem' }, // Taille de la police d'entrée
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleShowPassword}>
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        
          <TextField
            margin="dense"
            label="Confirmer le mot de passe"
            type={showConfirmPassword ? "text" : "password"}
            fullWidth
            variant="outlined"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            sx={{ height: "5vh", width: "15vw" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleShowConfirmPassword}>
                    {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
       ),
    }}
  />
</form>
</DialogContent>
<DialogActions>
<Button onClick={onClose} color="primary"
  sx={{
    '&:hover': {
      fontWeight: 'bold', // Mettre en gras au survol
    },
  }}
>
  Annuler
</Button>
<Button color="primary" onClick={handleSubmit}
  sx={{
    '&:hover': {
      fontWeight: 'bold', // Mettre en gras au survol
    },
  }}
>
  Réinitialiser le mot de passe
</Button>
</DialogActions>
</Box>
</Dialog>
);
}

export default ResetPassword;