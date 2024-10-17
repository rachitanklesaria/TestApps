function ranNum(max) {
    return Math.floor(Math.random() * (max));
}

chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
len = 6;

function buildData(size) {
    data = new Array(size);
    for (let i = 0; i < size; i++) {
        let str = "";
        for (let j = 0; j < len; j++) {
            str += chars.charAt(ranNum(chars.length));
        }
        data[i] = str;
    }
    return data;
}