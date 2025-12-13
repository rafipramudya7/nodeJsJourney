# Await vs Syncronus

mungkin dalam konteks terlehat hampir sama. Dalam menjalankan await seloah sync , namun perbedaanya  pada await itu blocking tehadap fungsinya sendiri sedangkan syncronus dia blocking terhadap semua. contoh kode `./await.js`

```
async function demo() {
    console.log("1");
    await new Promise(r => setTimeout(r, 2000));
    console.log("3");
}

console.log("0");
demo();
console.log("2");


```
