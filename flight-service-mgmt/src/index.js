const express = require('express');
const {ServerConfig, LoggerConfig} = require('./config');
const apiRoutes = require('./routes');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, function(){
    LoggerConfig.info(`Flight service management server is running on port ${ServerConfig.PORT}`);
})