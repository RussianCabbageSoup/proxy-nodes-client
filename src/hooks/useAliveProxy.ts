import { useCallback, useEffect, useState } from "react";
import { fetchAliveProxy } from "../network";

type AliveProxy = {
    domain: string;
    ping: number;
};

type AliveProxyState = {
    list: AliveProxy[];
    count: number,
    loading: boolean;
    error: string | null;
}

export const useAliveProxy = () => {
    const [state, setState] = useState<AliveProxyState>({
        list: [],
        count: 0,
        loading: true,
        error: null
    });

    const load = useCallback(async () => {
        setState((prev) => ({ ...prev, loading: true, error: null }));

        try {
            const response = await fetchAliveProxy();

            setState({
                list: response.alive,
                count: response.count,
                loading: false,
                error: null
            });
        } catch (err) {
            setState({
                list: [],
                count: 0,
                loading: false,
                error: err instanceof Error ? err.message : 'Unknown error'
            });
        }
    }, []);

    useEffect(() => {
        load();
    }, [load]);

    return { ...state, reload: load };
}