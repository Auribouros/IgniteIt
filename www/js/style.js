function LaunchCard(id, description) {
	
	this.description = description;
	this.html = '';

	this.appendTo = function (element) {
		$(element).append(this.html);
	};
	this.elementCSS = function (rules) {
		$('#'+ id).css(rules);
	};
	this.imageCSS = function (rules) {
		$('#'+ id +' img').css(rules);
	};

}

function Description(rocket, image, launchWindow, missionName, missionDescription) {
	
	this.rocket = rocket;
	this.image = image;
	this.launchWindow = launchWindow;
	this.missionName = missionName;
	this.missionDescription = missionDescription;
	this.html = '';

}