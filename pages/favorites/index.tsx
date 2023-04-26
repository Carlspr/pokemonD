import { NoFavorites } from "@/Components/ ui";
import { localStorage } from "@/utils";
import { Layout } from "../../Components/layouts";
import { useEffect, useState } from "react";
import { NextPage } from "next";
import { FavoritesPockemons } from "@/Components/pokemons";


const favorites: NextPage = () => {
  const [FavoritesPockemon, setFavoritesPockemon] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPockemon(localStorage.pockemons());
  }, []);

  return (
    <>
      <Layout title="Pockemon - favorito">
        {FavoritesPockemon.length === 0 ? (
          <NoFavorites />
        ) : (
          <FavoritesPockemons Fpockemon={FavoritesPockemon}/>
        )}
      </Layout>
    </>
  );
};

export default favorites;
