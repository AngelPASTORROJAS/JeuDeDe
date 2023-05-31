# Jeu de dé

## Contraintes

Vous allez créer une petite application avec react-router-dom. Vous utiliserez useReducer que nous avons vu précédemment, vous pouvez faire un fichier reducer.js à la racine du projet.

## Contexte

Vous créerez un bouton qui lance 5 dés et compte le nombre de fois que l'on obtient un brelan, (brelan =  trois dés identiques) à chaque fois que l'on relance l'expérience on ré-initialise le compteur.

L'application possède trois pages : 

- la page Home qui permet de lancer l'expérience, 
![home](https://media.discordapp.net/attachments/905848035538518077/1113392690437042176/image.png?width=1458&height=678)

- une page description qui décrit le jeu 
![home](https://media.discordapp.net/attachments/905848035538518077/1113392740965822565/image.png?width=1458&height=738)

- une page permettant de consulter les statistiques.
![home](https://media.discordapp.net/attachments/905848035538518077/1113392790030786622/image.png?width=1458&height=680)


## Page Home le jeu

Sur cette page vous avez un bouton pour lancer les dés aux nombres de 5. Un autre champ du formulaire permet de définir le nombre de fois que vous répétez l'expérience. Pour consulter les résultats un lien cliquable permet de voir la page des statistiques. Vous utiliserez les paramètres de react-router-dom de route pour afficher les résultats.


[Jeu] [Description]

Nombre d'expérience : [100]

[Lancer]

[Resultat] 


## Partie facultative

Comptez d'autres combinaisons du jeu du Yam : 
- full (3 + 2 dés identiques)
- carré (4 dés identiques)
- double paire (2 + 2 dés identiques)
- suite (5 dés qui se suivent)
AU CHOIX !!