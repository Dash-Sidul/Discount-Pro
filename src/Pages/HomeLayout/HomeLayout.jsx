import { Outlet } from "react-router";
import Header from "../../Components/Header/Header";
import Footer from "../Footer/Footer";


const HomeLayout = () => {
    return (
        <div className="w-11/12 mx-auto">
            <header>
                <Header></Header>
                </header>
                <main>
                    <Outlet></Outlet>
                </main>
            
            <Footer></Footer>
            
        </div>
    );
};

export default HomeLayout;