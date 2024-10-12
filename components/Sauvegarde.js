"use client";

import 'react-toastify/dist/ReactToastify.css';

export default function Sauvegarde() {
  
  
return (
        <>
   
         <div
      style={{
        height: '100vh', // hauteur de la fenêtre
        position: 'fixed', // Permet à l'image de rester fixe
        top: 0,
        left: 0,
        backgroundImage: 'url(/todos.jpeg)', // chemin relatif à l'image
        backgroundSize: 'cover', // couvre toute la zone
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center', // centre l'image
        minHeight: '100vh',
        position: 'absolute', // permet de superposer avec le contenu
        width: '100%', // prend toute la largeur
        zIndex: -1, // met l'image en arrière-plan
      }}
    >
      
    </div>
        
        </>
      );
  }