function sum(x: number, y: number): number {
    // 마지막 : number는 해당 함수의 반환값이 숫자라는 것을 명시함
    return x + y;
}

sum(1, 5);

function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1, 2, 3, 4, 5]);

// 아무것도 반환하지 않는 경우는 void를 사용
function returnNothing(): void {
    console.log('hello world');
}

interface Shape {
    getArea(): number;
}

class Circle implements Shape {
    // Shape interfaced의 조건을 충족
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
