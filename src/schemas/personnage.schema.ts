export const Personnage = `{
  id: ID
  name: String
  role: String
  short_description: String
}`;

export const PersonnageInput = `{
 name: String
 role: String
 short_description: String
}`;
//l'input de personnage ne prend pas d'id, car celui-ci sera généré automatiquement lors de l'ajout d'un cartoon.
