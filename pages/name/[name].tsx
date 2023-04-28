import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { Layout } from "../../Components/layouts";
import { Pockemon,  } from "../../interfaces";
import pokeApi from "../../api/pokeApi";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { getPockemonInfo, localStorage } from "@/utils";
import { useState } from "react";
import confetti from 'canvas-confetti'
import { useRouter } from 'next/router';

interface Props {
  pockemon: Pockemon;
}

const PokemonByNamePage: NextPage<Props> = ({ pockemon }) => {
  const [isInfavorites, setisInfavorites] = useState(
    localStorage.existInFavorites(pockemon.id)
    
  );

  const onToggleFavorite = () => {
    localStorage.toggleFavorite(pockemon.id);
    setisInfavorites(!isInfavorites);

    if (isInfavorites) return;

    confetti({
      zIndex:100,
      particleCount:100,
      spread:160,
      angle:-100,
      origin:{
        x:1,
        y:0,
      }
    })


  };
  return (
    <Layout title={pockemon.name}>
      <Grid.Container
        css={{
          marginTop: "5px",
          width: "100%",
          display: "flex",
        }}
      >
        <Grid xs={12} sm={4}>
          <Card isHoverable isPressable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pockemon.sprites.other?.dream_world.front_default ||
                  "/no-image.png"
                }
                alt={pockemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card css={{ width: "100%" }}>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1 transform="capitalize">
                {pockemon.name}
              </Text>

              <Button
                color="gradient"
                ghost={isInfavorites}
                onPress={onToggleFavorite}
              >
                {isInfavorites && "Favorito"}
                {!isInfavorites && "Guardar en Favoritos"}
              </Button>
            </Card.Header>
            <Card.Body>
              <Container
                css={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text size={30} transform="capitalize">
                  :sprites:
                </Text>
                <Image
                  src={pockemon.sprites.front_default}
                  alt={pockemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pockemon.sprites.back_default}
                  alt={pockemon.name}
                  width={100}
                  height={100}
                />

                <Image
                  src={pockemon.sprites.front_shiny}
                  alt={pockemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pockemon.sprites.back_shiny}
                  alt={pockemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  
    const { data } = await pokeApi.get<Pockemon>(`pokemon?limit=151`);

    const {results}:any = data


  return {
    paths: results.map((poke:any)=> {
        return{
            params:{
              name:poke.name
            }
        }
    }),

    fallback:'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

 

  const pockemon = await getPockemonInfo(name);

  if(!pockemon){
    return{
      redirect:{
        destination:"/",
        permanent:false
      }
    }
  }

  return {
    props: {
      pockemon,
    },

    revalidate:86400
  };
};

export default PokemonByNamePage;
