var axios = require('axios');

var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id" + id + "&client_secrets=" + sec;

function getUserInfo (username) {
    return axios.get('https://api.github.com/users/' + username + param)
}

var helpers = {
    getPlayersInfo: function (players) {
        // fetch some data from Github
        // axios.all takes in array of promises
        // resolves promise after information for all usernames obtained
        // returns new array with new values that we wanted
        return axios.all(players.map(function (username) {
            return getUserInfo(username)
        })).then(function (info) {
            return info.map(function (user) {
                console.log('user.data: ', user.data);
                return user.data;
            })
        }).catch(function (err) {
            console.warn('Error in getPlayersInfo', err)
        })
    }
};

module.exports = helpers;