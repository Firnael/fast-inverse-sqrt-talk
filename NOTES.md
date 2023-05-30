# NOTES

## Pourquoi "Q_rsqrt" ?

The "Q" in "Q_rsqrt" stands for "Quake," the name of the game.  
"Reciprocal" means the inverse of a number.  
So, the name "Q_rsqrt" was simply a way of indicating that this function was specific to Quake, and that it was used for calculating the reciprocal square root in a fast and efficient way.

## A quoi servent les vecteurs en rendu 3D ?

> For example, computer graphics programs use inverse square roots to compute angles of incidence and reflection for lighting and shading. 

## Pourquoi on veut normaliser des vecteurs ?

> Normalizing a vector is nice because it separates the **direction** from the **magnitude** of your vector. For example, you can keep the speed of a character constant, even when they travel in weird diagonal directions.

Ex: Si la vitesse d'une voiture est de 10 pixels / frame (on ignore le framerate dans cet exemple), et qu'on joue à un jeu 2D (dans un repère orthonormé avec x=0 et y=0 en bas à gauche).
Le joueur dirige le stick vers la droite, le vecteur vitesse V de la voiture est composé comme suit  :
- vx: 1
- vy: 0
Pour appliquer le déplacement et mettre à jour la position (x, y) de la voiture, on fera alors : 
- position = new Vector(position.x + vx * speed, position.y + vy * speed)
Si on a une position initiale de (0, 0), après l'application de la vitesse on aura donc (10, 0)
Si la voiture se dirige complètement en haut (vx: 0, vy: 1), on aura une nouvelle position (0, 10).

Mais que se passe t'il si la voiture se déplace en diagonale, disons en haut à droite ?
Si on applique la même logique que précédement, avec un vecteur V tel que vx: 1 et vy: 1, on se retrouve avec une position (10, 10).
Le problème ici, c'est que notre voiture se déplace **plus vite** en diagonale en lorsqu'elle ne se déplace que sur un seul axe.

La solution est de normaliser le vecteur vitesse pour séparer la direction du vecteur (entre -1 et 1) de sa grandeur (la vitesse de la voiture).

Ainsi, une formule plus juste pour calculer la vitesse de la voiture en diagonale serait :
- // avec V = (1,1)
- nV = norm(V); // nV = (0.5, 0.5)
- position = new Vector(position.x + nV.x * speed, position.y + nV.y * speed)

Avec une position initiale de (0, 0), après l'application de la vitesse on aura donc (5, 5), la voiture se sera déplacé d'exactement 10 pixels.

> You do pay a performance cost to normalize a vector, because it involves taking a square root. Not a huge cost if you're doing it tens of times per frame, but it sure adds up when you do it thousands of times per frame.
> Also, you run the risk of dividing by zero if you ever have a zero vector ([0, 0, 0]).

## Pythagore

Mettre une petite photo de lui avec des lunettes de soleil
[link](https://www.google.com/search?q=pythagore+face&tbm=isch&ved=2ahUKEwjt1-6i7cL-AhUUvicCHQRoCasQ2-cCegQIABAA&oq=pythagore+face&gs_lcp=CgNpbWcQAzIFCAAQgAQyBwgAEBgQgAQ6BggAEAUQHjoGCAAQCBAeUABYqAJg5QNoAHAAeACAAUiIAYACkgEBNJgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=-qJGZO3yIZT8nsEPhNCl2Ao&bih=911&biw=1728&rlz=1C5GCEM_enFR991FR991#imgrc=RbnNRKnU057ztM)

On cherche **h**, l'hypoténuse.

En 2D, ça donne ça :
x² + y² = h²
ou écrit différemment :
h = √(x² + y²)

Si x=2 et que y=4, alors :
2² + 4² = h²
4  + 16 = √20 
h = 5

En 3D on a un 3ème axe (la profondeur), ça donne ça :
x² + y² + z² = h²
ou écrit différemment :
h = √(x² + y² + z²)

Si x=2, y=3 et z=6 
2² + 3² + 6² = h²
4  + 9  + 36 = √49 
h = 7

## Normalisation d'un vecteur

Normaliser un vecteur revient à lui donner une longueur de 1.    
Pour normalise un vecteur, on doit simplement diviser chaque composantes du vecteur par la longueur du vecteur.

Par exemple, pour un vecteur AB, si A=2 et que B=4, alors la longueur du vecteur est de 6.
norm(AB) = A/6 + B/6, soit 0.33 + 0.66, soit 1.

En 3D c'est la même chose, sauf que le vecteur a 3 composantes au lieu de 2.

Donc pour normaliser un vecteur, on est obligé de connaitre sa longueur.
Soit (ABC) = L (la longueur du vecteur en 3D), on peut écrire que norm(ABC) = A/L + B/L + C/L.
De plus, on sait que L = √(A² + B² + C²) grâce à Pythagore.
Enfin, on sait que la valeur normalisée d'un vecteur vaut 1.
On peut donc écrire :
A/√(A² + B² + C²) + B/√(A² + B² + C²) + C/√(A² + B² + C²) = 1
Autrement écrit :
A * 1/√(A² + B² + C²) + B * 1/√(A² + B² + C²) + C * 1/√(A² + B² + C²) = 1

## La fonction

Prend un paramètre `number` dont on veut calculer la racine carré inverse, soit 1/√number
(plus loin dans le code, pour normaliser un vecteur (ABC), on fera norm = Q_rsqrt(A) + Q_rsqrt(B) + Q_rsqrt(C) dans l'idée.)
