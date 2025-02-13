#!/bin/bash

if [ !$1 ]
then
    echo "Pas de commentaire GitHub le low";
    exit 1;
else
    git add .
    git commit -m "$1"
    git push
    npm run gbd
fi