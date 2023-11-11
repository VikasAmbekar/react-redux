import CancelToken from "./CancelToken";

const axios = jest.fn();
export const window = jest.fn(() => {});

axios.CancelToken = CancelToken;

axios.isCancel = jest.fn().mockImplementation(e => {
    return !!(e && e.__CANCEL__);
})

export {CancelToken};
export default axios;
