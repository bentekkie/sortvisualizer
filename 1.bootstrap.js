(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "../pkg/sortvisualizer.js":
/*!********************************!*\
  !*** ../pkg/sortvisualizer.js ***!
  \********************************/
/*! exports provided: sort, __wbindgen_object_drop_ref */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sort", function() { return sort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_object_drop_ref", function() { return __wbindgen_object_drop_ref; });
/* harmony import */ var _sortvisualizer_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sortvisualizer_bg */ "../pkg/sortvisualizer_bg.wasm");


let cachegetUint32Memory = null;
function getUint32Memory() {
    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== _sortvisualizer_bg__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetUint32Memory = new Uint32Array(_sortvisualizer_bg__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetUint32Memory;
}

let WASM_VECTOR_LEN = 0;

function passArray32ToWasm(arg) {
    const ptr = _sortvisualizer_bg__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"](arg.length * 4);
    getUint32Memory().set(arg, ptr / 4);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

let cachedTextEncoder = new TextEncoder('utf-8');

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _sortvisualizer_bg__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetUint8Memory = new Uint8Array(_sortvisualizer_bg__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetUint8Memory;
}

let passStringToWasm;
if (typeof cachedTextEncoder.encodeInto === 'function') {
    passStringToWasm = function(arg) {

        let size = arg.length;
        let ptr = _sortvisualizer_bg__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"](size);
        let writeOffset = 0;
        while (true) {
            const view = getUint8Memory().subarray(ptr + writeOffset, ptr + size);
            const { read, written } = cachedTextEncoder.encodeInto(arg, view);
            writeOffset += written;
            if (read === arg.length) {
                break;
            }
            arg = arg.substring(read);
            ptr = _sortvisualizer_bg__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_realloc"](ptr, size, size += arg.length * 3);
        }
        WASM_VECTOR_LEN = writeOffset;
        return ptr;
    };
} else {
    passStringToWasm = function(arg) {

        const buf = cachedTextEncoder.encode(arg);
        const ptr = _sortvisualizer_bg__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"](buf.length);
        getUint8Memory().set(buf, ptr);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    };
}

function getArrayU32FromWasm(ptr, len) {
    return getUint32Memory().subarray(ptr / 4, ptr / 4 + len);
}

let cachedGlobalArgumentPtr = null;
function globalArgumentPtr() {
    if (cachedGlobalArgumentPtr === null) {
        cachedGlobalArgumentPtr = _sortvisualizer_bg__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_global_argument_ptr"]();
    }
    return cachedGlobalArgumentPtr;
}
/**
* @param {Uint32Array} array
* @param {string} sort_type
* @returns {Uint32Array}
*/
function sort(array, sort_type) {
    const ptr0 = passArray32ToWasm(array);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm(sort_type);
    const len1 = WASM_VECTOR_LEN;
    const retptr = globalArgumentPtr();
    _sortvisualizer_bg__WEBPACK_IMPORTED_MODULE_0__["sort"](retptr, ptr0, len0, ptr1, len1);
    const mem = getUint32Memory();
    const rustptr = mem[retptr / 4];
    const rustlen = mem[retptr / 4 + 1];

    const realRet = getArrayU32FromWasm(rustptr, rustlen).slice();
    _sortvisualizer_bg__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_free"](rustptr, rustlen * 4);
    return realRet;

}

const heap = new Array(32);

heap.fill(undefined);

heap.push(undefined, null, true, false);

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function __wbindgen_object_drop_ref(i) { dropObject(i); }



/***/ }),

/***/ "../pkg/sortvisualizer_bg.wasm":
/*!*************************************!*\
  !*** ../pkg/sortvisualizer_bg.wasm ***!
  \*************************************/
/*! exports provided: memory, __wbindgen_global_argument_ptr, sort, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Instantiate WebAssembly module
var wasmExports = __webpack_require__.w[module.i];
__webpack_require__.r(exports);
// export exports from WebAssembly module
for(var name in wasmExports) if(name != "__webpack_init__") exports[name] = wasmExports[name];
// exec imports from WebAssembly module (for esm order)


// exec wasm module
wasmExports["__webpack_init__"]()

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
class App extends react_1.Component {
    constructor(props) {
        super(props);
        this.sortList = () => {
            this.setState({ running: true }, () => __awaiter(this, void 0, void 0, function* () {
                for (const { array, swap } of utils_1.run_sort(this.state.array, this.state.sortType)) {
                    if (!this.state.running)
                        break;
                    console.log(array);
                    this.setState(prev => ({ prevArray: prev.array, array, swap }));
                    yield utils_1.delay(this.state.delay);
                }
                this.setState({ running: false, swap: [-1, -1] });
            }));
        };
        const array = shuffleArray([...range(1, 11)]);
        this.state = {
            array,
            prevArray: array,
            swap: [-1, -1],
            sortType: utils_1.sorts.selection,
            running: false,
            n: 10,
            delay: 100
        };
    }
    render() {
        return React.createElement(reactstrap_1.Container, null,
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, null,
                    React.createElement(reactstrap_1.Form, null,
                        React.createElement(reactstrap_1.Row, { noGutters: true },
                            React.createElement(reactstrap_1.Col, { xs: 1, className: "text-right" },
                                React.createElement(reactstrap_1.Button, { color: "info", onClick: () => this.setState(({ n }) => ({ array: shuffleArray([...range(1, n + 1)]) })), disabled: this.state.running }, "Shuffle")),
                            React.createElement(reactstrap_1.Col, null,
                                React.createElement(reactstrap_1.Input, { type: "select", name: "select", id: "exampleSelect", value: this.state.sortType, onChange: (e) => this.setState({ sortType: e.target.value }), disabled: this.state.running }, Object.keys(utils_1.sorts).map(s => React.createElement("option", { value: s }, s)))),
                            React.createElement(reactstrap_1.Col, { xs: 1 },
                                React.createElement(reactstrap_1.Button, { color: "success", onClick: () => {
                                        this.sortList();
                                    }, disabled: this.state.running }, "Sort")),
                            React.createElement(reactstrap_1.Col, { xs: 1 },
                                React.createElement(reactstrap_1.Button, { color: "danger", onClick: () => this.setState({ running: false }), disabled: !this.state.running }, "Stop"))),
                        React.createElement(reactstrap_1.Row, { noGutters: true },
                            React.createElement(reactstrap_1.Col, { xs: 1, className: "text-right" },
                                React.createElement(reactstrap_1.Label, { for: "nrange" }, "Length:")),
                            React.createElement(reactstrap_1.Col, null,
                                React.createElement(reactstrap_1.Input, { id: "nrange", name: "nrange", className: "custom-range", type: "range", max: 100, min: 1, step: 1, value: this.state.n, disabled: this.state.running, onChange: (e) => {
                                        let n = e.target.valueAsNumber;
                                        this.setState({
                                            n,
                                            array: shuffleArray([...range(1, n + 1)])
                                        });
                                    } })),
                            React.createElement(reactstrap_1.Col, { xs: 1 },
                                React.createElement(reactstrap_1.Input, { type: "number", value: this.state.n, disabled: this.state.running, onChange: (e) => {
                                        let n = e.target.valueAsNumber;
                                        this.setState({
                                            n,
                                            array: shuffleArray([...range(1, n + 1)])
                                        });
                                    } }))),
                        React.createElement(reactstrap_1.Row, { noGutters: true },
                            React.createElement(reactstrap_1.Col, { xs: 1, className: "text-right" },
                                React.createElement(reactstrap_1.Label, { for: "ndelay" }, "Delay:")),
                            React.createElement(reactstrap_1.Col, null,
                                React.createElement(reactstrap_1.Input, { id: "ndelay", name: "ndelay", className: "custom-range", type: "range", max: 1000, min: 0, step: 1, value: this.state.delay, disabled: this.state.running, onChange: (e) => {
                                        let delay = e.target.valueAsNumber;
                                        this.setState({ delay });
                                    } })),
                            React.createElement(reactstrap_1.Col, { xs: 1 },
                                React.createElement(reactstrap_1.Input, { type: "number", value: this.state.delay, disabled: this.state.running, onChange: (e) => {
                                        let delay = e.target.valueAsNumber;
                                        this.setState({ delay });
                                    } })))))),
            React.createElement(reactstrap_1.Row, { style: { flexGrow: 1 } },
                React.createElement(reactstrap_1.Col, null, this.state.array.map((n, i, list) => React.createElement(reactstrap_1.Row, { key: n, style: { height: `${100 * 1.0 / list.length}%` } },
                    React.createElement(reactstrap_1.Col, null,
                        React.createElement(reactstrap_1.Progress, { style: { height: `100%` }, color: (this.state.swap.indexOf(i) >= 0) ? (_.isEqual(this.state.prevArray, this.state.array)) ? "success" : "danger" : "info", value: (100 * n * 1.0 / list.length) })))))));
    }
}
exports.App = App;
function shuffleArray(arr) {
    return arr
        .map(a => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map(a => a[1]);
}
function* range(start, end) {
    for (let i = start; i < end; i++) {
        yield i;
    }
}


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
const App_1 = __webpack_require__(/*! ./App */ "./src/App.tsx");
ReactDOM.render(React.createElement(App_1.App, null), document.getElementById('root'));


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const sortvisualizer_1 = __webpack_require__(/*! sortvisualizer */ "../pkg/sortvisualizer.js");
var sorts;
(function (sorts) {
    sorts["quick"] = "quick";
    sorts["selection"] = "selection";
    sorts["insertion"] = "insertion";
    sorts["merge"] = "merge";
    sorts["gnome"] = "gnome";
    sorts["heap"] = "heap";
    sorts["bubble"] = "bubble";
    sorts["cocktail"] = "cocktail";
})(sorts = exports.sorts || (exports.sorts = {}));
function* run_sort(original, sort_type) {
    const len = original.length + 2;
    const result = sortvisualizer_1.sort(new Uint32Array(original), sort_type);
    console.log("got array");
    for (let i = 0; i < result.length / len; i++) {
        let array = [...result.slice(i * len, (i + 1) * len)];
        let swap = array.splice(array.length - 2, 2);
        yield {
            array,
            swap
        };
    }
}
exports.run_sort = run_sort;
exports.delay = (amount) => {
    return new Promise((resolve) => {
        setTimeout(resolve, amount);
    });
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vcGtnL3NvcnR2aXN1YWxpemVyLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHAudHN4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE0Qzs7QUFFNUM7QUFDQTtBQUNBLHlFQUF5RSx5REFBVztBQUNwRiwrQ0FBK0MseURBQVc7QUFDMUQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsZ0JBQWdCLG9FQUFzQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsdUVBQXVFLHlEQUFXO0FBQ2xGLDZDQUE2Qyx5REFBVztBQUN4RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLG9FQUFzQjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0JBQWdCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscUVBQXVCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0Esb0JBQW9CLG9FQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsaUZBQW1DO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxZQUFZO0FBQ3RCLFVBQVUsT0FBTztBQUNqQixZQUFZO0FBQ1o7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFTO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxrRUFBb0I7QUFDeEI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyx3Q0FBd0MsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7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TUFBTTtZQUNGLEtBQUs7WUFDTCxJQUFJO1NBQ1A7S0FDSjtBQUNMLENBQUM7QUFaRCw0QkFZQztBQUVZLGFBQUssR0FBRyxDQUFDLE1BQWUsRUFBRSxFQUFFO0lBQ3JDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtRQUM3QixVQUFVLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyIsImZpbGUiOiIxLmJvb3RzdHJhcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHdhc20gZnJvbSAnLi9zb3J0dmlzdWFsaXplcl9iZyc7XG5cbmxldCBjYWNoZWdldFVpbnQzMk1lbW9yeSA9IG51bGw7XG5mdW5jdGlvbiBnZXRVaW50MzJNZW1vcnkoKSB7XG4gICAgaWYgKGNhY2hlZ2V0VWludDMyTWVtb3J5ID09PSBudWxsIHx8IGNhY2hlZ2V0VWludDMyTWVtb3J5LmJ1ZmZlciAhPT0gd2FzbS5tZW1vcnkuYnVmZmVyKSB7XG4gICAgICAgIGNhY2hlZ2V0VWludDMyTWVtb3J5ID0gbmV3IFVpbnQzMkFycmF5KHdhc20ubWVtb3J5LmJ1ZmZlcik7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWdldFVpbnQzMk1lbW9yeTtcbn1cblxubGV0IFdBU01fVkVDVE9SX0xFTiA9IDA7XG5cbmZ1bmN0aW9uIHBhc3NBcnJheTMyVG9XYXNtKGFyZykge1xuICAgIGNvbnN0IHB0ciA9IHdhc20uX193YmluZGdlbl9tYWxsb2MoYXJnLmxlbmd0aCAqIDQpO1xuICAgIGdldFVpbnQzMk1lbW9yeSgpLnNldChhcmcsIHB0ciAvIDQpO1xuICAgIFdBU01fVkVDVE9SX0xFTiA9IGFyZy5sZW5ndGg7XG4gICAgcmV0dXJuIHB0cjtcbn1cblxubGV0IGNhY2hlZFRleHRFbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKCd1dGYtOCcpO1xuXG5sZXQgY2FjaGVnZXRVaW50OE1lbW9yeSA9IG51bGw7XG5mdW5jdGlvbiBnZXRVaW50OE1lbW9yeSgpIHtcbiAgICBpZiAoY2FjaGVnZXRVaW50OE1lbW9yeSA9PT0gbnVsbCB8fCBjYWNoZWdldFVpbnQ4TWVtb3J5LmJ1ZmZlciAhPT0gd2FzbS5tZW1vcnkuYnVmZmVyKSB7XG4gICAgICAgIGNhY2hlZ2V0VWludDhNZW1vcnkgPSBuZXcgVWludDhBcnJheSh3YXNtLm1lbW9yeS5idWZmZXIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVnZXRVaW50OE1lbW9yeTtcbn1cblxubGV0IHBhc3NTdHJpbmdUb1dhc207XG5pZiAodHlwZW9mIGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZUludG8gPT09ICdmdW5jdGlvbicpIHtcbiAgICBwYXNzU3RyaW5nVG9XYXNtID0gZnVuY3Rpb24oYXJnKSB7XG5cbiAgICAgICAgbGV0IHNpemUgPSBhcmcubGVuZ3RoO1xuICAgICAgICBsZXQgcHRyID0gd2FzbS5fX3diaW5kZ2VuX21hbGxvYyhzaXplKTtcbiAgICAgICAgbGV0IHdyaXRlT2Zmc2V0ID0gMDtcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHZpZXcgPSBnZXRVaW50OE1lbW9yeSgpLnN1YmFycmF5KHB0ciArIHdyaXRlT2Zmc2V0LCBwdHIgKyBzaXplKTtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVhZCwgd3JpdHRlbiB9ID0gY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlSW50byhhcmcsIHZpZXcpO1xuICAgICAgICAgICAgd3JpdGVPZmZzZXQgKz0gd3JpdHRlbjtcbiAgICAgICAgICAgIGlmIChyZWFkID09PSBhcmcubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcmcgPSBhcmcuc3Vic3RyaW5nKHJlYWQpO1xuICAgICAgICAgICAgcHRyID0gd2FzbS5fX3diaW5kZ2VuX3JlYWxsb2MocHRyLCBzaXplLCBzaXplICs9IGFyZy5sZW5ndGggKiAzKTtcbiAgICAgICAgfVxuICAgICAgICBXQVNNX1ZFQ1RPUl9MRU4gPSB3cml0ZU9mZnNldDtcbiAgICAgICAgcmV0dXJuIHB0cjtcbiAgICB9O1xufSBlbHNlIHtcbiAgICBwYXNzU3RyaW5nVG9XYXNtID0gZnVuY3Rpb24oYXJnKSB7XG5cbiAgICAgICAgY29uc3QgYnVmID0gY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlKGFyZyk7XG4gICAgICAgIGNvbnN0IHB0ciA9IHdhc20uX193YmluZGdlbl9tYWxsb2MoYnVmLmxlbmd0aCk7XG4gICAgICAgIGdldFVpbnQ4TWVtb3J5KCkuc2V0KGJ1ZiwgcHRyKTtcbiAgICAgICAgV0FTTV9WRUNUT1JfTEVOID0gYnVmLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIHB0cjtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRBcnJheVUzMkZyb21XYXNtKHB0ciwgbGVuKSB7XG4gICAgcmV0dXJuIGdldFVpbnQzMk1lbW9yeSgpLnN1YmFycmF5KHB0ciAvIDQsIHB0ciAvIDQgKyBsZW4pO1xufVxuXG5sZXQgY2FjaGVkR2xvYmFsQXJndW1lbnRQdHIgPSBudWxsO1xuZnVuY3Rpb24gZ2xvYmFsQXJndW1lbnRQdHIoKSB7XG4gICAgaWYgKGNhY2hlZEdsb2JhbEFyZ3VtZW50UHRyID09PSBudWxsKSB7XG4gICAgICAgIGNhY2hlZEdsb2JhbEFyZ3VtZW50UHRyID0gd2FzbS5fX3diaW5kZ2VuX2dsb2JhbF9hcmd1bWVudF9wdHIoKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZEdsb2JhbEFyZ3VtZW50UHRyO1xufVxuLyoqXG4qIEBwYXJhbSB7VWludDMyQXJyYXl9IGFycmF5XG4qIEBwYXJhbSB7c3RyaW5nfSBzb3J0X3R5cGVcbiogQHJldHVybnMge1VpbnQzMkFycmF5fVxuKi9cbmV4cG9ydCBmdW5jdGlvbiBzb3J0KGFycmF5LCBzb3J0X3R5cGUpIHtcbiAgICBjb25zdCBwdHIwID0gcGFzc0FycmF5MzJUb1dhc20oYXJyYXkpO1xuICAgIGNvbnN0IGxlbjAgPSBXQVNNX1ZFQ1RPUl9MRU47XG4gICAgY29uc3QgcHRyMSA9IHBhc3NTdHJpbmdUb1dhc20oc29ydF90eXBlKTtcbiAgICBjb25zdCBsZW4xID0gV0FTTV9WRUNUT1JfTEVOO1xuICAgIGNvbnN0IHJldHB0ciA9IGdsb2JhbEFyZ3VtZW50UHRyKCk7XG4gICAgd2FzbS5zb3J0KHJldHB0ciwgcHRyMCwgbGVuMCwgcHRyMSwgbGVuMSk7XG4gICAgY29uc3QgbWVtID0gZ2V0VWludDMyTWVtb3J5KCk7XG4gICAgY29uc3QgcnVzdHB0ciA9IG1lbVtyZXRwdHIgLyA0XTtcbiAgICBjb25zdCBydXN0bGVuID0gbWVtW3JldHB0ciAvIDQgKyAxXTtcblxuICAgIGNvbnN0IHJlYWxSZXQgPSBnZXRBcnJheVUzMkZyb21XYXNtKHJ1c3RwdHIsIHJ1c3RsZW4pLnNsaWNlKCk7XG4gICAgd2FzbS5fX3diaW5kZ2VuX2ZyZWUocnVzdHB0ciwgcnVzdGxlbiAqIDQpO1xuICAgIHJldHVybiByZWFsUmV0O1xuXG59XG5cbmNvbnN0IGhlYXAgPSBuZXcgQXJyYXkoMzIpO1xuXG5oZWFwLmZpbGwodW5kZWZpbmVkKTtcblxuaGVhcC5wdXNoKHVuZGVmaW5lZCwgbnVsbCwgdHJ1ZSwgZmFsc2UpO1xuXG5sZXQgaGVhcF9uZXh0ID0gaGVhcC5sZW5ndGg7XG5cbmZ1bmN0aW9uIGRyb3BPYmplY3QoaWR4KSB7XG4gICAgaWYgKGlkeCA8IDM2KSByZXR1cm47XG4gICAgaGVhcFtpZHhdID0gaGVhcF9uZXh0O1xuICAgIGhlYXBfbmV4dCA9IGlkeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5fb2JqZWN0X2Ryb3BfcmVmKGkpIHsgZHJvcE9iamVjdChpKTsgfVxuXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBGbGlwTW92ZSBmcm9tICdyZWFjdC1mbGlwLW1vdmUnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCwgUHJvZ3Jlc3MsIEJ1dHRvbiwgRm9ybSwgTGFiZWwsIElucHV0IH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7IHJ1bl9zb3J0LCBkZWxheSwgc29ydHMgfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IEZvcm1Hcm91cCBmcm9tICdyZWFjdHN0cmFwL2xpYi9Gb3JtR3JvdXAnO1xyXG5pbXBvcnQgeyBTb3J0ZXIgfSBmcm9tICcuL2pzbW9kdWxlJztcclxuXHJcbmludGVyZmFjZSBJU3RhdGUge1xyXG4gICAgcHJldkFycmF5OiBudW1iZXJbXSxcclxuICAgIGFycmF5OiBudW1iZXJbXSxcclxuICAgIHN3YXA6IG51bWJlcltdLFxyXG4gICAgc29ydFR5cGU6IHNvcnRzXHJcbiAgICBydW5uaW5nOiBib29sZWFuLFxyXG4gICAgbjogbnVtYmVyLFxyXG4gICAgZGVsYXk6IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50PHt9LCBJU3RhdGU+e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFJlYWRvbmx5PHt9Pikge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gc2h1ZmZsZUFycmF5KFsuLi5yYW5nZSgxLCAxMSldKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBhcnJheSxcclxuICAgICAgICAgICAgcHJldkFycmF5OiBhcnJheSxcclxuICAgICAgICAgICAgc3dhcDogWy0xLCAtMV0sXHJcbiAgICAgICAgICAgIHNvcnRUeXBlOiBzb3J0cy5zZWxlY3Rpb24sXHJcbiAgICAgICAgICAgIHJ1bm5pbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBuOiAxMCxcclxuICAgICAgICAgICAgZGVsYXk6IDEwMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzb3J0TGlzdCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcnVubmluZzogdHJ1ZSB9LCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZvcihjb25zdCB7YXJyYXksc3dhcH0gb2YgcnVuX3NvcnQodGhpcy5zdGF0ZS5hcnJheSwgdGhpcy5zdGF0ZS5zb3J0VHlwZSkpe1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuc3RhdGUucnVubmluZykgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcnJheSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHByZXYgPT4gKHtwcmV2QXJyYXk6cHJldi5hcnJheSxhcnJheSxzd2FwfSkpXHJcbiAgICAgICAgICAgICAgICBhd2FpdCBkZWxheSh0aGlzLnN0YXRlLmRlbGF5KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3J1bm5pbmc6IGZhbHNlLHN3YXA6Wy0xLC0xXX0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93IG5vR3V0dGVycz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezF9IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5mb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoKHsgbiB9KSA9PiAoeyBhcnJheTogc2h1ZmZsZUFycmF5KFsuLi5yYW5nZSgxLCBuICsgMSldKSB9KSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLnJ1bm5pbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlNodWZmbGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImV4YW1wbGVTZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zb3J0VHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gdGhpcy5zZXRTdGF0ZSh7IHNvcnRUeXBlOiBlLnRhcmdldC52YWx1ZSBhcyBzb3J0cyB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUucnVubmluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhzb3J0cykubWFwKHMgPT4gPG9wdGlvbiB2YWx1ZT17c30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydExpc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUucnVubmluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+U29ydDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7cnVubmluZzpmYWxzZX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUucnVubmluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+U3RvcDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBub0d1dHRlcnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxfSBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGZvcj1cIm5yYW5nZVwiPkxlbmd0aDo8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5yYW5nZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJucmFuZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tcmFuZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9ezEwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5ydW5uaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbiA9IGUudGFyZ2V0LnZhbHVlQXNOdW1iZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXk6IHNodWZmbGVBcnJheShbLi4ucmFuZ2UoMSwgbiArIDEpXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5ydW5uaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbiA9IGUudGFyZ2V0LnZhbHVlQXNOdW1iZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXk6IHNodWZmbGVBcnJheShbLi4ucmFuZ2UoMSwgbiArIDEpXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBub0d1dHRlcnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxfSBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGZvcj1cIm5kZWxheVwiPkRlbGF5OjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmRlbGF5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5kZWxheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1yYW5nZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17MTAwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kZWxheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUucnVubmluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRlbGF5ID0gZS50YXJnZXQudmFsdWVBc051bWJlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRlbGF5IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kZWxheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUucnVubmluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRlbGF5ID0gZS50YXJnZXQudmFsdWVBc051bWJlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRlbGF5IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgICAgICA8Um93IHN0eWxlPXt7IGZsZXhHcm93OiAxIH19PlxyXG4gICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5hcnJheS5tYXAoKG4sIGksIGxpc3QpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogYCR7MTAwICogMS4wIC8gbGlzdC5sZW5ndGh9JWAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZ3Jlc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBgMTAwJWAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9eyh0aGlzLnN0YXRlLnN3YXAuaW5kZXhPZihpKSA+PSAwKT8oXy5pc0VxdWFsKHRoaXMuc3RhdGUucHJldkFycmF5LHRoaXMuc3RhdGUuYXJyYXkpKT9cInN1Y2Nlc3NcIjogXCJkYW5nZXJcIiA6IFwiaW5mb1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17KDEwMCAqIG4gKiAxLjAgLyBsaXN0Lmxlbmd0aCl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuXHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNodWZmbGVBcnJheTxUIGV4dGVuZHMgbnVtYmVyPihhcnI6IFRbXSkge1xyXG4gICAgcmV0dXJuIGFyclxyXG4gICAgICAgIC5tYXAoYSA9PiBbTWF0aC5yYW5kb20oKSwgYV0pXHJcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGFbMF0gLSBiWzBdKVxyXG4gICAgICAgIC5tYXAoYSA9PiBhWzFdKTtcclxufVxyXG5mdW5jdGlvbiogcmFuZ2Uoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpOiBJdGVyYWJsZUl0ZXJhdG9yPG51bWJlcj4ge1xyXG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcclxuICAgICAgICB5aWVsZCBpO1xyXG4gICAgfVxyXG59XHJcbiIsIlxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4vQXBwXCI7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8QXBwLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSBhcyBIVE1MRWxlbWVudFxuICApO1xuIiwiaW1wb3J0IHtzb3J0LH0gZnJvbSBcInNvcnR2aXN1YWxpemVyXCJcclxuXHJcbmV4cG9ydCBlbnVtIHNvcnRze1xyXG4gICAgcXVpY2sgPSBcInF1aWNrXCIsXHJcbiAgICBzZWxlY3Rpb24gPSBcInNlbGVjdGlvblwiLFxyXG4gICAgaW5zZXJ0aW9uID0gXCJpbnNlcnRpb25cIixcclxuICAgIG1lcmdlID0gXCJtZXJnZVwiLFxyXG4gICAgZ25vbWUgPSBcImdub21lXCIsXHJcbiAgICBoZWFwID0gXCJoZWFwXCIsXHJcbiAgICBidWJibGUgPSBcImJ1YmJsZVwiLFxyXG4gICAgY29ja3RhaWwgPSBcImNvY2t0YWlsXCJcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogcnVuX3NvcnQob3JpZ2luYWw6IG51bWJlcltdLCBzb3J0X3R5cGU6IHNvcnRzKSB7XHJcbiAgICBjb25zdCBsZW4gPSBvcmlnaW5hbC5sZW5ndGgrMjtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHNvcnQobmV3IFVpbnQzMkFycmF5KG9yaWdpbmFsKSwgc29ydF90eXBlKTtcclxuICAgIGNvbnNvbGUubG9nKFwiZ290IGFycmF5XCIpXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGggLyBsZW47IGkrKykge1xyXG4gICAgICAgIGxldCBhcnJheSA9IFsuLi5yZXN1bHQuc2xpY2UoaSpsZW4sKGkrMSkqbGVuKV07XHJcbiAgICAgICAgbGV0IHN3YXAgPSBhcnJheS5zcGxpY2UoYXJyYXkubGVuZ3RoLTIsMik7XHJcbiAgICAgICAgeWllbGQge1xyXG4gICAgICAgICAgICBhcnJheSxcclxuICAgICAgICAgICAgc3dhcFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGF5ID0gKGFtb3VudCA6IG51bWJlcikgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgYW1vdW50KTtcclxuICAgIH0pO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==