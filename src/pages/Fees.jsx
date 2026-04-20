import PageLayout from '../components/PageLayout';

const fees = [
    {
        category: 'Категория',
        early: 'цена ₽',
        note: 'ноте',
        highlight: false,
    }
];

const included = [
    'перечесление',
];

export default function Fees() {
    return (
        <PageLayout
            title="Оргвзносы"
            subtitle="Стоимость участия в Международной конференции "
        >
            <div className="space-y-10">
                <section>
                    <h2 className="text-xl font-bold text-[#003087] mb-5 border-b-2 border-[#003087] pb-2">
                        Размер оргвзноса
                    </h2>
                    <div className="w-full overflow-x-auto rounded-xl border border-gray-200 shadow-sm ">
                        <table className="min-w-full text-sm ">
                            <thead>
                            <tr className="bg-[#003087] text-white">
                                <th className="text-left px-5 py-3 font-semibold">Категория участника</th>
                                <th className="text-center px-5 py-3 font-semibold">Цена</th>
                                <th className="text-left px-5 py-3 font-semibold hidden md:table-cell">Примечание</th>
                            </tr>
                            </thead>
                            <tbody>
                            {fees.map((fee, i) => (
                                <tr
                                    key={i}
                                    className={`border-t border-gray-100 ${
                                        fee.highlight ? 'bg-blue-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                                    } hover:bg-blue-50 transition-colors`}
                                >
                                    <td className="px-5 py-3 font-medium text-gray-800">{fee.category}</td>
                                    <td className="px-5 py-3 text-center font-bold text-[#003087]">{fee.early}</td>
                                    <td className="px-5 py-3 text-gray-400 text-xs hidden md:table-cell">{fee.note}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-[#003087] mb-5 border-b-2 border-[#003087] pb-2">
                        Что включает оргвзнос
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {included.map((item) => (
                            <div key={item} className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                                <span className="text-green-500 text-xl">✓</span>
                                <span className="text-gray-700 text-sm">{item}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-[#003087] mb-5 border-b-2 border-[#003087] pb-2">
                        Реквизиты
                    </h2>
                    <div className="space-y-3">
                        {[
                            { text: 'текст' }
                        ].map((item) => (
                            <div key={item.step} className="flex gap-4 bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <span className=" text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {item.step}
                </span>
                                <p className="text-gray-700 text-sm self-center">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </PageLayout>
    );
}
