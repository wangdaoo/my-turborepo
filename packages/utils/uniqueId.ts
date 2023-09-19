/**
 * 生成唯一的 ID。
 * @param prefix - ID 前缀。
 * @returns 生成的唯一 ID。
 */
export const uniqueId = (prefix = ''): string => {
  return prefix + Math.random().toString(36).slice(2, 10);
};
