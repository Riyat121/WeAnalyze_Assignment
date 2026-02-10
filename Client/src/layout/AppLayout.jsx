import TopNavbar from "../components/navbar/TopNavbar";



export default function AppLayout({ children }) {
  return (
    <div className="h-screen flex flex-col">
      
      
      <TopNavbar />

      <div className="flex flex-1 overflow-hidden">
        
      
        

        
        

        
        <div className="flex flex-1">{children}</div>

      </div>
    </div>
  );
}
