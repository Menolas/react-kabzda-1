import React from 'react';
import classes from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
  state = {
    editMode: false
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    });
    //this.forceUpdate();
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    });
  }

  render() {
    return (
      <div className={classes.profileStatus}>
        {!this.state.editMode
          ? <div>
              <span onDoubleClick={this.activateEditMode}>
                {this.props.status}
              </span>
            </div>
          : <div>
            <input value={this.props.status} type="text" autoFocus={true} onBlur={this.deactivateEditMode} />
            </div>
        }
      </div>
    );
  }
}

export default ProfileStatus;
