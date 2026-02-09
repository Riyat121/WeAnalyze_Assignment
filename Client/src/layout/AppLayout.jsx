import TopNavbar from "../components/navbar/TopNavbar";
import IconSidebar from "../components/sidebar/IconSidebar";
import TicketViewsSidebar from "../components/sidebar/TicketViewsSidebar";

export default function AppLayout({ children }) {
  return (
    <div className="h-screen flex flex-col">
      
      {/* Top Navbar */}
      <TopNavbar />

      <div className="flex flex-1 overflow-hidden">
        
        {/* Left Icon Sidebar */}
        <IconSidebar />

        {/* Ticket Views Sidebar */}
        <TicketViewsSidebar />

        {/* Main Content */}
        <div className="flex flex-1">{children}</div>

      </div>
    </div>
  );
}
