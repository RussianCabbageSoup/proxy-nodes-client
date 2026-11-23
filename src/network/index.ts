export const API_URL = import.meta.env.VITE_API || '';

export type AliveProxyResponse = {
    alive: { domain: string, ping: number }[];
    count: number;
    totalCount: number;
};