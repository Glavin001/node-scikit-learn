var python = require("node-python");
var json = python.import('json');

var importModule = function(name) {
    var module = python.import('sklearn.'+name);
    return module;
};

var getAttributes = function(pyObj) {
    var attributs = json.dumps(pyObj);
    console.log(attributes);
    return attributes;
};

module.exports = {
    import: importModule,
    getAttributes: getAttributes
};

