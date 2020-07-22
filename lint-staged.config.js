/* Will run the following command before each commit */
module.exports = {
    '*.{js,ts,tsx}': 'npm run lint:errors',
};
