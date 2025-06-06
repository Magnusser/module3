import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public')
        },
        watchFiles: ['src/**/*'],
        open: true,
        port: 9000,
        compress: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader', "postcss-loader"]
            },
            {
                test: /\.njk$/i,
                use: ['simple-nunjucks-loader']
            },
            {
                test: /\.png/,
                type: 'asset/resource',
                generator: {
                    filename: '[name][ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/pages/index.njk'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/store.njk',
            filename: 'store.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/item.njk',
            filename: 'item.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/contact.njk',
            filename: 'contact.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/sorry.njk',
            filename: 'sorry.html'
        })
    ],
}