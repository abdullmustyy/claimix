import { Outlet } from "react-router";
import NewClaimForm from "~/components/forms/new-claim-form";

const DashboardLayout = () => {
    return (
        <main className="flex flex-col">
            <section className="bg-white h-12 flex items-center justify-end px-4 lg:px-6 border-b">
                <NewClaimForm />
            </section>

            <section className="flex-1">
                <Outlet />
            </section>
        </main>
    );
};

export default DashboardLayout;
