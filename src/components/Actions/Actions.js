import Action from "./Action";
import "./Actions.css"

const Actions = (actionHref, isCalling, actionText) => {
    return (
        <div className="actions">
            <Action href={actionHref} className={isCalling} textOnButton={actionText} />
        </div>
    );
}
export default Actions;