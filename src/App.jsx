import Header from "./components/header/HEADER";
import HomeRouters from "./routers/HomeRouters";
import "./App.css"
function App(props) {

    return (
        <div className="flex flex-col h-screen overflow-hidden">
            < Header />
            <HomeRouters />
        </div>
    );
}

export default App;