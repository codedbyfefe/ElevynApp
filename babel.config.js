module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@": "./", // now "@/src/..." will point to "<root>/src"
          },
          extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
        }
      ],
      "react-native-reanimated/plugin"
    ]
  };
};
