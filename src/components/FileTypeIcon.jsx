const config = {
    pdf:  { bg: 'bg-red-100',    text: 'text-red-700',    border: 'border-red-200',    label: 'PDF'  },
    docx: { bg: 'bg-blue-100',   text: 'text-blue-700',   border: 'border-blue-200',   label: 'DOCX' },
    xlsx: { bg: 'bg-green-100',  text: 'text-green-700',  border: 'border-green-200',  label: 'XLSX' },
    txt:  { bg: 'bg-gray-100',   text: 'text-gray-700',   border: 'border-gray-200',   label: 'TXT' },
    pptx: { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-200', label: 'PPTX' },
};

const sizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-xs',
    lg: 'w-14 h-14 text-sm',
};

export default function FileTypeIcon({ type, size = 'md' }) {
    const c = config[type];
    return (
        <div
            className={`${sizes[size]} ${c.bg} ${c.text} ${c.border} border rounded-lg flex items-center justify-center font-bold shrink-0`}
            title={c.label}
        >
            {c.label}
        </div>
    );
}