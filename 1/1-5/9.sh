#!/bin/bash



nome=$1
if [ -d $nome ]
then 
    printf "$nome é um diretorio que tem "
        ls $nome | wc -l 
    printf "diretorio"
 else
    echo "O argumento $nome não é um diretorio"
fi