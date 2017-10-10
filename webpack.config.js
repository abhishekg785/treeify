var path = require('path');

module.exports = {
    entry: [
        path.resolve(__dirname, "src")                    
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,

                include: [
                    path.resolve(__dirname, "src")
                ],

                loader: "babel-loader",
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "index.js"
    }
}