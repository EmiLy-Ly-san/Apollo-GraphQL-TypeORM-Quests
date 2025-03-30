import { useQuery } from "@apollo/client";
import "./App.css";
import { GET_ALL_CARTOONS } from "./shemas/cartoon.schema";

function App() {
	const { loading, error, data } = useQuery(GET_ALL_CARTOONS);
	console.log(data);

	if (loading) return <p>Loading in progress...</p>;
	if (error) return <p>There might be an error</p>;

	return (
		<>
			<h1>My projetc</h1>
		</>
	);
}

export default App;
