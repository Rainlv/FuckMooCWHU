// ==UserScript==
// @name         Fuck 安全教育
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  狗都不学
// @author       You
// @match        http://mooc1.mooc.whu.edu.cn/mycourse/studentstudy*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=whu.edu.cn
// @grant        none
// ==/UserScript==

var main = function () {
  'use strict';

  // 视频是否结束标志
  var video_end_flag = false;

  // 播放器
  var player = document.querySelector("iframe").contentWindow.
  document.querySelector("iframe").contentWindow.
  document.querySelector("#video_html5_api");
  // 获取所有未完成列表
  var todo_ls = document.getElementsByClassName("roundpointStudent orange01")
  // 获取下一个视频elem
  var next_video_a_elem = todo_ls[1].nextElementSibling

  // 监听第一次结束，跳转下个页面
  player.addEventListener('ended', function () {
    video_end_flag = true;
    // 下一个视频
    next_video_a_elem.click();
  }, false);

  // 进入页面开始播放
  player.muted = true;
  player.play();
  // 解决失焦暂停，没有结束就播放
  setInterval(function () {
    !video_end_flag && player.play()
  }, 1000)
};

window.onload = main

setInterval(function () {
  var player = document.querySelector("iframe").contentWindow.
  document.querySelector("iframe").contentWindow.
  document.querySelector("#video_html5_api");
  if (player.paused) {
    main()
  }
}, 1000)
