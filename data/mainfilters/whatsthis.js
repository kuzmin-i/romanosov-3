import PHeader from '../../components/buttons/components/PHeader'

export const whatsthis = {
    'emitters': (
        <div>
            <div className="mainfilters__whatsthis-content">Facilities that emit 25,000 metric tons or more per year of GHGs are required to annually report their GHG emissions to EPA. Roughly half of total U.S. GHG emissions are reported by direct emitters.
            <br/><br/>
            The data was reported to EPA by facilities as of 09/26/2020. EPA continues to quality assure data and plans to release updated data periodically.
            <br/><br/>
            Learn more about what is included in this data set and view related EPA GHG data sources.
            <br/><br/>
            Visit our help section to learn about the features of FLIGHT and the data collected by the GHGRP.
            </div>
            <div className="mainfilters__whatsthis-list">
                <div className="mainfilters__whatsthis-listitem"><img src="/mainfilters/man-5.svg"/><div>All Emitters and Point Sources</div></div>
                <div className="mainfilters__whatsthis-listitem"><img src="/mainfilters/man-6.svg"/><div>Onshore Petroleum Natural Gas Production and Gathering & Boosting</div></div>
                <div className="mainfilters__whatsthis-listitem"><img src="/mainfilters/man-7.svg"/><div>Local Distribution Companies and Onshore Gas Transmission Pipelines</div></div>
                <div className="mainfilters__whatsthis-listitem"><img src="/mainfilters/man-8.svg"/><div>SF6 from Electrical Transmission and Distribution Equipment Use</div></div>
                <div className="mainfilters__whatsthis-listitem"><img src="/mainfilters/man-9.svg"/><div>Suppliers</div></div>
                <div className="mainfilters__whatsthis-listitem"><img src="/mainfilters/man-10.svg"/><div>CO2 Injection (UU)</div></div>
                <div className="mainfilters__whatsthis-listitem"><img src="/mainfilters/man-11.svg"/><div>Geologic Sequestration of CO2 (RR)</div></div>
            </div>
        </div>
    ),
    'search': (
        <div>
            <div className="mainfilters__whatsthis-content">You can search by Facility name, Facility City, Facility County, Facility State, Facility Zip Code, Reporting Program ID, NAICS code and Parent Company name.</div>
            <hr/>
            <PHeader>Restrict your search to</PHeader>

            <div className="mainfilters__cbsubitem">
                <input type="checkbox"/>
                <div className="sectors__titles">Facility Name</div>
            </div>
            <div className="mainfilters__cbsubitem">
                <input type="checkbox"/>
                <div className="sectors__titles">Facility City</div>
            </div>
            <div className="mainfilters__cbsubitem">
                <input type="checkbox"/>
                <div className="sectors__titles">Facility municipality</div>
            </div>
            <div className="mainfilters__cbsubitem">
                <input type="checkbox"/>
                <div className="sectors__titles">ZIP Code</div>
            </div>
            <div className="mainfilters__cbsubitem">
                <input type="checkbox"/>
                <div className="sectors__titles">Facility ID</div>
            </div>
            <div className="mainfilters__cbsubitem">
                <input type="checkbox"/>
                <div className="sectors__titles">Parent Company</div>
            </div>
        </div>
    ),
    'facilities': (
        <div>
            <div className="mainfilters__whatsthis-content">Facilities are color coded to designate their verification and reporting status as of 09/26/2020 for reporting year 2019.
            <br/><br/>
            <b style={{color: '#F77722'}}>Orange</b> indicates Verification of a facility's report was still in progress as of 09/26/2020. Click here to learn more about verification.
            <br/><br/>
            <b style={{color: '#CC1111'}}>Red</b> indicates a facility has discontinued reporting without a valid reason as of 09/26/2020.
            <br/><br/>
            <b style={{color: '#9E9E9E'}}>Grey</b> indicates a facility has discontinued reporting with a valid reason.
            <br/><br/>
            <b>Black</b> indicates a facility has submitted a 2019 report and has met EPA's verification requirements.
            </div>
        </div>
    ),
    'emissions': (
        <div>
            <div className="mainfilters__whatsthis-content">
            Facilities report emissions from many process types defined by the GHGRP. Reporting requirements for each process type are contained in different subparts of the regulation.
            <br/><br/>
            Fuel Combustion emissions are defined as those reported under Subpart AA, Subpart D, and Subpart C except Subpart C emissions from use of sorbent which are given their own category. Emissions from Use of Carbonate are defined as those reported under Subpart U.
            <br/><br/>
            All other reported direct emissions are categorized as Process Emissions. Click here to learn more.
            <br/><br/>
            Emissions values presented by fuel type are not directly reported to EPA by facilities in all cases. Some values have been estimated by EPA based on publicly available reported data.
            </div>
        </div>
    ),
    'total': (
        <div>
            <div className="mainfilters__whatsthis-content">
                The GHGRP generally requires facilities that emit above 25,000 metric tons CO2e of GHGs to report their emissions. Therefore this data set does not reflect total U.S. emissions or total emissions from individual states. Roughly 50% of total U.S. emissions are reported by large emitting facilities subject to the GHGRP. Additional GHGs are reported by suppliers of fossil fuels and industrial gases. Click here to learn more.
                <br/><br/>
                The total number of reporters shown may be less than the sum of the number of reporters in the selected source categories because some facilities fall within more than one source category.
            </div>
        </div>
    )
}