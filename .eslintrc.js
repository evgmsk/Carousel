const OS = /^Windows/.test(process.env.OS)? "windows" : "unix";

module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "google",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "rules": {
        "arrow-parens": "off",
        "camelcase": "off",
        "comma-dangle":"off",
        "curly": "off",
        "eol-last": "off",
        "key-spacing": "off",
        "keyword-spacing": "off",
        "linebreak-style": [
          "error",
          OS
        ],
        "max-len": "off",
        "no-extra-semi": "off",
        "no-multi-spaces": "off",
        "no-trailing-spaces": "off",
        "no-undef": "off",
        "no-unused-vars":"off",
        "object-curly-spacing": "off",
        "one-var": "off",
        "quotes": "off",
        "require-jsdoc": "off",
        "semi": "off",
        "space-before-blocks": "off",
        "spaced-comment": "off"
    }
};