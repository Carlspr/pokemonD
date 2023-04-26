import Head from "next/head";

import { FC, PropsWithChildren } from "react";
import { Navbar } from "../ ui";


interface Props extends PropsWithChildren {
  title?: string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout: FC<Props> = ({ children, title }) => {

  return (
    <>
      <Head>
        <title>{title || "Pokemon app"}</title>

        <meta name="author" content="Carlos Fuentes" />
        <meta name="description" content="Informacion sobre el pockemon XXXX" />
        <meta name="Keywords" content="Pokemon Pokedex num" />
        <meta
          property="og:title"
          content={`Informacion sobre ${title}`}
        />
        <meta
          property="og:description"
          content="Esta es una pagina sobre pokemones"
        />
        <meta
          property="og:image"
          content={`${origin}/img/banner.png`}
        />
      </Head>

      <Navbar />

      <main
        style={{
          padding: "20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
