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
        var Launch ={
            id:1,
            description:{
                image:"../img/logo.png",
                rocketName:"rocketMan",
                missionName:"elton john",
                launchWindow:"23-06-2019",
                missionDescription:"Alexis est encore plus PD"
            }
        }
        letlc = new LaunchCard(Launch.id,Launch.description);
        letlc.appendTo("body");
        document.getElementById(""+this.id+"").addEventListener('click',test);
        function test() {
            if (letlc.getVisibility() == 'hidden') {
                letlc.descCSS(rule ={visibility:'visible'});
            }else{
                letlc.descCSS(rule ={visibility:'hidden'});
            }
        }
    }
};

app.initialize();