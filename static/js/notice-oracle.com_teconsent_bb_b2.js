function _truste_eumap(){truste=self.truste||{};truste.eu||(truste.eu={});var f=truste.eu.bindMap={version:"v1.7-14",domain:"oracle.com",width:parseInt("850"),height:parseInt("300"),baseName:"te-notice-clr1-42e00f6c-7f6f-4068-9d1e-1df8fbc5cb48",showOverlay:"{ShowLink}",hideOverlay:"{HideLink}",anchName:"te-notice-clr1-42e00f6c-7f6f-4068-9d1e-1df8fbc5cb48-anch",intDivName:"te-notice-clr1-42e00f6c-7f6f-4068-9d1e-1df8fbc5cb48-itl",iconSpanId:"te-notice-clr1-42e00f6c-7f6f-4068-9d1e-1df8fbc5cb48-icon",containerId:(!"teconsent"||/^_LB.*LB_$/.test("teconsent"))?"teconsent":"teconsent",messageBaseUrl:"http://consent.trustarc.com/noticemsg?",daxSignature:"cb8350a2759273dccf1e483791e6f8fd",privacyUrl:"",prefmgrUrl:"http://consent-pref.trustarc.com/?type=oracle6",text:"true",icon:"Tanımlama Bilgisi Tercihleri",locale:"tr",language:"tr",country:"cn",state:"",noticeJsURL:((parseInt("0")?"https://consent-st.trustarc.com/":"http://consent.trustarc.com/"))+"asset/notice.js/v/v1.7-14",assetServerURL:(parseInt("0")?"https://consent-st.trustarc.com/":"http://consent.trustarc.com/")+"asset/",cdnURL:"https://consent-st.trustarc.com/".replace(/^(http:)?\/\//,"https://"),iconBaseUrl:"http://consent.trustarc.com/",behavior:"implied",behaviorManager:"us",provisionedFeatures:"",cookiePreferenceIcon:"tr-cookiepreferencestext3.png",cookieExpiry:parseInt("395",10)||395,closeButtonUrl:"//consent.trustarc.com/get?name=noticeclosebtn.png",apiDefaults:'{"reportlevel":16777215}',cmTimeout:parseInt("6000",10),popTime:new Date("".replace(" +0000","Z").replace(" ","T")).getTime()||null,popupMsg:"",bannerMsgURL:"http://consent.trustarc.com/bannermsg?",IRMIntegrationURL:"",irmWidth:parseInt(""),irmHeight:parseInt(""),irmContainerId:(!"_LBirmcLB_"||/^_LB.*LB_$/.test("_LBirmcLB_"))?"teconsent":"_LBirmcLB_",irmText:"",lspa:"",ccpaText:"",feat:{iabGdprApplies:false,consentResolution:false,dropBehaviorCookie:false,crossDomain:true,uidEnabled:false,replaceDelimiter:false,enableBanner:false,enableIRM:false,enableCM:true,enableCCPA:false,ccpaApplies:false,enableCM:true,unprovisionedDropBehavior:false,unprovisionedIab:false,unprovisionedCCPA:false},autoDisplayCloseButton:false};
if(/layout=gdpr/.test(f.prefmgrUrl)){f.isGdprLayout=true}if(/layout=iab/.test(f.prefmgrUrl)){f.isIabLayout=true
}if(self.location.protocol!="http:"){for(var a in f){if(f[a]&&f[a].replace){f[a]=f[a].replace(/^(http:)?\/\//,"https://")
}}}if(!truste.cma){var c=self.document,b=c.createElement("script");b.setAttribute("async","async");b.setAttribute("type","text/javascript");
b.setAttribute("crossorigin","");b.src=f.noticeJsURL;(c.getElementById(f.containerId)||c.getElementsByTagName("body")[0]||c.getElementsByTagName("head")[0]).appendChild(b)
}(function(e){if(e.feat.crossDomain){var d=function(){if(!window.frames.trustarc_notice){if(document.body){var g=document.body,h=document.createElement("iframe");
h.style.display="none";h.name="trustarc_notice";h.id="trustarcNoticeFrame";h.src=e.cdnURL+"get?name=crossdomain.html&domain="+e.domain;
g.appendChild(h)}else{setTimeout(d,5)}}};d()}})(truste.eu.bindMap);(function(k){const e="__cmpTrustarc";
const j="__tcfapiTrustarc";var i=function(){if(k.feat.iab){return}var n=self.document,m=n.createElement("script");
m.setAttribute("async","async");m.setAttribute("type","text/javascript");m.setAttribute("crossorigin","");
m.src="//trustarc.mgr.consensu.org/get?name=cmp.js";(n.getElementById(k.containerId)||n.getElementsByTagName("body")[0]||n.getElementsByTagName("head")[0]).appendChild(m);
k.feat.iab=true};var l=function(){if(k.feat.iab){return}var n=self.document,m=n.createElement("script");
m.setAttribute("async","async");m.setAttribute("type","text/javascript");m.setAttribute("crossorigin","");
m.src="https://trustarc.mgr.consensu.org/asset/tcfapi.js";(n.getElementById(k.containerId)||n.getElementsByTagName("body")[0]||n.getElementsByTagName("head")[0]).appendChild(m);
k.feat.iab=true};if(document.getElementById(e)){i()}else{var d=new MutationObserver(function g(m){if(document.getElementById(e)){d.disconnect();
i()}});d.observe(document.body||document.getElementsByTagName("body")[0]||document.documentElement,{attributes:false,childList:true,characterData:false,subtree:true});
setTimeout(function(){d.disconnect()},30000)}if(document.getElementById(j)){l()}else{var h=new MutationObserver(function g(m){if(document.getElementById(j)){h.disconnect();
l()}});h.observe(document.body||document.getElementsByTagName("body")[0]||document.documentElement,{attributes:false,childList:true,characterData:false,subtree:true});
setTimeout(function(){h.disconnect()},30000)}})(truste.eu.bindMap);f.styles={};f.styles.closebtn=typeof $temp_closebtn_style!="undefined"&&$temp_closebtn_style;
f.styles.box_overlay=typeof $temp_box_overlay!="undefined"&&$temp_box_overlay;f.styles.overlay=typeof $temp_overlay!="undefined"&&$temp_overlay;
f.styles.inner_iframe=typeof $temp_inner_iframe!="undefined"&&$temp_inner_iframe;f.styles.outerdiv=typeof $temp_style_outerdiv!="undefined"&&$temp_style_outerdiv;
f.outerdiv=typeof $temp_outerdiv!="undefined"}self._truste&&(self._truste.eumap=_truste_eumap)||_truste_eumap();