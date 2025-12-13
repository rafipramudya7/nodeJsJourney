# Await vs Syncronus

mungkin dalam outputnya terlihat hampir sama. Dalam menjalankan await seloah sync , namun perbedaanya  pada await itu blocking tehadap fungsinya sendiri sedangkan syncronus dia blocking terhadap semua. contoh kode `./await.js`

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

Ketika code tersebut dijalankanakan menghasilkan output:

```
0
1
2
3
```
hal tersebut menunjukan bahwa ia akan mengeksekusi semua perintah secara asyncronus kecuali function nya sendiri, menunggu dulu selama dua detik baru `console.log(3)`
