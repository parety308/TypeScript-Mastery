class Counter {
    static count: number = 0;
    Increment() {
       return Counter.count++;
    }
    Decrement() {
       return  Counter.count--;
    }
}

const in1=new Counter();
console.log(in1.Increment());
console.log(in1.Increment());
console.log(in1.Increment());
console.log(in1.Increment());
const in2=new Counter();
console.log(in2.Increment());
console.log(in2.Increment());
console.log(in2.Increment());
console.log(in2.Increment());