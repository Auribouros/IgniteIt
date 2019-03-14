function getRemote(data, url) {
    return $.ajax({
        type: "GET",
        data: data,
        url: url,
        async: false
    }).responseText;
}

function getNNextLaunches(n) {
	return JSON.parse(getRemote({next: n}, 'https://launchlibrary.net/1.4/launch'));
}

function getMissionFromLaunchId(id) {
	let result = JSON.parse(getRemote({launchid: id}, 'https://launchlibrary.net/1.4/mission'));
	return (result.count > 0)? result : null;
}

function getImageFromRocketName(name) {
	//alert('['+ name +']');
	let result = JSON.parse(getRemote({name: name}, 'https://launchlibrary.net/1.4/rocket'));
	return (result.count > 0)? result.rockets[0].imageURL : '';
}


function getNNextLaunchesObjects(n) {

	let launches = getNNextLaunches(n).launches;
	let launchesObjects = [];
	let launchesCards = [];

	for (var i = 0; i < launches.length; i++) {
		let currentMission = getMissionFromLaunchId(launches[i].id);
		launchesObjects[i] = {
			id: launches[i].id,
			description: {
				launchWindow: 'start: '+ launches[i].windowstart +' end: '+ launches[i].windowend,
				missionName: (currentMission != null)? currentMission.missions[0].name : '',
				missionDescription: (currentMission != null)? currentMission.missions[0].description : '',
				rocketName: launches[i].name,
				image: getImageFromRocketName(launches[i].name.split('|')[0].replace(/([0-9]+\,[0-9]+|[\(\)\+]*| $)*/g, ''))
			}
		}

		launchesCards[i] = new LaunchCard('id'+ i, launchesObjects[i].description);

	}

	return launchesCards;
	
}


