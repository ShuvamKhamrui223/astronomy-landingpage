import Astronomy from "./components/Astronomy";
import Clients from "./components/Clients";
import Experinces from "./components/Experinces";
import Searching from "./components/Searching";
import RootLayout from "./layouts/RootLayout";

function App() {
  return (
    <>
      <RootLayout>
        <Clients />
        <Experinces />
        <Astronomy />
        <Searching />
      </RootLayout>
    </>
  );
}

export default App;
