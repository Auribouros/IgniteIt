function LaunchCard(id, description) {
	
	this.description = description;
	this.id = id;
	this.image = (this.description.image != undefined)? this.description.image : '';
	this.html = '<div class="rock" id="'+ this.id +'">'+
		'<h2 class="rockName">'+ this.description.rocketName +' '+ this.description.missionName +'</h2>'+
		'<div class="desc">'+ 
		'<img src="'+ this.image +'" />'+
		'<h3 class="rockDate">Launch window: <br>'+ this.description.launchWindow +'</h3>'+
		this.description.missionDescription +
		'</div>'
	+'</div>';

	this.appendTo = function (element) {
		$(element).append(this.html);
	};
	this.elementCSS = function (rules) {
		$('#'+ this.id).css(rules);
	};
	this.imageCSS = function (rules) {
		$('#'+ this.id +' img').css(rules);
	};
	this.descCSS = function (rules){
		$('.desc').css(rules);
	}
	this.getVisibility = function(){
		return $('.desc').css('visibility');
	}

}

function Description(rocketName, image, launchWindow, missionName, missionDescription) {
	
	this.rocketName = rocketName;
	this.image = image;
	this.launchWindow = launchWindow;
	this.missionName = missionName;
	this.missionDescription = missionDescription;

}