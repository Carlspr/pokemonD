import { Grid } from "@nextui-org/react";
import { FC } from "react";
import { FavoriteCardPockemon } from "./FavoriteCardPockemon";

interface MyComponentProps {
    Fpockemon: number[];
  }

export const FavoritesPockemons:FC<MyComponentProps> = ({Fpockemon}) => {

   

  return (
    <>
         <Grid.Container gap={2} direction="row" justify="flex-start" >
            {Fpockemon.map((id) => {
              return (
                <FavoriteCardPockemon key={id} id={id}/>
              );
            })}
          </Grid.Container>
    </>
  )
}
