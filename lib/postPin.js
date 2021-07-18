const Airtable = require('airtable');

const AIRTABLE_API_KEY='keyJ4wyybThi4eTM0'
const AIRTABLE_BASE_ID='appVBYFGuxVEfCMkB'
const AIRTABLE_TABLE_NAME='Table 1'

const base = new Airtable({apiKey: AIRTABLE_API_KEY}).base(AIRTABLE_BASE_ID);

const PostPin = (props) => {

  const totTableItems = {
    '1': 'powerPlants', '2': 'petroleum', '3': 'refineries', '4': 'chemicals', '5': 'other', '6': 'minerals', '7': 'waste', '8': 'metals', '9': 'pulpPaper'
  }

  const totRatioItems = {
    '1': 1669/1369, '2': 341/2350, '3': 178/138, '4': 186/449, '5': 127/1307, '6': 115/380, '7': 110/1471, '8': 90/295, '9': 35/220
  }

  let totTableSectors = {
    'powerPlants': 0,
    'petroleum': 0,
    'refineries': 0,
    'chemicals': 0,
    'other': 0,
    'minerals': 0,
    'waste': 0,
    'metals': 0,
    'pulpPaper': 0
  }

  totTableSectors[totTableItems[props.sectors.substr(0,1)]] = totRatioItems[props.sectors.substr(0,1)] + Math.random() * totRatioItems[props.sectors.substr(0,1)] / 8

  const fieldsParams = {
    "id": 1,
    "lng": props.lng,
    "lat": props.lat,
    "dataYearMin": props.dataYearMin,
    "DataYearMax": props.dataYearMax,
    "facilityType": props.facilityType,
    "states": props.states,
    "emissions": props.emissions,
    "greenhouseGases": props.greenhouseGases,
    "rangeMin": props.rangeMin,
    "rangeMax": props.rangeMax,
    'filterStatus': props.filterStatus,
    'sectors': props.sectors,
    'ZIP': props.ZIP,
    'facilityName': props.facilityName
  }

    base(AIRTABLE_TABLE_NAME).create([
  {
    "fields": {...fieldsParams, ...totTableSectors}
  },
], function(err, records) {
  if (err) {
    console.error(err);
    return;
  }
  records.forEach(function (record) {
    console.log(record.getId());
  });
});
}

export default PostPin