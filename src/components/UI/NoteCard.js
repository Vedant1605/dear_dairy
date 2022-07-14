import { useContext } from 'react';
import DairyDataContext from '../../store/DairyData-context';
import classes from './NoteCard.module.css';

const NoteCard = (props) => {
    const ctx = useContext(DairyDataContext);
    console.log('ctx', ctx)
    return(
        <div className={classes.note}>
            <h4>{new Date().getDate()+'th '+ctx.date+' ' }</h4>
            <textarea className={classes.textFeild} height="50px" type="text" size={500} placeholder='Tell me abt ur day' onKeyUp={(e)=>{ctx.typed(e)}}/>
        </div>
    )
}
export default NoteCard