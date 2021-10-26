"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readAllcat = void 0;
var cats_model_1 = require("./cats.model");
var readAllcat = function (req, res) {
    try {
        var cats = cats_model_1.Cat;
        res.status(200).send({
            success: true,
            data: {
                cats: cats,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
};
exports.readAllcat = readAllcat;
//# sourceMappingURL=cats.servic.js.map