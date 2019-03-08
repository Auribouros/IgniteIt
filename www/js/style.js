function LaunchCard(id, description) {
	
	this.description = description;
	this.html = '<div class="rock" id="'+ this.id +'">'+
		'<img class="imgRock" align="left" src="'+ this.description.image +'" />'+
		'<h2 class="rockName">'+ this.description.rocketName +' '+ this.description.missionName +'</h2>'+
		'<h3 class="rockDate">'+ this.description.launchWindow +'</h3>'+
		'<div class="desc">'+ this.description.missionDescription +'</div>'
	+'</div>';

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

function Description(rocketName, image, launchWindow, missionName, missionDescription) {
	
	this.rocketName = rocketName;
	this.image = image;
	this.launchWindow = launchWindow;
	this.missionName = missionName;
	this.missionDescription = missionDescription;

}