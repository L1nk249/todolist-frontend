"use client";
import { Box, Typography,Grid } from "@mui/material";
import { useRouter } from 'next/navigation';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function ConnectedHome() {
const router=useRouter()

const handleBricolageCLick=()=>{router.push('/Bricolage')}
const handleEcoleCLick=()=>{router.push('/Ecole')}
const handleSportCLick=()=>{router.push('/Sport')}
const handleCoursesCLick=()=>{router.push('/Courses')}
const handleSauvegardeCLick=()=>{router.push('/Sauvegarde')}




// Composant réutilisable pour une section avec image et titre
const Section = ({ imageSrc, altText, title,onClick }) => (
  <Box
  onClick={onClick}
    sx={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "align-items",
      color: "#333", // Couleur du texte
      padding: "10px 20px",
      borderRadius: "25px", // Bordure arrondie pour effet capsule
      fontSize: "1.5rem",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Légère ombre pour un effet de relief
      minWidth: "500px", // Largeur minimum pour la capsule
      maxWidth: "500px", // Largeur maximum
      width: "100%", // Ajuste la largeur au contenu
      textAlign: "center",
      marginTop:"10px",
      marginBottom: "2px", // Espace entre les sections
      backgroundColor:"white"
    }}
  >
    <Box
      component="img"
      src={imageSrc}
      alt={altText}
      sx={{
        width: "100%", // Prend toute la largeur disponible
        maxWidth: "300px", // Taille maximale de l'image pour limiter la largeur
        height: "auto", // Maintient les proportions de l'image
        borderRadius: "15px", // Arrondi les coins de l'image
        marginBottom: "20px", // Espace entre l'image et le texte
      }}
    />
    <Typography
      variant="h5"
      sx={{
        fontSize: "2.5rem", // Taille du titre
        color: "#996868", // Couleur du titre
        fontWeight: "bold", // Style gras pour le titre
        '&:hover': {
          color: '#2886D3'
        },
        cursor: 'pointer'
      }}
    >
      {title}
    </Typography>
  </Box>
);


  return (
    <>
      <div
        style={{
          marginTop:"100px",
          marginBottom: "50px", // Marge pour éviter de chevaucher le footer
          height: "100vh",
          minHeight: "calc(100vh - 120px)", // Hauteur totale moins la taille du header et du footer
          position: "fixed",
          top: 0,
          left: 0,
          backgroundImage: "url(/backgroundBisConnected.jpeg)", // chemin relatif à l'image
          opacity:0.8,
          backgroundSize: "cover", // couvre toute la zone
          backgroundAttachment: "fixed",
          backgroundPosition: "center", // centre l'image
          minHeight: "100vh",
          width: "100%",
          zIndex: -1, // met l'image en arrière-plan
        }}>

<Grid
          container
          spacing={8}
          justifyContent="center"
          alignItems="flex-start" // Aligner en haut pour éviter l'espace vertical
          sx={{
          
            margin: "0 auto", // Centre la section
            padding: "20px 20px",  // Ajoute de l'espace autour du contenu

          }}
        >
          {/* Chaque élément occupe 6 colonnes sur un total de 12 (soit deux éléments par ligne) */}
          <Grid item xs={12} sm={6} md={4}>
            <Section imageSrc="/bricolage.jpeg" altText="Bricolage" title="Bricolage" onClick={handleBricolageCLick}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Section imageSrc="/ecole.jpeg" altText="Ecole" title="Ecole"onClick={handleEcoleCLick} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Section imageSrc="/sport.jpeg" altText="Sport" title="Sport"onClick={handleSportCLick}  />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Section imageSrc="/courses.jpeg" altText="Liste de courses" title="Liste de courses"onClick={handleCoursesCLick}  />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Section imageSrc="/todos.jpeg" altText="Todos sauvegardés" title="Todos sauvegardés" onClick={handleSauvegardeCLick}/>
          </Grid>
        </Grid>
      </div>
    </>
  );
}