import { Card, Grid } from "@nextui-org/react";
import { FC } from "react";
import { useRouter } from "next/router";


interface MyComponentProps {
    id: number;
  }

export const FavoriteCardPockemon:FC<MyComponentProps> = ({id}) => {
    
    const router = useRouter()

    const onFavoriteClick = () =>{
        router.push(`/pockemon/${id}`)
    }

  return (
    <Grid xs={6} sm={3} md={2} xl={1} onClick={onFavoriteClick}>
      <Card isHoverable isPressable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width="100%"
          height={140}
        />
      </Card>
    </Grid>
  );
};
