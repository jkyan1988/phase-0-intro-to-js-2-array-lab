// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(name) {
    name = cats.push(name);
}

function destructivelyPrependCat(name) {
    name = cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    name = cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    name = cats.shift(name);
}

function appendCat(name){
    const CopyCats = [...cats]
    CopyCats.push(name);
    return CopyCats;
}

function prependCat(name){
    const CopyCats = [...cats]
    CopyCats.unshift(name);
    return CopyCats;
}

function removeLastCat(name){
    const CopyCats = [...cats]
    CopyCats.pop(name);
    return CopyCats;
}

function removeFirstCat(name){
    const CopyCats = [...cats]
    CopyCats.shift(name);
    return CopyCats;
}