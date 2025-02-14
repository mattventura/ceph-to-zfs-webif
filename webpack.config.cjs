const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = () => {
    return {
        entry: [path.resolve(__dirname, "./src/ts/main.ts"),
        ],
        output: {
            path: path.resolve(__dirname + "/out"),
            clean: false
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: {
                        loader: 'ts-loader',
                    },
                    exclude: /node_modules/,
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "src/index.html"),
                filename: "index.html",
                inject: true
            }),
        ],
        resolve: {
            extensions: ['.ts', '.js'],
        },
        devServer: {
            static: "./out",
            port: 8123,
            client: {
                overlay: false
            }
        }
    }
};
