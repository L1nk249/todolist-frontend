"use client"; // Assurez-vous d'ajouter cette ligne si vous utilisez Next.js avec des composants côté client

import { useState } from "react";
import { useRouter } from 'next/navigation';
import { Box,Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button} from '@mui/material';
import ForgottenPassword from '../components/ForgottenPassword'
import toastMessages from "../config/toastMessages";


const Connexion = ({ open, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showForgottenPassword,  setShowForgottenPassword] = useState(false)

  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'authentification ici
   
    if (!email || !password) {

      toast.error(toastMessages.error.missingField)
      return;
    }
  };

  
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
          email: email,
          token: data.token,
        })
      );
      setEmail("");
      setPassword("");
      router.push("/Home");//on reinitialise les etats et on redirige sur Home
    } else {
      toast.error (toastMessages.error.incorrectField)
    
      }
      
    })
    .catch((error) => {
      toast.error("Erreur serveur, réessayez plus tard.");
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
        
          <Button type="submit" color="primary" onClick={handleSubmit}

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
      <ForgottenPassword open={showForgottenPassword} onClose={handleCloseForgottenPassword} /> // ouvre et referme la modal forgotenpassword
      </>
    );
  };
  

export default Connexion;