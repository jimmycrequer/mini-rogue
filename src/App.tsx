import { FC } from "react";
import { Outlet } from "react-router-dom";
import { CharacterProvider } from "./characterContext";
import { Header } from "./components/Header";

const App: FC = () => {
  return (
    <div className="App">
      <CharacterProvider>
        <Header />

        <main
          className="min-h-screen p-1"
          style={{
            borderImage: `url(/back-parchment.png)`,
            borderImageSlice: "15 fill",
            borderWidth: 15,
            borderImageRepeat: "round",
          }}
        >
          <Outlet />
        </main>
      </CharacterProvider>
    </div>
  );
};

export default App;
