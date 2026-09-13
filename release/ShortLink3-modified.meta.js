// ==UserScript==
// @name        Bypass All Shortlinks Manual Captcha
// @namespace   Violentmonkey Scripts
// @author      Bloggerpemula
// @version     96.5
// @match       *://*/*
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_addStyle
// @run-at      document-start
// @grant       GM_openInTab
// @grant       GM_setClipboard
// @grant       GM_xmlhttpRequest
// @grant       window.onurlchange
// @grant       GM_registerMenuCommand
// @icon        https://i.ibb.co/qgr0H1n/BASS-Blogger-Pemula.png
// @copyright   2022+, Bloggerpemula (https://openuserjs.org/users/Bloggerpemula)
// @require     https://update.greasyfork.org/scripts/528923/1599357/MonkeyConfig%20Mod.js
// @license     CC-BY-NC-SA-4.0; https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode
// @license     GPL-3.0-or-later; https://www.gnu.org/licenses/gpl-3.0.txt
// @updateURL   https://raw.githubusercontent.com/gnadgnaoh/Shortlink/release/release/ShortLink3-modified.meta.js
// @downloadURL https://openuserjs.org/install/Bloggerpemula/Bypass_All_Shortlinks_Manual_Captcha.user.js
// @description Bypass All Shortlinks Sites Automatically Skips Annoying Link Shorteners, Go Directly to Your Destination , Skip AdFly , Skip Annoying Ads, Block Adblock Detection , Block Annoying Popup And Prompts , Automatically Downloading Files , Flickr Images And Youtube Video And Much More
// @exclude /^(https?:\/\/)([^\/]+\.)?((cloudflare|github|aliyun|reddit|bing|yahoo|microsoft|whatsapp|amazon|ebay|payoneer|paypal|skrill|stripe|stripecdn|tipalti|wise|discord|tokopedia|taobao|taboola|aliexpress|netflix|citigroup|spotify|bankofamerica|hsbc|blogger|(accounts|studio).youtube|atlassian|pinterest|twitter|x|live|linkedin|fastbull|tradingview|deepseek|chatgpt|openai|grok|bilibili|indodax|bmcdn6|fbsbx|googlesyndication|amazon-adsystem|pubmatic|gstatic).com|(greasyfork|openuserjs|telegram|wikipedia|lichess).org|(doubleclick|yahoo).net|proton.me|stripe.network|meta.ai|codepen.io|(shopee|lazada|rakuten|maybank|binance).*|(dana|ovo|bca.co|bri.co|bni.co|bankmandiri.co|desa|(.*).go).id|(.*).(edu|gov))(\/.*)/
// @exclude /^https?:\/\/(?!(www\.google\.com\/(recaptcha\/|url)|docs\.google\.com\/|drive\.google\.com\/)).*google\..*/
// @exclude /^https?:\/\/([a-z0-9]+\.)*(facebook|instagram|tiktok)\.com\/(?!(flx\/warn\/|linkshim\/|link\/v2)).*/
// ==/UserScript==