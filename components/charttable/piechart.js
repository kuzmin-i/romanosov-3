// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/pie
import { ResponsivePie } from '@nivo/pie'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const PieChart = ({ data, total /* see data tab */ }) => {

    const totTableSectors = total.totTableSectors

    let [...updData] = [...data]
    data.map((_id, i) => {
        updData[i].value = totTableSectors[data[i].id][0].toFixed(1)
    })

    return (
    <ResponsivePie
        data={updData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={0}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 3 ] ] }}
        arcLinkLabel={function(e){return e.label}}
        colors={{ datum: 'data.color' }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={1}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
        
        fill={[
            {
                match: {
                    id: 'powerPlants'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'petroleum'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'refineries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'chemicals'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'other'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'minerals'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'waste'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'metals'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'pulpPaper'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
    )}

export default PieChart