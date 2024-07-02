module.exports = {
    apps: [{
        name: 'index',
        script: './src/server.js',
        instances: 'max',
        env: {
            NODE_ENV: 'developement'
        },
        env_production: {
            NODE_ENV: 'production'
        }
    }]
};
