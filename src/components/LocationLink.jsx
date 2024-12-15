import React from 'react';
import { useTranslation } from 'react-i18next';
import MapPinIcon from './icons/MapPinIcon';
import { getGoogleMapsUrl } from '../utils/locationUtils';

const LocationLink = () => {
  const { t } = useTranslation();
  
  // Example coordinates - replace with actual temple coordinates
  const templeLocation = {
    // lat: 12.9716,
    // lng: 77.5946,
    address: t('location.address')
  };

  return (
    <div className="bg-orange-100 p-6 rounded-lg shadow-lg backdrop-blur-sm">
      <h3 className="text-2xl font-semibold text-orange-800 mb-3">
        {t('location.title')}
      </h3>
      <p className="text-orange-700 mb-4">{templeLocation.address}</p>
      <a
        href={getGoogleMapsUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
      >
        <MapPinIcon className="w-5 h-5 mr-2" />
        {t('location.viewMap')}
      </a>
    </div>
  );
};

export default LocationLink;