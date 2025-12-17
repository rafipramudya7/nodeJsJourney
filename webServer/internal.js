import http from "node:http";
import fs from "fs";
const server = http.createServer();
var bool = 0;
const paging = (halaman) => {
  bool = 1;
  return fs.readFileSync(halaman, "utf-8");
};

server.on("request", (req, res) => {
  const url = req.url;
  console.log(url);

  var path = "./" + url + ".html";
  try {
    if (path.includes("..")) {
      console.log("ada yang coba hack!!");
      throw new Error("jangan coba hack");
    }
    const html = paging(path);

    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.end(html);
  } catch (err) {
    res.writeHead(400, {
      "content-type": "text/html",
    });
    res.end(paging("./error.html"));
  }
});

server.listen(8000, () => {
  console.log("server sedang mendengarkan...");
});
