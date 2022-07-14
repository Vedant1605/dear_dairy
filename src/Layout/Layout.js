import Navigation from "./Navigation/Navigation";
import classes from './Layout.module.css';
import NotingArea from "./NotingAre/NotingArea";
import { useContext } from "react";
import DairyDataContext from "../store/DairyData-context";
const Layout = (props) => {
    const ctx = useContext(DairyDataContext);
    console.log('ctx', ctx)
    return (
        <div className={classes.main}>
            <Navigation />
            <NotingArea />
        </div>
    )
}
export default Layout;