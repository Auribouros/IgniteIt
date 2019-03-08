var launchesObjects = [];

function LaunchData(launchObject) {
	this.launchData = launchObject;
	this.missionData = undefined;
	this.description = {id: this.launchData.id};

	this.setMissionData = function () {
		$.get('https://launchlibrary.net/1.4/mission', {launchid:this.launchData.id}, function (missionData) {
			let mission = missionData.missions[0];
			this.missionData = mission;
			this.description.description = {
				image: '',
				rocketName: '',
				missionName: mission.name,
				launchWindow: this.launchData.windowstart +' '+ this.launchData.windowsend,
				missionDescription: mission.description
			};
		});
	}
	this.setDescription = function (missionData) {
		this.description.description = {
			image: '',
			rocketName: '',
			missionName: missionData.name,
			launchWindow: this.launchData.windowstart +' '+ this.launchData.windowsend,
			missionDescription: missionData.description
		};
	}
}