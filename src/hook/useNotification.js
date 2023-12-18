import { notification } from 'antd';

export default function useNotification() {
  function infoNoti(description) {
    notification.info({
      message: '알림',
      description,
    });
  }
  function successNoti(description) {
    notification.success({
      message: '알림',
      description,
    });
  }
  function errorNoti(description) {
    notification.error({
      message: '에러 발생',
      description,
    });
  }
  return { infoNoti, successNoti, errorNoti };
}
