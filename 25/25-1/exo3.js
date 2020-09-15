db.clientes.aggregate([
  {
    $match: {
      $and: [
        { sexo: 'FEMININO' },
        {
          dataNascimento: {
            $gte: ISODate('1995-04-29T00:00:00.000Z'),
            $lte: ISODate('2005-07-29T00:00:00.000Z'),
          },
        },
      ],
    },
  },
  { $limit: 5 },
]);
