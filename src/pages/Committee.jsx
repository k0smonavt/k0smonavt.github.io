import PageLayout from '../components/PageLayout';

const programCommittee = [
    { name: 'кто-то', title: 'кто он', org: 'уни', role: 'роль' }
];

const membersProgramCommittee = [
    { name: 'кто-то', title: 'кто он', org: 'уни' }
];

const orgCommittee = [
    { name: 'кто-то', title: 'кто он', org: 'уни', role: 'Роль' }
];

const membersOrgCommittee = [
    { name: 'кто-то', title: 'кто он', org: 'уни' }
];

function CommitteeMember({ member }) {
    return (
        <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#003087] to-[#005BBB] flex items-center justify-center text-white font-bold text-lg">
                {member.name.charAt(0)}
            </div>
            <div className="min-w-0">
                <div className="font-semibold text-gray-800 text-sm">{member.name}</div>
                {member.title && <div className="text-[#003087] text-xs mt-0.5">{member.title}</div>}
                <div className="text-gray-500 text-xs mt-0.5">{member.org}</div>
                {member.role && (
                    <span className="inline-block mt-1 bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded font-medium">
            {member.role}
          </span>
                )}
            </div>
        </div>
    );
}

export default function Committee() {
    return (
        <PageLayout
            title="Организаторы конференции"
            subtitle=""
        >
            <div className="space-y-10">
                <section>
                    <h2 className="text-xl font-bold text-[#003087] mb-5 flex items-center gap-3">
                        <span className="w-8 h-8 rounded bg-[#003087] text-white flex items-center justify-center text-sm">П</span>
                        Программный комитет
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {programCommittee.map((m, i) => (
                            <CommitteeMember key={i} member={m} />
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-[#003087] mb-5 flex items-center gap-3">
                        <span className="w-8 h-8 rounded bg-[#003087] text-white flex items-center justify-center text-sm">П</span>
                        Члены программного комитета
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {membersProgramCommittee.map((m, i) => (
                            <CommitteeMember key={i} member={m} />
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-[#003087] mb-5 flex items-center gap-3">
                        <span className="w-8 h-8 rounded bg-[#003087] text-white flex items-center justify-center text-sm">О</span>
                        Организационный комитет
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {orgCommittee.map((m, i) => (
                            <CommitteeMember key={i} member={m} />
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-[#003087] mb-5 flex items-center gap-3">
                        <span className="w-8 h-8 rounded bg-[#003087] text-white flex items-center justify-center text-sm">О</span>
                        Члены организационного комитета
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {membersOrgCommittee.map((m, i) => (
                            <CommitteeMember key={i} member={m} />
                        ))}
                    </div>
                </section>

                <section className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <h3 className="font-bold text-[#003087] mb-2">Связь с организационным комитетом</h3>
                    <p className="text-gray-600 text-sm">
                        По всем вопросам организации конференции обращайтесь по адресу:{' '}
                        <a href="mailto:irvc.eltech@mail.ru" className="text-[#003087] font-medium hover:underline">
                            IRVC.eltech@mail.ru
                        </a>
                    </p>
                </section>
            </div>
        </PageLayout>
    );
}
