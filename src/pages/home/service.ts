import request from 'umi-request';
import baseUrl from '@/config/baseUrl';
export interface todayParamsType {
  userId: string;
}
export async function getTodayList(params: todayParamsType) {
  return request(`${baseUrl.requestUrl}/api/homeList`, {
    method: 'get',
    params: { id: 1 || params.userId },
  });
}
