import { urlencoded } from "body-parser";

const dbName ='food-orderning';

const dbHost = 'localhost';

const dbPort = 2717;

module.exports{
    url:`mongodb://${dbHost}:${dbPort}/${dbName}`
}