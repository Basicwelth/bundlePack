const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].min.css',
            linkType: "text/css",
        }),
    ],
    // entry: ["/src/index.js", "/src/output.css"],
    entry: {
        appBundleTest: ["./src/index.js", "./src/output.css"],
    },
    output: {
        path: path.join(__dirname, "/dist/"),
        filename: "[name].bundle.js",
        clean: true,
        compareBeforeEmit: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
            },
            {
                test: /\.(jpg|png|gif|jpeg|woff|woff2|eot|ttf|svg|html|json|sass)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10000,
                        }
                    }
                ]
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts'],
    },
    optimization: {
        // minimize: true,
        // minimizer: [
        //     new CssMinimizerPlugin({
        //         minify: CssMinimizerPlugin.cleanCssMinify,
        //         parallel: true,
        //     }),
        // ],
        removeEmptyChunks: true,
    },
};