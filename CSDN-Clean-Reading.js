// ==UserScript==
// @name         CSDN-Clean-Reading
// @namespace    https://dshboom.top
// @version      1.2
// @description  CSDN顶栏、侧栏、推荐、统统删除！！解锁复制！！
// @author       dshboom
// @match        https://*.csdn.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


    document.addEventListener('copy', function(e) {
        e.stopPropagation();
    }, true);
    // 隐藏顶栏
    var topBar = document.getElementById('csdn-toolbar');
    if (topBar) {
        topBar.style.display = 'none';
    }
    // 推荐询问
    var divElement = document.getElementById('asideNewNps');
    if (divElement) {
        divElement.parentNode.removeChild(divElement);
    }
    divElement = document.getElementById('recommendNps');
    // 将其从DOM树中删除
    if (divElement) {
        divElement.parentNode.removeChild(divElement);
    }
    divElement = document.querySelector('.toolbox-middle');
    // 如果找到了该div元素，将其隐藏
    if (divElement) {
        divElement.style.display = 'none';
    }
    // 隐藏右侧边栏
    var rightSidebar = document.querySelector('.main-container .right-box');
    if (rightSidebar) {
        rightSidebar.style.display = 'none';
    }
    var bottomBar = document.querySelector('.left-toolbox');
    bottomBar.style.display = 'none';
    document.designMode = 'on';
})();