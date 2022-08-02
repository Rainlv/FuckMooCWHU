// ==UserScript==
// @name         Fuck 安全教育For WHU
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  安全教育，狗都不学
// @author       Rainnalv
// @copyright    2022, Rainnalv (https://github.com/Rainlv)
// @license      MIT
// @match        http://mooc1.mooc.whu.edu.cn/mycourse/studentstudy*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=whu.edu.cn
// @grant        none
// ==/UserScript==

// @homepage     https://github.com/Rainlv/FuckSafetyEducationWHU
var player = null;
var next_video_a_elem;

var main = function () {
  // 播放器
  player = document.querySelector("iframe").contentWindow.document.querySelector("iframe").contentWindow.document.querySelector("#video_html5_api");

  // 监听第一次结束，跳转下个页面
  player.addEventListener('ended', function () {
    // 下一个视频
    // 获取所有未完成列表
    var todo_ls = document.getElementsByClassName("roundpointStudent orange01")
    // 获取下一个视频a标签的elem
    if (todo_ls.length === 0) return
    if (todo_ls.length === 1)
      next_video_a_elem = todo_ls[0].nextElementSibling
    else
      next_video_a_elem = todo_ls[1].nextElementSibling
    player = null;
    next_video_a_elem.click();
    // 等待15s，保证iframe加载完毕
    setTimeout(function () {
      main();
    }, 15000)
  }, false);

  // 进入页面开始播放
  player.muted = true;
  player.play();
};

window.onload = main

// 解决失焦暂停
setInterval(function () {
  if (player && player.paused) {
    player.play();
  }
}, 1000)
