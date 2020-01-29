import authActions from './auth/actions';
import usersActions from './users/actions';

export default {
    ...authActions,
    ...usersActions,
};
