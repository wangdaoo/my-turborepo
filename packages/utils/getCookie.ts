/**
 * 获取指定名称的 cookie 值
 * @param name - cookie 名称
 * @returns cookie 值或 null
 */
export const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        const cookieValue = parts.pop()?.split(';').shift();
        return cookieValue ? cookieValue : null;
    }
    return null;
};
