// type 사용
type Person = {
    name: string;
    age?: number;
};

// & 표시는 interface의 extends같은 역할
type Developer = Person & {
    skills: string[];
};

const person: Person = {
    name: '김사랑'
};

const expert: Developer = {
    name: '김개발',
    skills: ['javascript', 'react'],
};

type People = Person[];
const people: People = [person, expert];

type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'red';
const colors: Color[] = ['red', 'orange'];

console.log(people, color, colors);