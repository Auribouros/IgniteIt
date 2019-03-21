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
            launches[i].appendTo("body");
            /*if (launches[i].description.image != undefined) {
                launches[i].elementCSS({'background-image': 'url("'+ launches[i].description.image +'")'});
            }*/
        }
        $('.desc').hide();

        let elements = document.getElementsByClassName('rock');
        let bShouldShowImg = false;
       
        for (var i = 0; i < elements.length; i++) {
            elements[i].addEventListener('click',showInfo);
        }
        function showInfo() {
            $('#'+ this.id +' .desc').toggle();
        }
        /*function showImg() {
            if (bShouldShowImg) {
                $('#'+ this.id).css('background-image', 'url()');
            }
            bShouldShowImg = (bShouldShowImg)? false : true;
        }*/
    }
};

app.initialize();