import { Outlet } from "react-router-dom";

const Main_layout = () => {
    return (
        <div className="">
            <Outlet></Outlet>
        </div>
    );
};

export default Main_layout;