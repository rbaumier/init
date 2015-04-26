- command: init
- params: repo git
- default:
  repo container -> /www
  dotfiles -> /www/libs/dotfiles

 dotfiles(.editorconfig, checkbuild, etc...), t'initialises un repo git, te fais le gitignore avec cette fonction :p
limite tu peux lui passer en paramètre l'adresse du repo, comme ça il te fait un "git remote add ladresse" en plus o.O
ET AUSSI il t'ouvre le projet dans sublime text directement :bave:
et sourcetree o.O
+ add-license()

evolutions:
- params: -l language, -ide,
