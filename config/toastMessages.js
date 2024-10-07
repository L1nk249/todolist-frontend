const toastMessages = {
    success: {
      userCreated:"Inscription réussie !",
      passwordReset:"Mot de passe réinitialisé avec succès !",
      disconnected:"Déconnecté avec succès !",
       emailSent:"Un email a été renvoyé pour réinitialiser votre mot de passe !"
      
    },
    error: {
      userNotFound: "Utilisateur non trouvé !",
      errorSubscribe:"Utilisateur déja inscrit ",
      saveFailed: "Échec de l'enregistrement des données.",
      emptyField:"Le ToDo ne peut pas être vide!",
      errorOccured:"Une erreur s'est produite:",
      missingField:"Email ou mot de passe manquant ",
      incorrectField: "Mail ou Pseudo incorrects "
    },

    info: {
      welcome: "Bienvenue dans notre application !",
     limitReached: "Limite atteinte, Connectez vous pour poursuivre",
      sentMessage:"Message envoyé avec succès!",
      deletedTodo:"Todo supprimé avec succès"
    }, 
    warning: {
       existingTodo:"Ce ToDo existe déjà!",
       invalidEmail:"Ce mail n'est pas valide",
       invalidPassword:"Ce mot de passe  n'est pas valide",
       unmatchedPasswiord:"Les mots de passe ne correspondent pas "
      },
  }
  
  export default toastMessages;