#!/bin/bash

echo -e "1) Commit\n2) Deploy\n3) Commit & Deploy" 

read choix

if [ "$choix" -ne 1 ] && [ "$choix" -ne 2 ] && [ "$choix" -ne 3 ]
then
    echo "Le choix n'a point été compris"
    exit 1
fi

if [ "$choix" -eq 1 ] || [ "$choix" -eq 3 ]
then
    read -p 'Entrez un commentaire : ' commentaire

    if [ -z "$commentaire" ]
    then
        echo "Pas de commentaire GitHub le low";
        exit 1;
    fi

    git add .
    git commit -m "$commentaire"

    if [ $? -ne 0 ]
    then
        echo "Erreur lors du commit, annulation du push."
        exit 1
    fi

    git push
fi

if [ "$choix" -eq 2 ] -o [ "$choix" -eq 3 ]
then
    if [ $? -eq 0 ]
    then
        npm run gbd
    else
        echo "Erreur lors du push, build et déploiement non exécutés."
        exit 1
    fi
else
    exit
fi
