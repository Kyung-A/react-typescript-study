"use strict";
function sum(x, y) {
    // 마지막 : number는 해당 함수의 반환값이 숫자라는 것을 명시함
    return x + y;
}
sum(1, 5);
function sumArray(numbers) {
    return numbers.reduce(function (acc, current) { return acc + current; }, 0);
}
var total = sumArray([1, 2, 3, 4, 5]);
// 아무것도 반환하지 않는 경우는 void를 사용
function returnNothing() {
    console.log('hello world');
}
var Circle = /** @class */ (function () {
    // Shape interfaced의 조건을 충족
    // radius: number;
    // constructor(radius: number) {
    //     this.radius = radius;
    // }
    // 위 주석된 코드들은 아래 코드처럼 public을 사용해 설정 가능
    function Circle(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI; // Math.PI은 약 3.14259 값을 의미 (원주율)
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    // width: number;
    // height: number;
    // constructor(width: number, height: number) {
    //     this.width = width;
    //     this.height = height;
    // }
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height; // 10 * 5가 대입됨
    };
    return Rectangle;
}());
var circle = new Circle(5);
var rectangle = new Rectangle(10, 5);
var shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(function (shape) {
    console.log(shape.getArea()); // 78.5398..... 과 50이 순서대로 출력됨
});
var person = {
    name: '김철수',
    age: 20,
};
var expert = {
    name: '김개발',
    skills: ['javascript', 'react'],
};
var people = [person, expert];
console.log(people);
