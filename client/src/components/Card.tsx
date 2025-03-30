interface CardProps {
	author: string;
	description: string;
}

export default function Card({ author, description }: CardProps) {
	return (
		<>
			<h2>{author}</h2>
			<p>{description}</p>
		</>
	);
}
