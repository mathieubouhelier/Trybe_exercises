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
  { $match: { 'dataVenda': {
            $gte: ISODate('2019-01-01T00:00:00.000Z'),
            $lte: ISODate('2019-12-31T00:00:00.000Z'),
          } }},
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
        $limit: 10
      }
]);
