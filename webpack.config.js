import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack'; 
const ModuleFederationPlugin = webpack.container.ModuleFederationPlugin;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true
  },
  module: {
    rules: [
{
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'es2020',
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'esbuild-loader',
        options: {
          loader: 'jsx',
          target: 'es2020',
        },
      },
      { 
        test: /\.css$/,
        use: [
          'style-loader', 
          'css-loader',
          'postcss-loader',
        ],
      },
    ]
  },
  performance: {
    hints: false, 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ModuleFederationPlugin({
      name: 'JournalEntry_MFE',
      filename: 'remoteEntry.js',
      exposes: {
        // './JournalEntry': './src/remote-entry.ts',
        './JournalEntryMount': './src/mount-app.tsx',
        './TailwindStyles': './src/globals.css',
      },
      shared: {
        '@contpaqi/ux-library': {
          singleton: true, 
          requiredVersion: '^0.1.1',
          eager: true,
        },
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  devServer: {
    static: './dist',
    port: 3000,
    hot: true,
    open: true,
    liveReload: true, // antes era false
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  }
};