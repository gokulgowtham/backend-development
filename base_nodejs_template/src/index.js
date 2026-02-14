const express = require('express');
const {ServerConfig, LoggerConfig} = require('./config');
const apiRoutes = require('./routes');
const app = express();

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, function(){
    LoggerConfig.info(`server is running on port ${ServerConfig.PORT}`);
})