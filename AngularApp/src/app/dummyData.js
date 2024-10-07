function ranNum(max) {
    return Math.floor(Math.random() * (max));
}

dataSet1 = ["attractive", "clean", "dazzling", "elegant", "fancy", "gorgeous",
    "handsome", "long", "short", "alive", "helpful", "important", "odd", "poor", "rich", "tender", "vast", "wrong", "aggressive", "brave", "calm", "delightful", "happy", "proud", "silly", "thankful", "witty", "angry", "clumsy", "defeated", "mysterious", "big", "gigantic", "huge", "immense", "large", "rhythmic", "sweet"];

dataSet2 = ["black", "blue", "brown", "gray", "green", "orange", "red", "violet", "white", "yellow", "magenta", "purple", "teal"];

dataSet3 = ["bench", "chair", "mountain", "castle", "computer", "bottle", "tower", "sunglasses", "deodorant", "car", "palace", "brush", "wallet", "charger", "scissor", "notebook", "wire", "belt", "popcorn", "umbrella", "basket"];

function buildData(size) {
    data = new Array(size);
    for (let i = 0; i < size; i++) {
        data[i] = dataSet1[ranNum(dataSet1.length)] + " " + dataSet2[ranNum(dataSet2.length)] + " " + dataSet3[ranNum(dataSet3.length)];
    }
    console.log(size);
    return data;
}

function deleteData() {
    data = [];
    return data;
}