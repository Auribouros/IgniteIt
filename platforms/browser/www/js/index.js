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

        let launches = getNNextLaunchesObjects(10);
        for (var i = 0; i < launches.length; i++) {
            launches[i].appendTo('#blackboard');
            launches[i].imageCSS({'max-width': $('.rock').width()*0.9, 'margin': 'auto', 'padding': 0});
        }
        $('body').css({'background-size': $(document).width() +'px '+ $(document).height +'px'});
        $('.desc').hide();

        let elements = document.getElementsByClassName('rock');
        let lis = document.getElementsByTagName('LI');
        let search = document.getElementById('query');
        let searchBtn = document.getElementById('searchBtn');
       
        for (var i = 0; i < elements.length; i++) {
            elements[i].addEventListener('click', showInfo);
        }
        for (var i = 0; i < lis.length; i++) {
            lis[i].addEventListener('click', selectFilter);
        }
        //search.addEventListener('input', performSearch);
        searchBtn.addEventListener('click', performSearch);

        function showInfo() {
            $('#'+ this.id +' .desc').toggle();
        }
        function selectFilter() {
            $('li').css({'background-color': 'rgba(0, 0, 0, 0)', 'color': 'white'});
            $('li').data('selected', false);

            $('#'+ this.id).css({'background-color': 'rgba(255, 255, 255, 1)', 'color': 'black'})
            $('#'+ this.id).data('selected', true);
        }

        function performSearch() {

            let query = $('#query').val();

            if ($('#rocket').data('selected') == true) {

                launches = getLaunchesFromRocketNameObjects($('#query').val());
                
                $('#blackboard').html('');
                
                for (let i = 0; i < launches.length; i++) {
                    launches[i].appendTo('#blackboard');
                    launches[i].imageCSS({'max-width': $('.rock').width()*0.9, 'margin': 'auto', 'padding': 0});
                }
                $('.desc').hide();
                elements = document.getElementsByClassName('rock');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].addEventListener('click', showInfo);
                }
            }
            else if ($('#location').data('selected') == true) {

            }
            else if ($('#missionType').data('selected') == true) {

            }
        }
    }
};

app.initialize();