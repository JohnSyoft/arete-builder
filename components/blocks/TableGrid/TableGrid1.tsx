export const TableGrid1 = () => {
  return (
    <div className="bg-background py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Data Overview</h2>
          <p className="text-muted-foreground">Comprehensive data table with sorting and filtering capabilities</p>
        </div>

        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Role</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
                  { name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active" },
                  { name: "Bob Johnson", email: "bob@example.com", role: "Editor", status: "Inactive" },
                  { name: "Alice Brown", email: "alice@example.com", role: "User", status: "Active" },
                ].map((user, index) => (
                  <tr key={index} className="hover:bg-muted/50">
                    <td className="px-6 py-4 text-sm text-foreground">{user.name}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{user.email}</td>
                    <td className="px-6 py-4 text-sm text-foreground">{user.role}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                          user.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
                        <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
