/* Docs - https://www.npmjs.com/package/husky */
module.exports = {
    hooks: {
        'pre-commit': 'lint-staged',
        'commit-msg': 'echo $HUSKY_GIT_PARAMS',
    },
};
