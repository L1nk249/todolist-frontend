
import { Box, Typography,Grid, Link as MuiLink } from "@mui/material";
import Link from "next/link"
import Image from "next/image";


export default function Header() {
    return (
      <>
      <Box
      component="header"
      sx={{
        py: 1,
        px: 2,
        mt: "auto",
        background: " linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);",
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
             ></Image>
            </Grid>
            
      </Box>
      </>
    );
  }