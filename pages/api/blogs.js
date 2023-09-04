// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { error } from "console";
// export default function handler(req, res) {
//   fs.readdir("components/blogdata", (err, data) => {
//     console.log(data);
//     data.forEach((item)=>{
// console.log(item)
//     })

//     res.status(200).json((data));
//   });
// }
// import * as fs from "fs";

// export default async function handler(req, res) {
//   let data = await fs.promises.readdir("components/blogdata");
//   let myfile;
//   for (let index = 0; index < data.length; index++) {
//     const item = data[index];
//     console.log(item);
//     myfile = await fs.promises.readfile('components/blogdata/' + item);
//     console.log(myfile);
//   }

//   res.status(200).json(data);
// }
import * as fs from "fs";

export default async function handler(req, res) {
  let data = await fs.promises.readdir("components/blogdata", "utf-8");
  let myfile;
  let allblogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    console.log(item);
    myfile = await fs.promises.readFile("components/blogdata/" + item, "utf-8");
    console.log(myfile);
    allblogs.push(JSON.parse(myfile));
  }

  res.status(200).json(allblogs);
}
