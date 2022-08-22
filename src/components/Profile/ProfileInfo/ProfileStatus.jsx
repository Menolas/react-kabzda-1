import React from 'react';
import classes from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
  
  state = {
    editMode: false,
    status: this.props.status,
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
    debugger;
    this.props.updateStatus(this.state.status);
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevProps.status !== this.props.status) {
      this.setState({
          status: this.props.status
      });
    }
  }

  render() {
    return (
      <div className={classes.profileStatus}>
        {!this.state.editMode &&
          <span onDoubleClick={this.activateEditMode}>
            {this.props.status || "-------"}
          </span>
        }

        {this.state.editMode &&
          <div>
            <input
              onChange={this.onStatusChange}
              value={this.state.status}
              autoFocus={true}
              onBlur={this.deactivateEditMode} />
          </div>
        }
      </div>
    );
  }
}

export default ProfileStatus;
