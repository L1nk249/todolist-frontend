"use client"; // Assurez-vous d'ajouter cette ligne si vous utilisez Next.js avec des composants côté client

import { useState } from "react";
import { useRouter } from 'next/navigation';
import { Box,Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button,IconButton,InputAdornment} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import toastMessages from "../config/toastMessages";
import ForgottenPassword from '../components/ForgottenPassword'
import { useDispatch } from 'react-redux';
import { signIn } from "../features/userSlice";
import apiUrl from "../config";


const Connexion = ({ open, onClose,token }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showForgottenPassword, setShowForgottenPassword] = useState(false);  // Utilisation de useState
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const toggleShowPassword = () => {
    // Pour afficher où non le mot de passe
    setShowPassword((prev) => !prev);
  };




  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'authentification ici
   
    if (!email || !password) {

      toast.error(toastMessages.error.missingField)
      return;
    }

fetch(`${apiUrl}/users/signin`,{
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email: email, password: password }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    if (data.result) {
      //Si la connexion est réussie (data.result est true), l'utilisateur est connecté, et ses informations sont enregistrées dans Redux (dispatch(signIn)).
      dispatch(
        signIn({
          email,
          token: data.token,
        })
      );
      setEmail("");
      setPassword("");
      onClose()
      router.push("/");//on reinitialise les etats et on redirige sur Home
    } else {
      toast.error (toastMessages.error.incorrectField)
    
      }
      
    })
    .catch((error) => {
      console.error("Erreur:", error);
    });
};

    const handleForgotPasswordClick = () => {
      setShowForgottenPassword(true); // Affiche le composant ForgottenPassword
    };
  
    const handleCloseForgottenPassword = () => {
      setShowForgottenPassword(false); // Ferme le composant ForgottenPassword
    };



    return (
      <>
      <Dialog open={open} onClose={onClose}>
       <Box sx={{ padding: 3, minWidth: 400 }}>
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
                height: "05vh", 
                width: "15vw",
                '& .MuiInputBase-input': { fontSize: '1.5rem' }, // Taille de la police d'entrée
              }}
            />
            <TextField
              margin="dense"
              label="Mot de passe"
              type={showPassword ? "text" : "password"}
              fullWidth
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
             
          sx={{ marginBottom: 2, height: "05vh", width: "15vW" }}
          InputProps={{
            endAdornment: (   //propriété utilisée dans Material-UI (MUI) pour ajouter un élément visuel ou interactif à la fin d'un champ de saisie (Input) inputadornment:conteneur
              <InputAdornment position="end">  
                <IconButton onClick={toggleShowPassword}>
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
            
          <Button onClick={handleForgotPasswordClick} color="primary"
          sx={{
            '&:hover': {
              fontWeight: 'bold', // Mettre en gras au survol
            },
          }}
        >
           Mot de passe oublié ?
          
          </Button>
        
          </form>
        </DialogContent>
        <DialogActions>
         

          <Button onClick={()=>{onClose();router.push('/')}} color="primary"
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
            Se connecter
          </Button> 
        </DialogActions>
        </Box>
      </Dialog>
      {showForgottenPassword && (
  <ForgottenPassword 
    open={showForgottenPassword} 
    onClose={handleCloseForgottenPassword} 
  />
)}
      </>
    );
  };
  

export default Connexion;