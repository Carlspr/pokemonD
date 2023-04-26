import { Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const { theme } = useTheme();
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "start",
          padding: "0 20px",
          backgroundColor: theme?.colors.gray700.value,
        }}
      >
        <Link href="/">
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/143.svg"
            alt="Icono"
            width={50}
            height={50}
          />
        </Link>
        <Text color="white" h2>
          p
        </Text>
        <Link href="/">
          <Text color="white" h3>
            okemon
          </Text>
        </Link>

        <Spacer css={{ flex: "1" }} />

        <Link href="/favorites">
          <Text color="white" css={{fontSize:'large'}}>
            Favoritos
          </Text>
        </Link>
      </div>
    </>
  );
};
