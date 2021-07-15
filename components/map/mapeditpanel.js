import React, { PureComponent } from "react"

import FilterComponent from '../contentLayout/filterComponent'

import {dataYear} from '../../data/mainfilters/dataYear'
import {facilityType} from '../../data/mainfilters/facilityType'
import {states} from '../../data/mainfilters/states'
import {emissions} from '../../data/mainfilters/emissions'
import {greenhouseGases} from '../../data/mainfilters/greenhouseGases'

import ButtonTypeD from '../../components/buttons/ButtonTypeD'

export default class MapEditPanel extends PureComponent {
  render() {

    return (
      <div>
        <div>
          <div className="mainfilters edit">
                  <div className="mainfilters__left">
                      <div className="mainfilters__floor">
                          <FilterComponent category="datayear" type="dropdownA" data={ dataYear } name="Data Year" listname="2020"/>
                          <FilterComponent category="facility" type="dropdownA" data={ facilityType } name="Facility Type" linkname="What's this?" linktype="emitters" listname="Choose Fuel Type"/>
                          <FilterComponent category="search"  type="inputText" linkname="Search Options" listname="Facility (Name of Company)" linktype="search"/>
                          <FilterComponent category="search"  type="inputText" linkname="Search Options" listname="Location" linktype="search"/>
                      </div>
                      <div className="mainfilters__floor">
                          <div className="mainfilters__leftoverflow">
                          <FilterComponent category="facility" type="dropdownA" data={ states } name="Browse to a municipality" listname="Choose municipality"/>
                          <FilterComponent category="facility" type="dropdownA" data={ emissions } name="Emissions by Fuel type" linkname="What's this?" linktype="emissions" listname="What's this?"/>
                          <FilterComponent category="small" type="dropdownB" data={ greenhouseGases.list } name="Filter By" listname="Greenhouse Gas"/>
                          <FilterComponent category="small" type="dropdownC" listname="Emission Range"/>
                          <FilterComponent category="facility" type="dropdownA" name="Filter By Status" linkname="What's this?" linktype="facilities" listname="All Facilities"/>
                          </div>
                      </div>
                      <div className="mainfilters__floor">
                        <ButtonTypeD class="mainfilters__input--list filter"/>
                      </div>
                  </div>
            </div>
        </div>
      </div>
    );
  }
}


