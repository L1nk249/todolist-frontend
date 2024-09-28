"use client"; // Assurez-vous d'ajouter cette ligne si vous utilisez Next.js avec des composants côté client

import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css';

const Inscription = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const router = useRouter();
  const toggleShowPassword = () => {
    // Pour afficher où non le mot de passe
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    // Pour afficher ou non la confirmation de  mot de passe
    setShowConfirmPassword(!showConfirmPassword);
  };
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // regex pour valider le mail 
      
  // Regex pour valider le mot de passe
  const passwordRegex = /^(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?])(?=.*[0-9])[A-Za-z0-9!@#$%^&*()_+[\]{};':"\\|,.<>/?]{8,}$/

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'inscription ici
    // Exemple de redirection après inscription
  if (!emailRegex.test(email)) { // Si le mail ne correspond pas (test method) alors alert error 
    
      toast.warning("Ce mail n'est pas valide", {
        style: { 
            fontSize: '2rem',  // Double la taille de la police
            padding: '20px',   // Ajoute plus de padding pour rendre la bulle plus grande
            transform: 'scale(1)', 
            transformOrigin: 'center', // Garde le centre comme point de référence pour l'agrandissement
          },
        position: "center",
        autoClose: 2000,
        hideProgressBar: true,
      });
      return;
    }
  
  if (!passwordRegex.test(password)) {// Si le password ne correspond pas (test method) alors alert error 
      toast.warning("Mot de passe invalide ", {
        style: { 
            fontSize: '2rem',  // Double la taille de la police
            padding: '20px',   // Ajoute plus de padding pour rendre la bulle plus grande
            transform: 'scale(1)', 
            transformOrigin: 'center', // Garde le centre comme point de référence pour l'agrandissement
          },
        position: "center",
        autoClose: 2000,
        hideProgressBar: true,
      });
      return;
    }

  if (password !== confirmPassword) { // si password n'est pas égal à confirm password alors error.
      toast.warning("Les mots de passe ne correspondent pas ", {
        style: { 
            fontSize: '2rem',  // Double la taille de la police
            padding: '20px',   // Ajoute plus de padding pour rendre la bulle plus grande
            transform: 'scale(1)', 
            transformOrigin: 'center', // Garde le centre comme point de référence pour l'agrandissement
          },
        position: "center",
        autoClose: 2000,
        hideProgressBar: true,
      });
      return;
    }
    toast.success("Inscription réussie !", {
      style: { 
        fontSize: '2rem',  // Double la taille de la police
        padding: '20px',   // Ajoute plus de padding pour rendre la bulle plus grande
        transform: 'scale(1)', 
        transformOrigin: 'center', // Garde le centre comme point de référence pour l'agrandissement
      },
    position: "center",
    autoClose: 2000,
    hideProgressBar: true,
  });
    
    setTimeout(() => {
      router.push("/"); // Redirection vers la page d'accueil après inscription
    }, 2000); // Ajout d'un délai avant la redirection pour que l'utilisateur voit le toast
  };


  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: 4,
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography variant="h4" gutterBottom sx={{
        marginBottom:"50px"
      }}>
        S'inscrire
      </Typography>
      <TextField
        fullWidth
        label="Nom"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        sx={{ marginBottom: 2,height:"05vh", width:"15vW " }}
      />
      <TextField
        fullWidth
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        sx={{ marginBottom: 2,height:"05vh", width:"15vW " }}
      />
      <TextField
        fullWidth
        label="Mot de passe"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        sx={{ marginBottom: 2,height:"05vh", width:"15vW " }}
      />
      <TextField
        fullWidth
        label="Confirmation du mot de passe"
        type="password"
        variant="outlined"
        value={confirmPassword}
        onChange={(e) => setconfirmPassword(e.target.value)}
        required
        sx={{ marginBottom: 2,height:"05vh", width:"15vW " }}
      />
      <Button type="submit" variant="contained" color="primary" sx={{height:"05vh", width:"15vW ",marginTop:"20px"}}>
        Inscription
      </Button>
      <ToastContainer />
    </Box>
  );
};

export default Inscription;