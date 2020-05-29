This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

Instruções para realização dos exercícios
Crie um novo projeto utilizando npx create-react-app my-pokedex

Para realizar esse exercício, crie um arquivo chamado data.js no diretório .src/ do projeto que você acabou de criar. Copie para esse arquivo o seguinte conteúdo:

Copiar
const pokemons = [
    {
        id: 25,
        name: "Pikachu",
        type: 'Electric',
        averageWeight: {
            value: "6.0",
            measurementUnit: "kg"
        },
        image: "https://cdn.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)"
    },
    {
        id: 4,
        name: "Charmander",
        type: 'Fire',
        averageWeight: {
            value: "8.5",
            measurementUnit: "kg"
        },
        image: "https://cdn.bulbagarden.net/upload/0/0a/Spr_5b_004.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)"
    },
    {
        id: 10,
        name: "Caterpie",
        type: 'Bug',
        averageWeight: {
            value: "2.9",
            measurementUnit: "kg"
        },
        image: "https://cdn.bulbagarden.net/upload/8/83/Spr_5b_010.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Caterpie_(Pok%C3%A9mon)"
    },
    {
        id: 23,
        name: "Ekans",
        type: 'Poison',
        averageWeight: {
            value: "6.9",
            measurementUnit: "kg"
        },
        image: "https://cdn.bulbagarden.net/upload/1/18/Spr_5b_023.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Ekans_(Pok%C3%A9mon)"
    },
    {
        id: 65,
        name: "Alakazam",
        type: 'Psychic',
        averageWeight: {
            value: "48.0",
            measurementUnit: "kg"
        },
        image: "https://cdn.bulbagarden.net/upload/8/88/Spr_5b_065_m.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Alakazam_(Pok%C3%A9mon)"
    },
    {
        id: 151,
        name: "Mew",
        type: 'Psychic',
        averageWeight: {
            value: "4.0",
            measurementUnit: "kg"
        },
        image: "https://cdn.bulbagarden.net/upload/4/43/Spr_5b_151.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Mew_(Pok%C3%A9mon)"
    },
    {
        id: 78,
        name: "Rapidash",
        type: 'Fire',
        averageWeight: {
            value: "95.0",
            measurementUnit: "kg"
        },
        image: "https://cdn.bulbagarden.net/upload/5/58/Spr_5b_078.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Rapidash_(Pok%C3%A9mon)"
    },
    {
        id: 143,
        name: "Snorlax",
        type: 'Normal',
        averageWeight: {
            value: "460.0",
            measurementUnit: "kg"
        },
        image: "https://cdn.bulbagarden.net/upload/4/40/Spr_5b_143.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Snorlax_(Pok%C3%A9mon)"
    },
    {
        id: 148,
        name: "Dragonair",
        type: 'Dragon',
        averageWeight: {
            value: "16.5",
            measurementUnit: "kg"
        },
        image: "https://cdn.bulbagarden.net/upload/2/2c/Spr_5b_148.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Dragonair_(Pok%C3%A9mon)"
    }
];

export default pokemons;
Agora, a prática
Você vai implementar de forma simplificada uma Pokedex!! Para os que não estão familiarizados com o universo Pokemon, a Pokedex é uma enciclopédia de todos os pokemons na natureza. Para o seu caso, a sua aplicação precisa mostrar todos os pokemons presentes no arquivo data.js mencionado acima.

Você pode usar a imaginação para estilizar a sua aplicação. Entretanto, é obrigatório que você implemente pelo menos estes dois componentes:

Pokemon: como o próprio nome diz, esse componente representa um pokemon. Esse componente recebe como entrada um objeto que contém informações referentes a um pokemon específico. Esse componente precisa retornar as seguintes informações para serem mostradas para quem usar a aplicação:

nome do pokemon;

tipo do pokemon;

peso médio do pokemon, acompanhado da unidade de medida usada;

imagem do pokemon.

Pokedex: esse componente representa a enciclopédia de pokemons. Esse componente recebe como entrada uma lista de pokemons para serem mostrados na tela. Para cada um desses pokemons recebidos, Pokedex chama o componente Pokemon.

Segue uma sugestão de implementação da aplicação:
