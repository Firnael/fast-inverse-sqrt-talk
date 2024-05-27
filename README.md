# Fast Inverse Square Root Algorithm : The Talk

![logo](/public/logo.png)

Ce talk est très fortement inspiré de [cette vidéo](https://www.youtube.com/watch?v=p8u_k2LIZyo&ab_channel=Nemean). 

## Plan de la présentation

1. Introduction
2. It's story time !
3. La fonction 1/sqrt(x)
4. Normaliser des vecteurs
5. La reprsentation binaire des nombres flottants
6. Filouteries logarithmiques
7. Le langage C en sueur
8. What the f*ck
9. Ce bon vieux Newton
10. Conclusion

### RAF

- pourquoi on veut pas faire de division / racine carré -> opération sur les floating point numbers, CPU vs FPU
- terminer le magic number
  - math fait, reste l'explication avec les bits
- terminer l'itération de Newton

## Démarrer la prez en local

- `npm install`
- `npm run dev`
- visiter http://localhost:3000

## Documentation

https://docs.google.com/presentation/d/e/2PACX-1vTGP--MIkfoDM4ef_8QUd5Ld41gMLhQiGkGc0glPovvFqjMZhBFNcpTobAHfjxWwbqANbxVJe3txvej/pub?start=false&loop=false&delayms=3000&slide=id.g120d8381d09_0_20

- Wikipedia :
  - [Fast Inverse Square Root](https://en.wikipedia.org/wiki/Fast_inverse_square_root)
  - [Softdisk](https://fr.wikipedia.org/wiki/Softdisk)
  - [Adaptive Tile Refresh](https://en.wikipedia.org/wiki/Adaptive_tile_refresh)
  - [id Software](https://fr.wikipedia.org/wiki/Id_Software)
  - [3dfx](https://fr.wikipedia.org/wiki/3dfx)
  - [Méthode de Newton](https://fr.wikipedia.org/wiki/M%C3%A9thode_de_Newton)
- Softdisk & Gamer's Edge Games :
  - [SoftDisk Publishing](https://www.mobygames.com/company/353/softdisk-publishing/)
  - [Gamer's Edge](https://www.mobygames.com/company/355/gamers-edge/)
- Quake 3 :
  - https://fabiensanglard.net/quake3/renderer.php
- The "Who wrote the code" investigation at Beyond3D.com :
  - [Part 1](https://www.beyond3d.com/content/articles/8)
  - [Part 2](https://www.beyond3d.com/content/articles/15)
  - [Brian Hook interview](https://www.quakewiki.net/profile-retro-interview-brian-hook/)
- Misc.
  - [Newton's Method (video)](https://www.youtube.com/watch?v=FpOEx6zFf1o&ab_channel=DubiousInsights)
  - https://dfarq.homeip.net/computers-in-1985/
  - https://www.techspot.com/article/2166-mmx-sse-avx-explained/
  - https://toggl.com/blog/build-horse-programming
  - https://www.vg247.com/how-a-super-mario-bros-3-pc-port-created-id-software
  - https://kotaku.com/ancient-90s-code-from-quake-still-controls-lights-in-h-1847105972
  - https://www.reddit.com/r/gaming/comments/vznc9v/do_you_remember_id_tech_3_engine_games_aka_quake/
- Articles / Talks sur le sujet :
  - https://www.youtube.com/watch?v=p8u_k2LIZyo
  - https://www.youtube.com/watch?v=eOKGK7TQEuA
  - https://attackofthefanboy.com/articles/the-quake-iii-algorithm-that-defies-math-explained/
  - https://betterexplained.com/articles/understanding-quakes-fast-inverse-square-root/
  - https://web.archive.org/web/20130817074759/http://blog.quenta.org/2012/09/0x5f3759df.html
  - https://www.slideshare.net/maksym_zavershynskyi/fast-inverse-square-root
  - http://www.lomont.org/papers/2003/InvSqrt.pdf

## Ressources

### Images

- Splash wallpaper : https://wall.alphacoders.com/big.php?i=336968
- Le petit jeu de voitures :
  - la voiture : https://opengameart.org/content/free-top-down-car-sprites-by-unlucky-studio
  - la route : https://opengameart.org/content/2d-top-down-highway-background
- Tableau de Pythagore : J. Augustus Knapp, circa 1926
- Photo des locaux de Softdisk : Par Dtobias — Travail personnel606 Common Street, Shreveport, Louisiana, 2007, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=4066443
- Images de la pomme en 3D : https://zhuanlan.zhihu.com/p/516581450

### Fonts

- FiraCode : https://github.com/tonsky/FiraCode
- Monoid : https://larsenwork.com/monoid/

### Breizhcamp 2024

https://www.youtube.com/watch?v=f_N2BWhOHlk