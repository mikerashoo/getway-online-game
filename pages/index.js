import GameDirectories from "@/components/home/GameDirectories";
import Head from "next/head";



export default function Home() {
    return (
        <div>
          <Head>
            <title>CreateJS Game Home Page</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color"  />
            <meta
              name="description"
              content="Web site created using create-react-app"
            />
            <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
    
            <meta
              name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, minimal-ui"
            />
            <meta name="msapplication-tap-highlight" content="no" />
          </Head>
          <main>
             
    
            <GameDirectories />
          </main>
        </div>
      );
}
