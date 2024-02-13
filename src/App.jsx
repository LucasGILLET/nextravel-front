import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation"

export default function App() {
  return (
    <div className="App">
      <div id="detail">
        <Navigation />
        {/* <div className="ml-[6rem]"> */}
          <Outlet />
        {/* </div> */}
      </div>
    </div>
  );
}