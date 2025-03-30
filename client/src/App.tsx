import { useQuery } from "@apollo/client";
import "./App.css";
import { GET_ALL_CARTOONS } from "./shemas/cartoon.schema";
import Card from "./components/Card";

type Cartoons = {
	getCartoons: { id: string; author: string; description: string }[];
};

function App() {
	const { loading, error, data } = useQuery<Cartoons>(GET_ALL_CARTOONS);
	console.log(data);

	if (loading) return <p>Loading in progress...</p>;
	if (error) return <p>There might be an error</p>;

	return (
		<>
			<h1>My cartoons collection</h1>
			<section>
				{data?.getCartoons.map((item) => (
					<Card
						key={item.id}
						author={item.author}
						description={item.description}
					/>
				))}
			</section>
		</>
	);
}

export default App;
