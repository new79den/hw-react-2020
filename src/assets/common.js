export const isValidLocalStorageTime = (time) => {
    const different = Math.abs(new Date().getTime() - time);
    return different < 600000;
}