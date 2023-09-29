import { getCookie } from '@turbo/utils';

/**
 * 获取用户的 token
 * @returns 用户的 token
 */
export const getToken = (): string => {
    let Authorization = getCookie('Authorization') || '';
    if (!Authorization) {
        Authorization = localStorage.getItem('access_token') || '';
    }
    if (!Authorization) {
        const localAuth = localStorage.getItem('Authorization') || '';
        const match = localAuth.match(/Authorization=(\S*)/);
        if (match) {
            Authorization = match[1] || '';
        }
    }
    return Authorization;
};

/**
 * 生成包含 Authorization 头部信息的字符串
 * @param token - 用户的 token
 * @returns 包含 Authorization 头部信息的字符串
 */
const getHeaderAuth = (token: string): string => {
    return `Bearer ${token}`;
};

/**
 * 获取带有 Bearer 的 token
 * @returns {string} 包含 Bearer 的 token
 */
export const getTokenWithBearer = (): string => {
    return getHeaderAuth(getToken());
};

// TODO: 接口获取
// export const isLogin = async () => {
//     const res = await api.useAuthRepo().getLoginInfo();
//     return !!res.uid;
// };
