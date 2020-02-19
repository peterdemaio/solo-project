"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App_class_1 = require("./App.class");
(function () {
    console.log('Scrapper Running');
    var URL = 'https://www.seriouseats.com/recipes/2008/12/dinner-tonight-vegetarian-tacos-with-jicama-tortillas-recipe.html';
    var CONFIG = {
        parent: '.recipe-procedure',
        children: {
            procedure: '.recipe-procedure-text',
        }
    };
    var data = new App_class_1.App(URL, CONFIG);
})();
// const URL = 'https://www.bleachr.co/our-team';
// const CONFIG = {
//     parent: '[class*="style-k20ql767inlineContent"]',
//     children: {
//         title: 'span[style="letter-spacing:0em;"] span',
//         name: 'span[style="font-size:19px;"] span'
//     }
// };
