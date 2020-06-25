const sampleData = [{
    "title": "The consequences of deforestation in a region",
    "category": "Climate & Environment",
    "location": {
        "address": "Amazonas, Brazil",
        "type": "Point",
        "coordinates": [-69.4478379, -3.7701678]
    },
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
}, {
    "title": "Suffering of the people due to impassable roads",
    "category": "Transportation",
    "location": {
        "address": "Bafoussam, Cameroon",
        "type": "Point",
        "coordinates": [10.3877311, 5.4796705]
    },
    "description": "Eget magna fermentum iaculis eu. Risus pretium quam vulputate dignissim suspendisse in est."
}, {
    "title": "Waterborne diseases due to lack of drinking water",
    "category": "Health",
    "location": {
        "address": "Mumbai, India",
        "type": "Point",
        "coordinates": [72.7410979, 19.0825223]
    },
    "description": "Dui id ornare arcu odio ut. Donec ultrices tincidunt arcu non sodales. "
}, {
    "title": "Barriers to the creation and operation of private enterprises",
    "category": "Economy",
    "location": {
        "description": "Miami, USA",
        "type": "Point",
        "coordinates": [-80.185942, 25.774772]
    },
    "description": "Vestibulum lorem sed risus ultricies. Vel elit scelerisque mauris pellentesque pulvinar"
}];


const locations = [];
sampleData.forEach(el =>  locations.push(el['location']));

mapboxgl.accessToken = `pk.eyJ1IjoiYXNuZWxjaHJpc3RpYW4iLCJhIjoiY2thd2Z0aXJ1MDdteTJ0bXU5NDU2bHZ4MCJ9.kChV328HGtNtda8XQQc4tA`;
const map = new mapboxgl.Map({
    container: 'mapbox-topics',
    style: 'mapbox://styles/asnelchristian/ckawh4dvvehmi1io10tvsjvtk',
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach((loc, i) => {
    const el = document.createElement('div');
    el.classList.add('marker');

    if (i > 1) {
        el.classList.add('marker--default');
    } else {
        el.classList.add('marker--trending');
    }

    const popupHTML = `<div class="topic-card--small">
                           <img src="img/deforestation.jpg" alt="" class="topic-card--small--img">
                           <div class="topic-card--small--info">
                               <a href="#" class="topic-card--small--link margin-bottom-extra-small">
                                    ${sampleData[i].title}
                               </a>
                               <p class="topic-card--small--date">Last update on July 21, 2020</p>
                           </div>
                       </div>`;

    new mapboxgl.Marker({
        element: el,
        anchor: 'center'
    })
        .setLngLat(loc.coordinates)
        .setPopup(new mapboxgl.Popup({className: 'topic-popup'})
            .setHTML(popupHTML)
            .setMaxWidth('34rem'))
        .addTo(map);

    const [lng, lat] = loc.coordinates;
    const extendCoord = [lng > 0 ? lng + 10 : lng - 10, lat > 0 ? lat + 10 : lat - 10];
    bounds.extend(extendCoord);
});

map.fitBounds(bounds);

const topicsListViewToggle = document.querySelector('#view-switch--list');
const topicsMapViewToggle = document.querySelector('#view-switch--map');
const topicsList = document.querySelector('.topic-cards');
const topicsMap = document.querySelector('.topic-map');
const topicsPagination = document.querySelector('.pagination');

topicsListViewToggle.addEventListener('click', e => {
    topicsMap.classList.add('hide');
    topicsList.classList.remove('hide');
    topicsPagination.classList.remove('hide');
});

topicsMapViewToggle.addEventListener('click', e => {
   topicsList.classList.add('hide');
   topicsPagination.classList.add('hide');
   topicsMap.classList.remove('hide');
});