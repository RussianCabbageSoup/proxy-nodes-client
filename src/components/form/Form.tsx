import type { SubmitEvent } from "react";
import styles from "./Form.module.css";

const Form = () => {
    const handle = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return(
        <form className={styles.form} onSubmit={(e) => handle(e)}>
            <input type="text" placeholder="http://localhost:5000" />
            <button>Start</button>
        </form>
    )
}

export default Form;