import type { ReactNode } from "react";
import styles from "./blockWrapper.module.css";

type BlockWrapperProps = {
    children: ReactNode;
};

const BlockWrapper = ({ children }: BlockWrapperProps) => {
    return(
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}

export default BlockWrapper;