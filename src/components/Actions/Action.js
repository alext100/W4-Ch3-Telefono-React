const Action = ({ actionHref, isCalling, actionText }) => {

    return (
        <a href={actionHref} className={`${isCalling ? "active" : "hang"}`}> {actionText}</a >
    );
}

export default Action;