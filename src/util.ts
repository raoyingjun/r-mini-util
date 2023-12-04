function randomNum(min: number, max: number) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

function randomHexColor(prefix = true) {
    let hexColor = "";
    for (let i = 0; i < 3; i++) {
        hexColor += randomNum(0, 255).toString(16).padStart(2, "0");
    }
    hexColor += prefix ? "#" : "";
    return hexColor;
}

function shuffleArray(arr: number[]) {
    for (let i = 0, len = arr.length; i < arr.length; i++) {
        let j = randomNum(i, len - 1);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

type BasicType = 'Object' | 'Array' | 'Function' | 'Symbol' | 'String' | 'Number' | 'Boolean'

function is(type: BasicType, o: any) {
    return Object.prototype.toString.call(o).includes(o)
}

function isFunction(o: any) {
    return is('Function', o)
}

function isArray(o: any) {
    return is('Array', o)
}

function isObject(o: any) {
    return is('Object', o)
}

function isEmptyObject(o: any) {
    return isObject(o) && !Object.keys(o).length;
}

function debounce(fn: () => unknown, threshold = 300) {
    let timer: ReturnType<typeof setTimeout>;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(fn, threshold);
    };
}

export {
    randomNum,
    randomHexColor,

    is,
    isObject,
    isArray,
    isFunction,
    isEmptyObject,

    shuffleArray,

    debounce,
}

