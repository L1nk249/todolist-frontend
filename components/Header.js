"use client";
import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image";
import { useRouter,usePathname  } from 'next/navigation';
import Link from "next/link";
import Connexion from '../components/Connexion';
import ResetPassword from '../components/ResetPassword';
import { useState,useEffect } from "react";
import { toast } from "react-toastify";
import toastMessages from "../config/toastMessages";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import Swal from "sweetalert2";
import apiUrl from "../config";
import { useSelector } from "react-redux";

export default function Header() {
  const router = useRouter();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.value.token);
  console.log("Token in Header:", token);
  const [open, setOpen] = useState(false);

  const pathname = usePathname(); // On obtient la route actuelle
 
  const headerBackgroundColor = () => {
    switch (pathname) {
      case '/Sport':
        return "#902F66";
      case '/Course':
        return "#996868";
        case '/Ecole':
        return "#CE5E5E";
      case '/Bricolage':
        return 'blue';
      case '/Sauvegarde':
        return 'white';
      default:
        return "linear-gradient(to right top, #d1c26b, #d6c370, #dac575, #dec67a, #e2c87f, #e5c67d, #e8c37b, #ebc179)";
    }
  };
  // Vérifie quelle route est capturée par pathname
  useEffect(() => {
    console.log("Route actuelle:", pathname);
  }, [pathname]); // Log à chaque changement de route


  const handleOpen = () => {
    setOpen(true);  // Ouvre la modal
  };

  const handleClose = () => {
    setOpen(false); // Ferme la modal
  };

  const handleLogout = () => {
    dispatch(logout());
    toast.success(toastMessages.success.disconnected);
  };

  const handleDelete = async () => {
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

    if (proceed.isConfirmed) {
      fetch(`${apiUrl}/users/delete/${token}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.result) {
            dispatch(logout());
            router.push("/");
          }
        });
    }
  };

  const handleClick = () => {
    router.push("/");
  };

  return (
    <>
      <Box
        component="header"
        sx={{
          py: 1,
          px: 2,
          background: headerBackgroundColor(),
          textAlign: "center",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: "50px",
          cursor: 'pointer',
          opacity: 0.8
        }}
      >
        <Grid item xs={12} sm={6} container justifyContent="left">
          <Image
            src="/toutdoux.jpeg"
            alt="logo"
            width={90}
            height={90}
            style={{
              borderRadius: "30%",
              objectFit: 'contain',
              marginBottom: "20px",
            }}
            onClick={handleClick}
          />
        </Grid>

        {token ? (
          <>
            <Typography variant="body1" sx={{ textAlign: "left", flex: 1 }}>
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

            <Typography variant="body1" sx={{ textAlign: "left", flex: 1 }}>
              <Link href="/ConnectedHome">
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
                  Menu
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
                onClick={handleLogout}
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
                onClick={handleDelete}
              >
                Supprimer son compte
              </Typography>
            </Typography>
          </>
        ) : (
          <>
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
                onClick={handleOpen}
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
      <Connexion open={open} onClose={handleClose} token={token} />
      <ResetPassword token={token} />

    </>
  );
}
