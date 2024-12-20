export default function DashboardLayout({ children }) {
    return (
      <div>
        <aside>Sidebar</aside>
        <section>{children}</section>
      </div>
    );
  }
  