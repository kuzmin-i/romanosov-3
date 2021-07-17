const Airtable = require('airtable');

const AIRTABLE_API_KEY='keyJ4wyybThi4eTM0'
const AIRTABLE_BASE_ID='appVBYFGuxVEfCMkB'
const AIRTABLE_TABLE_NAME='Table 1'

const base = new Airtable({apiKey: AIRTABLE_API_KEY}).base(AIRTABLE_BASE_ID);

const PostPin = (props) => {

    base(AIRTABLE_TABLE_NAME).create([
  {
    "fields": {
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