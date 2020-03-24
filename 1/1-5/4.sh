#!/bin/bash

caminho="/home/mathieu/Documentos/trybe/curso/1-5/exercicios/1.sh"
#caminho=test
echo $caminho
if [ -e $caminho ]
then 
    echo "o caminho $caminho esta habilitado"
else
    echo "nada"
fi
if [ -w $caminho ]
then 
    echo "voce tem permissão para editar $caminho"
else
    echo "voca não tem permissão"
fi 