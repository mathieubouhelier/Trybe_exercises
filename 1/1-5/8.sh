#!/bin/bash

#read -p"digit un nome de arquivo ou diretório :" nome
#echo $nome  
nome=$*
for item in $nome
do
if [ -d $item ]
then 
    echo "$item é uma pasta"
else
        if [ -f $item ]
            then 
            echo "$item é um arquivo commun"
        else 
    echo "$item é um arquivo"
        fi
fi
done
ls -l $nome
