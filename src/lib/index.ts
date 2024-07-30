import dayjs from 'dayjs';

export const formatDate = (date: string | Date | number) => {
  return dayjs(date).format('MMMM YYYY');
};
