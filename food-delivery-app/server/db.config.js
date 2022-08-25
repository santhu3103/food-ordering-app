const dbName = 'food-ordering';
const dbHost = 'localhost';
const dbPort = 2717;
module.exports = {
    url: `mongodb://${dbHost}:${dbPort}/${dbName}`
}