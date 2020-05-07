userAgent = navigator.userAgent;
userAgent = userAgent == null ? "" : userAgent.toLowerCase();
window.onload = function(){
	uAgent = navigator.userAgent;
	uAgent = uAgent == null ? "" : uAgent.toLowerCase();
	if(uAgent.indexOf('trident/7.0') != -1){
		document.getElementById('IE11_msg').style.display = "block";
	}
}