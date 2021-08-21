import request from 'umi-request';
import baseUrl from '@/config/baseUrl';
export interface todayParamsType {
  userId: string;
}
export async function getDayList(params: todayParamsType) {
  return request(`${baseUrl.requestUrl}/api/dayList`, {
    method: 'get',
    params: { id: 1 },
  });
}
