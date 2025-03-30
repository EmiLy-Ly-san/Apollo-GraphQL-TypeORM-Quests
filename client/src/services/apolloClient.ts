import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: import.meta.env.VITE_APOLLO_SERVER,
	cache: new InMemoryCache(), // Implémentation classique du cache coté client (en mémoire: le cache est perdu en cas de rafraichissement)
});

export default client;
