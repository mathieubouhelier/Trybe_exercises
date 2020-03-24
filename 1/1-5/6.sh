#!/bin/bash

read -p"digit un nome de arquivo ou diretório :" nome
#echo $nome  

if [ -d $nome ]
then 
    echo "$nome é uma pasta"
else
        if [ -f $nome ]
            then 
            echo "$nome é um arquivo commun"
        else 
    echo "$nome é um arquivo"
        fi
fi

ls -l $nome
