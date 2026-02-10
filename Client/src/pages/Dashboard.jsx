import { useState } from "react";
import TicketList from "../components/tickets/TicketList";
import TicketDetails from "../components/ticketDetails/TicketDetails";
import RightSidebar from "../components/ticketDetails/RightSidebar";


export default function Dashboard() {

  const [selectedTicket, setSelectedTicket] = useState(null);
  const [filters, setFilters] = useState({
    search: "",
    date: "All Dates",
    reporter: "All Reporters",
    assignedTo: "All Assignees",
    priority: "All Priorities",
    project: "All Projects"
  });

  const tickets = [
    {
      id: 1,
      title: "Laudantium neque veritatis",
      code: "OPS-102",
      date: "Jun 2",
      reporter: "Danny Amacher",
      assignedTo: "Allie Harmon",
      priority: "Medium",
      project: "Administrative"
    },
    {
      id: 2,
      title: "Molestiae saepe illum",
      code: "APPS-216",
      date: "Jun 1",
      reporter: "Allie Harmon",
      assignedTo: "Danny Amacher",
      priority: "High",
      project: "Capacity"
    },
    {
      id: 3,
      title: "Dignissimos maiores porro",
      code: "APPS-216",
      date: "May 31",
      reporter: "Allie Harmon",
      assignedTo: "Allie Harmon",
      priority: "Low",
      project: "Capacity"
    },
    {
      id: 4,
      title: "Aspernatur cumque ipsum",
      code: "APPS-216",
      date: "May 30",
      reporter: "Danny Amacher",
      assignedTo: "Allie Harmon",
      priority: "Medium",
      project: "Billing"
    },
    {
      id: 5,
      title: "Culpa quos aliquam",
      code: "OPS-114",
      date: "May 29",
      reporter: "Priya Singh",
      assignedTo: "Danny Amacher",
      priority: "High",
      project: "Administrative"
    }
  ];

  const filterOptions = {
    date: ["All Dates", ...new Set(tickets.map(t => t.date))],
    reporter: ["All Reporters", ...new Set(tickets.map(t => t.reporter))],
    assignedTo: ["All Assignees", ...new Set(tickets.map(t => t.assignedTo))],
    priority: ["All Priorities", ...new Set(tickets.map(t => t.priority))],
    project: ["All Projects", ...new Set(tickets.map(t => t.project))]
  };

  const filteredTickets = tickets.filter(t => {
    const matchesSearch =
      !filters.search ||
      t.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      t.code.toLowerCase().includes(filters.search.toLowerCase());

    const matchesDate = filters.date === "All Dates" || t.date === filters.date;
    const matchesReporter =
      filters.reporter === "All Reporters" || t.reporter === filters.reporter;
    const matchesAssigned =
      filters.assignedTo === "All Assignees" || t.assignedTo === filters.assignedTo;
    const matchesPriority =
      filters.priority === "All Priorities" || t.priority === filters.priority;
    const matchesProject =
      filters.project === "All Projects" || t.project === filters.project;

    return (
      matchesSearch &&
      matchesDate &&
      matchesReporter &&
      matchesAssigned &&
      matchesPriority &&
      matchesProject
    );
  });

  return (
    <div className="flex flex-1">

    

      <TicketList
        tickets={filteredTickets}
        selectedTicket={selectedTicket}
        setSelectedTicket={setSelectedTicket}
        filters={filters}
        setFilters={setFilters}
        filterOptions={filterOptions}
      />

      <TicketDetails ticket={selectedTicket} />
      <RightSidebar />

    </div>
  );
}
