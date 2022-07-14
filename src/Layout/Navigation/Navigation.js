import Navitems from "./Navitems";
import classes from './Navigation.module.css'
const Navigation=()=>(
    <nav className={classes.nav}>
        <h4>Dear Dairy</h4>
        <div className={classes.items}>
        <Navitems >My Pages</Navitems>
        </div>
    </nav>
)
export default Navigation