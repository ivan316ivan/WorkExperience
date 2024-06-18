import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./appRoutes";

const App = () => {
    return (
        <>
            <BrowserRouter basename="/">
                <AppRoutes />
            </BrowserRouter>
        </>
    );
};

export default App;
