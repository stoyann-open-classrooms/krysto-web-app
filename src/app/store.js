import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import collectReducer from '../features/collect/collectSlice'
import userReducer from '../features/user/userSlice'
import messageReducer from '../features/message/messageSlice'
import collectPointReducer from '../features/collectPoint/collectPointSlice';
import wasteReducer from '../features/waste/wasteSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    collect: collectReducer,
    user: userReducer,
    message: messageReducer,
    collectPoint: collectPointReducer,
    waste:  wasteReducer
  },
});
