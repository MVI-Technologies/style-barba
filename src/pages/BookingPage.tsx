import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, CheckCircle2, ChevronRight, Sparkles, Scissors, ShoppingBag, ShieldAlert } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import logoImg from "@/assets/logo.png";
import { toast } from "sonner";

// Mock Services
const SERVICES = [
  { id: "corte-classico", name: "Corte Clássico", duration: 40, price: 80, category: "corte", description: "Corte tradicional com tesoura e máquina, finalizado com pomada premium." },
  { id: "corte-degrade", name: "Corte Degradê / Fade", duration: 50, price: 90, category: "corte", description: "Degradê moderno e limpo, feito com alta precisão." },
  { id: "barba-navalha", name: "Barba com Navalha", duration: 40, price: 60, category: "barba", description: "Barboterapia completa com toalha quente, óleos essenciais e navalha." },
  { id: "barba-simples", name: "Aparar Barba", duration: 25, price: 45, category: "barba", description: "Alinhamento e ajuste rápido do tamanho da barba." },
  { id: "selante-capilar", name: "Selagem Capilar", duration: 60, price: 120, category: "tratamento", description: "Redução de frizz e alinhamento dos fios com produtos premium." },
  { id: "combo-corte-barba", name: "Combo: Corte & Barba", duration: 80, price: 130, category: "combo", description: "O pacote completo. Nosso corte clássico mais a barboterapia premium." },
];

// Mock Barbers
const BARBERS = [
  { id: "rafael", name: "Rafael Souza", role: "Master Barber & Fundador", exp: "12 anos de experiência" },
  { id: "lucas", name: "Lucas Ferreira", role: "Especialista em Barba", exp: "7 anos de experiência" },
  { id: "marcos", name: "Marcos Alves", role: "Especialista em Degradê", exp: "10 anos de experiência" },
];

const BookingPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedBarber, setSelectedBarber] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  
  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const [existingBookings, setExistingBookings] = useState<any[]>([]);

  // Load existing bookings to check conflicts
  useEffect(() => {
    const bookings = JSON.parse(localStorage.getItem("gentleman_bookings") || "[]");
    setExistingBookings(bookings);
  }, []);

  const serviceData = SERVICES.find(s => s.id === selectedService);
  const barberData = BARBERS.find(b => b.id === selectedBarber);

  // Generate 7 upcoming days starting from tomorrow
  const getUpcomingDays = () => {
    const days = [];
    const weekdays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    for (let i = 1; i <= 8; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      
      // Skip sundays unless Vilamadalena is selected or similar. Let's just allow Seg-Sab
      if (d.getDay() === 0) continue; 
      
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const date = String(d.getDate()).padStart(2, "0");
      const dateString = `${year}-${month}-${date}`;
      
      days.push({
        dateString,
        dayOfWeek: weekdays[d.getDay()],
        dayOfMonth: d.getDate(),
        month: d.toLocaleDateString("pt-BR", { month: "short" }).toUpperCase(),
      });
    }
    return days.slice(0, 6);
  };

  // Generate available time slots
  const getTimeSlots = () => {
    const slots = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];
    return slots.map(time => {
      // Check if this slot is already booked for the selected barber and date
      const isBooked = existingBookings.some(
        b => b.date === selectedDate && b.time === time && b.barberId === selectedBarber && b.status !== "cancelled"
      );
      return { time, isBooked };
    });
  };

  const handleCreateBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const newBooking = {
      id: "GENT-" + Math.floor(100000 + Math.random() * 900000),
      serviceId: selectedService,
      barberId: selectedBarber,
      date: selectedDate,
      time: selectedTime,
      customer: { name, email, phone, notes },
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    const updatedBookings = [...existingBookings, newBooking];
    localStorage.setItem("gentleman_bookings", JSON.stringify(updatedBookings));
    
    // Add simple notification to recent activity
    const activityLog = JSON.parse(localStorage.getItem("gentleman_activity") || "[]");
    const newActivity = {
      id: Math.random().toString(36).substr(2, 9),
      type: "booking_created",
      customerName: name,
      serviceName: serviceData?.name,
      time: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
      date: new Date().toLocaleDateString("pt-BR"),
    };
    localStorage.setItem("gentleman_activity", JSON.stringify([newActivity, ...activityLog]));

    toast.success("Agendamento pré-reservado com sucesso!");
    setStep(5);
  };

  // Formatting Date helper
  const formatDateLabel = (isoDate: string) => {
    if (!isoDate) return "";
    const [y, m, d] = isoDate.split("-");
    return `${d}/${m}/${y}`;
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#1a1614", color: "#f0e8d8" }}>
      {/* Header */}
      <header className="border-b border-opacity-10 py-5" style={{ borderColor: "#c9a96e", backgroundColor: "#141210" }}>
        <div className="container flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <img src={logoImg} alt="Logo" className="w-9 h-9 object-contain rounded-full" />
            <span className="font-display font-bold text-lg tracking-wide">The Gentleman's Cut</span>
          </Link>
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm transition-colors duration-200" style={{ color: "#b8a898" }} onMouseEnter={(e)=>e.currentTarget.style.color="#c9a96e"} onMouseLeave={(e)=>e.currentTarget.style.color="#b8a898"}>
            <ArrowLeft className="w-4 h-4" /> Voltar para o Site
          </Link>
        </div>
      </header>

      {/* Booking Container */}
      <main className="flex-1 container py-10 max-w-4xl flex flex-col">
        {step < 5 && (
          <div className="mb-10 text-center">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#c9a96e" }}>Agendamento Online</span>
            <h1 className="font-display font-bold text-3xl mt-2 mb-6">Reserve seu Horário</h1>
            
            {/* Steps Progress Tracker */}
            <div className="flex items-center justify-center gap-2 max-w-md mx-auto">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex items-center flex-1 last:flex-initial">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300"
                    style={{ 
                      backgroundColor: step === s ? "#c9a96e" : step > s ? "rgba(201,169,110,0.12)" : "rgba(255,255,255,0.05)",
                      color: step === s ? "#1a1614" : step > s ? "#c9a96e" : "#b8a898",
                      border: step === s ? "1px solid #c9a96e" : step > s ? "1px solid rgba(201,169,110,0.3)" : "1px solid transparent"
                    }}
                  >
                    {s}
                  </div>
                  {s < 4 && (
                    <div className="flex-1 h-0.5 mx-2 bg-opacity-20 transition-all duration-300" style={{ backgroundColor: step > s ? "#c9a96e" : "rgba(255,255,255,0.1)" }} />
                  )}
                </div>
              ))}
            </div>
            <div className="text-xs mt-3 font-semibold uppercase tracking-widest" style={{ color: "#b8a898" }}>
              {step === 1 && "Passo 1: Selecione o Serviço"}
              {step === 2 && "Passo 2: Escolha seu Barbeiro"}
              {step === 3 && "Passo 3: Data e Horário"}
              {step === 4 && "Passo 4: Seus Dados"}
            </div>
          </div>
        )}

        <div className="flex-1 flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Main Area */}
          <div className="flex-1 w-full rounded-2xl p-6 lg:p-8" style={{ backgroundColor: "#201c19", border: "1px solid rgba(201,169,110,0.14)" }}>
            
            {/* STEP 1: SERVICES */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  {SERVICES.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => {
                        setSelectedService(service.id);
                        setStep(2);
                      }}
                      className="text-left p-5 rounded-xl border border-opacity-10 transition-all duration-300 hover:scale-[1.01] flex flex-col justify-between gap-4 group"
                      style={{ 
                        backgroundColor: selectedService === service.id ? "rgba(201,169,110,0.06)" : "rgba(255,255,255,0.02)",
                        borderColor: selectedService === service.id ? "#c9a96e" : "rgba(201,169,110,0.14)"
                      }}
                    >
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-base group-hover:text-[#c9a96e] transition-colors duration-200">{service.name}</h3>
                          <span className="font-semibold font-display text-sm" style={{ color: "#c9a96e" }}>R$ {service.price}</span>
                        </div>
                        <p className="text-xs line-clamp-2" style={{ color: "#b8a898", lineHeight: 1.5 }}>{service.description}</p>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] font-semibold" style={{ color: "#b8a898" }}>
                        <Clock className="w-3.5 h-3.5 text-[#c9a96e]" /> {service.duration} minutos
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2: BARBER */}
            {step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center justify-between mb-4">
                  <button onClick={() => setStep(1)} className="inline-flex items-center gap-1.5 text-xs font-semibold" style={{ color: "#b8a898" }}>
                    <ArrowLeft className="w-3.5 h-3.5" /> Voltar aos serviços
                  </button>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  {BARBERS.map((barber) => (
                    <button
                      key={barber.id}
                      onClick={() => {
                        setSelectedBarber(barber.id);
                        setStep(3);
                      }}
                      className="text-center p-6 rounded-xl border border-opacity-10 transition-all duration-300 hover:scale-[1.02] flex flex-col items-center gap-4 group"
                      style={{ 
                        backgroundColor: selectedBarber === barber.id ? "rgba(201,169,110,0.06)" : "rgba(255,255,255,0.02)",
                        borderColor: selectedBarber === barber.id ? "#c9a96e" : "rgba(201,169,110,0.14)"
                      }}
                    >
                      <div className="w-14 h-14 rounded-full flex items-center justify-center font-display font-bold text-xl" style={{ backgroundColor: "rgba(201,169,110,0.12)", color: "#c9a96e", border: "1px solid rgba(201,169,110,0.3)" }}>
                        {barber.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <h3 className="font-semibold text-base group-hover:text-[#c9a96e] transition-colors duration-200">{barber.name}</h3>
                        <p className="text-xs mt-1" style={{ color: "#c9a96e" }}>{barber.role}</p>
                        <p className="text-[11px] mt-2" style={{ color: "#b8a898" }}>{barber.exp}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 3: DATE & TIME */}
            {step === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center justify-between">
                  <button onClick={() => setStep(2)} className="inline-flex items-center gap-1.5 text-xs font-semibold" style={{ color: "#b8a898" }}>
                    <ArrowLeft className="w-3.5 h-3.5" /> Voltar ao barbeiro
                  </button>
                </div>

                {/* Day selector */}
                <div>
                  <h3 className="text-sm font-semibold mb-3 flex items-center gap-1.5"><Calendar className="w-4 h-4 text-[#c9a96e]" /> Selecione o Dia:</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {getUpcomingDays().map((day) => (
                      <button
                        key={day.dateString}
                        onClick={() => {
                          setSelectedDate(day.dateString);
                          setSelectedTime(""); // Reset time on date change
                        }}
                        className="py-3 px-2 rounded-lg border border-opacity-10 flex flex-col items-center gap-1 transition-all duration-200"
                        style={{
                          backgroundColor: selectedDate === day.dateString ? "rgba(201,169,110,0.08)" : "rgba(255,255,255,0.01)",
                          borderColor: selectedDate === day.dateString ? "#c9a96e" : "rgba(201,169,110,0.12)"
                        }}
                      >
                        <span className="text-[10px] font-semibold" style={{ color: "#b8a898" }}>{day.dayOfWeek}</span>
                        <span className="font-display font-bold text-lg" style={{ color: selectedDate === day.dateString ? "#c9a96e" : "#f0e8d8" }}>{day.dayOfMonth}</span>
                        <span className="text-[9px] font-bold tracking-wider" style={{ color: "#c9a96e" }}>{day.month}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time selector */}
                {selectedDate && (
                  <div className="animate-fade-in pt-4 border-t border-opacity-10" style={{ borderColor: "rgba(201,169,110,0.14)" }}>
                    <h3 className="text-sm font-semibold mb-3 flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#c9a96e]" /> Horários Disponíveis:</h3>
                    <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                      {getTimeSlots().map(({ time, isBooked }) => (
                        <button
                          key={time}
                          disabled={isBooked}
                          onClick={() => {
                            setSelectedTime(time);
                            setStep(4);
                          }}
                          className="py-2.5 text-xs font-semibold rounded-lg border text-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                          style={{
                            backgroundColor: selectedTime === time ? "#c9a96e" : isBooked ? "rgba(255,255,255,0.05)" : "transparent",
                            color: selectedTime === time ? "#1a1614" : isBooked ? "#666" : "#f0e8d8",
                            borderColor: selectedTime === time ? "#c9a96e" : isBooked ? "transparent" : "rgba(201,169,110,0.22)"
                          }}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-4 text-[11px]" style={{ color: "#b8a898" }}>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded border border-opacity-30" style={{ borderColor: "#c9a96e" }} /> Disponível
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded bg-white bg-opacity-10 opacity-30" /> Ocupado
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* STEP 4: FORM */}
            {step === 4 && (
              <form onSubmit={handleCreateBooking} className="space-y-5 animate-fade-in">
                <div className="flex items-center justify-between mb-2">
                  <button type="button" onClick={() => setStep(3)} className="inline-flex items-center gap-1.5 text-xs font-semibold" style={{ color: "#b8a898" }}>
                    <ArrowLeft className="w-3.5 h-3.5" /> Voltar ao horário
                  </button>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-semibold" style={{ color: "#b8a898" }}>Nome Completo *</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: João Silva"
                      className="bg-black bg-opacity-20 border border-opacity-20 rounded-md py-2.5 px-3.5 text-sm focus:outline-none focus:border-[#c9a96e] transition-colors"
                      style={{ borderColor: "rgba(201,169,110,0.22)", color: "#f0e8d8" }}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs font-semibold" style={{ color: "#b8a898" }}>WhatsApp *</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ex: (11) 99999-9999"
                      className="bg-black bg-opacity-20 border border-opacity-20 rounded-md py-2.5 px-3.5 text-sm focus:outline-none focus:border-[#c9a96e] transition-colors"
                      style={{ borderColor: "rgba(201,169,110,0.22)", color: "#f0e8d8" }}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-semibold" style={{ color: "#b8a898" }}>E-mail corporativo / pessoal *</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="joao@exemplo.com"
                    className="bg-black bg-opacity-20 border border-opacity-20 rounded-md py-2.5 px-3.5 text-sm focus:outline-none focus:border-[#c9a96e] transition-colors"
                    style={{ borderColor: "rgba(201,169,110,0.22)", color: "#f0e8d8" }}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="notes" className="text-xs font-semibold" style={{ color: "#b8a898" }}>Preferências ou Observações (Opcional)</label>
                  <textarea
                    id="notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Ex: Prefiro café expresso, gostaria do cabelo com finalização fosca..."
                    className="bg-black bg-opacity-20 border border-opacity-20 rounded-md py-2.5 px-3.5 text-sm focus:outline-none focus:border-[#c9a96e] transition-colors resize-none"
                    style={{ borderColor: "rgba(201,169,110,0.22)", color: "#f0e8d8" }}
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-md font-semibold text-sm transition-all duration-200"
                    style={{ backgroundColor: "#c9a96e", color: "#1a1614" }}
                    onMouseEnter={(e)=>e.currentTarget.style.backgroundColor="#d4b87a"}
                    onMouseLeave={(e)=>e.currentTarget.style.backgroundColor="#c9a96e"}
                  >
                    Confirmar Agendamento
                  </button>
                </div>
              </form>
            )}

            {/* STEP 5: SUCCESS */}
            {step === 5 && (
              <div className="text-center py-6 space-y-6 animate-fade-in">
                <div className="flex justify-center">
                  <CheckCircle2 className="w-16 h-16 text-[#c9a96e] animate-bounce" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-2xl text-[#f0e8d8] mb-2">Reserva Pré-Confirmada!</h2>
                  <p className="text-sm" style={{ color: "#b8a898" }}>
                    Parabéns! Seu agendamento foi salvo no sistema.
                  </p>
                </div>

                <div className="p-5 rounded-lg text-left max-w-sm mx-auto text-xs space-y-3" style={{ backgroundColor: "rgba(0,0,0,0.2)", border: "1px solid rgba(201,169,110,0.12)" }}>
                  <div className="flex justify-between border-b border-white border-opacity-5 pb-2">
                    <span style={{ color: "#b8a898" }}>Serviço</span>
                    <span className="font-bold text-[#f0e8d8]">{serviceData?.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-white border-opacity-5 pb-2">
                    <span style={{ color: "#b8a898" }}>Barbeiro</span>
                    <span className="font-bold text-[#f0e8d8]">{barberData?.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-white border-opacity-5 pb-2">
                    <span style={{ color: "#b8a898" }}>Data</span>
                    <span className="font-bold text-[#c9a96e]">{formatDateLabel(selectedDate)}</span>
                  </div>
                  <div className="flex justify-between border-b border-white border-opacity-5 pb-2">
                    <span style={{ color: "#b8a898" }}>Horário</span>
                    <span className="font-bold text-[#c9a96e]">{selectedTime} hs</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span style={{ color: "#b8a898" }}>Total Estimado</span>
                    <span className="font-bold text-[#c9a96e] text-sm">R$ {serviceData?.price}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto pt-4">
                  <a
                    href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=Corte%20The%20Gentleman's%20Cut&dates=${selectedDate.replace(/-/g, "")}T${selectedTime.replace(/:/g, "")}00/${selectedDate.replace(/-/g, "")}T${String(Number(selectedTime.split(":")[0])+1).padStart(2,"0")}0000&details=Agendamento%20confirmado%20para%20${name}%20na%20unidade%20Premium.&location=The%20Gentleman's%20Cut`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded text-xs font-semibold transition-all duration-200 border border-opacity-30 text-[#c9a96e]"
                    style={{ borderColor: "rgba(201,169,110,0.5)" }}
                    onMouseEnter={(e)=>e.currentTarget.style.backgroundColor="rgba(201,169,110,0.08)"}
                    onMouseLeave={(e)=>e.currentTarget.style.backgroundColor="transparent"}
                  >
                    Adicionar ao Google Agenda
                  </a>
                  <button
                    onClick={() => navigate("/")}
                    className="flex-1 py-2.5 rounded text-xs font-bold transition-all duration-200"
                    style={{ backgroundColor: "#c9a96e", color: "#1a1614" }}
                    onMouseEnter={(e)=>e.currentTarget.style.backgroundColor="#d4b87a"}
                    onMouseLeave={(e)=>e.currentTarget.style.backgroundColor="#c9a96e"}
                  >
                    Voltar ao Site
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Summary Info (Only shows when service is selected) */}
          {selectedService && step < 5 && (
            <div className="w-full lg:w-80 rounded-2xl p-6 space-y-5 animate-fade-in" style={{ backgroundColor: "#201c19", border: "1px solid rgba(201,169,110,0.14)" }}>
              <h3 className="font-display font-semibold text-sm uppercase tracking-wider border-b border-opacity-10 pb-3" style={{ color: "#c9a96e", borderColor: "rgba(201,169,110,0.14)" }}>Resumo da Reserva</h3>
              <div className="space-y-3 text-xs">
                
                {/* Service */}
                <div className="flex gap-2">
                  <Scissors className="w-4 h-4 text-[#c9a96e] shrink-0" />
                  <div>
                    <span className="block font-semibold" style={{ color: "#f0e8d8" }}>{serviceData?.name}</span>
                    <span className="block text-[10px] mt-0.5" style={{ color: "#b8a898" }}>{serviceData?.duration} minutos · R$ {serviceData?.price}</span>
                  </div>
                </div>

                {/* Barber */}
                {selectedBarber && (
                  <div className="flex gap-2 animate-fade-in pt-3 border-t border-opacity-5" style={{ borderColor: "rgba(201,169,110,0.1)" }}>
                    <User className="w-4 h-4 text-[#c9a96e] shrink-0" />
                    <div>
                      <span className="block font-semibold" style={{ color: "#f0e8d8" }}>{barberData?.name}</span>
                      <span className="block text-[10px] mt-0.5" style={{ color: "#b8a898" }}>{barberData?.role}</span>
                    </div>
                  </div>
                )}

                {/* Date/Time */}
                {selectedDate && selectedTime && (
                  <div className="flex gap-2 animate-fade-in pt-3 border-t border-opacity-5" style={{ borderColor: "rgba(201,169,110,0.1)" }}>
                    <Calendar className="w-4 h-4 text-[#c9a96e] shrink-0" />
                    <div>
                      <span className="block font-semibold" style={{ color: "#f0e8d8" }}>{formatDateLabel(selectedDate)}</span>
                      <span className="block text-[10px] mt-0.5 text-[#c9a96e] font-bold">{selectedTime} hs</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Secure Notice */}
              <div className="flex gap-2 p-3 rounded-lg text-[10px]" style={{ backgroundColor: "rgba(0,0,0,0.15)", color: "#b8a898" }}>
                <ShoppingBag className="w-3.5 h-3.5 text-[#c9a96e] shrink-0" />
                <span>Pague na barbearia após o atendimento. Cancelamento grátis a qualquer momento.</span>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Mini Footer */}
      <footer className="py-6 border-t border-opacity-5 mt-auto text-center text-xs" style={{ borderColor: "#c9a96e", backgroundColor: "#100e0c", color: "#8a7d70" }}>
        <p>© 2026 The Gentleman's Cut. Todos os direitos reservados. Feito com ♠.</p>
      </footer>
    </div>
  );
};

export default BookingPage;
