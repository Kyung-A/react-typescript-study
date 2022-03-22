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

// class에 interface 사용 예제
interface Shape {
    getArea(): number;
}

class Circle implements Shape {
    // Shape interfaced의 조건을 충족
    // radius: number;

    // constructor(radius: number) {
    //     this.radius = radius;
    // }

    // 위 주석된 코드들은 아래 코드처럼 public을 사용해 설정 가능
    constructor(public radius: number) {
        this.radius = radius;
    }

    getArea() {
        return this.radius * this.radius * Math.PI; // Math.PI은 약 3.14259 값을 의미 (원주율)
    }
}


class Rectangle implements Shape {
    // width: number;
    // height: number;
    // constructor(width: number, height: number) {
    //     this.width = width;
    //     this.height = height;
    // }
    constructor(private width:number, private height: number) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height; // 10 * 5가 대입됨
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];


shapes.forEach(shape => {
    console.log(shape.getArea());  // 78.5398..... 과 50이 순서대로 출력됨
});


// 일반 객체에 interface 사용 예제
interface Person {
    name: string;
    age?: number; // 옵션값 (필수값이 아님)
}

// interface Developer {
//     name: string;
//     age?: number;
//     skills: string[];
// }

// interface의 상속
interface Developer extends Person {
    skills: string[];
}


const person: Person = {
    name: '김철수',
    age: 20,
}

const expert: Developer = {
    name: '김개발',
    skills: ['javascript', 'react'],
}

const people: Person[] = [person, expert];