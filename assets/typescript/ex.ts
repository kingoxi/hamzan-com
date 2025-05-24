function addNumbers(a: number, b: number): number {
    return a + b;
}

function greet(name: string): string {
    return `Hello, ${name}!`;
}

function isNull(value: string | null): boolean {
    return value === null;
}

const result1 = addNumbers(5, 10);
var result2 = greet("Alice");
var result3 = isNull(null);

result1;