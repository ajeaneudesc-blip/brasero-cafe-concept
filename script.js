// Formulaire de réservation : pas de serveur dans ce concept, on affiche seulement une confirmation.
const formulaire = document.getElementById("formulaire");
const retour = document.getElementById("retour");

formulaire.addEventListener("submit", (evenement) => {
  evenement.preventDefault();
  const donnees = new FormData(formulaire);
  const nom = donnees.get("nom");
  retour.textContent = `Merci ${nom} : demande enregistrée (démonstration, aucune réservation réelle).`;
  formulaire.reset();
});
