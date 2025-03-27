import { skipData } from "./mockData";

export const fetchSkipData = (): Promise<typeof skipData> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(skipData), 200);
    });
};
