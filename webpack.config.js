const path = require('path')
const Externals = require('webpack-node-externals')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
    mode: 'production',
    target: 'node',
    entry: path.resolve(__dirname,'src/index.js' ),
    output:{
        filename: 'bundle.js',
        
        path: path.resolve(__dirname, 'build')
    },
    module:{
        rules:[
            {
                test: /.js$/,
                use:['babel-loader'],
                exclude:/node_modules/
            }
        ]
    },
    externals:[Externals()],
    plugins: [
        new CopyWebpackPlugin([
          { from: './view', to: 'view' },
          { from: './static', to: 'static' },
        ]),
      ],
}