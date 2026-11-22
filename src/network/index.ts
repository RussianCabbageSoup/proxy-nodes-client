import axios from "axios";

const API_URL = import.meta.env.VITE_API || '';

type AliveProxyResponse = {
    alive: { domain: string, ping: number }[];
    count: number;
}

export const fetchAliveProxy = async (): Promise<AliveProxyResponse> => {
    try {
        const { data } = await axios.get<AliveProxyResponse>(`${API_URL}/api/proxy/alive`, {
            timeout: 10000
        });
        return data;
    } catch (error) {
        throw new Error('something went wrong: ', { cause: error });
    }
};