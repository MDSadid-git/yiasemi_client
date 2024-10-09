import useAdmin from "../../../Hooks/useAdmin";

const AdminHome = () => {
  const [isAdmin, isAdminPending, refetch, user] = useAdmin();
  return (
    <div>
      <div>
        <h2 className="text-lg font-semibold">
          Hi Welcome {useAdmin ? user.userName : "Back"}
        </h2>
      </div>
    </div>
  );
};

export default AdminHome;
