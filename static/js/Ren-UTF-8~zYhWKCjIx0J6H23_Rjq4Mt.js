/*AQAAAFNIQS0yNTYAAQAAAAAAAQAAAAAAeHCdJv7b6BqAFeRdM1BcMZwidvDzPJ_O39920A9jIhM*//* Script imported from https://www.java.com/ga/js/subtlePager.js */
aFeoOverrideAttrRead("script","src");var subtlePager={className:"page",classNames:"pages",$gsub:function(source,pattern,replacement){var result="",match;if(typeof replacement=="function"){var _replacement=function(){return replacement(match);};}else{var _replacement=function(){return replacement;};}while(source.length>0){if(match=source.match(pattern)){result+=source.slice(0,match.index);result+=(function(value){return value==null?"":String(value);})(_replacement());source=source.slice(match.index+match[0].length);}else{result+=source;source="";}}return result;},page:function(ele,direction){var ele=document.getElementById(ele);if(!ele){return false;}if(ele.className.match(subtlePager.className)){var page_count=parseInt(subtlePager.$gsub(ele.className,RegExp(".*"+subtlePager.classNames+"(\\d+).*"),function(r){return r[1];}),10)||3;if(direction&&typeof direction=="number"){var _replacement=subtlePager.className+direction;}else{var _replacement=function(r){var pnum=(direction?1:-1)+parseInt(r[1],10);if(pnum<1){pnum=page_count;}if(pnum>page_count){pnum=1;}return subtlePager.className+pnum;};}ele.className=subtlePager.$gsub(ele.className,RegExp(subtlePager.className+"(\\d+)"),_replacement);}else{ele.className+=" "+(subtlePager.className+(direction?1:0));}return false;}};