const {stdout, stdin, stderr, argv, exit} = require("node:process")
const fs = require("node:fs")

// retrieving the third argument which is the file absolute path
const filePath = argv[2]

if (filePath){
    const fileReadStream = fs.createReadStream(filePath)
    fileReadStream.pipe(stdout)

    stdout.write("\n")
    fileReadStream.on("end", () => {
        exit(0)
    })
}

stdin.on("data", (data) => { 
    stdout.write(data.toString("utf-8").toUpperCase())
})