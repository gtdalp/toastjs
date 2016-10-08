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
        isFunction: function( fn ) {
          return  !!fn &&                  // 不为空，存在
            !fn.nodeName &&                // 不是节点对象
            fn.constructor != String &&    // 不是字符串类型
            fn.constructor != RegExp &&    // 不是正则表达式
            fn.constructor != Array &&     // 不是数组
            /function/i.test( fn + "" );   // toString()中包含"function"
        },
        // 渲染
        render: function () {
            var op = this.options;
            var doc = document;
            op.id = 'toastjs';
            window.onload = function () {
                var toastjs = doc.getElementById(op.id);
                if (!toastjs) {
                    var body = doc.body;
                    var div = doc.createElement("div");
                    div.innerHTML = op.val;
                    div.id = op.id;
                    body.appendChild(div);
                    div.className = 'toastjs';
                    var width = div.clientWidth/2;
                    var height = div.clientHeight/2;
                    div.setAttribute('style', "margin:-" + height + "px 0 0 -" + width + "px;top:50%;");
                    div.className = 'toastjs toastjs-animate-in';
                }
                this.hide();
            }.bind(this);
        },
        // 显示
        show: function () {
            this.render();
        },
        // 隐藏
        hide: function () {
            var op = this.options;
            var t = op.time;
            var cb = this.isFunction(op.callback) ? op.callback : '';
            var toastjs = document.getElementById(op.id);
            if (toastjs) {
                setTimeout(function () {
                    var cls = toastjs.getAttribute('class') + ' toastjs-animate-out';
                    toastjs.setAttribute('class', cls);
                    // 删除dom节点和回调
                    setTimeout(function () {
                        toastjs.remove();
                        // 回调
                        if (cb) {
                            cb();
                        }
                    }, 806);
                    
                }, t);
                
            }
        },
        // 销毁
        destroy: function () {
            var toastjs = document.getElementById(op.id);
            if (toastjs) {
                toastjs.remove();
            }
        }
    }
})();