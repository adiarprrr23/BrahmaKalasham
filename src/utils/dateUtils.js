import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';

export const calculateTimeLeft = (targetDate) => {
  const now = new Date();
  return {
    days: differenceInDays(targetDate, now),
    hours: differenceInHours(targetDate, now) % 24,
    minutes: differenceInMinutes(targetDate, now) % 60,
    seconds: differenceInSeconds(targetDate, now) % 60
  };
};