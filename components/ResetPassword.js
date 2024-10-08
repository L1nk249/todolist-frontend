"use client";


import React, { useState } from "react";
import { useRouter } from "next/router";
import apiUrl from "../config";
import toastMessages from "../config/toastMessages";
import { Dialog, TextField, Box, Button, DialogTitle, DialogContent, DialogActions, InputAdornment, IconButton } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function ResetPassword({open,onClose}) {
 
  const router = useRouter();
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (router.isReady) {
      const { token } = router.query;
      setToken(token);
    }
  }, [router.isReady, router.query]);
  if (!router.isReady || !token) {
    // Render a loading state or return null until the router is ready
    return <p>Loading...</p>;
  }



const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [signInPassword, setSignInPassword] = useState("");

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

 

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (signInPassword !== confirmPassword) {
     toast.error(toastMessages.error.incorrectPassword)
      return;
    }

    fetch(`${apiUrl}/reset-password/${token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: signInPassword }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
      toast.success(toastMessages.success.passwordReset)
          .then(() => router.push("/")); // Rediriger vers la page de connexion
        } else {
         toast.error(toastMessages.error.errorOccured)
        }
    })
   
}
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