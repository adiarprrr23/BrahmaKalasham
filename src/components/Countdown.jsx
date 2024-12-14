import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';

const Countdown = () => {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const eventDate = new Date('2024-12-31T00:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      
      setTimeLeft({
        days: differenceInDays(eventDate, now),
        hours: differenceInHours(eventDate, now) % 24,
        minutes: differenceInMinutes(eventDate, now) % 60,
        seconds: differenceInSeconds(eventDate, now) % 60
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-orange-100 p-8 rounded-lg shadow-lg">
      <h2 className="text-20 sm:text-4xl md:text-3xl lg:text-4xl font-bold text-orange-800 mb-6">{t('countdown.title')}</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="text-center">
          <span className="text-20 sm:text-4xl md:text-5xl lg:text-4xl font-bold text-orange-600">{timeLeft.days}</span>
          <p className="text-20 sm:text-4xl md:text-3xl lg:text-4xl text-orange-800">{t('countdown.days')}</p>
        </div>
        <div className="text-center">
          <span className="text-20 sm:text-4xl md:text-3xl lg:text-4xl font-bold text-orange-600">{timeLeft.hours}</span>
          <p className="text-20 sm:text-4xl md:text-3xl lg:text-4xl text-orange-800">{t('countdown.hours')}</p>
        </div>
        <div className="text-center">
          <span className="text-20 sm:text-4xl md:text-3xl lg:text-4xl font-bold text-orange-600">{timeLeft.minutes}</span>
          <p className="text-20 sm:text-4xl md:text-3xl lg:text-4xl text-orange-800">{t('countdown.minutes')}</p>
        </div>
        <div className="text-center">
          <span className="text-20 sm:text-4xl md:text-5xl lg:text-4xl font-bold text-orange-600">{timeLeft.seconds}</span>
          <p className="text-20 sm:text-4xl md:text-5xl lg:text-4xl text-orange-800">{t('countdown.seconds')}</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;