/**
 * Instanciates a LaunchCard
 *
 * @class      LaunchCard (name)
 * @param      {string}  id           The identifier
 * @param      {Object}  description  The launch description
 */
function LaunchCard(id, description) {
	
	/**
	 * Launch description
	 * @type       {Object}
	 */
	this.description = description;
	/**
	 * Element id
	 * @type       {string}
	 */
	this.id = id;
	/**
	 * The rocket image URL
	 * @type       {string}
	 */
	this.image = (this.description.image != undefined)? this.description.image : '';
	/**
	 * element's HTML code
	 * @type       {string}
	 */
	this.html = '<div class="rock" id="'+ this.id +'">'+
		'<h2 class="rockName">'+ this.description.rocketName +' '+ this.description.missionName +'</h2>'+
		'<div class="desc">'+ 
		'<img src="'+ this.image +'" />'+
		'<h3 class="rockDate">Launch window: <br>'+ this.description.launchWindow +'</h3>'+
		this.description.missionDescription +
		'</div>'
	+'</div>';

	/**
	 * Appends this element to an other element
	 *
	 * @param      {string}  element  The element to append this to
	 */
	this.appendTo = function (element) {
		$(element).append(this.html);
	};
	/**
	 * Sets the element's CSS
	 *
	 * @param      {Object}  rules   The CSS rules to apply
	 */
	this.elementCSS = function (rules) {
		$('#'+ this.id).css(rules);
	};
	/**
	 * Sets the image CSS
	 *
	 * @param      {Object}  rules   The CSS rules to apply
	 */
	this.imageCSS = function (rules) {
		$('#'+ this.id +' img').css(rules);
	};
	/**
	 * Descriptions's CSS
	 *
	 * @param      {Object}  rules   The CSS rules to apply
	 */
	this.descCSS = function (rules){
		$('.desc').css(rules);
	}

}