import { randomNum, randomHexColor, is, isObject, isArray, isFunction, isEmptyObject, shuffleArray, debounce } from "./util";
export { randomNum, randomHexColor, is, isObject, isArray, isFunction, isEmptyObject, shuffleArray, debounce, };
declare const rMiniUtil: {
    randomNum: typeof randomNum;
    randomHexColor: typeof randomHexColor;
    is: typeof is;
    isObject: typeof isObject;
    isArray: typeof isArray;
    isFunction: typeof isFunction;
    isEmptyObject: typeof isEmptyObject;
    shuffleArray: typeof shuffleArray;
    debounce: typeof debounce;
};
export default rMiniUtil;
