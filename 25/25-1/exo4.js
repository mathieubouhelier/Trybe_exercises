db.clientes.aggregate([
  { $match: { 'endereco.uf': 'SC' } },
  {
    $group: {
      _id: '$endereco.uf',
      total: { $sum: 1 },
    },
  },
]);


// Or 
// db.clientes.aggregate([
//   {
//     $group: {
//       _id: '$endereco.uf',
//       total: { $sum: 1 },
//     },
//   },
//   { $match: { _id: 'SC' } },
// ]);
