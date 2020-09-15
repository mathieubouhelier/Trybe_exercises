db.clientes.aggregate([
  { $match: { 'endereco.uf': 'SC' } },
  {
    $group: {
      _id: '$endereco.uf',
      count: { $sum: 1 },
    },
  },
]);
