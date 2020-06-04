module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jest": true
    },
    "extends": [
        "standard"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 11
    },
    {
    "plugins": ["html"]
    },
    "rules": {
        "jest/expect-expect": 0,
        semi: "error",
        quotes: ["error", "double"]
    }
};
