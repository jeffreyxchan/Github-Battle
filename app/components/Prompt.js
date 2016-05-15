var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;

// functional stateless component since it's only rendering UI
function Promp (props) {
    return (
        <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
            <h1>{props.header}</h1>
            <div className="col-sm-12">
                <form onSubmit={props.onSubmitUser}>
                    <div className="form-group">
                        <input  className="form-control" 
                                placeholder="Github Username"
                                onChange={props.onUpdateUser}
                                value={props.username}
                                type="text" />
                    </div>
                    <div className="form-group col-sm-4 col-sm-offset-4">
                        <button className="btn btn-block btn-success" type="submit">
                            Continue
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

Prompt.propTypes = {
    // header must be a string. useful when working with large teams
    header: PropTypes.string.isRequired,
    onUpdateUser: PropTypes.func.isRequired,
    onSubmitUser: PropType.func.isRequired,
    username: PropType.string.isRequired
}

module.exports = Prompt;