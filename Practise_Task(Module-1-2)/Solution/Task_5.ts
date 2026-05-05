function logLength<T extends { length: number }>(input: T): number {
    console.log(input.length);
    return input.length;
}
logLength("Parvez");
logLength([1, 2, 3, 4]);
logLength({ length: 10 }); 