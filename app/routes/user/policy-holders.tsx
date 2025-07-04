import PolicyHoldersTable from "~/components/tables/policy-holders-table";

const PolicyHolders = () => {
    return (
        <section className="bg-white md:m-3 rounded-xl">
            <header className="mb-2 p-4">
                <h2 className="text-raven text-2xl font-medium">
                    Policy Holders
                </h2>
                <p className="text-sm text-slate-gray">
                    All registered insurance policy holders
                </p>
            </header>

            <PolicyHoldersTable />
        </section>
    );
};

export default PolicyHolders;
