import React from 'react';
import {useSelector} from 'react-redux';

import styles from './index.module.css';
import {ButtonWrapper, Button} from 'components/button'
import LineChart from 'components/lineChart';

const BUTTONS = [
    'Week',
    'Month',
    'Quarter',
    'Year',
    'Max',
];

/**
 * Chart component
 *
 * @return {JSX.Element} Rendered component
 */
const Chart = ({changeRange}) => {
    const {data, startDate, rangeType} = useSelector(store => store.charts);

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.title}>
                    NII CAPITAL 7.625 21
                    <span className={styles.currency}>USD</span>
                </div>
                <div className={styles.info}>
                    US67021BAE92<br/>
                    NII CAPITAL CORP, Telecommunications, NR, till {startDate.split('-').reverse().join('.')}
                </div>
                <hr className={styles.separator}/>

                <ButtonWrapper>
                    {BUTTONS.map(key => (
                        <Button
                            key={key}
                            onClick={() => changeRange(key.toLowerCase())}
                            isActive={rangeType === key.toLowerCase()}
                        >
                            {key}
                        </Button>
                    ))}
                </ButtonWrapper>
            </div>

            <LineChart data={data} />
        </div>
    );
}

export default Chart;