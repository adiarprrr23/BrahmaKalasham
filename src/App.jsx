import { useState } from "react";
import Modal from "react-modal";
import { useTranslation } from "react-i18next";
import Countdown from "./components/Countdown";
import TempleHistory from "./components/TempleHistory";
import Events from "./components/Events";
import LanguageToggle from "./components/LanguageToggle";
import OpaqueGod from "./assets";
import LocationLink from './components/LocationLink';
import "./App.css";
import "./i18n/i18n";

Modal.setAppElement("#root");

function App() {
  const [historyModalOpen, setHistoryModalOpen] = useState(false);
  const [eventsModalOpen, setEventsModalOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-temple bg-cover bg-center bg-fixed">
      <div
        className="min-h-screen  bg-orange-900/70 py-12 px-4"
        style={{
          backgroundImage: `url(${OpaqueGod})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <LanguageToggle />
        <div className="max-w-4xl mx-auto">
          <h1 className="text-xl sm:text-4xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-12 drop-shadow-lg">
            {t("title")}
          </h1>

          <Countdown />

          <div className="mt-12 flex justify-center gap-6">
            <button
              onClick={() => setHistoryModalOpen(true)}
              className="temple-button bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors shadow-lg"
            >
              {t("buttons.history")}
            </button>
            <button
              onClick={() => setEventsModalOpen(true)}
              className="temple-button bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors shadow-lg"
            >
              {t("buttons.events")}
            </button>
          </div>
          <LocationLink />
          <TempleHistory
            isOpen={historyModalOpen}
            onClose={() => setHistoryModalOpen(false)}
          />

          <Events
            isOpen={eventsModalOpen}
            onClose={() => setEventsModalOpen(false)}
          />
        </div>
        {/* <MainLayout/> */}
      </div>
    </div>
  );
}

export default App;
