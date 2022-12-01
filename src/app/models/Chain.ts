export interface Chain {
    id?: string;
    name?: string;
    symbol?: string[];
    description?: string;
    state?: 'polygon' | 'ethereum' | 'binance' | null;
}
