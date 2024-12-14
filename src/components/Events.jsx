import React from 'react';
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';

const Events = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  const events = [
    {
      day: t('events.day', { number: 1 }),
      events: t('events.eventsList.day1', { returnObjects: true })
    },
    {
      day: t('events.day', { number: 2 }),
      events: t('events.eventsList.day2', { returnObjects: true })
    },
    {
      day: t('events.day', { number: 3 }),
      events: t('events.eventsList.day3', { returnObjects: true })
    },
    {
      day: t('events.day', { number: 4 }),
      events: t('events.eventsList.day4', { returnObjects: true })
    },
    {
      day: t('events.day', { number: 5 }),
      events: t('events.eventsList.day5', { returnObjects: true })
    },
    {
      day: t('events.day', { number: 6 }),
      events: t('events.eventsList.day6', { returnObjects: true })
    }
  ];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="max-w-2xl mx-auto mt-20 bg-white p-8 rounded-lg shadow-xl"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <h2 className="text-2xl font-bold text-orange-800 mb-4">{t('events.title')}</h2>
      
      {/* Scrollable container for events */}
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {events.map((day, index) => (
          <div key={index} className="border-b pb-4">
            <h3 className="font-bold text-lg text-orange-700">{day.day}</h3>
            <ul className="list-disc pl-5 mt-2">
              {day.events.map((event, eventIndex) => (
                <li key={eventIndex} className="text-gray-700">{event}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <button
        onClick={onClose}
        className="mt-6 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
      >
        {t('buttons.close')}
      </button>
    </Modal>
  );
};

export default Events;
