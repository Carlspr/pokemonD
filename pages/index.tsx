import { Layout } from "@/Components/layouts";

import { GetStaticProps, NextPage } from "next";
import pokeApi from "../api/pokeApi";
import { PockemonListResponse, SmallPockemon } from "../interfaces";
import { Grid  } from "@nextui-org/react";
import { PockemonCard } from '../Components/pokemons';

interface props {
  pockemons: SmallPockemon[];
}

const Home: NextPage<props> = ({ pockemons }) => {
  
  return (
    <>
      <Layout title='Pokemon'>
        <Grid.Container gap={2} justify="flex-start" >
          {pockemons.map((pockemon) => {
            return (
              <PockemonCard pockemon={pockemon} />
            );
          })}
        </Grid.Container>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PockemonListResponse>("pokemon?limit=151");
  const { results } = data;

 

  const pockemons: SmallPockemon[] = results.map((poke, i) => {
    return {
      ...poke,
      id: i + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
        i + 1
      }.svg`,
    };
  });

  return {
    props: {
      pockemons,
    },
  };
};

export default Home;
