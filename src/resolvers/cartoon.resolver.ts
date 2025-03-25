import { default as cartoons } from "../../dataset.json";
import type { Cartoon } from "../types/cartoon.type";

type GetOneCartoonByIdArgs = {
	id: string;
};

export const getOneCartoonById = (
	_: unknown,
	args: GetOneCartoonByIdArgs,
): Cartoon | undefined => {
	return cartoons.find((cartoon) => cartoon.id === Number(args.id)) as Cartoon;
};

// This resolver retrieves books from the "books" array above.
export const resolvers = {
	Query: {
		getCartoons: (): Cartoon[] => cartoons,
		getOneCartoonById,
	},
};
