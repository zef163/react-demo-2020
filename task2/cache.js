/**
 * Sample cache method
 *
 * Supported browsers: IE 8+, Chrome 5.0+, FireFox 2.0+, Safari 4+
 *
 * @param {string} method - HTTP request method
 * @param {object} config - HTTP request config
 * @returns {any} Response result
 */
const cache = async (method, config) => {
    // All cached results
    const requests = sessionStorage.getItem('requests') || {};

    // Current datetime in timestamp
    const now = +new Date();

    // Cache key
    const key = `${method.toLowerCase()}_${JSON.stringify(config)}`;

    if (!requests[key] || requests[key].expiredAt < now) {
        try {
            const result = await http[method](config);
            requests[key] = {
                result,
                expiredAt: now + (5 * 60), // 5 min
            };
        } catch {
            requests[key] = {
                result: null,
                expiredAt: now,
            };
        }
    }

    return requests[key].result;
};

/**
 * Get data of bonds by an array of ISIN for a given date
 *
 * @param {object} params - HTTP request params
 * @returns {any} Response result
 */
const getBondsData = async ({ date, isins }) => {
    const result = await cache('post', {
        url: `/bonds/${date}`,
        body: isins,
    });
    return result;
};
