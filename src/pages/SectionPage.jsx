import { useParams, useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import FileTypeIcon from '../components/FileTypeIcon';
import { sections } from '../data/papersData';

export default function SectionPage() {
    const { sectionId } = useParams();
    const navigate = useNavigate();

    const section = sections.find((s) => s.id === sectionId);

    if (!section) {
        return (
            <PageLayout title="Секция не найдена" backTo="/" backLabel="К архиву докладов">
                <div className="text-center py-20 text-gray-500">
                    <div className="text-5xl mb-4">🔎</div>
                    <p className="text-lg font-medium">Секция не найдена</p>
                    <p className="text-sm mt-2">Проверьте адрес страницы или вернитесь назад.</p>
                </div>
            </PageLayout>
        );
    }

    const canOpen = (url) => url && url !== '#';

    const handleOpen = (url, type) => {
        if (!url || url === '#') {
            alert('Файл временно недоступен. Пожалуйста, обратитесь к организаторам.');
            return;
        }

        const pdfTypes = ['pdf'];

        if (pdfTypes.includes(type)) {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    };

    const handleDownload = (url, name) => {
        if (!url || url === '#') {
            alert('Файл временно недоступен. Пожалуйста, обратитесь к организаторам.');
            return;
        }
        const link = document.createElement('a');
        link.href = url;
        link.download = name;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <PageLayout
            title={`Секция ${section.num}: ${section.title}`}
            subtitle={section.description}
            backTo="/"
            backLabel="К архиву докладов"
        >
            <div className="space-y-6">

                <div className="bg-gradient-to-r from-[#003087] to-blue-700 text-white rounded-2xl p-6 flex items-center gap-5 shadow-md">
                    <div>
                        <div className="text-blue-200 text-xs font-semibold uppercase tracking-wider mb-1">
                            Секция {section.num}
                        </div>
                        <h2 className="text-xl font-bold">{section.title}</h2>
                    </div>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs text-gray-500 mr-1">Другие секции:</span>
                    {sections.map((s) => (
                        <button
                            key={s.id}
                            onClick={() => navigate(`/section/${s.id}`)}
                            className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all ${
                                s.id === section.id
                                    ? 'bg-[#003087] text-white shadow'
                                    : 'bg-white border border-gray-200 text-gray-600 hover:border-[#003087] hover:text-[#003087]'
                            }`}
                        >
                            {s.num}. {s.title}
                        </button>
                    ))}
                </div>

                <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <span>Файлы секции</span>
                        <span className="bg-blue-100 text-[#003087] text-xs font-bold px-2.5 py-0.5 rounded-full">
              {section.files.length}
            </span>
                    </h3>

                    <div className="space-y-3">
                        {section.files.map((file, idx) => (
                            <div
                                key={idx}
                                className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4"
                            >
                                <FileTypeIcon type={file.type} size="lg" />

                                <div className="flex-1 min-w-0">
                                    <h4 className="font-semibold text-gray-800 text-sm leading-snug mb-0.5 truncate">
                                        {file.name}
                                    </h4>
                                    {file.description && (
                                        <p className="text-gray-500 text-xs leading-relaxed">{file.description}</p>
                                    )}
                                    <div className="flex items-center gap-3 mt-1.5">
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                        {file.size}
                    </span>
                                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded font-mono uppercase">
                      .{file.type}
                    </span>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-2 shrink-0">
                                    {canOpen(file.url) && (
                                        <div className="flex flex-col items-center gap-0.5">
                                            <button
                                                onClick={() => handleOpen(file.url, file.type)}
                                                className="flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-[#003087] text-xs font-medium px-3 py-2 rounded-lg hover:bg-blue-100 transition-colors whitespace-nowrap"
                                            >
                                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                                Открыть
                                            </button>
                                            {file.type === 'pdf' && (
                                                <span className="text-[10px] text-gray-400 whitespace-nowrap">в браузере</span>
                                            )}
                                        </div>
                                    )}
                                    <button
                                        onClick={() => handleDownload(file.url, file.name)}
                                        className="flex items-center gap-1.5 bg-[#003087] text-white text-xs font-medium px-3 py-2 rounded-lg hover:bg-blue-800 transition-colors whitespace-nowrap"
                                    >
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                        Скачать
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                    <button
                        onClick={() => navigate('/papers')}
                        className="flex items-center gap-2 text-sm font-medium text-[#003087] hover:underline transition"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Вернуться к архиву докладов
                    </button>
                </div>

            </div>
        </PageLayout>
    );
}