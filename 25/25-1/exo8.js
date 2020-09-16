db.vendas.aggregate([ 
  // {
  //       $lookup:
  //           {
  //               from:"clientes",
  //               localField:"clienteId",
  //               foreignField:"clienteId",
  //               as:"cliente"
  //           }
  //       },
          {
$group : {
      _id : "$clienteId",
    total: { $sum:  "$valorTotal" },
    }
  },
    {
      $project : {
        clienteId : 1,
        total: 1,
        cliente: "$cliente.nome",
      
      }},
      {
        $sort: {total:-1}
      },
      {
        $limit: 5
      }
]);
