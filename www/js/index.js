/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },


    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {

        //since Cordova has a weird behaviour concerning backgrounds, use jQuery to properly display it
        $('body').css({'background-size': $(document).width() +'px '+ $(document).height +'px'});
        
        //present the user with basic data
        init();

        //get a reference to all interactable elements
        let elements = document.getElementsByClassName('rock');
        let lis = document.getElementsByTagName('LI');
        let search = document.getElementById('query');
        let searchBtn = document.getElementById('searchBtn');
       
       //make the above elements interactable
        for (var i = 0; i < elements.length; i++) {
            elements[i].addEventListener('click', showInfo);
        }
        for (var i = 0; i < lis.length; i++) {
            lis[i].addEventListener('click', selectFilter);
        }
        searchBtn.addEventListener('click', performSearch);
        document.addEventListener("backbutton", init);

        /**
         * Makes a basic API call and presents the results to the user
         */
        function init() {

            //clean screen
            $('#blackboard').html('');

            //get launchcards
            launches = getNNextLaunchesObjects(10);

            //append the launchcards
            for (var i = 0; i < launches.length; i++) {
                launches[i].appendTo('#blackboard');
                launches[i].imageCSS({
                    'max-width': $('.rock').width()*0.9,
                    'margin': 'auto', 'padding': 0,
                    'border-radius': '20px'
                });
            }

            //make launchcards interactable
            let elements = document.getElementsByClassName('rock');

            for (var i = 0; i < elements.length; i++) {
                elements[i].addEventListener('click', showInfo);
            }

            //hide the launches descriptions
            $('.desc').hide();
            
        }

        /**
         * Shows the description of a launch.
         */
        function showInfo() {
            $('#'+ this.id +' .desc').toggle();
        }

        /**
         * Selects a filter clicked by the user
         */
        function selectFilter() {
            //unselect all filters
            $('li').css({'background-color': 'rgba(0, 0, 0, 0)', 'color': 'white'});
            $('li').data('selected', false);

            //select the filter the user is interested in
            $('#'+ this.id).css({'background-color': 'rgba(255, 255, 255, 1)', 'color': 'black'})
            $('#'+ this.id).data('selected', true);
        }

        /**
         * Searches the API with a user query and a filter applied on it and presents the results to the user
         */
        function performSearch() {

            //get the user's query
            let query = $('#query').val();

            //check which filter has been selected
            if ($('#rocket').data('selected') == true) {

                //get data
                launches = getLaunchesFromRocketNameObjects($('#query').val());
                
                //clean screen
                $('#blackboard').html('');
                
                //present data to the user
                for (let i = 0; i < launches.length; i++) {
                    launches[i].appendTo('#blackboard');
                    launches[i].imageCSS({'max-width': $('.rock').width()*0.9, 'margin': 'auto', 'padding': 0});
                }
                $('.desc').hide();

                //make launchcards interactable
                elements = document.getElementsByClassName('rock');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].addEventListener('click', showInfo);
                }
            }
            else if ($('#after').data('selected') == true) {

                //get data
                launches = getLaunchesAfterObjects($('#query').val());
                
                //clean screen
                $('#blackboard').html('');
                
                //present data to the user
                for (let i = 0; i < launches.length; i++) {
                    launches[i].appendTo('#blackboard');
                    launches[i].imageCSS({'max-width': $('.rock').width()*0.9, 'margin': 'auto', 'padding': 0});
                }
                $('.desc').hide();

                //make launchcards interactable
                elements = document.getElementsByClassName('rock');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].addEventListener('click', showInfo);
                }
            }//endif
        }//end performSearch

    }
};

app.initialize();