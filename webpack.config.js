var path = require('path');
module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: {
        index: './index.js',
        demo: './demo.js'                    
    },
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
        filename: "[name].js"
    },
    target: "node"
}