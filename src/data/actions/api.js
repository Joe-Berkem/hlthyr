import axios from '../../axios';

import { setUserMeds, setUserDoses } from './state.js';

export const getUserInfo = (user_id) => dispatch => {
	axios.get(`/users/${user_id}/meds`).then(({ data }) => {
		console.log(data);
		dispatch(setUserMeds(data));

	});
	axios.get(`/users/${user_id}/doses`).then(({ data }) =>{ dispatch(setUserDoses(data));
	});
}