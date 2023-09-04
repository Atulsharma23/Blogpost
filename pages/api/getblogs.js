
import * as fs from "fs";

export default function handler(req, res) {
  console.log(req.query.slug, "req.query.slug");
  fs.readFile(
    `./components/blogdata/${req.query.slug}.json`,
    "utf-8",
    (err, data) => {
      if (err) {
        res.status(500).json({ error: "there is no such blog like this name" });
        console.log(err, "err");
      } else {
        res.status(200).json(JSON.parse(data));
      }
    }
  );
}
