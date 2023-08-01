import "./App.css";
import { CakeView } from "./feature/cake/CakeView";
import { IcecreamView } from "./feature/icecream/IcecreamView";
import { UserView } from "./feature/user/UserView";

function App() {
  return (
    <>
      <CakeView />
      <IcecreamView />
      <UserView />
    </>
  );
}

export default App;
