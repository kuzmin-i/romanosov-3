const Airtable = require('airtable');

const AIRTABLE_API_KEY='keyJ4wyybThi4eTM0'
const AIRTABLE_BASE_ID='appVBYFGuxVEfCMkB'
const AIRTABLE_TABLE_NAME='Table 1'

const base = new Airtable({
  apiKey: AIRTABLE_API_KEY,
}).base(AIRTABLE_BASE_ID);

const table = base(AIRTABLE_TABLE_NAME);

// maps over the records, calling minifyRecord, giving us required data
const getMinifiedRecords = records => {
  return records.map(record => minifyRecord(record));
};

// gets the data we want and puts it into variables
const minifyRecord = record => {
  return {
    id: record.id,
    fields: record.fields
  };
};

export default async function getPosts() {
  const records = await table.select({}).all();
  const minifiedRecords = await getMinifiedRecords(records);

  console.log(minifiedRecords);

  return minifiedRecords;
}