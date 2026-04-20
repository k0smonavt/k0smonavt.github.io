import PageLayout from '../components/PageLayout';
import { useState } from 'react';

const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '../assets/';
    link.download = 'filename.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

const days = [
    {
        date: 'Дата',
        label: 'День 1',
        events: [
            { time: 'Время', type: 'reg', title: 'что', place: 'Место' },
            { time: 'Время', type: 'plenary', title: 'что', place: 'Место' },
            { time: 'Время', type: 'break', title: 'что', place: 'Место' },
            { time: 'Время', type: 'section', title: 'что', place: 'Место' },
        ],
    },
    {
        date: 'Дата',
        label: 'День 2',
        events: [
            { time: 'Время', type: 'reg', title: 'что', place: 'Место' },
            { time: 'Время', type: 'section', title: 'что', place: 'Место' },
            { time: 'Время', type: 'break', title: 'что', place: 'Место' },
            { time: 'Время', type: 'section', title: 'что', place: 'Место' },
            { time: 'Время', type: 'plenary', title: 'что', place: 'Место' },
        ],
    },
    {
        date: 'Дата',
        label: 'День 3',
        events: [
            { time: 'Время', type: 'section', title: 'что', place: 'Место' },
            { time: 'Время', type: 'break', title: 'что', place: 'Место' },
            { time: 'Время', type: 'plenary', title: 'что', place: 'Место' },
            { time: 'Время', type: 'reg', title: 'что', place: 'Место' },
        ],
    },
];

const typeConfig = {
    reg: { color: 'bg-gray-100 border-gray-300 text-gray-600', badge: 'bg-gray-200 text-gray-700', label: 'Рег.' },
    plenary: { color: 'bg-blue-50 border-blue-300 text-blue-800', badge: 'bg-[#003087] text-white', label: 'Пленар. зас.' },
    section: { color: 'bg-green-50 border-green-300 text-green-800', badge: 'bg-green-600 text-white', label: 'Секция' },
    break: { color: 'bg-yellow-50 border-yellow-300 text-yellow-800', badge: 'bg-yellow-400 text-yellow-900', label: 'Перерыв' },
};

export default function Program() {
    const [activeDay, setActiveDay] = useState(0);

    return (
        <PageLayout
            title="Программа конференции"
            subtitle="Дата, СПбГЭТУ «ЛЭТИ», Санкт-Петербург"
        >
            <div className="space-y-6">
                <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4 text-sm text-yellow-800">
                    ⚠️
                </div>

                <div className="flex flex-wrap gap-2">
                    {days.map((day, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveDay(i)}
                            className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all ${
                                activeDay === i
                                    ? 'bg-[#003087] text-white shadow-md'
                                    : 'bg-white border border-gray-300 text-gray-600 hover:border-[#003087] hover:text-[#003087]'
                            }`}
                        >
                            {day.label}
                            <span className={`ml-2 text-xs ${activeDay === i ? 'text-blue-200' : 'text-gray-400'}`}>
                {day.date.split(' ').slice(0, 2).join(' ')}
              </span>
                        </button>
                    ))}
                </div>

                <div>
                    <h2 className="text-lg font-bold text-[#003087] mb-4">{days[activeDay].date}</h2>
                    <div className="space-y-3">
                        {days[activeDay].events.map((event, i) => {
                            const cfg = typeConfig[event.type] || typeConfig.reg;
                            return (
                                <div
                                    key={i}
                                    className={`flex gap-4 border rounded-lg p-4 ${cfg.color}`}
                                >
                                    <div className="shrink-0 w-28 text-sm font-mono font-semibold">{event.time}</div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start gap-2 flex-wrap">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded shrink-0 ${cfg.badge}`}>
                        {cfg.label}
                      </span>
                                            <span className="font-medium text-sm">{event.title}</span>
                                        </div>
                                        {event.place && (
                                            <div className="mt-1 text-xs opacity-70">📍 {event.place}</div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h3 className="font-bold text-gray-800">Скачать программу</h3>
                        <p className="text-gray-500 text-sm">Полная программа конференции в формате PDF</p>
                    </div>
                    <button onClick={handleDownload} className="shrink-0 bg-[#003087] text-white px-5 py-2.5 rounded-lg hover:bg-blue-800 transition-colors text-sm font-medium">
                        Скачать PDF
                    </button>
                </div>
            </div>
        </PageLayout>
    );
}
