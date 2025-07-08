import StaffManagementTable from "~/components/tables/staff-management-table";

const StaffManagement = () => {
    return (
        <section className="bg-white md:m-3 rounded-xl">
            <header className="mb-2 p-4">
                <h2 className="text-raven text-2xl font-medium">Staff</h2>
                <p className="text-sm text-slate-gray">
                    Manage Your Team Members and Roles
                </p>
            </header>

            <StaffManagementTable  />
        </section>
    );
};

export default StaffManagement;
