var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
            
    getInitialState: function () {
        return {
            isLoading: true,
            playersInfo: []
        }
    },
    
    componentDidMount: function () {
        var query = this.props.location.query;
        console.log('Query is: ', query);
        // fetch info from github then update state
        githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
        .then(function (players) {
            console.log('playersInfo: ', [players[0], players[1]]);
            this.setState({
                isLoading: false,
                playersInfo: [players[0], players[1]]
            })
            console.log('Again: ', this.state.playersInfo);
        }.bind(this))
    },
    
    handleInitiateBattle: function () {
        console.log(this.state.playersInfo);
        this.context.router.push({
            pathname: '/results',
            state: {
                playersInfo: this.state.playersInfo
            }
        })
        console.log('AGAIN: ', this.state.playersInfo);
    },
    
    render: function () {
        return (
            <ConfirmBattle 
            isLoading={this.state.isLoading}
            onInitiateBattle={this.handleInitiateBattle}
            playersInfo={this.state.playersInfo} />
        );
    }
    
});

module.exports = ConfirmBattleContainer;