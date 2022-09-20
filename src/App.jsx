import { Login } from "./components/Login/Login";
import { Footer } from "./components/Footer";
export default function App() {
    return (
        <div className="h-screen flex flex-col justify-between">
            <Login />
            <Footer />
        </div>
    );
}
