#!/bin/bash
data=`date +%F`
for nome in *.png
do
#echo $data
mv $nome "$data$nome"
done


