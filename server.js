const express = require("express");
const sql = require("mssql");

const web = express();
web.use(express.json());
web.use(express.static("public"));

const config = {
    user: "sa",
    password: "hieu26102005",
    server: "localhost",
    database: "Web_Assignment",
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
};

sql.connect(config, (err) => {
    if (err) {
        console.error("Database connection failed: " + err);
        process.exit(1);
    }
    console.log("Database connected");
});

const port = 3000;
web.listen(port, () => {
    console.log("Server running at http://localhost:" + port);
});
