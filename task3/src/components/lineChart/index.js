import React from 'react';
import {
    LineChart as Chart,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    Line,
} from 'recharts';

import styles from './index.module.css';
import Dropdown from 'components/dropdown';

/**
 * Label component
 *
 * @param {object} props - Label props
 * @return {JSX.Element} Rendered component
 */
const Label = ({x, y, stroke, value}) => (
    <text x={x} y={y} dy={-10} fill={stroke} fontSize={10} textAnchor="middle">
        {value.toFixed(2)}
    </text>
)

/**
 * Line chart component
 *
 * @param {array} data - Chart data
 * @return {JSX.Element} Rendered component
 */
const LineChart = ({data}) => (
    <div className={styles.wrapper}>
        <Chart
            width={440}
            height={200}
            data={data}
        >
            <XAxis dataKey="date" tickSize={5} domain={['auto']} />
            <YAxis dataKey="val" domain={['auto']} />
            <Tooltip />
            <CartesianGrid stroke="#eee" />
            <Line
                type="natural"
                dataKey="val"
                stroke="#c5c6c5"
                fill="#c5c6c5"
                strokeWidth={2}
                label={<Label />}
            />
        </Chart>
        <div className={styles.dropdown}>
            <Dropdown
                onChange={() => console.log('Changed!')}
                options={['Yield', 'Spread', 'Price']}
                value="Price"
            />
        </div>
    </div>
)

export default LineChart;