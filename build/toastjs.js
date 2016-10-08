/**
 * toastjs
 * xisa
 * 0.0.1(2014-2016)
 */
;(function(){
    'use strict';
    // toastjs组件
    window.ToastJs = function (val, time, callback) {
        var options = {
            id: 'toastjs',
            val: val || '',
            time: time || 3000,
            callback: callback
        }
        return new ToastJs(options);
    }
    function ToastJs(options) {
        this.options = options;
        this.init();
    }
    ToastJs.prototype = {
        version: '0.0.1',
        // 初始化
        init: function () {
            this.render();
        },
        // 渲染
        render: function () {
            var op = this.options;
            window.onload = function () {
                var toastjs = document.getElementById(op.id);
                if (!toastjs) {
                    var body = document.querySelector('body');
                    var toastjsNode = document.createElement("div");
                    toastjsNode.innerHTML = op.val;
                    body.appendChild(toastjsNode);
                }
            }
        },
        // 显示
        show: function () {
            this.render();
        },
        // 隐藏
        hide: function () {
            //
        },
        // 销毁
        destroy: function () {
            //
        }
    }
})();