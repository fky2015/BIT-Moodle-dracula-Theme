// ==UserScript==
// @name BIT-Moodle-Enhance
// @namespace https://github.com/fky2015/
// @version 0.1.7
// @description provide mordern theme design for moodle system.
// @author FKYnJYQ
// @grant GM_addStyle
// @include http://lexue.bit.edu.cn/*
// @include https://lexue.bit.edu.cn/*
// @include http://*.lexue.bit.edu.cn/*
// @include https://*.lexue.bit.edu.cn/*
// @include http://online.bit.edu.cn/moodle*
// ==/UserScript==

(function () {
    'use strict';

    if (window.location.href.endsWith(".bit.edu.cn/")) {
        let t = window.location.href + "my/";
        window.location = t;
    }
    $("a.brand").attr("href", "/my/");

    let css = `
    $CSS_THEME_SCRIPT
    `
    GM_addStyle(css);
})();
