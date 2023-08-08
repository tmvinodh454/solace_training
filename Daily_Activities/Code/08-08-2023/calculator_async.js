function performOperation(x, y, operation) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(operation(x, y));
        }, 2000);
    });
}

async function calculateAndOutput(x, y, operationName, operationFunc) {
    const result = await performOperation(x, y, operationFunc);
    console.log(`${operationName} result:`, result);
}

async function main() {
    await calculateAndOutput(10, 20, 'Add', (x, y) => x + y);
    await calculateAndOutput(50, 30, 'Subtract', (x, y) => x - y);
    await calculateAndOutput(10, 40, 'Multiply', (x, y) => x * y);
    await calculateAndOutput(20, 2, 'Divide', (x, y) => x / y);
    await calculateAndOutput(50, 5, 'Percentage', (x, y) => x % y);
}

main();
