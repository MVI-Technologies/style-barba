import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Lock, Eye, EyeOff, LayoutDashboard, CalendarDays, Settings, LogOut, Search, 
  Trash2, Check, X, ShieldAlert, Sparkles, TrendingUp, Users, Clock, FileDown, PlusCircle
} from "lucide-react";
import logoImg from "@/assets/logo.png";
import { toast } from "sonner";

// Mock database seeds for simulation
const MOCK_SERVICES = {
  "corte-classico": { name: "Corte Clássico", price: 80 },
  "corte-degrade": { name: "Corte Degradê", price: 90 },
  "barba-navalha": { name: "Barba Navalha", price: 60 },
  "barba-simples": { name: "Aparar Barba", price: 45 },
  "selante-capilar": { name: "Selagem Capilar", price: 120 },
  "combo-corte-barba": { name: "Combo Corte/Barba", price: 130 },
};

const MOCK_BARBERS = {
  "rafael": "Rafael Souza",
  "lucas": "Lucas Ferreira",
  "marcos": "Marcos Alves",
};

const SEED_BOOKINGS = [
  { id: "GENT-827391", serviceId: "combo-corte-barba", barberId: "rafael", date: new Date().toISOString().split("T")[0], time: "10:00", customer: { name: "Renato Augusto", email: "renato@gmail.com", phone: "(11) 98888-7711", notes: "Prefiro toalha morna" }, status: "confirmed", createdAt: new Date().toISOString() },
  { id: "GENT-192834", serviceId: "corte-degrade", barberId: "marcos", date: new Date().toISOString().split("T")[0], time: "14:00", customer: { name: "Felipe Melo", email: "felipe@hotmail.com", phone: "(11) 97777-6622" }, status: "pending", createdAt: new Date().toISOString() },
  { id: "GENT-772819", serviceId: "barba-navalha", barberId: "lucas", date: new Date().toISOString().split("T")[0], time: "16:00", customer: { name: "Gustavo Scarpa", email: "scarpa@outlook.com", phone: "(11) 96666-5533" }, status: "pending", createdAt: new Date().toISOString() },
  { id: "GENT-448291", serviceId: "corte-classico", barberId: "rafael", date: new Date().toISOString().split("T")[0], time: "18:00", customer: { name: "Carlos Eduardo", email: "carlos@uol.com.br", phone: "(11) 95555-4422", notes: "Quer café com leite" }, status: "cancelled", createdAt: new Date().toISOString() },
];

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  // Panel state
  const [activeTab, setActiveTab] = useState<"dashboard" | "bookings" | "settings">("dashboard");
  const [bookings, setBookings] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [activityLogs, setActivityLogs] = useState<any[]>([]);
  
  // Availability configurations
  const [openingTime, setOpeningTime] = useState("09:00");
  const [closingTime, setClosingTime] = useState("20:00");
  const [blockDate, setBlockDate] = useState("");
  const [blockedDates, setBlockedDates] = useState<string[]>([]);

  // Mobile menu control
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Authenticate status check
  useEffect(() => {
    const session = localStorage.getItem("gentleman_admin_session");
    if (session === "true") {
      setIsAuthenticated(true);
    }
    
    // Load Bookings
    const localBookings = localStorage.getItem("gentleman_bookings");
    if (localBookings) {
      setBookings(JSON.parse(localBookings));
    } else {
      // Seed initial mock bookings if empty
      localStorage.setItem("gentleman_bookings", JSON.stringify(SEED_BOOKINGS));
      setBookings(SEED_BOOKINGS);
    }

    // Load activities
    const logs = JSON.parse(localStorage.getItem("gentleman_activity") || "[]");
    setActivityLogs(logs);

    // Load blocked dates
    const blocked = JSON.parse(localStorage.getItem("gentleman_blocked_dates") || "[]");
    setBlockedDates(blocked);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "admin@gentlemans.com" && password === "gentlemanadmin") {
      localStorage.setItem("gentleman_admin_session", "true");
      setIsAuthenticated(true);
      toast.success("Acesso administrativo autorizado!");
    } else {
      toast.error("E-mail ou senha incorretos.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("gentleman_admin_session");
    setIsAuthenticated(false);
    toast.success("Sessão encerrada.");
  };

  // Seed simulator
  const handleSeedData = () => {
    localStorage.setItem("gentleman_bookings", JSON.stringify(SEED_BOOKINGS));
    setBookings(SEED_BOOKINGS);
    toast.success("Agendamentos originais restaurados no painel!");
  };

  // Clear simulator
  const handleClearData = () => {
    localStorage.setItem("gentleman_bookings", JSON.stringify([]));
    setBookings([]);
    toast.warning("Todos os agendamentos foram limpos.");
  };

  // Change Booking Status
  const handleUpdateStatus = (id: string, newStatus: "confirmed" | "cancelled") => {
    const updated = bookings.map(b => {
      if (b.id === id) {
        return { ...b, status: newStatus };
      }
      return b;
    });
    setBookings(updated);
    localStorage.setItem("gentleman_bookings", JSON.stringify(updated));
    
    // Log Activity
    const target = bookings.find(b => b.id === id);
    const newLog = {
      id: Math.random().toString(36).substr(2, 9),
      type: newStatus === "confirmed" ? "booking_confirmed" : "booking_cancelled",
      customerName: target?.customer?.name,
      serviceName: MOCK_SERVICES[target?.serviceId as keyof typeof MOCK_SERVICES]?.name || "Serviço",
      time: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
      date: new Date().toLocaleDateString("pt-BR"),
    };
    const newLogs = [newLog, ...activityLogs];
    setActivityLogs(newLogs);
    localStorage.setItem("gentleman_activity", JSON.stringify(newLogs));

    toast.success(newStatus === "confirmed" ? "Agendamento confirmado!" : "Agendamento cancelado.");
  };

  // Availability setup
  const handleBlockDateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!blockDate) return;
    if (blockedDates.includes(blockDate)) {
      toast.error("Esta data já está bloqueada.");
      return;
    }
    const updated = [...blockedDates, blockDate];
    setBlockedDates(updated);
    localStorage.setItem("gentleman_blocked_dates", JSON.stringify(updated));
    setBlockDate("");
    toast.success("Data bloqueada com sucesso!");
  };

  const handleUnblockDate = (date: string) => {
    const updated = blockedDates.filter(d => d !== date);
    setBlockedDates(updated);
    localStorage.setItem("gentleman_blocked_dates", JSON.stringify(updated));
    toast.success("Data liberada.");
  };

  // CSV Export utility
  const handleExportCSV = () => {
    if (bookings.length === 0) {
      toast.error("Não há agendamentos para exportar.");
      return;
    }

    const headers = ["ID", "Cliente", "E-mail", "Telefone", "Servico", "Barbeiro", "Data", "Horario", "Status", "CadastradoEm"];
    const rows = bookings.map(b => [
      b.id,
      b.customer.name,
      b.customer.email,
      b.customer.phone,
      MOCK_SERVICES[b.serviceId as keyof typeof MOCK_SERVICES]?.name || b.serviceId,
      MOCK_BARBERS[b.barberId as keyof typeof MOCK_BARBERS] || b.barberId,
      b.date,
      b.time,
      b.status,
      b.createdAt
    ]);

    const csvContent = "data:text/csv;charset=utf-8," 
      + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `agendamentos_gentlemans_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Relatório CSV baixado com sucesso!");
  };

  // Filter Bookings logic
  const filteredBookings = bookings.filter(b => {
    const matchesSearch = b.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) || b.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" ? true : b.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Calculate KPIs
  const totalBookingsCount = bookings.length;
  const confirmedCount = bookings.filter(b => b.status === "confirmed").length;
  const pendingCount = bookings.filter(b => b.status === "pending").length;
  
  // Calculate total projected revenue (from non-cancelled bookings)
  const revenue = bookings
    .filter(b => b.status !== "cancelled")
    .reduce((sum, b) => {
      const price = MOCK_SERVICES[b.serviceId as keyof typeof MOCK_SERVICES]?.price || 0;
      return sum + price;
    }, 0);

  // Formatting Date helper
  const formatDateLabel = (isoDate: string) => {
    if (!isoDate) return "";
    const [y, m, d] = isoDate.split("-");
    return `${d}/${m}/${y}`;
  };

  if (!isAuthenticated) {
    // LOGIN RENDER
    return (
      <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: "#1a1614", color: "#f0e8d8" }}>
        <div className="w-full max-w-md p-8 rounded-2xl relative overflow-hidden" style={{ backgroundColor: "#201c19", border: "1px solid rgba(201,169,110,0.18)" }}>
          
          <div className="text-center mb-8 flex flex-col items-center">
            <Link to="/" className="inline-block mb-4">
              <img src={logoImg} alt="Logo" className="w-16 h-16 object-contain rounded-full border border-[#c9a96e] border-opacity-30" />
            </Link>
            <h1 className="font-display font-bold text-2xl">Acesso Restrito</h1>
            <p className="text-xs mt-1.5" style={{ color: "#b8a898" }}>Gentleman's Cut — Portal do Administrador</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-semibold" style={{ color: "#b8a898" }}>E-mail Administrativo</label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@gentlemans.com"
                className="bg-black bg-opacity-25 border border-opacity-20 rounded-md py-2.5 px-3.5 text-sm focus:outline-none focus:border-[#c9a96e] transition-colors"
                style={{ borderColor: "rgba(201,169,110,0.22)", color: "#f0e8d8" }}
              />
            </div>

            <div className="flex flex-col gap-1.5 relative">
              <label htmlFor="password" className="text-xs font-semibold" style={{ color: "#b8a898" }}>Senha Secreta</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-black bg-opacity-25 border border-opacity-20 rounded-md py-2.5 pl-3.5 pr-10 text-sm focus:outline-none focus:border-[#c9a96e] transition-colors"
                  style={{ borderColor: "rgba(201,169,110,0.22)", color: "#f0e8d8" }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-md font-semibold text-sm transition-all duration-200 mt-6"
              style={{ backgroundColor: "#c9a96e", color: "#1a1614" }}
            >
              <Lock className="w-4 h-4" /> Entrar no Painel
            </button>
          </form>

          {/* Seed helper note for reviewer */}
          <div className="mt-8 pt-6 border-t border-opacity-10 text-[10px] space-y-1.5" style={{ borderColor: "rgba(201,169,110,0.14)", color: "#b8a898" }}>
            <div className="flex gap-1.5 items-start">
              <ShieldAlert className="w-3.5 h-3.5 text-[#c9a96e] shrink-0" />
              <span><strong>Dica de Acesso Rápido:</strong> Use o e-mail cadastrado <code>admin@gentlemans.com</code> e a senha <code>gentlemanadmin</code> para acessar a simulação frontend em tempo real.</span>
            </div>
          </div>

        </div>
      </div>
    );
  }

  return (
    // AUTHENTICATED PANEL RENDER
    <div className="min-h-screen flex flex-col md:flex-row bg-[#141210] text-[#f0e8d8]">
      
      {/* Sidebar - Desktop Navigation */}
      <aside className={`w-full md:w-64 shrink-0 flex flex-col border-b md:border-b-0 md:border-r border-opacity-10 transition-transform duration-300 md:translate-x-0 ${isSidebarOpen ? "block" : "hidden md:flex"}`} style={{ borderColor: "rgba(201,169,110,0.14)", backgroundColor: "#1c1816" }}>
        
        {/* Brand header */}
        <div className="p-6 border-b border-opacity-5 flex items-center justify-between" style={{ borderColor: "rgba(201,169,110,0.1)" }}>
          <div className="flex items-center gap-2.5">
            <img src={logoImg} alt="Logo" className="w-9 h-9 object-contain rounded-full border border-[#c9a96e] border-opacity-30" />
            <div>
              <span className="block font-display font-bold text-sm tracking-wide">The Gentleman's</span>
              <span className="block text-[10px]" style={{ color: "#c9a96e" }}>Painel de Controle</span>
            </div>
          </div>
        </div>

        {/* Tab Items */}
        <nav className="flex-1 p-4 space-y-1">
          <button
            onClick={() => { setActiveTab("dashboard"); setIsSidebarOpen(false); }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${activeTab === "dashboard" ? "text-[#1a1614]" : "text-[#b8a898]"}`}
            style={{ backgroundColor: activeTab === "dashboard" ? "#c9a96e" : "transparent" }}
          >
            <LayoutDashboard className="w-4 h-4 shrink-0" /> Visão Geral
          </button>
          
          <button
            onClick={() => { setActiveTab("bookings"); setIsSidebarOpen(false); }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${activeTab === "bookings" ? "text-[#1a1614]" : "text-[#b8a898]"}`}
            style={{ backgroundColor: activeTab === "bookings" ? "#c9a96e" : "transparent" }}
          >
            <CalendarDays className="w-4 h-4 shrink-0" /> Agendamentos
          </button>
          
          <button
            onClick={() => { setActiveTab("settings"); setIsSidebarOpen(false); }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${activeTab === "settings" ? "text-[#1a1614]" : "text-[#b8a898]"}`}
            style={{ backgroundColor: activeTab === "settings" ? "#c9a96e" : "transparent" }}
          >
            <Settings className="w-4 h-4 shrink-0" /> Configurações
          </button>
        </nav>

        {/* Logout footer */}
        <div className="p-4 border-t border-opacity-5" style={{ borderColor: "rgba(201,169,110,0.1)" }}>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-red-400 hover:bg-red-500 hover:bg-opacity-10 transition-colors"
          >
            <LogOut className="w-4 h-4 shrink-0" /> Sair da Conta
          </button>
        </div>
      </aside>

      {/* Main panel container */}
      <main className="flex-1 flex flex-col min-w-0">
        
        {/* Header toolbar */}
        <header className="border-b border-opacity-10 px-6 py-4 flex items-center justify-between" style={{ borderColor: "rgba(201,169,110,0.14)", backgroundColor: "#1c1816" }}>
          <div>
            <h2 className="font-display font-semibold text-lg">
              {activeTab === "dashboard" && "Painel Geral"}
              {activeTab === "bookings" && "Listagem Geral de Reservas"}
              {activeTab === "settings" && "Configurações da Agenda"}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="md:hidden p-2 rounded border border-opacity-20 text-[#c9a96e]"
              style={{ borderColor: "#c9a96e" }}
            >
              Menu
            </button>
            <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded bg-[#201c19] text-xs font-semibold uppercase tracking-wider" style={{ border: "1px solid rgba(201,169,110,0.14)" }}>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Servidor Local Ativo
            </span>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="flex-1 p-6 overflow-y-auto space-y-6">
          
          {/* TAB 1: DASHBOARD */}
          {activeTab === "dashboard" && (
            <div className="space-y-6 animate-fade-in">
              
              {/* KPIs Grid */}
              <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
                
                {/* KPI 1: Projected Revenue */}
                <div className="p-5 rounded-xl border border-opacity-10" style={{ backgroundColor: "#201c19", borderColor: "rgba(201,169,110,0.14)" }}>
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#b8a898" }}>Faturamento</span>
                    <TrendingUp className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="mt-3">
                    <span className="block text-2xl font-display font-bold text-[#c9a96e]">R$ {revenue}</span>
                    <span className="block text-[10px] mt-1" style={{ color: "#b8a898" }}>Estimativa mensal bruta</span>
                  </div>
                </div>

                {/* KPI 2: Total bookings */}
                <div className="p-5 rounded-xl border border-opacity-10" style={{ backgroundColor: "#201c19", borderColor: "rgba(201,169,110,0.14)" }}>
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#b8a898" }}>Total Reservas</span>
                    <Users className="w-4 h-4 text-[#c9a96e]" />
                  </div>
                  <div className="mt-3">
                    <span className="block text-2xl font-display font-bold">{totalBookingsCount}</span>
                    <span className="block text-[10px] mt-1" style={{ color: "#b8a898" }}>Clientes registrados</span>
                  </div>
                </div>

                {/* KPI 3: Confirmed */}
                <div className="p-5 rounded-xl border border-opacity-10" style={{ backgroundColor: "#201c19", borderColor: "rgba(201,169,110,0.14)" }}>
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#b8a898" }}>Confirmados</span>
                    <Check className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="mt-3">
                    <span className="block text-2xl font-display font-bold text-green-400">{confirmedCount}</span>
                    <span className="block text-[10px] mt-1" style={{ color: "#b8a898" }}>Atendimentos garantidos</span>
                  </div>
                </div>

                {/* KPI 4: Pending */}
                <div className="p-5 rounded-xl border border-opacity-10" style={{ backgroundColor: "#201c19", borderColor: "rgba(201,169,110,0.14)" }}>
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#b8a898" }}>Aguardando</span>
                    <Clock className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div className="mt-3">
                    <span className="block text-2xl font-display font-bold text-yellow-400">{pendingCount}</span>
                    <span className="block text-[10px] mt-1" style={{ color: "#b8a898" }}>Aguardando aprovação</span>
                  </div>
                </div>

              </div>

              {/* Central Block: Activity Log & Quick actions */}
              <div className="grid gap-6 lg:grid-cols-3">
                
                {/* Simulator Controls & Quick Actions */}
                <div className="p-6 rounded-xl border border-opacity-10 space-y-5 lg:col-span-1" style={{ backgroundColor: "#201c19", borderColor: "rgba(201,169,110,0.14)" }}>
                  <h3 className="text-sm font-semibold flex items-center gap-1.5 text-[#c9a96e] border-b border-white border-opacity-5 pb-3">Controle de Testes (Simulador)</h3>
                  <p className="text-[11px] leading-relaxed" style={{ color: "#b8a898" }}>
                    Use as ferramentas rápidas abaixo para povoar a dashboard de dados fictícios ou reiniciar todo o banco local (localStorage) no seu navegador:
                  </p>
                  
                  <div className="flex flex-col gap-2 pt-2">
                    <button
                      onClick={handleSeedData}
                      className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded text-xs font-semibold transition-all duration-200"
                      style={{ backgroundColor: "rgba(201,169,110,0.1)", border: "1px solid rgba(201,169,110,0.4)", color: "#c9a96e" }}
                      onMouseEnter={(e)=>e.currentTarget.style.backgroundColor="rgba(201,169,110,0.2)"}
                      onMouseLeave={(e)=>e.currentTarget.style.backgroundColor="rgba(201,169,110,0.1)"}
                    >
                      <PlusCircle className="w-3.5 h-3.5" /> Restaurar Seeds Iniciais
                    </button>
                    
                    <button
                      onClick={handleClearData}
                      className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded text-xs font-semibold transition-colors duration-200 border border-red-500 border-opacity-40 text-red-400 hover:bg-red-500 hover:bg-opacity-10"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Limpar Banco Local
                    </button>
                  </div>
                </div>

                {/* Recent Activities log */}
                <div className="p-6 rounded-xl border border-opacity-10 space-y-4 lg:col-span-2" style={{ backgroundColor: "#201c19", borderColor: "rgba(201,169,110,0.14)" }}>
                  <h3 className="text-sm font-semibold text-[#c9a96e] border-b border-white border-opacity-5 pb-3">Atividades Recentes no Painel</h3>
                  
                  <div className="space-y-3 max-h-48 overflow-y-auto pr-2">
                    {activityLogs.length === 0 ? (
                      <div className="text-center py-8 text-xs" style={{ color: "#b8a898" }}>
                        Nenhuma atividade registrada.
                      </div>
                    ) : (
                      activityLogs.map((log) => (
                        <div key={log.id} className="flex justify-between items-start text-xs border-b border-white border-opacity-5 pb-2 last:border-0 last:pb-0">
                          <div>
                            <span className="font-semibold block">
                              {log.type === "booking_created" && `Novo agendamento criado por ${log.customerName}`}
                              {log.type === "booking_confirmed" && `Agendamento de ${log.customerName} confirmado`}
                              {log.type === "booking_cancelled" && `Agendamento de ${log.customerName} cancelado`}
                            </span>
                            <span className="block text-[10px] mt-0.5" style={{ color: "#b8a898" }}>
                              {log.serviceName}
                            </span>
                          </div>
                          <span className="text-[10px] text-[#c9a96e] whitespace-nowrap">{log.date} às {log.time}</span>
                        </div>
                      ))
                    )}
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: BOOKINGS LIST */}
          {activeTab === "bookings" && (
            <div className="space-y-6 animate-fade-in">
              
              {/* Controls bar */}
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
                <div className="flex flex-col sm:flex-row gap-2 flex-1 max-w-xl">
                  {/* Search */}
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="text"
                      placeholder="Pesquisar por cliente ou ID..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-[#201c19] border border-opacity-20 rounded-md py-2 pl-9 pr-4 text-xs focus:outline-none focus:border-[#c9a96e]"
                      style={{ borderColor: "rgba(201,169,110,0.22)" }}
                    />
                  </div>
                  
                  {/* Filter Status */}
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="bg-[#201c19] border border-opacity-20 rounded-md py-2 px-3 text-xs focus:outline-none focus:border-[#c9a96e] text-[#f0e8d8]"
                    style={{ borderColor: "rgba(201,169,110,0.22)" }}
                  >
                    <option value="all">Todos os Status</option>
                    <option value="pending">Pendentes</option>
                    <option value="confirmed">Confirmados</option>
                    <option value="cancelled">Cancelados</option>
                  </select>
                </div>

                {/* Export CSV button */}
                <button
                  onClick={handleExportCSV}
                  className="flex items-center justify-center gap-1.5 py-2 px-4 rounded text-xs font-semibold transition-all duration-200 border border-opacity-35 text-[#c9a96e]"
                  style={{ borderColor: "rgba(201,169,110,0.5)" }}
                  onMouseEnter={(e)=>e.currentTarget.style.backgroundColor="rgba(201,169,110,0.08)"}
                  onMouseLeave={(e)=>e.currentTarget.style.backgroundColor="transparent"}
                >
                  <FileDown className="w-3.5 h-3.5" /> Exportar CSV
                </button>
              </div>

              {/* Data Table */}
              <div className="overflow-x-auto rounded-xl border border-opacity-10" style={{ backgroundColor: "#201c19", borderColor: "rgba(201,169,110,0.14)" }}>
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-opacity-10 bg-[#1c1816] font-semibold text-gray-400 uppercase tracking-wider" style={{ borderColor: "rgba(201,169,110,0.14)" }}>
                      <th className="py-4 px-5">ID</th>
                      <th className="py-4 px-5">Cliente</th>
                      <th className="py-4 px-5">Serviço / Barbeiro</th>
                      <th className="py-4 px-5">Data / Horário</th>
                      <th className="py-4 px-5">Status</th>
                      <th className="py-4 px-5 text-right">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredBookings.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="text-center py-12 text-sm" style={{ color: "#b8a898" }}>
                          Nenhum agendamento encontrado para os filtros selecionados.
                        </td>
                      </tr>
                    ) : (
                      filteredBookings.map((b) => (
                        <tr key={b.id} className="border-b border-white border-opacity-5 hover:bg-white hover:bg-opacity-[0.01] transition-colors last:border-0">
                          <td className="py-4 px-5 font-mono text-[10px] text-[#c9a96e] font-semibold">{b.id}</td>
                          <td className="py-4 px-5">
                            <span className="block font-bold text-white">{b.customer.name}</span>
                            <span className="block text-[10px] mt-0.5" style={{ color: "#b8a898" }}>{b.customer.phone}</span>
                          </td>
                          <td className="py-4 px-5">
                            <span className="block font-semibold">
                              {MOCK_SERVICES[b.serviceId as keyof typeof MOCK_SERVICES]?.name || b.serviceId}
                            </span>
                            <span className="block text-[10px] mt-0.5" style={{ color: "#c9a96e" }}>
                              {MOCK_BARBERS[b.barberId as keyof typeof MOCK_BARBERS] || b.barberId}
                            </span>
                          </td>
                          <td className="py-4 px-5 font-semibold">
                            <span className="block">{formatDateLabel(b.date)}</span>
                            <span className="block text-[10px] text-[#b8a898] mt-0.5">{b.time} hs</span>
                          </td>
                          <td className="py-4 px-5">
                            {b.status === "pending" && (
                              <span className="inline-flex px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-yellow-500 bg-opacity-10 text-yellow-500 border border-yellow-500 border-opacity-20">Pendente</span>
                            )}
                            {b.status === "confirmed" && (
                              <span className="inline-flex px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-green-500 bg-opacity-10 text-green-400 border border-green-500 border-opacity-20">Confirmado</span>
                            )}
                            {b.status === "cancelled" && (
                              <span className="inline-flex px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-red-500 bg-opacity-10 text-red-400 border border-red-500 border-opacity-20">Cancelado</span>
                            )}
                          </td>
                          <td className="py-4 px-5 text-right space-x-1 whitespace-nowrap">
                            {b.status === "pending" && (
                              <button
                                onClick={() => handleUpdateStatus(b.id, "confirmed")}
                                className="p-1.5 rounded bg-green-500 bg-opacity-10 text-green-400 hover:bg-opacity-20 border border-green-500 border-opacity-10 transition-colors"
                                title="Confirmar Reserva"
                              >
                                <Check className="w-3.5 h-3.5" />
                              </button>
                            )}
                            {b.status !== "cancelled" && (
                              <button
                                onClick={() => handleUpdateStatus(b.id, "cancelled")}
                                className="p-1.5 rounded bg-red-500 bg-opacity-10 text-red-400 hover:bg-opacity-20 border border-red-500 border-opacity-10 transition-colors"
                                title="Cancelar Agendamento"
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

            </div>
          )}

          {/* TAB 3: SETTINGS TAB */}
          {activeTab === "settings" && (
            <div className="grid gap-6 md:grid-cols-2 animate-fade-in">
              
              {/* Working Hours editor */}
              <div className="p-6 rounded-xl border border-opacity-10 space-y-4" style={{ backgroundColor: "#201c19", borderColor: "rgba(201,169,110,0.14)" }}>
                <h3 className="text-sm font-semibold text-[#c9a96e] border-b border-white border-opacity-5 pb-3">Horário de Funcionamento</h3>
                
                <div className="grid gap-4 grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold" style={{ color: "#b8a898" }}>Hora de Abertura</label>
                    <input
                      type="time"
                      value={openingTime}
                      onChange={(e) => {
                        setOpeningTime(e.target.value);
                        toast.success(`Abertura atualizada para as ${e.target.value}`);
                      }}
                      className="bg-black bg-opacity-20 border border-opacity-20 rounded-md py-2.5 px-3.5 text-xs text-[#f0e8d8] focus:outline-none focus:border-[#c9a96e]"
                      style={{ borderColor: "rgba(201,169,110,0.22)" }}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold" style={{ color: "#b8a898" }}>Hora de Fechamento</label>
                    <input
                      type="time"
                      value={closingTime}
                      onChange={(e) => {
                        setClosingTime(e.target.value);
                        toast.success(`Fechamento atualizado para as ${e.target.value}`);
                      }}
                      className="bg-black bg-opacity-20 border border-opacity-20 rounded-md py-2.5 px-3.5 text-xs text-[#f0e8d8] focus:outline-none focus:border-[#c9a96e]"
                      style={{ borderColor: "rgba(201,169,110,0.22)" }}
                    />
                  </div>
                </div>
                <div className="pt-2 text-[10px] space-y-1" style={{ color: "#b8a898" }}>
                  <p>• As faixas de slots gerados dinamicamente no assistente público se basearão nos horários salvos.</p>
                  <p>• Recomendamos trabalhar com intervalos fechados de 1 hora.</p>
                </div>
              </div>

              {/* Block Dates manager */}
              <div className="p-6 rounded-xl border border-opacity-10 space-y-5" style={{ backgroundColor: "#201c19", borderColor: "rgba(201,169,110,0.14)" }}>
                <h3 className="text-sm font-semibold text-[#c9a96e] border-b border-white border-opacity-5 pb-3">Bloqueio de Folgas e Feriados</h3>
                
                <form onSubmit={handleBlockDateSubmit} className="flex gap-2">
                  <input
                    type="date"
                    required
                    value={blockDate}
                    onChange={(e) => setBlockDate(e.target.value)}
                    className="bg-black bg-opacity-20 border border-opacity-20 rounded-md py-2 px-3 text-xs text-[#f0e8d8] focus:outline-none focus:border-[#c9a96e] flex-1"
                    style={{ borderColor: "rgba(201,169,110,0.22)" }}
                  />
                  <button
                    type="submit"
                    className="py-2 px-4 bg-[#c9a96e] text-[#1a1614] rounded text-xs font-semibold hover:bg-[#d4b87a] transition-colors"
                  >
                    Bloquear Data
                  </button>
                </form>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider" style={{ color: "#b8a898" }}>Datas Bloqueadas Ativas:</h4>
                  {blockedDates.length === 0 ? (
                    <p className="text-[11px] italic" style={{ color: "#8a7d70" }}>Nenhuma data bloqueada cadastrada.</p>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {blockedDates.map((date) => (
                        <div key={date} className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-black bg-opacity-35 border border-opacity-15 text-xs text-[#f0e8d8]" style={{ borderColor: "rgba(201,169,110,0.2)" }}>
                          <span>{formatDateLabel(date)}</span>
                          <button
                            onClick={() => handleUnblockDate(date)}
                            className="text-red-400 hover:text-red-500 transition-colors"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

            </div>
          )}

        </div>

      </main>

    </div>
  );
};

export default AdminPage;
