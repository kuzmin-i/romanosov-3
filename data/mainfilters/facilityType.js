export const facilityType = [
    {'name': 'All Emitters', 'id': '1'},
              {'name': 'Point Sources', 'id': '1a', 'child': true},
              {'name': 'Onshore Oil & Gas Production', 'id': '1b', 'child': true},
              {'name': 'Onshore Oil & Gas Gathering & Boosting', 'id': '1c', 'child': true},
              {'name': 'Local Distribution Companies', 'id': '1d', 'child': true},
              {'name': 'Onshore Gas Transmission Pipelines', 'id': '1e', 'child': true},
              {'name': 'SF6 from Elect. Dist. Systems', 'id': '1f', 'child': true},
          {'name': 'Suppliers', 'id': '2', 'list': [
                  {'name': 'Coal-based Liquid Fuel Suppliers', 'list': [
                    {'name': 'Producers', 'child': true},
                    {'name': 'Local Distribution Companies', 'child': true}
                  ]},
                  {'name': 'Petroleum Product Suppliers'},
                  {'name': 'Natural Gas and Natural Gas Liquids Suppliers'}
          ]},
          {'name': 'CO2 Capture, Supply and Underground Injection'},
          {'name': 'Geologic Sequestration of CO2 (RR)'}
]