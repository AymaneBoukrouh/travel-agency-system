import DashboardTable from '@/components/dashboard/Table';

const Users = () => {
  return (
    <div className="container-fluid bg-white p-5 rounded-3">
      <h3 className="mb-4">Users</h3>
      <DashboardTable
        columns = {['firstname', 'lastname', 'email']}
        column_names = {['First Name', 'Last Name', 'E-Mail']}
        data = {[
          {firstname: 'John', lastname: 'Doe', email: 'dd'}
        ]}
      />
    </div>
  )
}

export default Users;
