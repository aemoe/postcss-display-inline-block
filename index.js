var postcss = require('postcss');
module.exports = postcss.plugin('postcss-display-block', function(opts) {
    opts = opts || {};

    return function(css) {
        options = options || {};
        // css.walkRules方法用来遍历每一条css规则
        css.walkRules(function(rule) {
            // walkDecls方法用来解析属性跟值
            rule.walkDecls(function(decl, i) {
                var value = decl.value;
                if (value.indexOf('fontstack(') !== -1) {
                    var fontstack_requested = value.match(/\(([^)]+)\)/)[1].replace(/["']/g, "");
                    fontstack_requested = toTitleCase(fontstack_requested);

                    var fontstack = fontstack_config[fontstack_requested];

                    var firstFont = value.substr(0, value.indexOf('fontstack('));

                    var newValue = firstFont + fontstack;

                    decl.value = newValue;
                }
            });

        });
    };

});
