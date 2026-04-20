import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import { sections } from '../data/papersData';

const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '../assets/';
    link.download = 'filename.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

const requirements = [
    { title: 'заголовок', text: 'текст' }
];

const steps = [
    { num: '1', title: 'заголовок', desc: 'объяснение' }
];

export default function Papers() {
    const navigate = useNavigate();

    return (
        <PageLayout
            title="Сборник докладов"
            subtitle="Требования к оформлению и доклады"
        >
            <div className="space-y-10">
                <section>
                    <h2 className="text-xl font-bold text-[#003087] mb-6 border-b-2 border-[#003087] pb-2">
                        Порядок подачи доклада
                    </h2>
                    <div className="relative">
                        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block" />
                        <div className="space-y-4">
                            {steps.map((step) => (
                                <div key={step.num} className="flex gap-5 relative">
                                    <div className="shrink-0 w-12 h-12 rounded-full bg-[#003087] text-white font-bold flex items-center justify-center text-lg z-10 shadow">
                                        {step.num}
                                    </div>
                                    <div className="flex-1 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                                        <h3 className="font-bold text-gray-800 mb-1">{step.title}</h3>
                                        <p className="text-gray-600 text-sm">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-[#003087] mb-6 border-b-2 border-[#003087] pb-2">
                        Требования к оформлению
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {requirements.map((req) => (
                            <div key={req.title} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                                <div className="text-[#003087] font-semibold text-sm mb-1">{req.title}</div>
                                <div className="text-gray-600 text-sm">{req.text}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-[#003087] mb-5 border-b-2 border-[#003087] pb-2">
                        Шаблоны и документы
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {[
                            { icon: '📄', title: 'Титульный лист', desc: '', btn: 'Скачать .docx' }
                        ].map((doc) => (
                            <div key={doc.title} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                                <div className="text-3xl mb-3">{doc.icon}</div>
                                <h3 className="font-bold text-gray-800 text-sm mb-1">{doc.title}</h3>
                                <p className="text-gray-500 text-xs mb-4 flex-1">{doc.desc}</p>
                                <button onClick={handleDownload} className="bg-[#003087] text-white text-xs font-medium px-4 py-2 rounded hover:bg-blue-800 transition-colors">
                                    {doc.btn}
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-[#003087] mb-5 border-b-2 border-[#003087] pb-2">
                        Архив докладов
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => navigate(`/section/${section.id}`)}
                                className="group bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-[#003087] transition-all text-left flex flex-col gap-3"
                            >
                                <div className="flex items-center gap-3">
                                    <div>
                                        <div className="text-xs font-semibold text-[#003087] uppercase tracking-wide mb-0.5">
                                            Секция {section.num}
                                        </div>
                                        <h3 className="font-bold text-gray-800 text-sm leading-tight">{section.title}</h3>
                                    </div>
                                </div>
                                <p className="text-gray-500 text-xs leading-relaxed">{section.description}</p>
                                <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100">
                                    <span className="text-xs text-gray-400">{section.files.length} файл{section.files.length === 1 ? '' : section.files.length < 5 ? 'а' : 'ов'}</span>
                                    <span className="text-xs font-medium text-[#003087] flex items-center gap-1 group-hover:gap-2 transition-all">
                    Открыть
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                                </div>
                            </button>
                        ))}
                    </div>
                </section>
            </div>
        </PageLayout>
    );
}
