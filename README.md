# CALCULATOR_JS
# Simple calculator with memory functions and history based on Command pattern

## [Deploy](later)

## How to run the app:

1. Clone repo https://github.com/breligor/CALCULATOR_JS.git

```
$git clone link
```

2. Open the directory in code editor
3. Run `npm install` to install all the dependencies
4. Run app with `npm webpack start` to run the app in your browser

## Additional scripts
- `npm run test` runs the tests
- `npm run build` builds the app for production to the `dist` folder

## Folders structure
```
 ┣ 📜index.html                   # Calculator template
📦src                             # Contains all logic of the project
 ┣ 📂style                        # Holds .css files with app styles
 ┃ ┗📂css                         # Holds .css files with app styles
 ┃   ┗📜style.css                 # Holds .css files with app styles
 ┃ ┗📜style.scss                  # Holds .scss files with app styles
 ┣ 📂scripts 
 ┣ 📜controlUnit.js               # Class for history saving and executing
 ┣ 📜command_abs_class.js         # Class Command
 ┣ 📜commandOperations.js         # concrete commands that extend from Command class   
 ┣ 📜calculator.js                # Class calculator
 ┣ 📜arithmeticUnitValidation.js  # Holds mathematical operations with validation
 ┣ 📜mathOperationsTests.js       # Tests
 ┣ 📜contents.js                  # Holds all the constants using in the app
 ┣ 📜memoreHandler.js             # Memory buttons logic
 ┣ 📜index.js                     # Contains class for UI events control 
 ┣ 📜arithmeticUnit.js            # Class that performs an arithmetic operation.
 ┗ 📜themeSwitch.js               # Theme switch function
```
## Stack
- JS
- Jest
- Webpack
