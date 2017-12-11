import axios from 'axios';


export default {
	user:{
		login: (credentails)	=> 
			axios.post("/api/auth",{credentails}).then(res => res.data.user)
	}
};