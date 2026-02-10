import TopNavbar from "../components/navbar/TopNavbar";
import IconSidebar from "../components/sidebar/IconSideBar";


export default function AppLayout({ children }) {
  return (
    <div className="h-screen flex flex-col">
      
      
      <TopNavbar />

      <div className="flex flex-1 overflow-hidden">
        
         <IconSidebar />
        

        
        

        
        <div className="flex flex-1">{children}</div>

      </div>
    </div>
  );
}
