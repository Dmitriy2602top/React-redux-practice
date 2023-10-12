import CopyPlugin from 'copy-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { type BuildOptions } from './types/config';

export const buildPlugins = ({ paths, isDev, analyze }: BuildOptions): webpack.WebpackPluginInstance[] => {
    const plugins = [
        new Dotenv({ systemvars: true }),
        new HtmlWebpackPlugin({ template: paths.html, base: '/' }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: paths.public,
                    to: paths.output,
                    globOptions: {
                        ignore: [paths.html],
                    },
                },
            ],
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: analyze ? 'server' : 'disabled',
        }),
    ];

    if (isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin());
    }

    return plugins;
};
