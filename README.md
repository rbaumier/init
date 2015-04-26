- command: init
- params: repo git
- default:
    repo container -> /www
    dotfiles -> /www/libs/dotfiles
- programs to open:
    sublime text
    source tree
- add license
- add package.json

evolutions:
- predefined params via json
- params: -l language, -ide, license type
