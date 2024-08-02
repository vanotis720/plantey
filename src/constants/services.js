const base = process.env.EXPO_PUBLIC_APP_ENV == 'prod' ?
    'https://gotaxi-app.com/api/v1' : 'http://172.20.10.9:8000/api/v1';


export const API = {
    signup: base + '/signup',
    login: base + '/login',
    driver: base + '/driver',
    trip: base + '/trip',
    requestOtp: base + '/password-reset/send-otp',
    verifyOtp: base + '/password-reset/verify-otp',
    updatePassword: base + '/password-reset/update',
    user: base + '/user',
    prices: base + '/prices',
    base,
};