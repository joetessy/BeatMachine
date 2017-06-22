import LoginHomePage from "./login_homepage";
import { connect } from "react-redux";
import { logout } from './../../actions/session_actions';


const mapStateToProps = ({session: {currentUser}}) => {
  return ({
    currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return ({

  });
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginHomePage);
