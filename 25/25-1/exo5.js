db.clientes.aggregate([
  {
    $group: {
      _id: '$sexo',
      toatl: { $sum: 1 },
    },
  },
]);
