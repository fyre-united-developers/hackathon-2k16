var glob = require('glob');
var path = require('path');
var WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
    entry: glob.sync('./app/*.js'),
    devServer: {
        outputPath: path.join(__dirname, './dist')
    },
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },
    plugins: [
      new WriteFilePlugin()
    ]
};
