import { useEffect, useState } from "react";
import type { AliveProxyResponse } from "../network";
import { socket } from "../network/socket";

export type AliveProxy = {
    domain: string;
    ping: number;
};

export type AliveProxyState = {
    list: AliveProxy[];
    count: number,
    totalCount: number;
    loading: boolean;
    error: string | null;
}

export const useAliveProxy = () => {
    const [state, setState] = useState<AliveProxyState>({
        list: [],
        count: 0,
        totalCount: 0,
        loading: true,
        error: null
    });

    useEffect(() => {
        const onAlive = (data: AliveProxyResponse) => {
            setState({
                list: data.alive,
                count: data.count,
                totalCount: data.totalCount,
                loading: false,
                error: null
            });
        }

        const onError = (err: Error) => {
            setState((prev) => ({ ...prev, loading: false, error: err.message }));
        }

        socket.on("proxy:alive", onAlive);
        socket.on("connect_error", onError);
        socket.connect();

        return () => {
            socket.off("proxy:alive", onAlive);
            socket.off("connect_error", onError);
            socket.disconnect();
        }
    }, []);

    return state;
}