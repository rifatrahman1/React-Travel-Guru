import { Outlet } from "react-router-dom";
// import Header from "../Components/Header";

const Main_layout = () => {
    return (
        <div>
            {/* <Header /> */}
            <Outlet />
        </div>
    );
};

export default Main_layout;
