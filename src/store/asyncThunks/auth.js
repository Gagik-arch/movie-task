import { createAsyncThunk } from '@reduxjs/toolkit';
import authApi from '../../api/authApi';
import { authActions } from '../slices/auth.slice';

export const login = createAsyncThunk(
    'auth/login',
    async ({ body, navigation }, { dispatch }) => {
        dispatch(authActions.setLoading(true));

        authApi
            .login(body)
            .then((res) => {
                dispatch(authActions.setUserData(res.data));
            })
            .catch((e) => {
                toast.error('This is an error!');
            })
            .then(() => {
                dispatch(authActions.setLoading(false));
            });
    }
);
