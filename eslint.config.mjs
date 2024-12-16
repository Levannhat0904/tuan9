import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import parserTs from '@typescript-eslint/parser';
// import tsPlugin from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parser: parserTs,
      parserOptions: {
        ecmaVersion: 2021, // Sử dụng ECMAScript 2021
        sourceType: 'module', // Sử dụng module ES
        ecmaFeatures: {
          jsx: true, // Hỗ trợ JSX
        },
      },
    },
  },
  // Tích hợp các cấu hình mặc định từ các plugin
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      // "@typescript-eslint": tsPlugin,
      react: pluginReact,
      prettier: prettier, // Thêm Prettier dưới dạng plugin
    },
  },
  // Các rule tùy chỉnh
  {
    rules: {
      // React Rules
      'react/react-in-jsx-scope': 'off', // Không cần import React trong file JSX (React 17+)
      'react/prop-types': 'off', // Tắt kiểm tra PropTypes khi dùng TypeScript
      'no-dupe-keys': 'error',
      // TypeScript Rules
      '@typescript-eslint/explicit-function-return-type': 'off', // Không bắt buộc khai báo kiểu trả về
      '@typescript-eslint/explicit-module-boundary-types': 'off', // Không bắt buộc khai báo kiểu cho export
      '@typescript-eslint/no-explicit-any': 'warn', // Cảnh báo khi dùng any
      '@typescript-eslint/no-unused-vars': ['warn'], // Cảnh báo biến không sử dụng

      // Common Rules
      'no-console': ['warn', { allow: ['warn', 'error'] }], // Chỉ cho phép console.warn và console.error
      // 'no-alert': 'error',
      quotes: ['error', 'single'], // Bắt buộc dùng dấu nháy đơn
      semi: ['error', 'always'], // Bắt buộc dùng dấu chấm phẩy
      indent: ['error', 2], // Indent 2 spaces
    },
  },
  {
    // Cấu hình bỏ qua các thư mục nhất định
    ignores: ['node_modules/', 'build/', 'dist/', '.next/', '*.config.js'],
  },
  {
    settings: {
      react: {
        version: 'detect', // "detect" sẽ tự động phát hiện phiên bản React dựa trên package.json
      },
    },
  },
];
