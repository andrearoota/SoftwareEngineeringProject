# SoftwareEngineeringProject

![License](https://img.shields.io/github/license/andrearoota/SoftwareEngineeringProject)


Progetto di Ingegneria del Software del corso di laurea in Ingegneria Informatica presso l'Università di Bergamo

## Prerequisiti
1. [Docker](https://www.docker.com/)
2. [git](https://git-scm.com/)
3. [npm](https://www.npmjs.com/)
4. [composer](https://getcomposer.org/)

## Installazione
1. Clona la repository inserendo nel terminale il seguente comando:
```sh
git https://github.com/andrearoota/SoftwareEngineeringProject.git
```
2. Spostati all'interno della directory appena creata:
```sh
cd SoftwareEngineeringProject
```
3. Installa backend e frontend:
```sh
bash install_project.sh
```

## Avvio
Per avviare il progetto, copia e incolla il seguente codice nel tuo terminale:
```sh
./backend/vendor/bin/sail -f ./backend/docker-compose.yml up
```
