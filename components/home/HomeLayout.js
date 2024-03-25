import Head from "next/head";
import GameDirectories from "./GameDirectories"; 
const HomeLayout = () => {
  return (
    <div>
      <Head>
        <title>CreateJS Game</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
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
      <main className="p-4 bg-gradient-to-r from-slate-900 to-slate-700">
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
          <div className="min-h-28 ">
            <div className="max-w-screen-lg mx-auto py-4">
              <h2 className="font-bold text-center text-6xl text-emerald-500 font-display">
                Getway Connect
              </h2>
              <GameDirectories />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeLayout;
