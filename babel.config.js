module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src/'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@composition': './src/composition',
          '@hooks': './src/hooks',
          '@ducks': './src/ducks',
          '@navigations': './src/navigations',
          '@screen': './src/screen',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
