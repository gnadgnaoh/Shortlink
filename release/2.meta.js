// ==UserScript==
// @name       Bypass All Shortlinks
// @namespace  Violentmonkey Scripts
// @run-at     document-start
// @author     Bloggerpemula
// @version    96.8
// @grant      GM_setValue
// @grant      GM_getValue
// @grant      GM_addStyle
// @grant      GM_openInTab
// @grant      GM_setClipboard
// @grant      GM_xmlhttpRequest
// @grant      window.onurlchange
// @grant      GM_registerMenuCommand
// @icon       https://i.ibb.co/qgr0H1n/BASS-Blogger-Pemula.png
// @require    https://update.greasyfork.org/scripts/528923/1588272/MonkeyConfig%20Mod.js
// @description    Bypass All Shortlinks Sites Automatically Skips Annoying Link Shorteners, Go Directly to Your Destination , Skip AdFly , Skip Annoying Ads, Block Adblock Detection , Block Annoying Popup And Prompts , Automatically Downloading Files , Flickr Images And Youtube Video And Much More
// @include /^(https?:\/\/)(.+)?((bitwidgets|virtuous-tech|coinilium|adwarden).net|(bubblix|dailytech-news).eu|(biit|carfocus|blogfly|multimix).site|(newsminer|adwyn|coderun).uno|wii.si|(cryptics|uiio|kiit|liln|dailynewshub|nanolink).fun|cryptorealm.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?(coinclix.co|coinhub.wiki|(vitalityvista|geekgrove).net)(\/.*)/
// @match *://*.flickr.com/*
// @match *://*.bigbtc.win/*
// @include /^(https?:\/\/)(.+)?('(bitwidgets|virtuous-tech|coinilium|adwarden).net|(bubblix|dailytech-news).eu|(biit|carfocus|blogfly|multimix).site|(newsminer|adwyn|coderun).uno|wii.si|(cryptics|uiio|kiit|liln|dailynewshub|nanolink).fun|cryptorealm.online')(\/.*)/
// @include /^(https?:\/\/)(.+)?((bitwidgets|virtuous-tech|coinilium|adwarden).net|(bubblix|dailytech-news).eu|(biit|carfocus|blogfly|multimix).site|(newsminer|adwyn|coderun).uno|wii.si|(cryptics|uiio|kiit|liln|dailynewshub|nanolink).fun|cryptorealm.online)(\/.*)/
// @match *://*.bloggerpemula.pythonanywhere.com/*
// @exclude /^(https?:\/\/)([^\/]+\.)?((cloudflare|github|aliyun|reddit|bing|yahoo|microsoft|whatsapp|amazon|ebay|payoneer|paypal|skrill|stripe|stripecdn|tipalti|wise|discord|tokopedia|taobao|taboola|aliexpress|netflix|citigroup|spotify|bankofamerica|hsbc|blogger|(accounts|studio).youtube|atlassian|pinterest|twitter|x|live|linkedin|fastbull|tradingview|deepseek|chatgpt|openai|grok|bilibili|indodax|bmcdn6|fbsbx|googlesyndication|amazon-adsystem|pubmatic|gstatic).com|(greasyfork|openuserjs|telegram|wikipedia|lichess).org|(doubleclick|yahoo).net|proton.me|stripe.network|meta.ai|codepen.io|(shopee|lazada|rakuten|maybank|binance).*|(dana|ovo|bca.co|bri.co|bni.co|bankmandiri.co|desa|(.*).go).id|(.*).(edu|gov))(\/.*)/
// @exclude /^https?:\/\/(?!(www\.google\.com\/(recaptcha\/|url)|docs\.google\.com\/|drive\.google\.com\/)).*google\..*/
// @exclude /^https?:\/\/([a-z0-9]+\.)*(facebook|instagram|tiktok)\.com\/(?!(flx\/warn\/|linkshim\/|link\/v2)).*/
// @downloadURL https://raw.githubusercontent.com/gnadgnaoh/Shortlink/release/release/2.user.js
// @updateURL  https://raw.githubusercontent.com/gnadgnaoh/Shortlink/release/release/2.meta.js
// ==/UserScript==
