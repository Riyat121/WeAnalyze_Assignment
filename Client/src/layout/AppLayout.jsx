import TopNavbar from "../components/navbar/TopNavbar";
import IconsSidebar from "../components/sidebar/IconsSidebar";


export default function AppLayout({ children }) {
  return (
    <div className="h-screen flex flex-col">
      
      
      <TopNavbar />

      <div className="flex flex-1 overflow-hidden">
        
         <IconsSidebar />
        

        
        

        
        <div className="flex flex-1">{children}</div>

      </div>
    </div>
  );
}
