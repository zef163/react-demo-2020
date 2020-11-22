/**
 * Prepare Date to YYYY-MM-DD format
 *
 * @param {Date} date - Date for preparing
 * @return {string} Prepared date string
 */
export const parseDate = date => {
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day = `${date.getDate()}`.padStart(2, '0');
    return `${year}-${month}-${day}`
};

/**
 * Get date range by type
 *
 * @param {string} type - Type range
 * @return {{endDate: Date, startDate: Date}} Date range
 */
export const getRange = type => {
    const now = new Date();
    const endDate = new Date();

    let startDate;
    switch (type.toLowerCase()) {
        case 'week':
            startDate = new Date(now.setDate(now.getDate() - 7));
            break;

        case 'month':
            startDate = new Date(now.setDate(now.getDate() - 30));
            break;

        case 'quarter':
            startDate = new Date(now.setMonth(Math.floor(now.getMonth() / 3) * 3, 1));
            break;

        case 'year':
            startDate = new Date(now.setMonth(0, 1));
            break;

        case 'max':
        default:
            startDate = new Date(2015, 1, 1);
            break;
    }

    return {startDate, endDate};
}