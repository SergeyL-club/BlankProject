(()=>{"use strict";var t,e,r;!function(t){t[t.LOADING=0]="LOADING",t[t.OPENED=1]="OPENED",t[t.CLOSED=2]="CLOSED",t[t.FAILED=3]="FAILED"}(t||(t={})),function(t){t[t.LOADING=0]="LOADING",t[t.OPENED=1]="OPENED",t[t.CLOSED=2]="CLOSED",t[t.FAILED=3]="FAILED",t[t.REWARDED=4]="REWARDED"}(e||(e={})),function(t){t[t.LOADING=0]="LOADING",t[t.SHOWN=1]="SHOWN",t[t.HIDDEN=2]="HIDDEN",t[t.FAILED=3]="FAILED"}(r||(r={}));var a=function(t,e,r){if(r||2===arguments.length)for(var a,o=0,n=e.length;o<n;o++)!a&&o in e||(a||(a=Array.prototype.slice.call(e,0,o)),a[o]=e[o]);return t.concat(a||Array.prototype.slice.call(e))},o=function(){function o(t,e){void 0===e&&(e=!1);var r=this;this._localStorage=null,this._isPlayerAuthorized=!1,this._playerId="",this._playerName="",this._playerPhotos=[],this._isBannerSupported=!1,this._platformStorageCachedData=null,this._has_ad_block=!1,this._platformId="",this.platform="";try{this._localStorage=window.localStorage}catch(t){}this._visibilityState="visible"==document.visibilityState,document.addEventListener("visibilitychange",(function(){r._visibilityState="visible"==document.visibilityState,r.cb_visible_state&&r.cb_visible_state(r._visibilityState)})),e?this.load_all_data_from_storage(t):t(!0)}return o.prototype.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];console.log.apply(console,a(["platform-bridge:"],t,!1))},o.prototype.warn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];console.warn.apply(console,a(["platform-bridge:"],t,!1))},o.prototype.error=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];console.error.apply(console,a(["platform-bridge:"],t,!1))},o.prototype.get_platform=function(){return this._platformId},o.prototype.get_platform_device=function(){return this.platform},o.prototype.get_platform_tld=function(){return""},o.prototype.get_language=function(){var t=navigator.language;return"string"==typeof t?t.substring(0,2).toLowerCase():"en"},o.prototype.get_payload=function(){return new URL(window.location.href).searchParams.get("payload")},o.prototype.is_favorite_supported=function(){return!1},o.prototype.is_share_supported=function(){return!1},o.prototype.is_player_authorized=function(){return this._isPlayerAuthorized},o.prototype.player_id=function(){return this._playerId},o.prototype.player_name=function(){return this._playerName},o.prototype.player_photos=function(){return this._playerPhotos},o.prototype._get_data_from_local_storage=function(t){var e=this._localStorage.getItem(t);return this.decode_storage_value(e)},o.prototype._set_data_to_local_storage=function(t,e){this._localStorage.setItem(t,this.encode_storage_value(e)),null!=this._platformStorageCachedData&&(this._platformStorageCachedData[t]=e)},o.prototype._delete_data_from_local_storage=function(t){this._localStorage.removeItem(t),delete this._platformStorageCachedData[t]},o.prototype.encode_storage_value=function(t){return"string"!=typeof t&&(t=JSON.stringify(t)),t},o.prototype.decode_storage_value=function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t},o.prototype.get_cached_key=function(t){return this._get_cached_storage(t)},o.prototype._get_cached_storage=function(t){if(this._platformStorageCachedData){if(Array.isArray(t.key)){for(var e=[],r=0;r<t.key.length;r++){var a=void 0===this._platformStorageCachedData[t.key[r]]?null:this._platformStorageCachedData[t.key[r]];e.push(a)}return[!0,e]}return[!0,void 0===this._platformStorageCachedData[t.key]?null:this._platformStorageCachedData[t.key]]}return[!1,null]},o.prototype.load_all_data_from_storage=function(t){var e=this;if(!this._localStorage)return t(!1);var r=Object.keys(this._localStorage);this.get_data_from_storage({key:r},(function(a,o){if(a){e._platformStorageCachedData={};for(var n=0;n<r.length;n++)e._platformStorageCachedData[r[n]]=o[n]}t(a)}),!1)},o.prototype.get_data_from_storage=function(t,e,r){if(void 0===r&&(r=!1),!this._localStorage)return this.error("localStorage is not supported"),e(!1,null);if(Array.isArray(t.key)){for(var a=[],o=0;o<t.key.length;o++)a.push(this._get_data_from_local_storage(t.key[o]));return e(!0,a)}return e(!0,this._get_data_from_local_storage(t.key))},o.prototype.set_data_to_storage=function(t,e){if(!this._localStorage)return this.error("localStorage is not supported"),e(!1);if(Array.isArray(t.key)){for(var r=0;r<t.key.length;r++)this._set_data_to_local_storage(t.key[r],t.value[r]);return e(!0)}return this._set_data_to_local_storage(t.key,t.value),e(!0)},o.prototype.delete_data_from_storage=function(t,e){if(!this._localStorage)return this.error("localStorage is not supported"),e(!1);if(Array.isArray(t.key)){for(var r=0;r<t.key.length;r++)this._delete_data_from_local_storage(t.key[r]);return e(!0)}return this._delete_data_from_local_storage(t.key),e(!0)},o.prototype.check_and_migrate_data=function(t,e){var r=this;this.log("check migrate...",t),this.get_data_from_storage({key:t.keys},(function(a,o){if(a){if(r.log("loaded check data...",o),o.filter((function(t){return null!=t})).length>0)return r.log("migrate not required"),e(!0);for(var n=[],i=0;i<t.keys.length;i++){var s=t.keys[i],_=t.data[s];null==_?n.push(null):n.push(_)}r.set_data_to_storage({key:t.keys,value:n},(function(t){r.log("migrate finished",t),e(t)}))}else r.log("migrate failed"),e(!1)}),!1)},o.prototype.share=function(t,e){e&&e(!1)},o.prototype.rate=function(t){t(!1)},o.prototype.add_to_favorites=function(t){t&&t(!1)},o.prototype.set_leaderboard_score=function(t,e){e(!1)},o.prototype.get_leaderboard_score=function(t,e){e(!1,null)},o.prototype.get_leaderboard_entries=function(t,e){e(!1,null)},o.prototype._set_interstitial_state=function(e){this._interstitialState===e&&e!==t.FAILED||(this._interstitialState=e,this.cb_interstitial_state&&this.cb_interstitial_state(this._interstitialState))},o.prototype._set_rewarded_state=function(t){this._rewardedState===t&&t!==e.FAILED||(this._rewardedState=t,this.cb_rewarded_state&&this.cb_rewarded_state(this._rewardedState))},o.prototype._setBannerState=function(t){this._bannerState===t&&t!==r.FAILED||(this._bannerState=t,this.cb_banner_state&&this.cb_banner_state(this._bannerState))},o.prototype.show_banner=function(t){},o.prototype.hide_banner=function(){},o.prototype.show_interstitial=function(){},o.prototype.show_rewarded=function(){},o.prototype.is_lock_url=function(t,e){return new Promise((function(r,a){fetch(t,{method:e,mode:"no-cors",cache:"no-store"}).then((function(){return r(0)})).catch((function(){return r(1)}))}))},o.prototype._check_ad_block=function(){var t=this;return new Promise((function(e,r){t.is_lock_url("https://ad.mail.ru","HEAD").then((function(r){1==r?e(1):t.is_lock_url("https://top-fwz1.mail.ru/js/code.js","POST").then((function(t){return e(t)}))}))}))},o.prototype.check_ad_block=function(){var t=this;this._check_ad_block().then((function(e){t._has_ad_block=1==e}))},o.prototype.has_ad_block=function(){return this._has_ad_block},o.prototype.bind_visible_state=function(t,e){this.cb_visible_state=e},o.prototype.bind_interstitial_events=function(t,e){this.cb_interstitial_state=e},o.prototype.bind_banner_events=function(t,e){this.cb_banner_state=e},o.prototype.bind_rewarded_events=function(t,e){this.cb_rewarded_state=e},o}();function n(t){return new Promise((function(e){var r=document.createElement("script");r.src=t,r.addEventListener("load",e),document.head.appendChild(r)}))}var i,s=(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),_=function(){return _=Object.assign||function(t){for(var e,r=1,a=arguments.length;r<a;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},_.apply(this,arguments)},l=function(r){function a(t){var e=r.call(this,(function(){}))||this;return e._platformId="yandex",n("https://yandex.ru/games/sdk/v2").then((function(){YaGames.init().then((function(r){e._platformSdk=r;var a=new Promise((function(t,r){e.get_player({},t)})),o=e._platformSdk.getLeaderboards().then((function(t){return e._leaderboards=t})),n=e._platformSdk.getStorage().then((function(t){e._localStorage=t}));Promise.all([a,o,n]).finally((function(){e.load_all_data_from_storage(t)}))}))})),e}return s(a,r),a.prototype.get_platform_tld=function(){return this._platformSdk?this._platformSdk.environment.i18n.tld.toLowerCase():r.prototype.get_platform_tld.call(this)},a.prototype.get_language=function(){return this._platformSdk?this._platformSdk.environment.i18n.lang.toLowerCase():r.prototype.get_language.call(this)},a.prototype.get_player=function(t,e){var r=this,a={scopes:!1};t&&"boolean"==typeof t.scopes&&(a.scopes=t.scopes),this._platformSdk.getPlayer(a).then((function(t){r._playerId=t.getUniqueID(),r._isPlayerAuthorized="lite"!==t.getMode();var e=t.getName();""!==e&&(r._playerName=e),r._playerPhotos=[];var a=t.getPhoto("small"),o=t.getPhoto("medium"),n=t.getPhoto("large");a&&r._playerPhotos.push(a),o&&r._playerPhotos.push(o),n&&r._playerPhotos.push(n),r._yandexPlayer=t})).finally((function(){return e(!0)}))},a.prototype.authorize_player=function(t,e){var r=this;this._isPlayerAuthorized?this.get_player(t,e):this._platformSdk.auth.openAuthDialog().then((function(){r.get_player(t,e)})).catch((function(t){r.error(t),e(!1)}))},a.prototype.load_all_data_from_storage=function(t){var e=this;this._platformStorageCachedData={},this._yandexPlayer?this._yandexPlayer.getData().then((function(r){e._platformStorageCachedData=r,t(!0)})).catch((function(r){e.error(r),t(!1)})):t(!1)},a.prototype.get_data_from_storage=function(t,e,a){var o=this;if(void 0===a&&(a=!1),a){var n=this._get_cached_storage(t);if(!0===n[0])return e(!0,n[1])}this._yandexPlayer?this._yandexPlayer.getData().then((function(r){if(o._platformStorageCachedData=r,Array.isArray(t.key)){for(var a=[],n=0;n<t.key.length;n++){var i=void 0===o._platformStorageCachedData[t.key[n]]?null:o._platformStorageCachedData[t.key[n]];a.push(i)}return e(!0,a)}return e(!0,void 0===o._platformStorageCachedData[t.key]?null:o._platformStorageCachedData[t.key])})).catch((function(t){o.error(t),e(!1,null)})):r.prototype.get_data_from_storage.call(this,t,e,a)},a.prototype.set_data_to_storage=function(t,e){var a=this;if(this._yandexPlayer){var o=null!==this._platformStorageCachedData?_({},this._platformStorageCachedData):{};if(Array.isArray(t.key))for(var n=0;n<t.key.length;n++)o[t.key[n]]=t.value[n],null!=this._platformStorageCachedData&&(this._platformStorageCachedData[t.key[n]]=t.value[n]);else o[t.key]=t.value,null!=this._platformStorageCachedData&&(this._platformStorageCachedData[t.key]=t.value);this._yandexPlayer.setData(o).then((function(){a._platformStorageCachedData=o,e(!0)})).catch((function(t){a.error(t),e(!1)}))}else r.prototype.set_data_to_storage.call(this,t,e)},a.prototype.delete_data_from_storage=function(t,e){var a=this;if(this._yandexPlayer){var o=null!==this._platformStorageCachedData?_({},this._platformStorageCachedData):{};if(Array.isArray(t.key))for(var n=0;n<t.key.length;n++)delete o[t.key[n]];else delete o[t.key];this._yandexPlayer.setData(o).then((function(){a._platformStorageCachedData=o,e(!0)})).catch((function(t){a.error(t),e(!1)}))}else r.prototype.delete_data_from_storage.call(this,t,e)},a.prototype.rate=function(t){var e=this;this._platformSdk.feedback.canReview().then((function(r){r.value?e._platformSdk.feedback.requestReview().then((function(e){e.feedbackSent?t(!0):t(!1)})).catch((function(r){e.error(r),t(!1)})):(e.error(r.reason),t(!1))})).catch((function(r){e.error(r),t(!1)}))},a.prototype.set_leaderboard_score=function(t,e){var r=this;return this._isPlayerAuthorized?this._leaderboards&&t&&t.score&&t.leaderboardName?("string"==typeof t.score&&(t.score=parseInt(t.score)),void this._leaderboards.setLeaderboardScore(t.leaderboardName,t.score,t.extraData).then((function(){e(!0)})).catch((function(t){r.error(t),e(!1)}))):e(!1):(this.error("Player is not authorized"),e(!1))},a.prototype.get_leaderboard_score=function(t,e){var r=this;return this._isPlayerAuthorized&&this._leaderboards&&t&&t.leaderboardName?void this._leaderboards.getLeaderboardPlayerEntry(t.leaderboardName).then((function(t){e(!0,t.score)})).catch((function(t){r.error(t),e(!1)})):e(!1)},a.prototype.get_leaderboard_entries=function(t,e){var r=this;if(!this._leaderboards||!t||!t.leaderboardName)return e(!1,[]);var a={includeUser:!1,quantityAround:5,quantityTop:5};"boolean"==typeof t.includeUser&&(a.includeUser=t.includeUser),"string"==typeof t.quantityAround&&(t.quantityAround=parseInt(t.quantityAround)),"number"==typeof t.quantityAround&&(a.quantityAround=t.quantityAround),"string"==typeof t.quantityTop&&(t.quantityTop=parseInt(t.quantityTop)),"number"==typeof t.quantityTop&&(a.quantityTop=t.quantityTop),this._leaderboards.getLeaderboardEntries(t.leaderboardName,a).then((function(t){var r=null;t&&t.entries.length>0&&(r=t.entries.map((function(e){var r=[],a=e.player.getAvatarSrc("small"),o="",n=e.rank==t.userRank;return null!=e.extraData&&(o=e.extraData),a&&r.push(a),{id:e.player.uniqueID,score:e.score,rank:e.rank,name:e.player.publicName,photos:r,extraData:o,isUser:n}}))),e(!0,r)})).catch((function(t){r.error(t),e(!1,[])}))},a.prototype.show_interstitial=function(){var e=this;this._platformSdk.adv.showFullscreenAdv({callbacks:{onOpen:function(){e._set_interstitial_state(t.OPENED)},onClose:function(r){r?e._set_interstitial_state(t.CLOSED):e._set_interstitial_state(t.FAILED)}}})},a.prototype.show_rewarded=function(){var t=this;this._platformSdk.adv.showRewardedVideo({callbacks:{onOpen:function(){t._set_rewarded_state(e.OPENED)},onRewarded:function(){t._set_rewarded_state(e.REWARDED)},onClose:function(){t._set_rewarded_state(e.CLOSED)},onError:function(r){t._set_rewarded_state(e.FAILED)}}})},a}(o),u=function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},t(e,r)};return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function a(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(a.prototype=r.prototype,new a)}}(),d=function(a){function o(o){var i=a.call(this,(function(){}))||this;return i._platformId="ok",i._bannerVisible=!1,i._isPlayerAuthorized=!0,i.check_ad_block(),n("https://api.ok.ru/js/fapi5.js").then((function(){i._platformSdk=window.FAPI,window.API_callback=function(a,o,n){if(i.log("API_callback",a,o,n),"loadAd"==a&&("ok"==o?(i._set_rewarded_state(e.OPENED),i._platformSdk.UI.showLoadedAd()):(i.warn("reward[loadAd]",o,n),i._set_rewarded_state(e.FAILED))),"showLoadedAd"==a&&("ok"==o?i._set_rewarded_state(e.REWARDED):i.warn("reward[showLoadedAd]",o,n),i._set_rewarded_state(e.CLOSED)),"showAd"==a&&("ok"==o&&"ad_shown"==n||i.warn("inter[showAd]",o,n),i._set_interstitial_state(t.CLOSED)),"requestBannerAds"==a&&("ok"==o&&"ad_loaded"==n&&(i._bannerVisible?i._platformSdk.invokeUIMethod("showBannerAds","bottom"):i.warn("[requestBannerAds] Banner state not visible, not showing")),"error"==o&&i._setBannerState(r.FAILED),"error"!=o||"disabled"!=n&&"not_supported"!=n||(i._isBannerSupported=!1,i.warn("[requestBannerAds] banner not supported"))),"showBannerAds"==a&&"ok"==o&&("true"==n?i._setBannerState(r.SHOWN):"false"==n&&i._setBannerState(r.FAILED)),"hideBannerAds"==a&&("true"==n?i._setBannerState(r.HIDDEN):"false"!=n&&"not_initialized"!=n||i._setBannerState(r.FAILED)),"isBannerAdsVisible"==a&&"ok"==o&&("true"!=n||i._bannerVisible||i.warn("[isBannerAdsVisible] Баннер показан, но не должен быть"),"false"==n&&i._bannerVisible&&(i.log("[isBannerAdsVisible] возобновляем показ баннера"),i._platformSdk.invokeUIMethod("requestBannerAds"))),"getPageInfo"==a&&"ok"==o){var s=JSON.parse(n),_=null==window.sub_height?100:window.sub_height,l=s.innerHeight;i._platformSdk.UI.setWindowSize(540,l-_)}};var a=i._platformSdk.Util.getRequestParameters();i._platformSdk.init(a.api_server,a.apiconnection,(function(){i.log("Инициализация прошла успешно [OK]");var t="true"==i._platformSdk.Util.getRequestParameters().mob;i._isBannerSupported=t,i._playerId=a.logged_user_id,i._playerName=a.user_name,i._playerPhotos=[a.user_image],i.load_all_data_from_storage(o)}),(function(t){this.error("Ошибка инициализации",t),o(!1)}))})),i}return u(o,a),o.prototype.is_share_supported=function(){return!0},o.prototype.share=function(t){return this.send_request_to_ok_bridge("share","showInvite",t.link)},o.prototype.send_request_to_ok_bridge=function(t,e,r){var a=this;return void 0===r&&(r={}),new Promise((function(t,o){try{a._platformSdk.UI[e](r),t(!0)}catch(e){a.error(e),t(!1)}}))},o.prototype._update_resize=function(t){if("true"==this._platformSdk.Util.getRequestParameters().mob){for(var e='<div class="screen-manager" style="width: 100%;height: 100%;position: fixed;z-index: 999; background: #000000d9;"><div style="width: 500px;left: 50%;position: absolute;margin-left: -250px;color: #fff;top: 40%;text-align: center;"><h2>Поверните устройство</h2><h3>Игра работает только в <br>'+(t?"вертикальной":"горизонтальной")+" ориентации</h3></div></div>",r=window.innerWidth,a=window.innerHeight,o=document.querySelectorAll(".screen-manager"),n=0;n<o.length;n++)o[n].remove();r>a&&t&&document.body.insertAdjacentHTML("beforeend",e),a>r&&!t&&document.body.insertAdjacentHTML("beforeend",e)}else this._platformSdk.UI.getPageInfo()},o.prototype.start_resize_monitor=function(t){var e=this;window.addEventListener("resize",(function(){return e._update_resize(t.is_vert)}),!0),this._update_resize(t.is_vert)},o.prototype.load_all_data_from_storage=function(t){var e=this;this._platformStorageCachedData={},this._platformSdk.Client.call({method:"storage.getKeys",scope:"CUSTOM"},(function(r,a,o){return"ok"!=r||null!=o?(e.error("status:",r,"data:",a,"error:",o),t(!1)):0==a.keys.length?t(!0):void e.get_data_from_storage({key:a.keys},(function(r,o){if(r)for(var n=0;n<a.keys.length;n++)e._platformStorageCachedData[a.keys[n]]=o[n];t(r)}),!1)}))},o.prototype.get_data_from_storage=function(t,e,r){var a=this;if(void 0===r&&(r=!1),r){var o=this._get_cached_storage(t);if(!0===o[0])return e(!0,o[1])}var n=Array.isArray(t.key)?t.key:[t.key];this._platformSdk.Client.call({method:"storage.get",keys:n,scope:"CUSTOM"},(function(r,o,n){if("ok"==r&&null==n){if(Array.isArray(t.key)){var i={};for(var s in o.data){var _=o.data[s];i[s]=a.decode_storage_value(_)}for(var l=[],u=0;u<t.key.length;u++)l.push(i[t.key[u]]);return e(!0,l)}return e(!0,a.decode_storage_value(o.data[t.key]))}a.error("status:",r,"data:",o,"error:",n),e(!1,null)}))},o.prototype._set_key_val_to_storage=function(t,e){var r=this;null!=this._platformStorageCachedData&&(this._platformStorageCachedData[t.key]=t.value),this._platformSdk.Client.call({method:"storage.set",key:t.key,value:this.encode_storage_value(t.value)},(function(t,a,o){"ok"==t&&null==o?e(!0):(r.error("save status:",t,"data:",a,"error:",o),e(!1))}))},o.prototype._set_key_val_to_storage_promise=function(t){var e=this;return new Promise((function(r,a){e._set_key_val_to_storage(t,r)}))},o.prototype.set_data_to_storage=function(t,e){if(Array.isArray(t.key)){for(var r=[],a=0;a<t.key.length;a++)r.push(this._set_key_val_to_storage_promise({key:t.key[a],value:t.value[a]}));Promise.all(r).then((function(){return e(!0)}))}else this._set_key_val_to_storage({key:t.key,value:t.value},e)},o.prototype.delete_data_from_storage=function(t,e){if(!Array.isArray(t.key))return this.set_data_to_storage({key:t.key,value:""},e);for(var r=[],a=0;a<t.key.length;a++)r.push(this._set_key_val_to_storage_promise({key:t.key[a],value:""}));Promise.all(r).then((function(){return e(!0)}))},o.prototype.check_and_migrate_data=function(t,e){var r=this;if(this.log("check migrate [OK]..."),null==this._platformStorageCachedData||0==Object.keys(this._platformStorageCachedData).length)return this.log("migrate not required, not data"),e(!0);if(null==this._platformStorageCachedData.is_first)return this.log("migrate not required ?"),e(!0);if(-1==JSON.stringify(this._platformStorageCachedData.is_first).indexOf("value"))return this.log("migrate not required"),e(!0);var a=[],o=[];for(var n in this._platformStorageCachedData){var i=this._platformStorageCachedData[n].value;a.push(n),o.push(i)}this.set_data_to_storage({key:a,value:o},(function(t){r.log("migrate finished",t),e(t)}))},o.prototype.show_interstitial=function(){this._set_interstitial_state(t.OPENED),this._platformSdk.UI.showAd()},o.prototype.show_rewarded=function(){this._platformSdk.UI.loadAd()},o}(o),c=function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},t(e,r)};return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function a(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(a.prototype=r.prototype,new a)}}(),p=function(a){function o(t){var e=a.call(this,(function(){}))||this;e._platformId="vk",e._isPlayerAuthorized=!0;var r=new URL(window.location.href);return r.searchParams.has("platform")&&(e.platform=r.searchParams.get("platform")),n("https://unpkg.com/@vkontakte/vk-bridge/dist/browser.min.js").then((function(){e._platformSdk=window.vkBridge,e._platformSdk.send("VKWebAppInit").then((function(){e._isBannerSupported=!0,e._platformSdk.send("VKWebAppGetUserInfo").then((function(t){t&&(e._playerId=t.id,e._playerName=t.first_name+" "+t.last_name,t.photo_100&&e._playerPhotos.push(t.photo_100),t.photo_200&&e._playerPhotos.push(t.photo_200),t.photo_max_orig&&e._playerPhotos.push(t.photo_max_orig))})).finally((function(){e.load_all_data_from_storage(t)}))})),e._platformSdk.send("VKWebAppGetClientVersion").then((function(t){t&&(e.platform=t.platform)})).catch((function(t){e.error(t)}))})),e}return c(o,a),o.prototype.is_favorite_supported=function(){return!0},o.prototype.is_share_supported=function(){return!0},o.prototype.send_request_to_vk_bridge=function(t,e,r,a){var o=this;return void 0===r&&(r={}),void 0===a&&(a="result"),new Promise((function(t,n){o._platformSdk.send(e,r).then((function(e){e[a]?t(!0):t(!1)})).catch((function(e){o.error(e),t(!1)}))}))},o.prototype.get_language=function(){var t=new URL(window.location.href);if(t.searchParams.has("language")){var e=t.searchParams.get("language");try{e=parseInt(e)}catch(t){}switch(e){case 0:return"ru";case 1:return"uk";case 2:return"be";case 3:return"en"}}return a.prototype.get_language.call(this)},o.prototype.get_payload=function(){var t=new URL(window.location.href);return t.searchParams.has("hash")?t.searchParams.get("hash"):a.prototype.get_payload.call(this)},o.prototype.load_all_data_from_storage=function(t){var e=this;this._platformStorageCachedData={},this._platformSdk.send("VKWebAppStorageGetKeys",{count:50,offset:0}).then((function(r){if(!(r.keys.length>0))return t(!1);e.get_data_from_storage({key:r.keys},(function(a,o){if(a)for(var n=0;n<r.keys.length;n++)e._platformStorageCachedData[r.keys[n]]=o[n];t(a)}),!1)})).catch((function(r){e.error(r),t(!1)}))},o.prototype.get_data_from_storage=function(t,e,r){var a=this;if(void 0===r&&(r=!1),r){var o=this._get_cached_storage(t);if(!0===o[0])return e(!0,o[1])}var n=Array.isArray(t.key)?t.key:[t.key];this._platformSdk.send("VKWebAppStorageGet",{keys:n}).then((function(r){if(Array.isArray(t.key)){for(var o={},n=0;n<r.keys.length;n++){var i=r.keys[n];""===i.value?o[i.key]=null:o[i.key]=a.decode_storage_value(i.value)}var s=[];for(n=0;n<t.key.length;n++)s.push(o[t.key[n]]);return e(!0,s)}return e(!0,""===r.keys[0].value?null:a.decode_storage_value(r.keys[0].value))})).catch((function(t){t&&t.error_data&&t.error_data.error_reason&&a.error(t.error_data.error_reason),e(!1,null)}))},o.prototype._set_key_val_to_storage=function(t,e){var r=this;null!=this._platformStorageCachedData&&(this._platformStorageCachedData[t.key]=t.value),this._platformSdk.send("VKWebAppStorageSet",{key:t.key,value:this.encode_storage_value(t.value)}).then((function(){e(!0)})).catch((function(t){t&&t.error_data&&t.error_data.error_reason&&r.error(t.error_data.error_reason),e(!1)}))},o.prototype._set_key_val_to_storage_promise=function(t){var e=this;return new Promise((function(r,a){e._set_key_val_to_storage(t,r)}))},o.prototype.set_data_to_storage=function(t,e){if(Array.isArray(t.key)){for(var r=[],a=0;a<t.key.length;a++){var o={key:t.key[a],value:t.value[a]};r.push(this._set_key_val_to_storage_promise(o))}Promise.all(r).then((function(){return e(!0)}))}else this._set_key_val_to_storage({key:t.key,value:t.value},e)},o.prototype.delete_data_from_storage=function(t,e){if(!Array.isArray(t.key))return this.set_data_to_storage({key:t.key,value:""},e);for(var r=[],a=0;a<t.key.length;a++)r.push(this._set_key_val_to_storage_promise({key:t.key[a],value:""}));Promise.all(r).then((function(){return e(!0)}))},o.prototype.share=function(t,e){var r={};t&&t.link&&(r.link=t.link),this.send_request_to_vk_bridge("share","VKWebAppShare",r,"type").then((function(t){e(t)}))},o.prototype.add_to_favorites=function(t){this.send_request_to_vk_bridge("add_to_favorites","VKWebAppAddToFavorites").then((function(e){t(e)}))},o.prototype.show_banner=function(t){var e=this,a="bottom",o="resize",n=!1;t&&("string"==typeof t.position&&(a=t.position),"string"==typeof t.layoutType&&(o=t.layoutType),"boolean"==typeof t.canClose&&(n=t.canClose)),this._platformSdk.send("VKWebAppShowBannerAd",{banner_location:a,layout_type:o,can_close:n}).then((function(t){t.result?e._setBannerState(r.SHOWN):e._setBannerState(r.FAILED)})).catch((function(t){e._setBannerState(r.FAILED)}))},o.prototype.hide_banner=function(){var t=this;this._platformSdk.send("VKWebAppHideBannerAd").then((function(e){e.result&&t._setBannerState(r.HIDDEN)}))},o.prototype.show_interstitial=function(){var e=this;this._platformSdk.send("VKWebAppCheckNativeAds",{ad_format:"interstitial"}).then((function(r){r.result&&e._set_interstitial_state(t.OPENED)})).finally((function(){e._platformSdk.send("VKWebAppShowNativeAds",{ad_format:"interstitial"}).then((function(r){e._set_interstitial_state(r.result?t.CLOSED:t.FAILED)})).catch((function(){e._set_interstitial_state(t.FAILED)}))}))},o.prototype.show_rewarded=function(){var t=this;this._platformSdk.send("VKWebAppCheckNativeAds",{ad_format:"reward",use_waterfall:!0}).then((function(r){r.result&&t._set_rewarded_state(e.OPENED)})).finally((function(){t._platformSdk.send("VKWebAppShowNativeAds",{ad_format:"reward",use_waterfall:!0}).then((function(r){r.result?(t._set_rewarded_state(e.REWARDED),t._set_rewarded_state(e.CLOSED)):t._set_rewarded_state(e.FAILED)})).catch((function(){t._set_rewarded_state(e.FAILED)}))}))},o}(o);window.init_sdk_platform=function(t,e){var r;function a(){var t=setInterval((function(){if(r)return clearInterval(t),window.sdk=r,console.log("end init sdk"),void e(!0)}),10)}console.log("start init sdk");var n=new URL(window.location.href);r=n.hostname.includes("yandex")||n.hash.includes("yandex")?new l(a):n.searchParams.has("api_id")&&n.searchParams.has("viewer_id")&&n.searchParams.has("auth_key")?new p(a):n.searchParams.has("web_server")&&n.searchParams.has("application_key")&&n.searchParams.has("api_server")?new d(a):new o(a,!0)}})();