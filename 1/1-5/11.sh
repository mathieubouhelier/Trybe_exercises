#!/bin/bash
data=`date +%F`
diretory=$1
extension=$2
cd $diretory

for nome in *.$extension
do
#echo $data
echo "Renomeando $nome para ${data}-${nome}"
    mv $nome ${data}-${nome}

done



