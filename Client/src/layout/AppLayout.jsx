import TopNavbar from "../components/navbar/TopNavbar";
import IconSidebar from "../components/sidebar/IconSideBar";
import TicketViewsSidebar from "../components/sidebar/TicketViewsSidebar";
import { LayoutProvider, useLayout } from "../context/LayoutContext";
import CreateKnowledgeDrawer from "../components/create/CreateKnowledgeDrawer";


export default function AppLayout({ children }) {
  return (
    <LayoutProvider>
      <AppLayoutInner>{children}</AppLayoutInner>
    </LayoutProvider>
  );
}

function AppLayoutInner({ children }) {
  const { isTicketViewsOpen } = useLayout();

  return (
    <div className="h-screen flex flex-col">
      
      
      <TopNavbar />

      <div className="flex flex-1 overflow-hidden">
        
         <IconSidebar />
         {isTicketViewsOpen && <TicketViewsSidebar />}
        

        
        

        
        <div className="flex flex-1">{children}</div>

      </div>
      <CreateKnowledgeDrawer />
    </div>
  );
}
