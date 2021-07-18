import { ResponsiveBar } from '@nivo/bar'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const BarChart = ({ data /* see data tab */ }) => (
    <ResponsiveBar
        data={data}
        keys={[ 
            'Power Plants', 
                'Offshore Petroleum & Natural Gas Production', 
                'Onshore Petroleum & Natural Gas Production', 
                'Onshore Petroleum & Natural Gas Gathering & Boosting', 
                'Natural Gas Processing',
                'Natural Gas Transmission/Compression',
                'Onshore Natural Gas Transmission Pipelines',
                'Natural Gas Local Distribution Companies',
                'Underground Natural Gas Storage',
                'Liquefied Natural Gas Storage',
                'Liquefied Natural Gas Imp/Exp Equipment',
                'Other Petroleum & Natural Gas Systems',
            'Refineries',
                'Adipic Acid Production',
                'Ammonia Manufacturing',
                'Fluorinated GHG Production',
                'HCFC-22 Prod./HFC-23 Dest.',
                'Hydrogen Production',
                'Nitric Acid Production',
                'Petrochemical Production',
                'Phosphoric Acid Production',
                'Silicon Carbide Production',
                'Titanium Dioxide Production',
                'Other Chemicals',
            'Underground Coal Mines',
            'Food Processing',
            'Ethanol Production',
            'Universities',
            'Manufacturing',
            'Military',
            'Use of Electical Equipment',
            'Electronics Manufacturing',
            'Electrical Equipment Manufacturers',
            'Other',
                'Cement Production',
                'Glass Production',
                'Lime Manufacturing',
                'Soda Ash Manufacturing',
                'Other Minerals',
            'Municipal Landfills',
            'Industrial Landfills',
            'Wastewater Treatment',
            'Solid Waste Combustion',
                'Aluminum Production',
                'Ferroalloy Production',
                'Iron & Steel Production',
                'Lead Production',
                'Magnesium',
                'Zinc Production',
                'Other Metals',
            'Pulp and Paper Manufacturers',
            ''

        ]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 190 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        valueFormat={{ format: '', enabled: false }}
        colors={{ scheme: 'nivo' }}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        layout="horizontal"
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        legends={[]}
    />
)

export default BarChart