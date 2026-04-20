import PageLayout from '../components/PageLayout';

export default function Contacts() {

    return (
        <PageLayout
            title="Контактная информация"
        >
            <div className="grid grid-cols-1 gap-10">
                <div className="space-y-6">
                    <section>
                        <h2 className="text-xl font-bold text-[#003087] mb-5 border-b-2 border-[#003087] pb-2">
                            Организационный комитет
                        </h2>
                        <div className="space-y-4">
                            {[
                                {
                                    icon: '✉️',
                                    title: 'Основной контакт',
                                    lines: ['irvc.eltech@mail.ru']
                                },
                                {
                                    icon: '📍',
                                    title: 'Почтовый адрес',
                                    lines: [
                                        '197022, Россия, г. Санкт-Петербург',
                                        'ул. Профессора Попова, д. 5, лит. Ф',
                                        'СПбГЭТУ «ЛЭТИ»',
                                    ],
                                },
                                {
                                    icon: '📞',
                                    title: 'Телефон кафедры',
                                    lines: ['Телефон'],
                                },
                            ].map((contact) => (
                                <div
                                    key={contact.title}
                                    className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex gap-4"
                                >
                                    <span className="text-2xl shrink-0">{contact.icon}</span>
                                    <div>
                                        <div className="font-semibold text-gray-800 text-sm mb-1">{contact.title}</div>
                                        {contact.lines.map((line, i) =>
                                            contact.link && i === 0 ? (
                                                <a key={i} href={contact.link} className="text-[#003087] text-sm hover:underline block">
                                                    {line}
                                                </a>
                                            ) : (
                                                <p key={i} className="text-gray-600 text-sm">{line}</p>
                                            )
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#003087] mb-5 border-b-2 border-[#003087] pb-2">
                            Полезные ссылки
                        </h2>
                        <ul className="space-y-2 text-sm">
                            {[
                                { label: 'Сайт СПбГЭТУ «ЛЭТИ»', url: 'https://etu.ru' },
                                { label: 'IEEE Северо-Западная секция', url: 'https://ieee.spb.etu.ru' },
                            ].map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-[#003087] hover:text-blue-800 hover:underline"
                                    >
                                        <span className="text-blue-300">→</span>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </PageLayout>
    );
}
