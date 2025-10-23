import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack'; 
const ModuleFederationPlugin = webpack.container.ModuleFederationPlugin;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'production', // production | development
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // publicPath: 'http://localhost:3000/',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
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
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ModuleFederationPlugin({
        name: 'JournalEntry_MFE', // Nombre del Remote
        filename: 'remoteEntry.js', // Archivo que el Host descargará
        exposes: {
          './JournalEntry': './src/remote-entry.js', // Tu punto de entrada principal
          './tailwindStyles': './src/globals.css', // ¡EXPOSICIÓN DIRECTA DEL CSS!
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: '^17.0.2',
            eager: false,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: '^17.0.2',
            eager: false,
          },
          '@contpaqi/ux-library': {
            eager: true, // Debe ser eager si el Remote la usa directamente
            singleton: true, 
          },
        },
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    static: './dist',
    port: 3000,
    hot: true,
    open: true,
    liveReload: false,
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
  }
};