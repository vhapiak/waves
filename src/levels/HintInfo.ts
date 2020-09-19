
export type HintInfo = {
    description: string;
    x: number;
    y: number;
    align: string;
    anchor: {
        x: number;
        y: number;
    };
    pointTo?: {
        x: number;
        y: number;
    };
};