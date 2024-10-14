const toastMessages = {
    success: {
      userCreated:"Inscription réussie !",
      passwordReset:"Mot de passe réinitialisé avec succès !",
      disconnected:"Déconnecté avec succès !",
       emailSent:"Un email a été renvoyé pour réinitialiser votre mot de passe !",
       todoSaved:"Vos todos ont bien été sauvegardés"
      
    },
    error: {
      userNotFound: "Utilisateur non trouvé !",
      errorSubscribe:"Utilisateur déja inscrit ",
      saveFailed: "Échec lors de l'enregistrement des données.",
      emptyField:"Le ToDo ne peut pas être vide!",
      errorOccured:"Une erreur s'est produite:",
      missingField:"Email ou mot de passe manquant ",
      incorrectField: "Mail ou Pseudo incorrects ",
      incorrectPassword:"Les mots de passe ne correspondent pas"
    },

    info: {
      welcome: "Bienvenue dans notre application !",
     limitReached: "Limite atteinte, Connectez vous pour poursuivre",
     endOfTodos: "Limite atteinte, Veuillez recommencer une liste",
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