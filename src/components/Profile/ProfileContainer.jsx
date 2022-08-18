import React from 'react';
 import { useParams } from 'react-router-dom'; 
import { connect } from "react-redux";
import Profile from './Profile';
import { getUserProfile } from '../../redux/profile-reducer';

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
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    );
  }
}

let mapStateToProps = (state) => (
  {
    profile: state.profilePage.profile
  }
);

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);
