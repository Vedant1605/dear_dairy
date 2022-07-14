import NewNote from "./NewNote";
import Preview from "./Preview";
import classes from './NotingArea.module.css';
const NotingArea = (props) => {
    return (
        <div className={classes['note_area']}>
            <NewNote />
            <Preview />
        </div>
    )
}
export default NotingArea;