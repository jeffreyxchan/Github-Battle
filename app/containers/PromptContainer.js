var React = require('react');
var Promp = require('../components/Prompt');

var PromptContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    
    getInitialState: function() {
        return {
            username: ''
        }
    },
    
    handleUpdateUser: function (e) {
      this.setState({
          username: e.target.value
      })  
    },
    
    handleSubmitUser: function (e) {
        e.preventDefault();
        var username = this.state.username;
        this.setState({
            username: ''
        });
        
        if (this.props.routeParams.plaeryOne) {
            // go to /battle
            this.context.router.push({
                pathname: '/battle',
                query: {
                    playerOne: this.props.routeParams.playerOne,
                    playerTwo: this.state.username
                }
            })
        } else {
            this.context.router.push('/playerTwo/' + this.state.username)
        }
    },
    
    render: function () {
        // no longer in charge of rendering UI, handles all the logic instead
        return (
            <Prompt 
            onSubmitUser={this.handleSubmitUser} 
            onUpdateUser={this.handleUpdateUser} 
            header={this.props.route.header}
            username={this.state.username} />
        )
    }
});
    
module.exports = PromptContainer;