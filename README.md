# Home Assistant Configuration

[Home Assistant Core](https://home-assistant.io/) in [docker](https://www.docker.com/) on a  [Synology DiskStation DS918+](https://www.synology.com/products/DS918+). My use case is a [wall mounted](https://www.durable.eu/information-and-presentation/tablet-holder/wall-mounted-tablet-holder/tablet-holder-wall.html) tablet [[Samsung 10.1"](https://www.samsung.com/us/mobile/tablets/galaxy-tab-a/galaxy-tab-a-10-1-2019-32gb-black-wi-fi-sm-t510nzkaxar/)] displaying Home Assistant in [Fully Kiosk Browser](https://www.ozerov.de/fully-kiosk-browser/).

## Tabs

### Home

![screenshot](https://github.com/Tanner3644/home-assistant-config/blob/main/screenshots/home-page-day.png)

![screenshot](https://github.com/Tanner3644/home-assistant-config/blob/main/screenshots/home-page-night.png)

* Top and bottom pictures show the different theme for day and night
* Main dashbaord for all of the lights in the apartment
* Harmony Hub allows for total control of the entertainment system
* Buttons to start and stop the syncing of the Philips Hue Play Gradient Lightstrip behind the TV to match what is on the TV
* Spotify media control for the four different Alexas in the apartment

### Weather

![screenshot](https://github.com/Tanner3644/home-assistant-config/blob/main/screenshots/weather-day.png)

* Five day forecast
* Enviroment Canada Radar for surrounding area
* Living room temperature graph
* Live feed of a camera at a downtown park

### Vacuum

![screenshot](https://github.com/Tanner3644/home-assistant-config/blob/main/screenshots/roomba-night.png)

* Clean, locate, pause and return functions for the Roomba
* Shows battery life and if you need to empty the bin

### Server

![screenshot](https://github.com/Tanner3644/home-assistant-config/blob/main/screenshots/server-day.png)

* Shows the volumed used and the resource monitor for the Synology DS918+
* Shows the status of docker containers (online/offline)
* Shows the Pi-hole dahboard and allows it to be turned on/off with a button

## Automations

* Changing the theme between light and dark based on the sun's position
* Setting the brightness of the wall mounted tablet based on the sun's position
* Motion sensor to turn the tablet on when there is movement in front of it
* Flashing Philips Hue lights red when my favourite NHL team scores
* Robot vacuum cleans the apartment at a certain day and time only when someone is home to monitor it (Alexa also anounces to prep the apartment to be vacuumed 10 minutes before cleaning) 
* Turning all lights off when there is no one present in the apartment for 15 minutes

## Network Diagram

## Smart Home Components

* [Synology DiskStation DS918+](https://www.synology.com/products/DS918+)
  * [8TB WD RED NAS HDD](https://www.westerndigital.com/products/internal-drives/wd-red-hdd) (x3)
  * 16GB DDR3

* [Harmony Hub](https://www.logitech.com/en-ca/product/harmony-hub?crid=60)
* [Alexa Spot](https://www.amazon.ca/Amazon-VN94DQ-Echo-Spot-White/dp/B074BHG7RG)
* [Alexa Dot](https://www.amazon.ca/Echo-Dot-3rd-gen-Charcoal/dp/B07PDHT5XP) (x3)
* [Philips Hue Bridge](https://www.philips-hue.com/en-ca/p/hue-bridge/046677458478)
* [Philips Hue Play HDMI Sync Box](https://www.philips-hue.com/en-ca/p/hue-play-hdmi-sync-box-/046677555221)
* [Philips Hue White](https://www.philips-hue.com/en-ca/p/hue-white-1-pack-a21-e26/046677557812) (x8)
* [Philips Hue Color](https://www.philips-hue.com/en-us/p/hue-white-and-color-ambiance-1-pack-e26/046677548483) (x4)
* [Philips Hue Motion Sensor](https://www.philips-hue.com/en-ca/p/hue-motion-sensor/046677473389) (x4)
* [Philips Hue Go](https://www.philips-hue.com/en-ca/p/hue-white-and-color-ambiance-go-portable-light-(latest-model)/7602031U7) (x2)
* [Philips Hue Play Gradient Lightstrip](https://www.philips-hue.com/en-ca/p/hue-white-and-color-ambiance-play-gradient-lightstrip-65-inch/046677560416)
* [Philips Hue Lightstrip](https://www.philips-hue.com/en-ca/p/hue-white-and-color-ambiance-lightstrip-plus-base-v4-80-inch/046677555313)
