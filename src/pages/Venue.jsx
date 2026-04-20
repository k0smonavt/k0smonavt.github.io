import PageLayout from '../components/PageLayout';

export default function Venue() {
    return (
        <PageLayout
            title="Место проведения"
            subtitle="СПбГЭТУ «ЛЭТИ» им. В.И. Ульянова (Ленина), Санкт-Петербург"
        >
            <div className="space-y-10">
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-[#003087] border-b-2 border-[#003087] pb-2">
                            Адрес и контакты
                        </h2>

                        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-4">
                            <div>
                                <div className="text-xs font-bold text-[#003087] uppercase tracking-wider mb-1">Полное название</div>
                                <p className="text-gray-700 text-sm">
                                    Санкт-Петербургский государственный электротехнический университет «ЛЭТИ» им. В.И. Ульянова (Ленина)
                                </p>
                            </div>
                            <div>
                                <div className="text-xs font-bold text-[#003087] uppercase tracking-wider mb-1">Адрес</div>
                                <p className="text-gray-700 text-sm">
                                    197022, Россия, Санкт-Петербург,<br />
                                    ул. Профессора Попова, д. 5
                                </p>
                            </div>
                            <div>
                                <div className="text-xs font-bold text-[#003087] uppercase tracking-wider mb-1">Корпус</div>
                                <p className="text-gray-700 text-sm">Главный корпус (корп. 5, лит. А)</p>
                            </div>
                            <div>
                                <div className="text-xs font-bold text-[#003087] uppercase tracking-wider mb-1">Телефон</div>
                                <p className="text-gray-700 text-sm">Телефон</p>
                            </div>
                            <div>
                                <div className="text-xs font-bold text-[#003087] uppercase tracking-wider mb-1">Сайт университета</div>
                                <a href="https://etu.ru" target="_blank" rel="noopener noreferrer" className="text-[#003087] text-sm hover:underline">
                                    etu.ru
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-[#003087] border-b-2 border-[#003087] pb-2">
                            Как добраться
                        </h2>
                        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-4">
                            {[
                                {
                                    icon: '🚇',
                                    title: 'Метро',
                                    text: '',
                                },
                                {
                                    icon: '🚌',
                                    title: 'Автобус',
                                    text: '',
                                },
                                {
                                    icon: '🚗',
                                    title: 'Автомобиль',
                                    text: '',
                                },
                                {
                                    icon: '🚕',
                                    title: 'Такси',
                                    text: 'Яндекс Go, Uber ',
                                },
                            ].map((t) => (
                                <div key={t.title} className="flex gap-3">
                                    <span className="text-2xl">{t.icon}</span>
                                    <div>
                                        <div className="font-semibold text-gray-800 text-sm">{t.title}</div>
                                        <div className="text-gray-500 text-xs mt-0.5">{t.text}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-[#003087] mb-5 border-b-2 border-[#003087] pb-2">
                        Карта
                    </h2>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl overflow-hidden h-72 flex items-center justify-center shadow-inner">
                        <div className="text-center text-blue-400">
                            <div className="text-5xl mb-3">📍</div>
                            <p className="font-semibold text-blue-600">СПбГЭТУ «ЛЭТИ»</p>
                            <p className="text-sm text-blue-400">ул. Профессора Попова, 5</p>
                            <a
                                href="https://yandex.ru/maps/2/saint-petersburg/house/ulitsa_professora_popova_5/Z0kYdQVkSkUEQFtjfXV2cHVnYw==/?ll=30.320876%2C59.972363&pt=30.322388%2C59.970456&z=17.84"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-3 bg-[#003087] text-white text-xs px-4 py-2 rounded hover:bg-blue-800 transition-colors"
                            >
                                Открыть в Яндекс.Картах
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
}
