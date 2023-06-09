import pokeApi from "../api/pokeApi";
import { Pockemon } from "../interfaces/pockemon-full";

export const getPockemonInfo = async (IdorName: string) => {
  try {
    const { data } = await pokeApi.get<Pockemon>(`pokemon/${IdorName}`);

    return {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
    };
  } catch (error) {
    return null
  }
};
