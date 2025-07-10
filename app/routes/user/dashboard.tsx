import NewClaimForm from "~/components/forms/new-claim-form";
import InsuranceClaimTable from "~/components/tables/insurance-claim-table";

const Dashboard = () => {
    return (
        <main className="flex flex-col">
            <section className="bg-white h-12 flex items-center justify-end px-4 lg:px-6 border-b">
                <NewClaimForm />
            </section>

            <section className="bg-white md:m-3 rounded-xl">
                <header className="mb-2 p-4">
                    <h2 className="text-raven text-2xl font-medium">
                        Insurance Claim
                    </h2>
                    <p className="text-sm text-slate-gray">
                        Track, manage, and resolve all submitted claims
                        efficiently
                    </p>
                </header>

                <InsuranceClaimTable />
            </section>
        </main>
    );
};

export default Dashboard;
