import type { Cartoon } from "../types/cartoon.type";
import { default as cartoons } from "../../dataset.json";

export const getCartoons = (): Cartoon[] => {
	return cartoons;
};

type GetOneCartoonByIdArgs = {
	id: string;
};

export const getOneCartoonById = (
	_: unknown,
	args: GetOneCartoonByIdArgs,
): Cartoon => {
	return cartoons.find((cartoon) => cartoon.id === +args.id) as Cartoon;
};
