import type { AliveProxy } from "../../hooks/useAliveProxy";
import styles from "./AvailableProxy.module.css";

type Props = {
    list: AliveProxy[];
};

const AvailableProxy = ({ list }: Props) => {
    return (
        <div className={styles.info}>
            <h3 className={styles.title}>Available proxy</h3>
            <ul className={styles.body}>
                {list.map(i => (
                    <li className={styles.row} key={i.domain}>
                        <div className={styles.key}>{i.domain}</div>
                        <div className={styles.value}>{i.ping} ms</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AvailableProxy;