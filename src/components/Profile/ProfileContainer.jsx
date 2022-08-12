import React from 'react';
 import { useParams } from 'react-router-dom'; 
import { connect } from "react-redux";
import * as axios from 'axios';
import Profile from './Profile';
import { setUserProfile } from '../../redux/profile-reducer';
//import { withRouter } from 'react-router-dom';

const withRouter = (Children) => {
  return(props) => {
    const match  = {params: useParams()};
    return <Children {...props}  match = {match}/>
  }
}

class ProfileContainer extends React.Component {
  debugger;
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }

    axios.get(`/api/1.0/profile/` + userId).then(response => {
      this.props.setUserProfile(response.data);
    });
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

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);
