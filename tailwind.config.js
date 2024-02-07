/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./utils/**/*.{js,ts}`,
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
    `./Error.{js,ts,vue}`,
    `./error.{js,ts,vue}`,
    `./app.config.{js,ts}`,
    `./node_modules/flowbite/**/*.{js,ts}`
  ]
}

