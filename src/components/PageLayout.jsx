export default function PageLayout({ title, subtitle, children }) {
    return (
        <div className="flex-1">
            <div className="bg-gradient-to-r from-[#003087] to-[#005BBB] text-white py-10 px-4">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-2xl md:text-3xl font-bold mb-1">{title}</h1>
                    {subtitle && (
                        <p className="text-blue-200 text-sm md:text-base">{subtitle}</p>
                    )}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                {children}
            </div>
        </div>
    );
}
