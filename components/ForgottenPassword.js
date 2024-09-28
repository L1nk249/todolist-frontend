"use client"; // Assurez-vous d'ajouter cette ligne si vous utilisez Next.js avec des composants côté client

import { Box, Button, TextField, Typography,IconButton,InputAdornment } from "@mui/material";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css';




    function ForgottenPassword({ showModal, handleClose }) {
       
        const [signInMail, setSignInMail] = useState("");
          const [signInPassword, setSignInPassword] = useState("");
          const [confirmPassword, setConfirmPassword] = useState("");
          const [showPassword, setShowPassword] = useState(false);
          const [showConfirmPassword, setShowConfirmPassword] = useState(false); // état crée pour confirmer le password
        
          const toggleShowPassword = () => {
            // Pour afficher où non le mot de passe
            setShowPassword(!showPassword);
          };
        
        
          const toggleShowConfirmPassword = () => {// montre ou cache le mot de passe lors de la saisie
            setShowConfirmPassword(!showConfirmPassword);
          };
        
          const handleSubmit = (e) => {
            e.preventDefault();// éviter le comportement par défaut de js au niveau du formulaire.
            handleClose();
            
            // Regex pour valider le mot de passe
            const passwordRegex = /^(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?])(?=.*[0-9])[A-Za-z0-9!@#$%^&*()_+[\]{};':"\\|,.<>/?]{8,}$/
        
            
            if (!passwordRegex.test(signInPassword)) {// Si le password ne correspond pas (test method) alors alert error 
              Swal.fire({
                title: 'Attention!',
                text: 'Le mot de passe doit contenir au moins 8 caractères, inclure au moins un chiffre (1-9) et un caractère spécial.',
                icon: 'warning',
                timer: 50000,
                confirmButtonText: 'Valider'})
             
              return;
            }
        
            if (signInPassword !== confirmPassword) { // si password n'est pas égal à confirm password alors error.
              Swal.fire({
                title: 'Erreur!',
                text: 'Les mots de passe ne correspondent pas ',
                icon: 'error',
                timer: 50000,
                confirmButtonText: 'Valider'})
              return;
            }}
        
        
          return (
           
        <div  sx={{color:'yellow'}}>
        <h1>"Hello World"</h1>
       
        </div>
          );
        }
      
export default ForgottenPassword