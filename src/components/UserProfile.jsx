import PropTypes from "prop-types";
import { UserFavoriteFoods } from "./UserFavoriteFoods";
import { UserUsername } from "./UserUsername";

export function UserProfile(props) {
	const userName = 'Bob';
	const today = new Date();

	function formatDate() {
		return new Intl.DateTimeFormat(
			'en-US',
			{ weekday: 'long'}
		).format(today);
	}

	return (
		<div id="user-profile">
			<UserUsername username={props.username}/>
			<div>
				<span>Age: </span>
				<span>{ props.age }</span>
				<p>Day of week: { formatDate(today) }</p>
				{ String(props.isLoggedIn)}
			</div>
			<UserFavoriteFoods/>
		</div>
	);

	UserProfile.propTypes = {
		username: PropTypes.string.isRequired,
	};
}