# Projet Kasa - OpenClassrooms
## Description
Créez une plateforme de logement.

## Objectifs
1. Développer le routage du site avec React-router-dom.
2. Développer les pages et les composants.
3. Afficher les logements à partir d'un fichier JSON.
4. Intégrer la maquette fournie. Style du site avec SASS.

### Contraintes
- Pour le défilement des photos dans la galerie (composant Gallery) :
  - Si l'utilisateur se trouve à la première image et qu'il clique sur "image précédente", la galerie affiche la dernière image. 
  - Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "image suivante", la galerie affiche la première image. 
  - S'il n'y a qu'une seule image, les boutons "suivant" et "précédent" ainsi que la numérotation n'apparaissent pas.
- La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.
- Collapse : Par défaut, les Collapse sont fermés à l'initialisation de la page. 
- Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
  - Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.

## Voir le projet

1. Clonez le dossier.
2. Ouvrez le dossier sur votre éditeur de code.
3. Lancez la commande __npm install__
4. Lancez la commande __npm start__
5. Ouvrez votre navigateur et collez l'adresse suivante __http://localhost:3000/__
