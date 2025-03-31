// import type { Cartoon } from "../types/cartoon.type";
import { default as cartoons } from "../dataset.json";
import { Cartoon } from "../entities/cartoon.entities";

export const getCartoons = (): Promise<Cartoon[]> => {
	return Cartoon.find(); // methode propre a typeORM
};

type GetOneCartoonByIdArgs = {
	id: number;
};

export const getOneCartoonById = async (
	_: unknown,
	args: GetOneCartoonByIdArgs,
): Promise<Cartoon | null> => {
	return Cartoon.findOneBy(args); // methode propre a typeORM
};

// export const createCartoon = (
// 	_: unknown,
// 	args: { cartoon: Cartoon },
// ): number => {
// 	const id = cartoons[cartoons.length - 1].id + 1;
// 	const { personnages, ...rest } = args.cartoon;
// 	const newPersonnages = personnages?.map((pers) => ({
// 		...pers,
// 		id: Date.now(),
// 	}));
// 	const newCartoon: Cartoon = {
// 		...rest,
// 		personnages: newPersonnages,
// 		id,
// 	};

// 	cartoons.push(newCartoon);
// 	return id;
// };

export const deleteCartoon = (_: unknown, args: { id: string }): boolean => {
	const index = cartoons.findIndex((cartoon) => cartoon.id === +args.id);
	if (index > 0) {
		cartoons.splice(index, 1);
		return true;
	}
	return false;
};
