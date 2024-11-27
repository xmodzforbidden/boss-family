import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Dashboard = () => {
  const navigate = useNavigate();

  // Mock data - in a real app, this would come from your backend
  const registeredUsers = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Active" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", status: "Inactive" },
  ];

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button 
          onClick={handleLogout}
          className="hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
        >
          Logout
        </Button>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Registered Users</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {registeredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass p-6">
          <h3 className="text-lg font-semibold mb-2">Total Users</h3>
          <p className="text-3xl font-bold">{registeredUsers.length}</p>
        </div>
        <div className="glass p-6">
          <h3 className="text-lg font-semibold mb-2">Active Users</h3>
          <p className="text-3xl font-bold">
            {registeredUsers.filter(u => u.status === "Active").length}
          </p>
        </div>
        <div className="glass p-6">
          <h3 className="text-lg font-semibold mb-2">Inactive Users</h3>
          <p className="text-3xl font-bold">
            {registeredUsers.filter(u => u.status === "Inactive").length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;