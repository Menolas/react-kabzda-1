import React from 'react';
import Users from "./Users";
import Preloader from '../common/Preloader/Preloader';
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setCurrentPage,
  getUsers,
} from './../../redux/users-reducer';
import {compose} from "redux";

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  };

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render = () => {

    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}

        <Users
          users={this.props.users}
          pageSize={this.props.pageSize}
          totalUsersCount={this.props.totalUsersCount}
          currentPage={this.props.currentPage}
          followingInProgress={this.props.followingInProgress}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          onPageChanged={this.onPageChanged}
        />
      </>
    );
  };
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default compose(
  connect(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers})
)(UsersContainer);
