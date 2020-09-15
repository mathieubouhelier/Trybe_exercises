use('erp');
db.clientes.aggregate([
  {
    $group: {
      _id: { uf: '$endereco.uf', sexo: '$sexo' },
      total: { $sum: 1 },
    },
  },
  {
    $project: {
      estado: 1,
      sexo: 1,
      total: 1,
    },
  },
]);
