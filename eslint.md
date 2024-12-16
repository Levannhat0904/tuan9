import globals from "globals";
import pluginJs from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import parserTs from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";

/\*_ @type {import('eslint').Linter.Config} _/
const config = [
// Kế thừa các cấu hình từ các plugin
...pluginJs.configs.recommended,
...pluginReact.configs.recommended,
...tsPlugin.configs.recommended,

// Môi trường thực thi code
env: {
browser: true, // Cho phép sử dụng các biến của trình duyệt
es2021: true, // Hỗ trợ ES2021
node: true, // Cho phép sử dụng các biến của Node.js
jest: true, // Cho phép sử dụng các biến của Jest
},

// Cấu hình languageOptions cho parser và parserOptions
languageOptions: {
parser: parserTs, // Cấu hình parser TypeScript
parserOptions: {
ecmaVersion: 2021, // Sử dụng ECMAScript 2021
sourceType: "module", // Sử dụng module ES
ecmaFeatures: {
jsx: true, // Hỗ trợ JSX
},
},
},

// Cấu hình các plugin
plugins: {
"@typescript-eslint": tsPlugin,
react: pluginReact,
prettier: prettier, // Thêm Prettier dưới dạng plugin
},

// Các rule tùy chỉnh
rules: {
"react/react-in-jsx-scope": "off", // Không cần import React trong file JSX
"react/prop-types": "off", // Tắt kiểm tra PropTypes vì dùng TypeScript

    // TypeScript Rules
    "@typescript-eslint/explicit-function-return-type": "off", // Không bắt buộc khai báo kiểu trả về
    "@typescript-eslint/explicit-module-boundary-types": "off", // Không bắt buộc khai báo kiểu cho export
    "@typescript-eslint/no-explicit-any": "warn", // Cảnh báo khi dùng any
    "@typescript-eslint/no-unused-vars": ["warn"], // Cảnh báo biến không sử dụng

    // Common Rules
    "no-console": ["warn", { allow: ["warn", "error"] }], // Chỉ cho phép console.warn và error
    quotes: ["error", "single"], // Bắt buộc dùng dấu nháy đơn
    semi: ["error", "always"], // Bắt buộc dùng dấu chấm phẩy
    indent: ["error", 2], // Indent 2 spaces

},

// Cài đặt cho các file cụ thể
overrides: [
{
files: ["*.ts", "*.tsx"], // Áp dụng cho file TypeScript
rules: {
"@typescript-eslint/explicit-function-return-type": ["error"], // Bắt buộc khai báo kiểu trả về
},
},
],

// Cài đặt cho các file được bỏ qua
ignorePatterns: ["node_modules/", "build/", "dist/", ".next/", "*.config.js"],
];

export default config;
