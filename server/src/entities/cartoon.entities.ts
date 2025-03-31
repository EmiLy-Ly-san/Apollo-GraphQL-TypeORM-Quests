import {
	BaseEntity,
	Column,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
} from "typeorm";
import { Genre } from "./genre.entities";
import { Personnage } from "./personnage.entities";

@Entity()
export class Cartoon extends BaseEntity {
	// Active Record | BaseEntity permet a l'instance de recuperer les methodes de manipulation de donnees
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	description: string;

	@Column()
	nb_of_episodes: number;

	@Column()
	nb_of_seasons: number;

	@Column()
	realisator: string;

	@Column()
	author: string;

	@Column()
	ft_diffusion: string;

	@OneToMany(
		() => Genre,
		(genre) => genre.cartoon,
	)
	genres?: Genre[];

	@OneToMany(
		() => Personnage,
		(personnage) => personnage.cartoon,
		{ cascade: true }, // Par defaut TypeORM ne cascade pas la creation des entites. il faut l'ajouter en parametre a notre entite.
	)
	personnages?: Personnage[];
}
