<template>
    <Page actionBarHidden="true" backgroundSpanUnderStatusBar="false">
        <StackLayout height="100%" width="100%" >
            <!-- Displaying MapView with needed properties -->
            <MapView iosOverflowSafeArea="true" :latitude="latitude" :longitude="longitude" :zoom="zoom" :bearing="bearing" :tilt="tilt" 
            height="100%" @mapReady="onMapReady"></MapView>
        </StackLayout>
    </Page>
</template>

<script>
// for current location of device
const geolocation = require("@nativescript/geolocation");
// for markers
const mapsModule = require("nativescript-google-maps-sdk");
import {firestore} from "@nativescript/firebase"
export default {
    data() {
        return {
            latitude: '',
            longitude: '',
            zoom: '',
            bearing: '',
            tilt: '',
            mapView: null,
            isMounted: false,

            // markers to mark the traks
            markers: []
        }
    },
    mounted() {
        let that = this
        geolocation.isEnabled().then(function(isEnabled) {
            if (!isEnabled) {
                // requesting location from plugin
                geolocation.enableLocationRequest(true, true).then(() => {
                    that.isMounted = true
                    if (that.mapView) {
                        let uiSettings = that.mapView.gMap.getUiSettings();
                        uiSettings.setMyLocationButtonEnabled(true);
                        that.mapView.gMap.setMyLocationEnabled(true);
                    }
                    // getting current location 
                    geolocation
                        .getCurrentLocation({
                            timeout: 20000
                        })
                        .then(location => {
                            if (!location) {
                                console.log("Failed to get location!");
                            } else {
                                // updating variables with the current users coordinates
                                that.latitude = location.latitude
                                that.longitude = location.longitude
                                that.zoom = 14
                                that.bearing = 0
                                that.altitude = 0
                            }

                        });
                }, (e) => {
                    console.log("Error: " + (e.message || e));
                }).catch(ex => {
                    console.log("Unable to Enable Location", ex);
                });
            } 
            // this is workaround for androids. Im using android so I had to do this for testing purposes
            // Using a flag isMounted that is set after permission status has been resolved
            // in mounted() and only enable the current location setting on android after location permission has been granted by the user.
            else {
                that.isMounted = true
                if (that.mapView) {
                    let uiSettings = that.mapView.gMap.getUiSettings();
                    uiSettings.setMyLocationButtonEnabled(true);
                    that.mapView.gMap.setMyLocationEnabled(true);
                }
                geolocation
                    .getCurrentLocation({
                        timeout: 20000
                    })
                    .then(location => {
                        if (!location) {
                            console.log("Failed to get location!");
                        } else {
                            that.latitude = location.latitude
                            that.longitude = location.longitude
                            that.zoom = 14
                            that.bearing = 0
                            that.altitude = 0
                        }

                    });

            }
        }, function(e) {
            console.log("Error: " + (e.message || e));
        });

    //fetch data from the firestore collection
    firestore.collection('Tracks').get()
    .then(snapshot => {
      // navigating through each document inside that collection
      snapshot.forEach((doc) => {
        let track = doc.data();
        track.id = doc.id;
        this.markers.push(track)
      })
    })

    },
    methods: {
        onMapReady(args) {
            // storing a reference to the map component, configuring the map to show the current user location, enable compass,
            // as well as gestures
            this.mapView = args.object;
            var gMap = this.mapView.gMap;
            this.mapView.settings.myLocationEnabled = true;
            this.mapView.settings.myLocationButtonEnabled = true
            this.mapView.settings.compassEnabled = true
            this.mapView.settings.zoomGesturesEnabled = true;

            if (this.isMounted && geolocation.isEnabled()) {
                let uiSettings = gMap.getUiSettings();
                uiSettings.setMyLocationButtonEnabled(true);
                gMap.setMyLocationEnabled(true);
            }

            // marking markers. For each element in markers array put marker by recognizing longtitude and latitude. 
            this.markers.forEach(element => {
                var marker = new mapsModule.Marker();
                marker.position = mapsModule.Position.positionFromLatLng(
                    element.longtitude,
                    element.latitude
                );
                // when marker is tapped, marker title shows up
                marker.title = element.name;
                this.mapView.addMarker(marker);
            })
        },
    },
}
</script>

<style>
</style>