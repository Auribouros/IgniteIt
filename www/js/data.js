/**
 * Gets contents from a RESTful API
 *
 * @param      {object}  data  Call parameters
 * @param      {string}  url   The API URL
 */
function getRemote(data, url) {
    return $.ajax({
        type: "GET",
        data: data,
        url: url,
        async: false
    }).responseText;
}

/**
 * Returns the n next launches to come
 *
 * @param      {Number}  n  Number of launches to return
 * @return     {Object} JSON object
 */
function getNNextLaunches(n) {
	return JSON.parse(getRemote({next: n}, 'https://launchlibrary.net/1.4/launch'));
}

/**
 * Returns the mission corresponding to a launch
 *
 * @param      {Number}  id  Launch id
 * @return     {Object} JSON object
 */
function getMissionFromLaunchId(id) {
	let result = JSON.parse(getRemote({launchid: id}, 'https://launchlibrary.net/1.4/mission'));
	return (result.count > 0)? result : null;
}

/**
 * Returns a rocket's image
 *
 * @param      {string}  name  Name of the rocket
 * @return     {string} Image URL
 */
function getImageFromRocketName(name) {
	//alert('['+ name +']');
	let result = JSON.parse(getRemote({name: name}, 'https://launchlibrary.net/1.4/rocket'));
	return (result.count > 0)? result.rockets[0].imageURL : '';
}

/**
 * Returns the n next launches to come as LaunchCard objects
 *
 * @param      {Number}  n  Number of launches to return
 * @return     {Array} LaunchCard array
 */
function getNNextLaunchesObjects(n) {

	let launches = getNNextLaunches(n).launches;
	let launchesObjects = [];
	let launchesCards = [];

	for (var i = 0; i < launches.length; i++) {
		let currentMission = getMissionFromLaunchId(launches[i].id);
		launchesObjects[i] = {
			id: launches[i].id,
			description: {
				launchWindow: 'start: '+ launches[i].windowstart +'<br/> end: '+ launches[i].windowend,
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

/**
 * Returns the launches matching a rocket name
 *
 * @param      {string}  rocketName  Rocket name
 * @return     {Object} JSON object
 */
function getLaunchesFromRocketName(rocketName) {
	return JSON.parse(getRemote({name: rocketName}, 'https://launchlibrary.net/1.4/launch')).launches;
}

/**
 * Returns the launches matching a rocket name as LaunchCard objects
 *
 * @param      {string}  rocketName  Rocket name
 * @return     {Array} LaunchCard array
 */
function getLaunchesFromRocketNameObjects(rocketName) {
	
	let launches = getLaunchesFromRocketName(rocketName);
	let launchesObjects = [];
	let launchesCards = [];

	for (let i = 0; i < launches.length; i++) {
		
		let currentMission = getMissionFromLaunchId(launches[i].id);
		
		launchesObjects[i] = {
			id: launches[i].id,
			description: {
				launchWindow: 'start: '+ launches[i].windowstart +'<br/> end: '+ launches[i].windowend,
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

/**
 * Returns the launches after a specified date
 *
 * @param      {string}  date  Specified date
 * @return     {Object} JSON Object
 */
function getLaunchesAfter(date) {
	return JSON.parse(getRemote({startdate: date}, 'https://launchlibrary.net/1.4/launch')).launches;
}

/**
 * Returns the launches after a specified date as LaunchCard objects
 *
 * @param      {string}  date  Specified date
 * @return     {Array} LaunchCard array
 */
function getLaunchesAfterObjects(date) {

	let launches = getLaunchesAfter(date);
	let launchesObjects = [];
	let launchesCards = [];

	for (let i = 0; i < launches.length; i++) {
		
		let currentMission = getMissionFromLaunchId(launches[i].id);
		
		launchesObjects[i] = {
			id: launches[i].id,
			description: {
				launchWindow: 'start: '+ launches[i].windowstart +'<br/> end: '+ launches[i].windowend,
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


