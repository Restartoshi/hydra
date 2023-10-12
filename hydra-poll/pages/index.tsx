import Head from "next/head";
import { CardanoWallet, MeshBadge } from "@meshsdk/react";
import HydraPoll from "./poll/poll";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hydra Poll</title>
        <meta name="description" content="Poll running on Hydra Head protocol" />
        <link
          rel="icon"
          href="https://meshjs.dev/favicon/favicon-32x32.png"
        />
        <link
          href="https://meshjs.dev/css/template.css"
          rel="stylesheet"
          key="mesh-demo"
        />
      </Head>

      <main className="main">
        <HydraPoll/>
      </main>

      <footer className="footer">
        <MeshBadge dark={true} />
      </footer>
    </div>
  );
}
