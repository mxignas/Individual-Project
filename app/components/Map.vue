<template>
    <Page actionBarHidden="true" backgroundSpanUnderStatusBar="false">
        <StackLayout height="100%" width="100%" >
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
            markers: [
                {
                    name: "Pagiriu Motoklubo track",
                    latitude: 25.17433447016864, // second
                    longtitude: 54.50962346683085 // first
                },
                {
                    name: "Utenos Aliu track",
                    longtitude: 55.481555279529665,
                    latitude: 25.723274521657224
                },
                {
                    name: "Mickunai MX Park",
                    longtitude: 55.63522832053927, 
                    latitude: 25.288696685075738
                },
                {
                    name: "Panevezys track",
                    longtitude: 55.73581267270042, 
                    latitude: 24.300087169733324
                },
                {
                    name: "Aleksandrijos track",
                    longtitude: 55.924588014954466, 
                    latitude: 23.366496285087198
                },
                {
                    name: "Dubysos track",
                    longtitude: 55.6461976404172,
                    latitude:  23.073311771363443 
                },
                {
                    name: "Rietavo track",
                    longtitude: 55.77617300394279,
                    latitude:  22.095528517520155
                },
                 {
                    name: "Prienu track",
                    longtitude: 54.66052038540324, 
                    latitude: 24.091685997460345
                },
                 {
                    name: "Kalvarijos track",
                    longtitude: 54.438390702580016, 
                    latitude: 23.518451380780693
                },
                 {
                    name: "Kedainiu track",
                    longtitude: 55.321628876260945, 
                    latitude: 23.98810125828695
                },
            ]
        }
    },
    mounted() {
        let that = this
        geolocation.isEnabled().then(function(isEnabled) {
            if (!isEnabled) {
                // requesting location
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

<style scoped>
</style>