// 제네릭 기본 사용법
function merge1(a: any, b: any): any {
    return {
        ...a,
        ...b
    };
}

function merge2<A, B>(a: A, b: B): A & B {
    return {
        ...a,
        ...b,
    };
}

function wrap<T>(param: T) {
    return {
        param,
    }
}

const wrapped = wrap(10);
const merged = merge1({ foo: 1 }, { bar: 1 });

// interface에서 제네릭 사용하기
interface Items<T> {
    list: T[]; 
}
// string 형식의 배열을 할당
const items: Items<string> = {
    list: ['a', 'b', 'c'] 
};

// type에 제네릭 사용하기
type Lists<T> = {
    list: T[];
}
const lists: Lists<number> = {
    list: [1, 2, 3]
}


// 클래스에서 제네릭 사용하기
class Queue<T> {
    list: T[] = [];
    get length() {
        return this.list.length;
    }
    enqueue(item: T) {
        this.list.push(item);
    }
    dequeue() {
        return this.list.shift();
    }
}

const queue = new Queue<number>();

queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log(queue.dequeue());
console.log(queue.dequeue());
