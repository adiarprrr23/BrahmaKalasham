import React from 'react';
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';

const TempleHistory = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="max-w-2xl mx-auto mt-20 bg-white p-8 rounded-lg shadow-xl"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <h2 className="text-2xl font-bold text-orange-800 mb-4">{t('history.title')}</h2>
      <div className="prose">
        <p className="text-gray-700">
          {t('history.content')}
        </p>
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

export default TempleHistory;