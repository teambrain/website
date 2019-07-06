function getStyleUse(bundleFilename) {
    return [
        {
            loader: 'file-loader',
            options: {
                name: bundleFilename,
            },
        },
        {loader: 'extract-loader'},
        {loader: 'css-loader'},
        {
            loader: 'sass-loader',
            options: {
                includePaths: ['./node_modules'],
                implementation: require('dart-sass'),
                fiber: require('fibers'),
            }
        },
    ];
}

module.exports = [
    {
        entry: './goals.scss',
        output: {
            // This is necessary for webpack to compile, but we never reference this js file.
            filename: 'style-bundle-goals.js',
        },
        module: {
            rules: [{
                test: /goals.scss$/,
                use: getStyleUse('bundle-goals.css')
            }]
        },
    }/*,
    {
        entry: "./login.js",
        output: {
            filename: "bundle-login.js"
        },
        module: {
            loaders: [{
                test: /login.js$/,
                loader: 'babel-loader',
                query: {presets: ['env']}
            }]
        },
    }*/
];
