const strContains = (string1, string2) => {
    if (string2) {
        return string1.toLowerCase().includes(string2.toLowerCase());
    } else {
        string2 = '';
        return string1.toLowerCase().includes(string2.toLowerCase());
    }
}

export default strContains;
