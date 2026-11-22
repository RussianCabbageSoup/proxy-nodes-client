import styles from "./RequestInfo.module.css";

type Props = {
    count: number;
};

const RequestInfo = ({ count }: Props) => {
    return (
        <div className={styles.info}>
            <h3 className={styles.title}>Stats</h3>
            <ul className={styles.body}>
                <li className={styles.row}>
                    <div className={styles.key}>Total Count</div>
                    <div className={styles.value}>4</div>
                </li>
                <li className={styles.row}>
                    <div className={styles.key}>Loaded Nodes</div>
                    <div
                        className={`${styles.value} ${count === 0 ? `${styles.error}` : ''}`}>
                        {count}
                    </div>
                </li>
                <li className={styles.row}>
                    <div className={styles.key}>Jumps</div>
                    <div className={styles.value}>?</div>
                </li>
            </ul>
        </div>
    )
}

export default RequestInfo;