const Info = (isCalling) => {
    return (
        <span class="message">{isCalling ? "Calling..." : ""}</span>
    )
}

export default Info;