import Key from "./Key";

const Keyboard = () => {
    const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

    return (
        <ol className="keyboard">
            {buttons.map((button, index) => (
                <li key={index}> <Key keyNumber={button} /> </li>))}
            <li><button className="key big">delete</button></li>
        </ol>
    );
}

export default Keyboard;