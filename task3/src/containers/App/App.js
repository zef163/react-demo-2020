import React from 'react';
import {connect} from 'react-redux'

import {fetchByDateAsync} from 'actions/charts';
import Chart from 'components/chart';
import {changeRangeType} from 'reducers/charts';

/**
 * App container
 */
export class App extends React.PureComponent {
    /**
     * Method called after mounted component
     */
    componentDidMount() {
        this.fetchCharts();
    }

    /**
     * Change range type
     *
     * @param {string} type - Range type
     * @return {Promise<void>}
     */
    changeRange = async (type) => {
        const {dispatch} = this.props;
        await dispatch(changeRangeType(type));
        this.fetchCharts();
    }

    /**
     * Fetch charts data by date range
     */
    fetchCharts() {
        const {startDate, endDate, dispatch} = this.props;
        dispatch(fetchByDateAsync({startDate, endDate}));
    }

    /**
     * Render component
     *
     * @return {JSX.Element} Rendered component
     */
    render() {
        return (
            <Chart changeRange={this.changeRange} />
        );
    }
}

/**
 * Redux data to props of component
 *
 * @param {{RUB: string}[]} data - Chart data
 * @param {string} startDate - Chart start date
 * @param {string} endDate - Chart end date
 * @param {string} rangeType - Date range type
 * @return {{data: {RUB: string}[], rangeType: string, endDate: string, startDate: string}}
 */
const mapStateToProps = ({charts: {data, startDate, endDate, rangeType}}) => {
    return {data, startDate, endDate, rangeType};
};

export default connect(mapStateToProps)(App);