import InsuranceClaimTable from "~/components/tables/insurance-claim-table";

const Dashboard = () => {
    return (
        <section className="bg-white md:m-3 rounded-xl">
            <header className="mb-2 p-4">
                <h2 className="text-raven text-2xl font-medium">
                    Insurance Claim
                </h2>
                <p className="text-sm text-slate-gray">
                    Track, manage, and resolve all submitted claims efficiently
                </p>
            </header>

            <InsuranceClaimTable />
        </section>
    );
};

export default Dashboard;
