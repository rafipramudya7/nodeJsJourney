async function demo() {
    console.log("1");
    await new Promise(r => setTimeout(r, 2000));
    console.log("3");
}

console.log("0");
demo();
console.log("2");