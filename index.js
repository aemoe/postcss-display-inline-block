var postcss = require('postcss');
module.exports = postcss.plugin('postcss-display-inline-block', function(opts) {
    opts = opts || {};
    return function(css) {
        var isFilterAlreadyPresent,
            hasDisplay = false,
            hasZoom = false;
        css.walkRules(function(rule) {
            // walkDecls方法用来判断是否含有*display
            rule.walkDecls(function(decl, i) {
                var prop = decl.prop;
                var hasIE8hack = decl.raws.before.indexOf('*');
                if (hasIE8hack !== -1 && prop == 'display') {
                    hasDisplay = true;
                }
                if (hasIE8hack !== -1 && prop == 'zoom') {
                    hasZoom = true;
                }
            });
            isFilterAlreadyPresent = hasDisplay && hasZoom;
            // css.walkRules方法用来遍历每一条css规则
            rule.walkDecls(function(decl, i) {
                var value = decl.value;
                if (!isFilterAlreadyPresent && value == 'inline-block') {
                    if (!hasZoom) {
                        var NAME_ADD_ZOOM = '*zoom';
                        var VAL_ADD_ZOOM = '1';
                        rule.insertAfter(decl, { prop: NAME_ADD_ZOOM, value: VAL_ADD_ZOOM });
                    }
                    if (!hasDisplay) {
                        var NAME_ADD_DISPALY = '*display';
                        var VAL_ADD_DISPALY = 'inline';
                        rule.insertAfter(decl, { prop: NAME_ADD_DISPALY, value: VAL_ADD_DISPALY });
                    }
                }
            });

        });
    };

});
