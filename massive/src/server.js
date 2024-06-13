const express = require("express");
const app = express();


const PORT = 8000

app.listen(PORT, () => 
    console.log(`server ${PORT}`)
);

//Middelware adalah pihak tengah. data dari client harus lewat sini dulu
//mengolah data dari client atau mengambil data dari client
// app.use(express.json());

//menangani data dari client atau browser
// app.use(express.urlencoded({extended: true}));

//route http://localhost/
//METHOD GET
// app.get("/", (req, res) => {
//     res.json({
//         message: "Berhasil cccs :)",
//     });
// })

// app.listen(PORT, () => 
// console.log(`Server is running on http://localhost:${PORT}`)
// );