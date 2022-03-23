"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// 제네릭 기본 사용법
function merge1(a, b) {
    return __assign(__assign({}, a), b);
}
function merge2(a, b) {
    return __assign(__assign({}, a), b);
}
function wrap(param) {
    return {
        param: param,
    };
}
var wrapped = wrap(10);
var merged = merge1({ foo: 1 }, { bar: 1 });
// string 형식의 배열을 할당
var items = {
    list: ['a', 'b', 'c']
};
var lists = {
    list: [1, 2, 3]
};
// 클래스에서 제네릭 사용하기
var Queue = /** @class */ (function () {
    function Queue() {
        this.list = [];
    }
    Object.defineProperty(Queue.prototype, "length", {
        get: function () {
            return this.list.length;
        },
        enumerable: false,
        configurable: true
    });
    Queue.prototype.enqueue = function (item) {
        this.list.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.list.shift();
    };
    return Queue;
}());
var queue = new Queue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
