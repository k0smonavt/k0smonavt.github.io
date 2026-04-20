import { Link } from 'react-router-dom';

const sections = [

];

const importantDates = [

];

const archive = [
    { year: 'ПУТС-2025', label: 'VI Международная конференция', url: 'https://cts.etu.ru/' },
    { year: 'ПУТС-2023', label: 'V Международная конференция', url: 'https://cts.etu.ru/2023/ru/' },
    { year: 'ПУТС-2021', label: 'IV Международная конференция', url: 'https://cts.etu.ru/2021/ru/' },
    { year: 'ПУТС-2019', label: 'III Международная конференция', url: 'https://cts.etu.ru/2019/ru/' },
    { year: 'ПУТС-2017', label: 'II Международная конференция', url: 'https://cts.etu.ru/2017/ru/' },
    { year: 'ПУТС-2015', label: 'Всероссийская конференция', url: 'https://etu.ru/ru/universitet/konferencii-forumy-seminary/2015/puts-2015' },
];

export default function Home() {
    return (
        <div className="flex-1">
            <div
                className="relative text-white"
                style={{
                    background: 'linear-gradient(135deg, #001f5b 0%, #003087 50%, #005BBB 100%)',
                    minHeight: 340,
                }}
            >
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white opacity-5" />
                    <div className="absolute top-1/2 -left-10 w-64 h-64 rounded-full bg-white opacity-5" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 py-14 md:py-20">
                    <div className="flex flex-col md:flex-row md:items-center gap-8">
                        <div className="flex-1">
                            <div className="inline-block bg-yellow-400 text-[#002060] text-xs font-bold px-3 py-1 rounded mb-4 uppercase tracking-widest">
                                Дата · Санкт-Петербург
                            </div>
                            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
                                Международная научная конференция
                            </h1>
                            <p className="text-blue-200 text-base md:text-lg mb-2">
                                IEEE International Conference
                            </p>
                            <p className="text-blue-300 text-sm mb-6">
                                СПбГЭТУ «ЛЭТИ» им. В.И. Ульянова (Ленина), Санкт-Петербург, Россия
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="https://events.etu.ru/login"
                                    className="bg-yellow-400 text-[#002060] font-bold px-6 py-3 rounded hover:bg-yellow-300 transition-colors text-sm"
                                >
                                    Зарегистрироваться
                                </a>
                                <Link
                                    to="/papers"
                                    className="border border-white text-white font-medium px-6 py-3 rounded hover:bg-white hover:text-[#003087] transition-colors text-sm"
                                >
                                    Подать доклад
                                </Link>
                            </div>
                        </div>

                        <div className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-6 md:w-64 shrink-0 border border-white border-opacity-20">
                            <h3 className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-4">Важная информация</h3>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-yellow-400 mt-0.5">✓</span>
                                    <span className="text-blue-700">что-то</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-yellow-400 mt-0.5">✓</span>
                                    <span className="text-blue-700">что-то</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-yellow-400 mt-0.5">✓</span>
                                    <span className="text-blue-700">что-то</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-yellow-400 mt-0.5">✓</span>
                                    <span className="text-blue-700">что-то</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-yellow-400 mt-0.5">✓</span>
                                    <span className="text-blue-700">что-то</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">
                <section>
                    <h2 className="text-xl md:text-2xl font-bold text-[#003087] mb-6 border-b-2 border-[#003087] pb-2">
                        Важные даты
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
                        {importantDates.map((item, i) => (
                            <div
                                key={i}
                                className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow text-center"
                            >
                                <div className="text-[#003087] font-bold text-sm mb-1">{item.date}</div>
                                <div className="text-gray-600 text-xs">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-xl md:text-2xl font-bold text-[#003087] mb-6 border-b-2 border-[#003087] pb-2">
                        Секции конференции
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {sections.map((s) => (
                            <div
                                key={s.num}
                                className="flex items-start gap-4 bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:border-[#003087] hover:shadow-md transition-all"
                            >
                                <div className="shrink-0 w-10 h-10 rounded-full bg-[#003087] text-white font-bold flex items-center justify-center text-sm">
                                    {s.num}
                                </div>
                                <p className="text-gray-700 text-sm leading-relaxed self-center">{s.title}</p>
                            </div>
                        ))}
                        <div className="flex items-start gap-4 bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm hover:border-[#003087] hover:shadow-md transition-all md:col-span-2">
                            <div className="shrink-0 w-10 h-10 rounded-full bg-yellow-400 text-[#002060] font-bold flex items-center justify-center text-xs text-center leading-tight">

                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed self-center font-medium">

                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-r from-[#003087] to-[#005BBB] text-white rounded-xl p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <div className="flex-1">
                            <h2 className="text-xl font-bold mb-3 text-yellow-400">Публикация </h2>
                            <p className="text-blue-100 text-sm leading-relaxed">
                                 <strong className="text-white"></strong>
                            </p>
                            <p className="text-blue-200 text-sm mt-2">

                            </p>
                        </div>
                        <div className="shrink-0">
                            <div className="bg-white bg-opacity-10 rounded-lg p-5 border border-white border-opacity-20 text-center">
                                <div className="text-yellow-400 font-black text-2xl">IEEE</div>
                                <div className="text-blue-200 text-xs mt-1"></div>
                                <div className="text-white text-xs mt-1 font-medium"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl md:text-2xl font-bold text-[#003087] mb-6 border-b-2 border-[#003087] pb-2">
                        Архив конференций
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {archive.map((item) => (
                            <a
                                key={item.year}
                                href={item.url}
                                className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm hover:border-[#003087] hover:shadow-md transition-all group"
                            >
                                <div className="text-[#003087] font-bold text-sm group-hover:text-blue-700">{item.year}</div>
                                <div className="text-gray-400 text-xs hidden sm:block">— {item.label}</div>
                            </a>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
