const dbDate = (date: string): Date => {
    const ts: number = new Date(date).getTime();

    const addTime: number = 9 * 60 * 60 * 1000;

    return new Date(ts + addTime);
};