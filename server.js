//Install express server
const express = require('express');
const path = require('path');
const https = require('https');
const fs = require('fs');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/legal-pilot-ChatApp'));

app.get('/*', function(req, res) {

    res.sendFile(path.join(__dirname + '/dist/legal-pilot-ChatApp/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8000, () => {
    console.log("application en cour ..... sur le port 8000......");
});

