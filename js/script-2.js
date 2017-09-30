var navigatorMessageMap = {
	'mac': 'macos',
	'iphone': 'macos',
	'win': 'windows',
	'lin': 'linux'
};

var platform = navigator.platform.toLowerCase();
var showOS=document.querySelectorAll('div[data-version]');

for (var key in navigatorMessageMap) {
	key = key.toLowerCase();
	var version = navigatorMessageMap[key];
	var showOSmass=[];

	if (platform.indexOf(key) >= 0){
		for (var i = 0; i < showOS.length ; i++) {
			showOSmass[i]=showOS[i].getAttribute("data-version");
		}
		for (var j = 0; j < showOSmass.length; j++) {
			if (version===showOSmass[j]) {
				for (var k = 0; k < showOS.length ; k++) {

					if(showOSmass[j]==showOS[k].getAttribute("data-version")) {
						showOS[k].style.display="block";
					}
		        }
	        }
        }
    }
}