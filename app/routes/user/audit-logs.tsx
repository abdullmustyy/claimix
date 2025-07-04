import AuditLogsTable from "~/components/tables/audit-logs-table";

const AuditTrail = () => {
    return (
        <section className="bg-white md:m-3 rounded-xl">
            <header className="mb-2 p-4">
                <h2 className="text-raven text-2xl font-medium">Audit Logs</h2>
                <p className="text-sm text-slate-gray">
                    Comprehensive log of all activities and changes
                </p>
            </header>

            <AuditLogsTable />
        </section>
    );
};

export default AuditTrail;
