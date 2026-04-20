import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-[#002060] text-white mt-auto">
            <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-yellow-400 font-bold text-base mb-3 uppercase tracking-wider">О конференции</h3>
                    <p className="text-blue-200 text-sm leading-relaxed">
                        Международная научная конференция (ПУТС-).
                        СПбГЭТУ «ЛЭТИ», Санкт-Петербург.
                    </p>
                    <p className="text-blue-300 text-sm mt-2">Дата</p>
                </div>

                <div>
                    <h3 className="text-yellow-400 font-bold text-base mb-3 uppercase tracking-wider">Навигация</h3>
                    <ul className="space-y-1 text-sm text-blue-200">
                        {[
                            { label: 'Главная', path: '/' },
                            { label: 'Программный комитет', path: '/committee' },
                            { label: 'Программа', path: '/program' },
                            { label: 'Доклады', path: '/papers' },
                            /*{ label: 'Место проведения', path: '/venue' },*/
                            { label: 'Контактная информация', path: '/contacts' },
                        ].map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className="hover:text-white transition-colors"
                                >
                                    → {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-yellow-400 font-bold text-base mb-3 uppercase tracking-wider">Контакты</h3>
                    <ul className="text-blue-200 text-sm space-y-2">
                        <li>
                            <span className="text-blue-400">Адрес:</span><br />
                            197022, Россия, Санкт-Петербург,<br />
                            ул. Профессора Попова, д. 5
                        </li>
                        <li>
                            <span className="text-blue-400">Email:</span><br />
                            <a href="mailto:irvc.eltech@mail.ru" className="hover:text-white transition-colors">
                                IRVC.eltech@mail.ru
                            </a>
                        </li>
                        <li>
                            <span className="text-blue-400">IEEE:</span><br />

                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-blue-800">
                <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap gap-4 text-xs text-blue-400">
                    <span className="text-blue-300 font-medium">Архив конференций:</span>
                    {[
                        { label: 'ПУТС-2025', url: 'https://cts.etu.ru/' },
                        { label: 'ПУТС-2023', url: 'https://cts.etu.ru/2023/ru/' },
                        { label: 'ПУТС-2021', url: 'https://cts.etu.ru/2021/ru/' },
                        { label: 'ПУТС-2019', url: 'https://cts.etu.ru/2019/ru/' },
                        { label: 'ПУТС-2017', url: 'https://cts.etu.ru/2017/ru/' },
                        { label: 'ПУТС-2015', url: 'https://etu.ru/ru/universitet/konferencii-forumy-seminary/2015/puts-2015' },
                    ].map((item) => (
                        <a key={item.label} href={item.url} className="hover:text-white transition-colors">
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>

            <div className="border-t border-blue-900">
                <div className="max-w-7xl mx-auto px-4 py-3 text-center text-xs text-blue-500">
                    © 2026 Санкт-Петербургский государственный электротехнический университет «ЛЭТИ» им. В.И. Ульянова (Ленина)
                </div>
            </div>
        </footer>
    );
}
