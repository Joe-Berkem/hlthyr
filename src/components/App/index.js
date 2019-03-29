import { connect } from 'react-redux';

import App from './App';
import { getUserInfo } from '../../data/actions/api';

const mapDispatchToProps = (dispatch) => ({
	getUserInfo: (userID) => dispatch(getUserInfo(userID)),
})

export default connect(null, mapDispatchToProps)(App);

