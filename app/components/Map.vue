<template>
    <Page class="mainBackground">
        <ActionBar class="topTab">
            <Label text="Motocross Tracks in Lithuania"/>
        </ActionBar>

        <StackLayout>
            <Button text="Show location" @tap="enableLocationServices" :visibility="currentGeoLocation.latitude ? 'collapsed' : 'visible'" />
            <StackLayout :visibility="currentGeoLocation.latitude ? 'visible' : 'collapsed'">
                <Label :text="'Latitude: ' + currentGeoLocation.latitude" />
                <Label :text="'Longitude: ' + currentGeoLocation.longitude" />
                <Label :text="'Altitude: ' + currentGeoLocation.altitude" />
                <Label :text="'Direction: ' + currentGeoLocation.direction" />
            </StackLayout>
        </StackLayout>
    </Page>
</template>

<script>
const geoLocation = require("nativescript-geolocation");

  export default {
      data() {
          return {
            currentGeoLocation: {
            latitude: null,
            longitude: null,
            altitude: null,
            direction: null
            },
          }
      },
      methods: {
        enableLocationServices: function () {
            geoLocation.isEnabled().then(enabled => {
            if (!enabled) {
                geoLocation.enableLocationRequest().then(() => this.showLocation());
            } else {
                this.showLocation();
            }
            });
        },
        showLocation: function () {
            geoLocation.watchLocation(location => {
                this.currentGeoLocation = location;
                }, error => {
                alert(error);
                }, {
                desiredAccuracy: 3,
                updateDistance: 10,
                minimumUpdateTime: 1000 * 1
            });
        },
    },
    computed: {
      message() {
        return "Blank {N}-Vue app";
      }
    }
  };
</script>

<style>
.mainBackground {
    background-image: url('~../assets/Background.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    }
.topTab {
    background-color: transparent;
    font-size: 10px;
}
</style>
