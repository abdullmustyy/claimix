import { Plus } from "lucide-react";
import { Link } from "react-router";
import InsuranceClaimTable from "~/components/tables/insurance-claim-table";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";

const Dashboard = () => {
    return (
        <main className="flex flex-col">
            <section className="bg-white h-12 flex items-center justify-end px-4 lg:px-6 border-b">
                <Link
                    to=""
                    className={cn(
                        buttonVariants({ variant: "default" }),
                        "h-8",
                    )}
                >
                    Add new claim
                    <Plus />
                </Link>
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
