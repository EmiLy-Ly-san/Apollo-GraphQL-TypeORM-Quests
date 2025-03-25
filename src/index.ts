/** Import des librairies */
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers } from "./resolvers/cartoon.resolver";

// const cartoons = [
// 	{
// 		id: 1,
// 		name: "Les Mystérieuses Cités d'Or",
// 		description:
// 			"Esteban, un jeune garçon orphelin, part à la recherche des légendaires Cités d'Or en Amérique du Sud accompagné de Zia et Tao.",
// 	},
// 	{
// 		id: 2,
// 		name: "Ulysse 31",
// 		description:
// 			"Ulysse se perd dans l'espace avec son équipage et cherche à rentrer sur Terre tout en affrontant les dieux de l'Olympe.",
// 	},
// 	{
// 		id: 3,
// 		name: "Dragon Ball SUPER COOL",
// 		description:
// 			"Son Goku, un jeune garçon doté d'une force incroyable, part à la recherche des Dragon Balls, des boules de cristal magiques.",
// 	},
// ];

// A schema is a collection of type definitions (hence "typeDefs")
const typeDefs = `#graphql
  # This "Cartoon" type defines the queryable fields for every cartoon in our data source.
  type Cartoon {
    id: ID
    name: String
    description: String
  }

  # The "Query" type is special: it lists all of the available queries
  type Query {
    getCartoons: [Cartoon]
    getOneCartoonById(id: ID!): Cartoon,
  }
`;

// The ApolloServer constructor requires two parameters: your schema
// definition (les shema GrapQL composes des defintions de tous nos types de donnees, de nos types Querys et de Mutations)  and your set of resolvers (fonctions de resolution, la ou on met notre logique metiers).
const server = new ApolloServer({
	typeDefs,
	resolvers,
});

/** Fonction auto appelee (evite la mise en constante) permettant de lancer le serveur */
(async () => {
	const { url } = await startStandaloneServer(server, {
		listen: { port: 4000 },
	});
	console.log(`🚀 Server ready at: ${url}`);
})();
