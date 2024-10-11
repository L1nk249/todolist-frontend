"use client";
import { Box, Typography,Grid, } from "@mui/material";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import Link from "next/link"
import Connexion from '../components/Connexion'
import ResetPassword from '../components/ResetPassword';
import { useState } from "react";
import {toast } from "react-toastify"; 
import toastMessages from "../config/toastMessages";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/userSlice"
import Swal from "sweetalert2";
import apiUrl from "../config";

export default function Header() {

  const dispatch = useDispatch();//
  const router = useRouter()
  const token = useSelector((state) => state.user.value.token) //le reducer va chercher la valeur du token pour dire si user connected ou non
  console.log("Token in Header:", token);
  const [open, setOpen] = useState(false);// etat pour la modal 


  const handleOpen = () => {
    setOpen(true);  // handleOpen ouvre la modal (en appelant <connexion open/onCLose>)
  };

  const handleClose = () => {
    setOpen(false);// pour fermer la modal 
  };

  const handleLogout = () => {
    dispatch(logout());
    toast.success(toastMessages.success.disconnected)}
      

    const handleDelete = async () => {
      // Async await pour attendre la validation de l'user avant de supprimer ou pas le profil
  
      const proceed = await Swal.fire({
        title: "Êtes-vous sûr ?",
        text: "Vous ne pourrez pas revenir en arrière !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Oui, supprimer !",
        cancelButtonText: "Annuler",
        timer: 50000,
      });
  
      console.log(proceed);
      if (proceed.isConfirmed) {
        // proceed.isConfirmed car lié à swal.)
        //  on appelle la route delete avec le param token ( pas besoin de req.body on veut tt supprimer)
        fetch(`${apiUrl}/users/delete/${token}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            {
              if (data.result) {
                // Si data alors supprime le compte, logout le user et renvoie sur home
                dispatch(logout());
                router.push("/");
              }
            }
          });
      }
    };






  const handleClick = () => {
   router.push("/");}
  
    return (
      <>
      <Box
      component="header"
      sx={{
        py: 1,
        px: 2,
        mt: "auto",
        background: "  linear-gradient(to right top, #d1c26b, #d6c370, #dac575, #dec67a, #e2c87f, #e5c67d, #e8c37b, #ebc179, #efba71, #f3b269, #f7aa64, #fba15f);",
        textAlign: "center",
        position: "fixed", // Position fixe
        top: 0, // Aligné en bas
        left: 0, // Prend toute la largeur
        right: 0, // Prend toute la largeur
        width: "100%", // Assure que le header est large
        display: "flex", // Utilisation de flexbox pour l'agencement
        justifyContent: "space-between", // Distribue les éléments à gauche, centre et droite
        alignItems: "center", // Centre verticalement
        minHeight: "50px",
        cursor: 'pointer',
        opacity:0.8
      }}
      
      >
      <Grid item xs={12} sm={6} container justifyContent="left"> 
              <Image
                src="/toutdoux.jpeg"   
                alt="logo" 
                width={90} 
                height={90}  
                style={{
                    borderRadius:"30%",
                  objectFit: 'contain' ,
                  marginBottom: "20px", // Ajuste l'espace sous l'image
                }}
                onClick={handleClick}
             ></Image>
            </Grid>

            
           {token ? (  
            <>
            {/* Menu pour utilisateur authentifié */}
            <Typography variant="body1" sx={{ textAlign: "left", flex: 1, mr: 50 }}>
              <Link href="/">
                <Typography
                  component="span"
                  sx={{
                    fontSize: '1.5rem',
                    color: 'black',
                    textDecoration: 'none',
                    display: 'inline-block',
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: 'white',
                    },
                  }}
                >
                  Accueil
                </Typography>
              </Link>
            </Typography>

            <Typography variant="body2" sx={{ textAlign: "center", flex: 1 }}>
              <Typography
                component="span"
                sx={{
                  fontSize: '1.5rem',
                  color: 'black',
                  textDecoration: 'none',
                  display: 'inline-block',
                  '&:hover': {
                    color: 'white'
                  },
                  cursor: 'pointer'
                }}
                onClick={handleLogout} // Bouton de déconnexion
              >
                Se déconnecter
              </Typography>

            </Typography>

            <Typography variant="body2" sx={{ textAlign: "center", flex: 1 }}>
              <Typography
                component="span"
                sx={{
                  fontSize: '1.5rem',
                  color: 'black',
                  textDecoration: 'none',
                  display: 'inline-block',
                  '&:hover': {
                    color: 'white'
                  },
                  cursor: 'pointer'
                }}
                onClick={handleDelete} // Bouton de suppression de compte
              >
                Supprimer son compte 
              </Typography>

            </Typography>



          </>










        ) : (
          <>
            {/* Menu pour utilisateur non authentifié */}
            <Typography variant="body1" sx={{ textAlign: "left", flex: 1, mr: 50 }}>
              <Link href="/">
                <Typography
                  component="span"
                  sx={{
                    fontSize: '1.5rem',
                    color: 'black',
                    textDecoration: 'none',
                    display: 'inline-block',
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: 'white',
                    },
                  }}
                >
                  Accueil
                </Typography>
              </Link>
            </Typography>

            <Typography variant="body2" sx={{ textAlign: "center", flex: 1 }}>
              <Typography
                component="span"
                sx={{
                  fontSize: '1.5rem',
                  color: 'black',
                  textDecoration: 'none',
                  display: 'inline-block',
                  '&:hover': {
                    color: 'white',
                  },
                  cursor: 'pointer',
                }}
                onClick={handleOpen} // Ouvrir la modal de connexion
              >
                Se connecter
              </Typography>
            </Typography>

            <Typography variant="body2" sx={{ textAlign: "center", flex: 1 }}>
              <Link href="/inscription">
                <Typography
                  component="span"
                  sx={{
                    fontSize: '1.5rem',
                    color: 'black',
                    textDecoration: 'none',
                    display: 'inline-block',
                    '&:hover': {
                      color: 'white'
                    },
                  }}
                >
                  S'inscrire
                </Typography>
              </Link>
            </Typography>
          </>
        )}
      </Box>

      {/* Modal de connexion */}
      <Connexion open={open} onClose={handleClose} token={token}/>
      <ResetPassword token={token} />
    </>
  );
}