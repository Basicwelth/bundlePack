const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].min.css',
            linkType: "text/css",
        }),
    ],
    entry: {
        appBundleTest: ["./src/index.js", "./src/output.css"],
    },
    output: {
        path: path.join(__dirname, "/dist/"),
        filename: "[name].bundle.js",
        clean: true,
        compareBeforeEmit: true,
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/i,
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
                            limit: false,
                        }
                    }
                ]
            },
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
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