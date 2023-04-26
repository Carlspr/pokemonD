import { Card, Grid, Row, Text } from "@nextui-org/react";
import { FC } from "react";
import { SmallPockemon } from "../../interfaces";
import { useRouter } from "next/router";

interface Props {
  pockemon: SmallPockemon;
}

export const PockemonCard: FC<Props> = ({ pockemon }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/name/${pockemon.name}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1} onClick={onClick}>
      <Card isHoverable isPressable>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={pockemon.img} width="100%" height={140} />
        </Card.Body>

        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{pockemon.name}</Text>

            <Text>#{pockemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
