import React from 'react';
import { useParams } from 'react-router-dom'; 
import { connect } from "react-redux";
import Profile from './Profile';
import { getStatus, getUserProfile, updateStatus } from '../../redux/profile-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {compose} from "redux";

const withRouter = (Children) => {
  return(props) => {
    const match  = {params: useParams()};
    return <Children {...props}  match = {match}/>
  }
}

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }

    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus} />
    );
  }
}

let mapStateToProps = (state) => (
  {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
  }
);

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
