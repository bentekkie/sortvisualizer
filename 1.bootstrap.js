(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "../pkg/sortvisualizer.js":
/*!********************************!*\
  !*** ../pkg/sortvisualizer.js ***!
  \********************************/
/*! exports provided: __wbg_log_04e33013b9ec55bb, sort, __wbindgen_throw, __wbindgen_object_drop_ref */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_log_04e33013b9ec55bb", function() { return __wbg_log_04e33013b9ec55bb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sort", function() { return sort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_throw", function() { return __wbindgen_throw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_object_drop_ref", function() { return __wbindgen_object_drop_ref; });
/* harmony import */ var _sortvisualizer_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sortvisualizer_bg */ "../pkg/sortvisualizer_bg.wasm");


let cachedTextDecoder = new TextDecoder('utf-8');

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _sortvisualizer_bg__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetUint8Memory = new Uint8Array(_sortvisualizer_bg__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetUint8Memory;
}

function getStringFromWasm(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

function __wbg_log_04e33013b9ec55bb(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);
    console.log(varg0);
}

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

function __wbindgen_throw(ptr, len) {
    throw new Error(getStringFromWasm(ptr, len));
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
/* harmony import */ var m0 = __webpack_require__(/*! ./sortvisualizer */ "../pkg/sortvisualizer.js");


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
const reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
class App extends react_1.Component {
    constructor(props) {
        super(props);
        this.sortList = () => {
            this.setState({ running: true }, () => __awaiter(this, void 0, void 0, function* () {
                for (const { swap, array } of utils_1.run_sort(this.state.array, this.state.sortType)) {
                    if (this.state.delay > 0) {
                        yield utils_1.delay(this.state.delay);
                    }
                    this.setState({ array, swap });
                    if (!this.state.running)
                        break;
                }
                this.setState({ swap: [-1, -1], running: false });
            }));
        };
        this.state = {
            array: shuffleArray([...range(1, 11)]),
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
                        React.createElement(reactstrap_1.Progress, { style: { height: `100%` }, color: (this.state.swap.indexOf(i) >= 0) ? (this.state.swap[0] === this.state.swap[1]) ? "success" : "danger" : "info", value: (100 * n * 1.0 / list.length) })))))));
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
const $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
const App_1 = __webpack_require__(/*! ./App */ "./src/App.tsx");
const list = $("#list");
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
function fillList(list, array) {
    list.empty();
    list.append(array.map(n => `<li>${Array(n).fill('.').join('')}</li>`).join(""));
}
ReactDOM.render(React.createElement(App_1.App, null), document.getElementById('root'));
/*$("#n").keydown(e => {
    if(e.keyCode === 13){
        const n = $("#n").val() as number
        console.log(n)
        $("#n").prop('disabled', true);
        displaySort(n,100).then(() => $("#n").prop('disabled', false))
    }
})*/


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
})(sorts = exports.sorts || (exports.sorts = {}));
function* run_sort(original, sort_type) {
    const result = sortvisualizer_1.sort(new Uint32Array(original), sort_type);
    console.log("got array");
    let prev = { array: original, swap: [-1, -1] };
    for (let i = 0; i < result.length / 2; i++) {
        const swap = [result[(2 * i)], result[(2 * i + 1)]];
        const array = [...prev.array];
        [array[swap[0]], array[swap[1]]] = [array[swap[1]], array[swap[0]]];
        prev = { array, swap };
        yield prev;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vcGtnL3NvcnR2aXN1YWxpemVyLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHAudHN4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEM7O0FBRTVDOztBQUVBO0FBQ0E7QUFDQSx1RUFBdUUseURBQVc7QUFDbEYsNkNBQTZDLHlEQUFXO0FBQ3hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlFQUF5RSx5REFBVztBQUNwRiwrQ0FBK0MseURBQVc7QUFDMUQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsZ0JBQWdCLG9FQUFzQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0Isb0VBQXNCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxRUFBdUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQSxvQkFBb0Isb0VBQXNCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxpRkFBbUM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFlBQVk7QUFDdEIsVUFBVSxPQUFPO0FBQ2pCLFlBQVk7QUFDWjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQVM7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLGtFQUFvQjtBQUN4Qjs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7O0FB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O1FBQ3BFLElBQUksR0FBRyxFQUFDLEtBQUssRUFBQyxJQUFJLEVBQUM7UUFDbkIsTUFBTSxJQUFJO0tBQ2I7QUFFTCxDQUFDO0FBZkQsNEJBZUM7QUFFWSxhQUFLLEdBQUcsQ0FBQyxNQUFlLEVBQUUsRUFBRTtJQUNyQyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7UUFDN0IsVUFBVSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMiLCJmaWxlIjoiMS5ib290c3RyYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB3YXNtIGZyb20gJy4vc29ydHZpc3VhbGl6ZXJfYmcnO1xuXG5sZXQgY2FjaGVkVGV4dERlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoJ3V0Zi04Jyk7XG5cbmxldCBjYWNoZWdldFVpbnQ4TWVtb3J5ID0gbnVsbDtcbmZ1bmN0aW9uIGdldFVpbnQ4TWVtb3J5KCkge1xuICAgIGlmIChjYWNoZWdldFVpbnQ4TWVtb3J5ID09PSBudWxsIHx8IGNhY2hlZ2V0VWludDhNZW1vcnkuYnVmZmVyICE9PSB3YXNtLm1lbW9yeS5idWZmZXIpIHtcbiAgICAgICAgY2FjaGVnZXRVaW50OE1lbW9yeSA9IG5ldyBVaW50OEFycmF5KHdhc20ubWVtb3J5LmJ1ZmZlcik7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWdldFVpbnQ4TWVtb3J5O1xufVxuXG5mdW5jdGlvbiBnZXRTdHJpbmdGcm9tV2FzbShwdHIsIGxlbikge1xuICAgIHJldHVybiBjYWNoZWRUZXh0RGVjb2Rlci5kZWNvZGUoZ2V0VWludDhNZW1vcnkoKS5zdWJhcnJheShwdHIsIHB0ciArIGxlbikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfbG9nXzA0ZTMzMDEzYjllYzU1YmIoYXJnMCwgYXJnMSkge1xuICAgIGxldCB2YXJnMCA9IGdldFN0cmluZ0Zyb21XYXNtKGFyZzAsIGFyZzEpO1xuICAgIGNvbnNvbGUubG9nKHZhcmcwKTtcbn1cblxubGV0IGNhY2hlZ2V0VWludDMyTWVtb3J5ID0gbnVsbDtcbmZ1bmN0aW9uIGdldFVpbnQzMk1lbW9yeSgpIHtcbiAgICBpZiAoY2FjaGVnZXRVaW50MzJNZW1vcnkgPT09IG51bGwgfHwgY2FjaGVnZXRVaW50MzJNZW1vcnkuYnVmZmVyICE9PSB3YXNtLm1lbW9yeS5idWZmZXIpIHtcbiAgICAgICAgY2FjaGVnZXRVaW50MzJNZW1vcnkgPSBuZXcgVWludDMyQXJyYXkod2FzbS5tZW1vcnkuYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZ2V0VWludDMyTWVtb3J5O1xufVxuXG5sZXQgV0FTTV9WRUNUT1JfTEVOID0gMDtcblxuZnVuY3Rpb24gcGFzc0FycmF5MzJUb1dhc20oYXJnKSB7XG4gICAgY29uc3QgcHRyID0gd2FzbS5fX3diaW5kZ2VuX21hbGxvYyhhcmcubGVuZ3RoICogNCk7XG4gICAgZ2V0VWludDMyTWVtb3J5KCkuc2V0KGFyZywgcHRyIC8gNCk7XG4gICAgV0FTTV9WRUNUT1JfTEVOID0gYXJnLmxlbmd0aDtcbiAgICByZXR1cm4gcHRyO1xufVxuXG5sZXQgY2FjaGVkVGV4dEVuY29kZXIgPSBuZXcgVGV4dEVuY29kZXIoJ3V0Zi04Jyk7XG5cbmxldCBwYXNzU3RyaW5nVG9XYXNtO1xuaWYgKHR5cGVvZiBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGVJbnRvID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcGFzc1N0cmluZ1RvV2FzbSA9IGZ1bmN0aW9uKGFyZykge1xuXG4gICAgICAgIGxldCBzaXplID0gYXJnLmxlbmd0aDtcbiAgICAgICAgbGV0IHB0ciA9IHdhc20uX193YmluZGdlbl9tYWxsb2Moc2l6ZSk7XG4gICAgICAgIGxldCB3cml0ZU9mZnNldCA9IDA7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCB2aWV3ID0gZ2V0VWludDhNZW1vcnkoKS5zdWJhcnJheShwdHIgKyB3cml0ZU9mZnNldCwgcHRyICsgc2l6ZSk7XG4gICAgICAgICAgICBjb25zdCB7IHJlYWQsIHdyaXR0ZW4gfSA9IGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZUludG8oYXJnLCB2aWV3KTtcbiAgICAgICAgICAgIHdyaXRlT2Zmc2V0ICs9IHdyaXR0ZW47XG4gICAgICAgICAgICBpZiAocmVhZCA9PT0gYXJnLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJnID0gYXJnLnN1YnN0cmluZyhyZWFkKTtcbiAgICAgICAgICAgIHB0ciA9IHdhc20uX193YmluZGdlbl9yZWFsbG9jKHB0ciwgc2l6ZSwgc2l6ZSArPSBhcmcubGVuZ3RoICogMyk7XG4gICAgICAgIH1cbiAgICAgICAgV0FTTV9WRUNUT1JfTEVOID0gd3JpdGVPZmZzZXQ7XG4gICAgICAgIHJldHVybiBwdHI7XG4gICAgfTtcbn0gZWxzZSB7XG4gICAgcGFzc1N0cmluZ1RvV2FzbSA9IGZ1bmN0aW9uKGFyZykge1xuXG4gICAgICAgIGNvbnN0IGJ1ZiA9IGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZShhcmcpO1xuICAgICAgICBjb25zdCBwdHIgPSB3YXNtLl9fd2JpbmRnZW5fbWFsbG9jKGJ1Zi5sZW5ndGgpO1xuICAgICAgICBnZXRVaW50OE1lbW9yeSgpLnNldChidWYsIHB0cik7XG4gICAgICAgIFdBU01fVkVDVE9SX0xFTiA9IGJ1Zi5sZW5ndGg7XG4gICAgICAgIHJldHVybiBwdHI7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0QXJyYXlVMzJGcm9tV2FzbShwdHIsIGxlbikge1xuICAgIHJldHVybiBnZXRVaW50MzJNZW1vcnkoKS5zdWJhcnJheShwdHIgLyA0LCBwdHIgLyA0ICsgbGVuKTtcbn1cblxubGV0IGNhY2hlZEdsb2JhbEFyZ3VtZW50UHRyID0gbnVsbDtcbmZ1bmN0aW9uIGdsb2JhbEFyZ3VtZW50UHRyKCkge1xuICAgIGlmIChjYWNoZWRHbG9iYWxBcmd1bWVudFB0ciA9PT0gbnVsbCkge1xuICAgICAgICBjYWNoZWRHbG9iYWxBcmd1bWVudFB0ciA9IHdhc20uX193YmluZGdlbl9nbG9iYWxfYXJndW1lbnRfcHRyKCk7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWRHbG9iYWxBcmd1bWVudFB0cjtcbn1cbi8qKlxuKiBAcGFyYW0ge1VpbnQzMkFycmF5fSBhcnJheVxuKiBAcGFyYW0ge3N0cmluZ30gc29ydF90eXBlXG4qIEByZXR1cm5zIHtVaW50MzJBcnJheX1cbiovXG5leHBvcnQgZnVuY3Rpb24gc29ydChhcnJheSwgc29ydF90eXBlKSB7XG4gICAgY29uc3QgcHRyMCA9IHBhc3NBcnJheTMyVG9XYXNtKGFycmF5KTtcbiAgICBjb25zdCBsZW4wID0gV0FTTV9WRUNUT1JfTEVOO1xuICAgIGNvbnN0IHB0cjEgPSBwYXNzU3RyaW5nVG9XYXNtKHNvcnRfdHlwZSk7XG4gICAgY29uc3QgbGVuMSA9IFdBU01fVkVDVE9SX0xFTjtcbiAgICBjb25zdCByZXRwdHIgPSBnbG9iYWxBcmd1bWVudFB0cigpO1xuICAgIHdhc20uc29ydChyZXRwdHIsIHB0cjAsIGxlbjAsIHB0cjEsIGxlbjEpO1xuICAgIGNvbnN0IG1lbSA9IGdldFVpbnQzMk1lbW9yeSgpO1xuICAgIGNvbnN0IHJ1c3RwdHIgPSBtZW1bcmV0cHRyIC8gNF07XG4gICAgY29uc3QgcnVzdGxlbiA9IG1lbVtyZXRwdHIgLyA0ICsgMV07XG5cbiAgICBjb25zdCByZWFsUmV0ID0gZ2V0QXJyYXlVMzJGcm9tV2FzbShydXN0cHRyLCBydXN0bGVuKS5zbGljZSgpO1xuICAgIHdhc20uX193YmluZGdlbl9mcmVlKHJ1c3RwdHIsIHJ1c3RsZW4gKiA0KTtcbiAgICByZXR1cm4gcmVhbFJldDtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl90aHJvdyhwdHIsIGxlbikge1xuICAgIHRocm93IG5ldyBFcnJvcihnZXRTdHJpbmdGcm9tV2FzbShwdHIsIGxlbikpO1xufVxuXG5jb25zdCBoZWFwID0gbmV3IEFycmF5KDMyKTtcblxuaGVhcC5maWxsKHVuZGVmaW5lZCk7XG5cbmhlYXAucHVzaCh1bmRlZmluZWQsIG51bGwsIHRydWUsIGZhbHNlKTtcblxubGV0IGhlYXBfbmV4dCA9IGhlYXAubGVuZ3RoO1xuXG5mdW5jdGlvbiBkcm9wT2JqZWN0KGlkeCkge1xuICAgIGlmIChpZHggPCAzNikgcmV0dXJuO1xuICAgIGhlYXBbaWR4XSA9IGhlYXBfbmV4dDtcbiAgICBoZWFwX25leHQgPSBpZHg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diaW5kZ2VuX29iamVjdF9kcm9wX3JlZihpKSB7IGRyb3BPYmplY3QoaSk7IH1cblxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRmxpcE1vdmUgZnJvbSAncmVhY3QtZmxpcC1tb3ZlJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCwgUHJvZ3Jlc3MsIEJ1dHRvbiwgRm9ybSwgTGFiZWwsIElucHV0IH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7IHJ1bl9zb3J0LCBkZWxheSwgc29ydHMgfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IEZvcm1Hcm91cCBmcm9tICdyZWFjdHN0cmFwL2xpYi9Gb3JtR3JvdXAnO1xyXG5cclxuaW50ZXJmYWNlIElTdGF0ZSB7XHJcbiAgICBhcnJheTogbnVtYmVyW10sXHJcbiAgICBzd2FwOiBbbnVtYmVyLCBudW1iZXJdLFxyXG4gICAgc29ydFR5cGU6IHNvcnRzXHJcbiAgICBydW5uaW5nOiBib29sZWFuLFxyXG4gICAgbjogbnVtYmVyLFxyXG4gICAgZGVsYXk6IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50PHt9LCBJU3RhdGU+e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFJlYWRvbmx5PHt9Pikge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGFycmF5OiBzaHVmZmxlQXJyYXkoWy4uLnJhbmdlKDEsIDExKV0pLFxyXG4gICAgICAgICAgICBzd2FwOiBbLTEsIC0xXSxcclxuICAgICAgICAgICAgc29ydFR5cGU6IHNvcnRzLnNlbGVjdGlvbixcclxuICAgICAgICAgICAgcnVubmluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIG46IDEwLFxyXG4gICAgICAgICAgICBkZWxheTogMTAwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNvcnRMaXN0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBydW5uaW5nOiB0cnVlIH0sIGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCB7IHN3YXAsIGFycmF5IH0gb2YgcnVuX3NvcnQodGhpcy5zdGF0ZS5hcnJheSwgdGhpcy5zdGF0ZS5zb3J0VHlwZSkpIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuZGVsYXkgPiAwICl7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgZGVsYXkodGhpcy5zdGF0ZS5kZWxheSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhcnJheSwgc3dhcCB9KVxyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuc3RhdGUucnVubmluZykgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN3YXA6IFstMSwgLTFdLCBydW5uaW5nOiBmYWxzZSB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBub0d1dHRlcnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxfSBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluZm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKCh7IG4gfSkgPT4gKHsgYXJyYXk6IHNodWZmbGVBcnJheShbLi4ucmFuZ2UoMSwgbiArIDEpXSkgfSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5ydW5uaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5TaHVmZmxlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJleGFtcGxlU2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc29ydFR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHRoaXMuc2V0U3RhdGUoeyBzb3J0VHlwZTogZS50YXJnZXQudmFsdWUgYXMgc29ydHMgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLnJ1bm5pbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMoc29ydHMpLm1hcChzID0+IDxvcHRpb24gdmFsdWU9e3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnRMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLnJ1bm5pbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlNvcnQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoe3J1bm5pbmc6ZmFsc2V9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLnJ1bm5pbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlN0b3A8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgbm9HdXR0ZXJzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MX0gY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJucmFuZ2VcIj5MZW5ndGg6PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJucmFuZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibnJhbmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLXJhbmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUucnVubmluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG4gPSBlLnRhcmdldC52YWx1ZUFzTnVtYmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5OiBzaHVmZmxlQXJyYXkoWy4uLnJhbmdlKDEsIG4gKyAxKV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUucnVubmluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG4gPSBlLnRhcmdldC52YWx1ZUFzTnVtYmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5OiBzaHVmZmxlQXJyYXkoWy4uLnJhbmdlKDEsIG4gKyAxKV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgbm9HdXR0ZXJzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MX0gY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJuZGVsYXlcIj5EZWxheTo8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5kZWxheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuZGVsYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tcmFuZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9ezEwMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGVsYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLnJ1bm5pbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkZWxheSA9IGUudGFyZ2V0LnZhbHVlQXNOdW1iZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZWxheSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGVsYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLnJ1bm5pbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkZWxheSA9IGUudGFyZ2V0LnZhbHVlQXNOdW1iZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZWxheSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG5cclxuICAgICAgICAgICAgPFJvdyBzdHlsZT17eyBmbGV4R3JvdzogMSB9fT5cclxuICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYXJyYXkubWFwKChuLCBpLCBsaXN0KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IGAkezEwMCAqIDEuMCAvIGxpc3QubGVuZ3RofSVgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogYDEwMCVgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXsodGhpcy5zdGF0ZS5zd2FwLmluZGV4T2YoaSkgPj0gMCk/KHRoaXMuc3RhdGUuc3dhcFswXSA9PT0gdGhpcy5zdGF0ZS5zd2FwWzFdKT9cInN1Y2Nlc3NcIjogXCJkYW5nZXJcIiA6IFwiaW5mb1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17KDEwMCAqIG4gKiAxLjAgLyBsaXN0Lmxlbmd0aCl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuXHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNodWZmbGVBcnJheTxUIGV4dGVuZHMgbnVtYmVyPihhcnI6IFRbXSkge1xyXG4gICAgcmV0dXJuIGFyclxyXG4gICAgICAgIC5tYXAoYSA9PiBbTWF0aC5yYW5kb20oKSwgYV0pXHJcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGFbMF0gLSBiWzBdKVxyXG4gICAgICAgIC5tYXAoYSA9PiBhWzFdKTtcclxufVxyXG5mdW5jdGlvbiogcmFuZ2Uoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpOiBJdGVyYWJsZUl0ZXJhdG9yPG51bWJlcj4ge1xyXG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcclxuICAgICAgICB5aWVsZCBpO1xyXG4gICAgfVxyXG59XHJcbiIsIlxuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBBcHAgfSBmcm9tIFwiLi9BcHBcIjtcbmNvbnN0IGxpc3QgPSAkKFwiI2xpc3RcIilcblxuXG5mdW5jdGlvbiBzaHVmZmxlQXJyYXk8VCBleHRlbmRzIG51bWJlcj4oYXJyOiBUW10pIHtcbiAgICByZXR1cm4gYXJyXG4gICAgICAgIC5tYXAoYSA9PiBbTWF0aC5yYW5kb20oKSwgYV0pXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBhWzBdIC0gYlswXSlcbiAgICAgICAgLm1hcChhID0+IGFbMV0pO1xufVxuXG5mdW5jdGlvbiogcmFuZ2Uoc3RhcnQgOiBudW1iZXIsIGVuZDogbnVtYmVyKSA6IEl0ZXJhYmxlSXRlcmF0b3I8bnVtYmVyPiB7XG4gICAgZm9yKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKyl7XG4gICAgICAgIHlpZWxkIGk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBmaWxsTGlzdChsaXN0IDogSlF1ZXJ5PEhUTUxFbGVtZW50PiwgYXJyYXkgOiBhbnlbXSkge1xuICAgIGxpc3QuZW1wdHkoKTtcbiAgICBsaXN0LmFwcGVuZChhcnJheS5tYXAobiA9PiBgPGxpPiR7QXJyYXkobikuZmlsbCgnLicpLmpvaW4oJycpfTwvbGk+YCkuam9pbihcIlwiKSlcbn1cblxuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPEFwcC8+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykgYXMgSFRNTEVsZW1lbnRcbiAgKTtcbi8qJChcIiNuXCIpLmtleWRvd24oZSA9PiB7XG4gICAgaWYoZS5rZXlDb2RlID09PSAxMyl7XG4gICAgICAgIGNvbnN0IG4gPSAkKFwiI25cIikudmFsKCkgYXMgbnVtYmVyXG4gICAgICAgIGNvbnNvbGUubG9nKG4pXG4gICAgICAgICQoXCIjblwiKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICBkaXNwbGF5U29ydChuLDEwMCkudGhlbigoKSA9PiAkKFwiI25cIikucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSkpXG4gICAgfVxufSkqL1xuIiwiaW1wb3J0IHtzb3J0LH0gZnJvbSBcInNvcnR2aXN1YWxpemVyXCJcclxuXHJcbmV4cG9ydCBlbnVtIHNvcnRze1xyXG4gICAgcXVpY2sgPSBcInF1aWNrXCIsXHJcbiAgICBzZWxlY3Rpb24gPSBcInNlbGVjdGlvblwiLFxyXG4gICAgaW5zZXJ0aW9uID0gXCJpbnNlcnRpb25cIlxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBydW5fc29ydChvcmlnaW5hbDogbnVtYmVyW10sIHNvcnRfdHlwZTogc29ydHMpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHNvcnQobmV3IFVpbnQzMkFycmF5KG9yaWdpbmFsKSwgc29ydF90eXBlKTtcclxuICAgIGNvbnNvbGUubG9nKFwiZ290IGFycmF5XCIpXHJcbiAgICBsZXQgcHJldiA6IHtcclxuICAgICAgICBhcnJheTogbnVtYmVyW10sXHJcbiAgICAgICAgc3dhcDogW251bWJlcixudW1iZXJdXHJcbiAgICB9PSB7YXJyYXk6b3JpZ2luYWwsc3dhcDpbLTEsLTFdfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoIC8gMjsgaSsrKSB7XHJcbiAgICAgICAgY29uc3Qgc3dhcDogW251bWJlciwgbnVtYmVyXSA9IFtyZXN1bHRbKDIgKiBpKV0sIHJlc3VsdFsoMiAqIGkgKyAxKV1dXHJcbiAgICAgICAgY29uc3QgYXJyYXkgPSBbLi4ucHJldi5hcnJheV07XHJcbiAgICAgICAgW2FycmF5W3N3YXBbMF1dLCBhcnJheVtzd2FwWzFdXV0gPSBbYXJyYXlbc3dhcFsxXV0sIGFycmF5W3N3YXBbMF1dXTtcclxuICAgICAgICBwcmV2ID0ge2FycmF5LHN3YXB9XHJcbiAgICAgICAgeWllbGQgcHJldlxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWxheSA9IChhbW91bnQgOiBudW1iZXIpID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIGFtb3VudCk7XHJcbiAgICB9KTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=