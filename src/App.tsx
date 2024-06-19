import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./appRoutes";
import { AppLayout } from "./components/appLayout/appLayout";

const App = () => {
    return (
        <BrowserRouter basename="/">
            <AppLayout>
                <AppRoutes />
            </AppLayout>
        </BrowserRouter>
    );
};

export default App;
