# NOTES

## Pourquoi "Q_rsqrt" ?

The "Q" in "Q_rsqrt" stands for "Quake," the name of the game.  
"Reciprocal" means the inverse of a number.  
So, the name "Q_rsqrt" was simply a way of indicating that this function was specific to Quake, and that it was used for calculating the reciprocal square root in a fast and efficient way.

## Pourquoi on veut normaliser des vecteurs ?

...

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
Plus loin dans le code, pour normaliser un vecteur (ABC), on fera norm = Q_rsqrt(A) + Q_rsqrt(B) + Q_rsqrt(C) dans l'idée.
