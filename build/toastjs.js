/**
 * toastjs
 * xisa
 * 0.0.1(2014-2016)
 */
 /*
    底层库使用 Zepto 或者 jQuery
 */
;(function($){
    'use strict';
    // toastjs插件
    $.fn.toastjs = function (options) {
        return new ToastJs(this, options);
    };
    function ToastJs(element, options) {
        this.ele = element;
        // 创建id
        if (!this.ele.attr('id')) {
            this.id = 'toastjs' + Math.random().toString().replace('0.', '');
            this.ele.attr('id', this.id);
        }
        this.init(options);
    }
    ToastJs.prototype = {
        version: '0.0.1',
        // 初始化
        init: function (options) {
            //
            //
        },
        // 渲染
        render: function () {
            //
            //
        },
        // 事件
        event: function () {
            //
            //
        },
        // 显示
        show: function () {
            //
            //
        },
        // 隐藏
        hide: function () {
            //
            //
        },
        // 销毁
        destroy: function () {
            //
            //
        }
    }
})(window.Zepto || window.jQuery);