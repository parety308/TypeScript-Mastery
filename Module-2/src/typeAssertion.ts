
const kgToGM = (input: string | number): number | string | undefined => {
    if (typeof input === 'number') {
        return input * 1000;
    }
    else if (typeof input === 'string') {
        const [value] = input.split(" ");
        return `Converted Output is : ${Number(value) * 1000} gm`
    }
    return 0;
}

const result1 = kgToGM(2) as number;
const result2 = kgToGM("2 kg");
console.log({ result1 });
console.log({ result2 });