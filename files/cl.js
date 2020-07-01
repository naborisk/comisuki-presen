// treasure
!function(t,e){if(void 0===e[t]){e[t]=function(){e[t].clients.push(this),this._init=[Array.prototype.slice.call(arguments)]},e[t].clients=[];for(var r=function(t){return function(){return this["_"+t]=this["_"+t]||[],this["_"+t].push(Array.prototype.slice.call(arguments)),this}},s=["addRecord","set","trackEvent","trackPageview","trackClicks","ready"],a=0;a<s.length;a++){var c=s[a];e[t].prototype[c]=r(c)}var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src="/oo/ismtd.min.js";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(n,i)}}("ISMTreasure",this);
// ism
var ISMLIB=ISMLIB||{};ISMLIB.queue=ISMLIB.queue||[];
// ismua
ISMLIB.mwskip = (function(){try{return document.getElementById('ism-collector').getAttribute('data-mwskip')||'';}catch(err){return '';}})();
if (ISMLIB.mwskip=='') {
 !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.type='text/javascript';js.async=true;js.src='//mediaweaver.jp/oo/uu/ua.cgi?qua='+(function(){try{var r=(document.cookie.match(new RegExp("ismua=(.*?)(?:;|$)"))||['',''])[1];if (r==''){var u=(document.cookie.match(new RegExp("ismuu=(.*?)(?:;|$)"))||['',''])[1];u+=u;u=u.toLowerCase();u=u.replace(/-/g,'-');u=u.substr(0,8)+'-'+u.substr(8,4)+'-'+u.substr(12,4)+'-'+u.substr(16,4)+'-'+u.substr(20,12);r=u;} return r;}catch(err){return ''}})();fjs.parentNode.insertBefore(js,fjs);}}(document,"script","imsua-js");
}
// juicer
ISMLIB.juicercolor = (function(){try{return document.getElementById('ism-collector').getAttribute('data-juicer')||'';}catch(err){return '';}})();
if (ISMLIB.juicercolor.length) {
 !function(d,s,id,c){;var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.async=true;js.type='text/javascript';js.src='//kitchen.juicer.cc/?color='+c;fjs.parentNode.insertBefore(js,fjs);}}(document,"script","juicer-ismjs",ISMLIB.juicercolor);
}
ISMLIB.wCookie = function(_c){
 var d = new Date(); d.setTime(d.getTime()+ (60*60*24*365*2*1000) );
 var expires = '; expires=' + d.toGMTString();
 document.cookie = 'ismub=' + _c.replace(/[^\d\.)]/g,'') + expires + '; path=/';
};
ISMLIB.rCookie = function(_c){
 var neq = _c + '=';
 var ca = document.cookie.split(';');
 for(var i=0; i<ca.length; i++) {
  var c = ca[i];
  while (c.charAt(0)==' ') { c = c.substring(1,c.length); }
  if (c.indexOf(neq) == 0) {
   var rc = c.substring(neq.length,c.length);
   if (rc.match(/^[a-zA-Z0-9\.\-_]+$/g)){
    return rc;
   } else {
    return '';
   }
  }
 }
 return '';
};
if (ISMLIB.rCookie('ismub')=='' ) {
 if (ISMLIB.mwskip=='') {
  setTimeout(function(){ !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.async=true;js.src="//mediaweaver.jp/oo/uu/cl.cgi?rd="+parseInt( new Date() /1000 );fjs.parentNode.insertBefore(js,fjs);}}(document,"script","js-ismub");},500);
 }
} else {
 ISMLIB.cookie=ISMLIB.rCookie('ismub');
};
if (ISMLIB.rCookie('demdexid')=='' ) {
 !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.async=true;js.type='text/javascript';js.src='//dpm.demdex.net/ibs:dpid=205266&redir='+encodeURIComponent(document.location.origin + '/hfds/aam/dp.js?demdexid=${DD_UUID}')+'&dpuuid='+ISMLIB.rCookie('ismua');fjs.parentNode.insertBefore(js,fjs);}}(document,"script","demdex-ismjs");
 !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.async=true;js.type='text/javascript';js.src='//dpm.demdex.net/ibs:dpid=373185&redir='+encodeURIComponent(document.location.origin + '/hfds/aam/dp.js?demdexid=${DD_UUID}')+'&dpuuid='+ISMLIB.rCookie('_td_global');fjs.parentNode.insertBefore(js,fjs);}}(document,"script","demdex-tdjs");
};

ISMLIB.qWords = function(_c) {
 var qwords = [];
 try{
  if(document.referrer.indexOf('?') != -1){
   var params = document.referrer.split('?')[1].split('&');
   for(var i = 0; i<params.length; i++){
    var pair = params[i];
    param = pair.split('=');
    if (param[0] == 'fulltext' || param[0] == 'select' || param[0] == 'q' || param[0] == 'as_q' || param[0] == 'p' || param[0] == 'MT') {
     qwords = (decodeURIComponent((param[1].replace('+',' ').replace("'","")))).split(' ');
    }
   }
  }
 }catch(err){}
 return qwords;
};
ISMLIB.sWords = function(_key){
 var queries={};
 var r=''
 try{
  if(1< window.location.search.length){
   var query = window.location.search.substring(1);
   var parameters = query.split('&');
   for(var i=0; i< parameters.length;i++){
    var element=parameters[i].split('=');
    var paramName=decodeURIComponent(element[0]);
    var paramValue = decodeURIComponent(element[1] );
    queries[paramName]=decodeURIComponent(paramValue);
   }
   r=queries[_key]||'';
  }
 }catch(err){};
 return r;
};

ISMLIB.td_create_image = function(url) {
 var img = document.createElement('img');
 img.src = (('https:' == document.location.protocol) ? 'https://' : 'http://') + url;
 img.width=1;img.height=1;img.style.display='none';
 document.body.appendChild(img);
};
ISMLIB.td_sync_callback = function() {
 var td_client_id = ISMLIB.td.client.track.uuid;
 var region = ISMLIB.td.client.host.split('.')[0];
 var account = (region === 'in' ? 'aws-':(region === 'tokyo' ? 'aws-tokyo-':'idcf-')) + ISMLIB.td.client.writeKey.split('/')[0];
 var dbm_url = 'cm.g.doubleclick.net/pixel?google_nid=treasuredata_dmp&google_cm&td_write_key=8151/fcd628065149d648b80f11448b4083528c0d8a91&td_global_id=td_global_id' + '&td_client_id=' + td_client_id + '&account=' + account;
 ISMLIB.td_create_image(dbm_url);
 var ttd_url = 'match.adsrvr.org/track/cmf/generic?ttd_pid=vbyog0i&ttd_tpi=1&ttd_puid='+account;
 ISMLIB.td_create_image(ttd_url);
};
ISMLIB.td_success = function(opt){
 ISMLIB.td_sync_callback();
 ISMLIB.td.fetchUserSegments({
  audienceToken: ['2e9fd8c7-21f8-4c84-8d7f-bc019c52dba0','7f86d87f-a2b1-4c30-abeb-c75ca48f48c4','80ddd5d3-c3e9-4fe9-a95c-4b84d7540830','880fd3c6-19da-4fdc-acb7-e9904b622f7d'],
  keys: {'ism_ua':ISMLIB.rCookie('ismua'),'hash_ip':(ISMLIB.mdip||'')}
  },
  function(key, values){
   var d = new Date(); d.setTime(d.getTime()+ (60*60*24*365*2*1000) );
   var expires = '; expires=' + d.toGMTString();
   document.cookie = 'ismtdsegs=' + values.join(',') + expires + '; path=/';
  },
  function(){}
 );
};
ISMLIB.td_failure = function(opt){};
ISMLIB.count = 5;
ISMLIB.fire = function(_obj) {
 ISMLIB.custom=_obj;
 (function() {
  if (ISMLIB.rCookie('ismua')=='') {
   ISMLIB.count -= 1;
   if (ISMLIB.count != 0) {
    setTimeout(arguments.callee, 500);
   }
  } else {
   ISMLIB.count = 0;
  }
  if (ISMLIB.count == 0) {
   ISMLIB.td = new ISMTreasure({host:'in.treasuredata.com',writeKey: '5085/bbdacba68731486bf665742aade0d17df165ad14',database: 'media_db'});
   ISMLIB.td.set('$global','td_global_id','td_global_id');
   ISMLIB.custom.ism_ss = ISMLIB.rCookie('ismss');
   ISMLIB.custom.ism_ua = ISMLIB.rCookie('ismua');
   ISMLIB.custom.ism_ub = ISMLIB.rCookie('ismub');
   ISMLIB.custom.ism_uu = ISMLIB.rCookie('ismuu');
   ISMLIB.custom.aam_uid = ISMLIB.rCookie('demdexid');
   ISMLIB.custom.ism_qwords = ISMLIB.qWords();
   ISMLIB.custom.ism_search = ISMLIB.sWords('fulltext');
   ISMLIB.custom.ism_dummy = '20180411';
   if (ISMLIB.custom.ism_title==undefined || ISMLIB.custom.ism_title == '' ) ISMLIB.custom.ism_title = document.title;
   ISMLIB.td.trackEvent('site_access',ISMLIB.custom,ISMLIB.td_success,ISMLIB.td_failure);
  }
 })();
};
ISMLIB.go = function(){try{var current=null;while(current=ISMLIB.queue.shift()){try {current();}catch(err){}}}catch(err){}};
ISMLIB.queue.push=function(){Array.prototype.push.apply(this,arguments);setTimeout(ISMLIB.go,1);return this.length;};
setTimeout(ISMLIB.go,20);
