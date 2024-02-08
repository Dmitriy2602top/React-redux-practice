export const stringLimit = (str: string, length: number) => {
    const string = str.split('');
    if (string.length > length) {
        string.length = length;
        return string.join('') + '...';
    }
    return string.join('');
};
