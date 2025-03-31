// import type { Cartoon } from "../types/cartoon.type";
import { default as cartoons } from "../dataset.json";
import { Cartoon } from "../entities/cartoon.entities";
import { Genre } from "../entities/genre.entities";
import { Personnage } from "../entities/personnage.entities";

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

export const createCartoon = async (
	_: unknown,
	args: { cartoon: Cartoon },
): Promise<number> => {
	const { personnages, genres, ...rest } = args.cartoon;

	/** Création du tableau d'instance de personnage */
	const newPersonnages = personnages?.map((pers) => {
		const myPers = new Personnage();
		myPers.name = pers.name;
		myPers.short_description = pers.short_description;
		myPers.role = pers.role;

		return myPers;
	}) as Personnage[];

	/** Création du tableau d'instance de genre */
	const newGenre = genres?.map((genre) => {
		const myGr = new Genre();
		myGr.name = genre.name;

		return myGr;
	}) as Genre[];

	/** Association des données et instances à */
	const newCartoon: Cartoon = new Cartoon();
	Object.assign(newCartoon, rest);
	newCartoon.personnages = newPersonnages;
	newCartoon.genres = newGenre;

	const result = await newCartoon.save();
	return result.id;
};

export const deleteCartoon = async (
	_: unknown,
	args: { id: number },
): Promise<boolean> => {
	try {
		const cartoonToDelete = await Cartoon.findOneBy({ id: args.id });
		if (!cartoonToDelete) {
			return false; // Retourne false si aucun cartoon n'est trouvé
		}
		await Cartoon.remove(cartoonToDelete);
		return true;
	} catch (error) {
		console.error("Error deleting cartoon:", error);
		return false;
	}
};
