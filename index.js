// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    return cats.push(name);
};

function destructivelyPrependCat(name) {
    return cats.unshift(name);
};

function destructivelyRemoveLastCat(name) {
    cats.pop();
    return cats;
};

function destructivelyRemoveFirstCat(name) {
    cats.shift();
    return cats;
};

function appendCat(name) {
    let appendendCats = [...cats, name];
    return appendendCats;
};

function prependCat(name) {
    let prependedCats = [name, ...cats];
    return prependedCats;
};

function removeLastCat() {
    let firstTwoCats = cats.slice(0, 2)
    return firstTwoCats;
};

function removeFirstCat() {
    let lastTwoCats = cats.slice(1)
    return lastTwoCats;
};