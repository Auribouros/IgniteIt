var launchesObjects = [];

function handleLaunch(launchObject, inc) {
	
	launchesObjects[inc] = {
		id: launchObject.id,
		description: {
			launchWindow: launchObject.windowstart +' '+ launchObject.windowend,
			rocketName:'',
			image: ''
		}
	};

	$.get('https://launchlibrary.net/1.4/mission', {launchid: launchObject.id}, function (missionData) {
		mission = missionData.missions[0];
		launchesObjects[inc].description.missionName = mission.name;
		launchesObjects[inc].description.missionDescription = mission.description;
	});

	for (var i = 0; i < launchesObjects.length; i++) {
            let currentObject = launchesObjects[i];
            let launchCard = new LaunchCard(currentLaunch.id, currentLaunch.description);
            launchCard.appendTo('body');
    }

}