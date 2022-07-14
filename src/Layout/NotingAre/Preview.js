import { useContext } from "react"
import classes from "../../components/UI/NoteCard.module.css"
import DairyDataContext from "../../store/DairyData-context"

const Preview = (props) => {
    const ctx = useContext(DairyDataContext)
    return (
        <div>
            <h3 style={{"textAlign":"center"}}>Preview</h3>
            <div className={classes.note}>
                <h4>{new Date().getDate() + 'th ' + ctx.date + ' '}</h4>
                <div style={{"overflowWrap":"anywhere"}}>{ctx.text_data}</div>
            </div>
        </div>
    )
}
export default Preview