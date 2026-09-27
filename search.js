const fs = require("fs");

const text = fs.readFileSync("./dummy_data.txt", "utf8");

const lines = text.split("\n").filter(Boolean);

const keywords = ["email=", "password=", "token="];

const found = lines.some(line =>
    keywords.some(keyword => line.startsWith(keyword))
);

console.log("対象データが存在するか:", found);

if (found) {
    console.log("対象になった行:");

    console.log(
        lines
            .filter(line =>
                keywords.some(keyword => line.startsWith(keyword))
            )
            .join("\n")
    );
}
