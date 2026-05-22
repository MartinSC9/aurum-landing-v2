// Mock data for Aurum Team admin panel

export const clientes = [
  { id: 1, name: 'Santiago Herrera', email: 'santiago@gmail.com', phone: '+54 11 5555-1234', age: 24, plan: 'Metodo Aurum 2.0', status: 'activo', paymentStatus: 'al dia', startDate: '2026-01-15', progress: 72, city: 'Buenos Aires', occupation: 'Economista', sessions: 8 },
  { id: 2, name: 'Alfonso Gutierrez', email: 'alfonso.g@hotmail.com', phone: '+52 55 9876-5432', age: 55, plan: 'Metodo Aurum 2.0', status: 'activo', paymentStatus: 'al dia', startDate: '2025-11-01', progress: 95, city: 'Mexico DF', occupation: 'Ingeniero', sessions: 14 },
  { id: 3, name: 'Victor Ramirez', email: 'victor.r@gmail.com', phone: '+57 300 123-4567', age: 25, plan: 'Sesion 1a1', status: 'activo', paymentStatus: 'pendiente', startDate: '2026-03-10', progress: 45, city: 'Bogota', occupation: 'Abogado', sessions: 4 },
  { id: 4, name: 'Martin Lopez', email: 'martin.l@outlook.com', phone: '+34 612 345 678', age: 32, plan: 'Metodo Aurum 2.0', status: 'pausado', paymentStatus: 'vencido', startDate: '2025-09-20', progress: 60, city: 'Madrid', occupation: 'Empresario', sessions: 10 },
  { id: 5, name: 'Carlos Mendez', email: 'carlos.m@gmail.com', phone: '+54 351 555-7890', age: 38, plan: 'Sesion Diagnostico', status: 'activo', paymentStatus: 'al dia', startDate: '2026-04-01', progress: 20, city: 'Cordoba', occupation: 'Medico', sessions: 2 },
  { id: 6, name: 'Andres Villanueva', email: 'andres.v@yahoo.com', phone: '+56 9 8765 4321', age: 29, plan: 'Metodo Aurum 2.0', status: 'activo', paymentStatus: 'al dia', startDate: '2026-02-01', progress: 88, city: 'Santiago', occupation: 'Disenador', sessions: 12 },
  { id: 7, name: 'Roberto Castillo', email: 'roberto.c@gmail.com', phone: '+51 987 654 321', age: 42, plan: 'Metodo Aurum 2.0', status: 'baja', paymentStatus: 'vencido', startDate: '2025-06-15', progress: 35, city: 'Lima', occupation: 'Contador', sessions: 6 },
  { id: 8, name: 'Diego Fernandez', email: 'diego.f@icloud.com', phone: '+54 11 4444-5678', age: 31, plan: 'Sesion 1a1', status: 'activo', paymentStatus: 'al dia', startDate: '2026-05-01', progress: 15, city: 'Buenos Aires', occupation: 'Programador', sessions: 1 },
];

export const cursos = [
  {
    id: 1,
    title: 'Metodo Aurum 2.0',
    description: 'Programa completo de transformacion. 40+ horas de contenido, sesiones 1a1, salidas de campo y comunidad privada.',
    price: 997,
    status: 'publicado',
    enrolledCount: 247,
    completionRate: 78,
    revenue: 246259,
    modules: [
      { id: 1, title: 'Reprogramacion Mental', lessons: 8, duration: '6h 30m', progress: 100 },
      { id: 2, title: 'Confianza y Mentalidad de Abundancia', lessons: 6, duration: '5h', progress: 100 },
      { id: 3, title: 'Transformacion de Imagen', lessons: 7, duration: '5h 45m', progress: 85 },
      { id: 4, title: 'Lenguaje Corporal y Presencia', lessons: 5, duration: '4h', progress: 60 },
      { id: 5, title: 'Sistema de Conexion - Conversaciones', lessons: 8, duration: '7h', progress: 40 },
      { id: 6, title: 'Salidas de Campo y Practica Real', lessons: 6, duration: '12h', progress: 20 },
    ]
  },
  {
    id: 2,
    title: 'Juego de Texto y Apps de Citas',
    description: 'Domina Tinder, Bumble e Instagram. Aprende a crear perfiles irresistibles y conversaciones que generan citas reales.',
    price: 297,
    status: 'publicado',
    enrolledCount: 89,
    completionRate: 65,
    revenue: 26433,
    modules: [
      { id: 1, title: 'Perfil Irresistible', lessons: 4, duration: '3h', progress: 100 },
      { id: 2, title: 'Primeros Mensajes', lessons: 5, duration: '3h 30m', progress: 80 },
      { id: 3, title: 'Escalar a la Cita', lessons: 4, duration: '3h', progress: 50 },
    ]
  },
  {
    id: 3,
    title: 'Masterclass PNL Seduccion',
    description: 'Tecnicas avanzadas de Programacion Neurolinguistica aplicadas a la atraccion y las relaciones.',
    price: 197,
    status: 'proximamente',
    enrolledCount: 0,
    completionRate: 0,
    revenue: 0,
    modules: [
      { id: 1, title: 'Fundamentos de PNL', lessons: 5, duration: '4h', progress: 0 },
      { id: 2, title: 'Rapport Avanzado', lessons: 4, duration: '3h', progress: 0 },
      { id: 3, title: 'Patrones de Lenguaje', lessons: 6, duration: '5h', progress: 0 },
      { id: 4, title: 'Anclajes y Estado', lessons: 4, duration: '3h 30m', progress: 0 },
    ]
  },
  {
    id: 4,
    title: 'Instagram para Hombres de Alto Valor',
    description: 'Construye un perfil de Instagram que comunique estatus, estilo de vida y atraiga mujeres de alto valor de forma organica.',
    price: 147,
    status: 'borrador',
    enrolledCount: 0,
    completionRate: 0,
    revenue: 0,
    modules: [
      { id: 1, title: 'Estrategia de Perfil', lessons: 3, duration: '2h', progress: 0 },
      { id: 2, title: 'Contenido que Atrae', lessons: 4, duration: '3h', progress: 0 },
      { id: 3, title: 'DMs que Convierten', lessons: 3, duration: '2h 30m', progress: 0 },
    ]
  }
];

export const leads = [
  { id: 1, name: 'Fernando Ortiz', email: 'fernando.o@gmail.com', phone: '+54 11 3333-4444', source: 'Instagram', status: 'nuevo', interest: 'Metodo Aurum 2.0', message: 'Vi el video de YouTube y quiero saber mas sobre el programa completo.', date: '2026-05-21', notes: [] },
  { id: 2, name: 'Javier Morales', email: 'javier.m@hotmail.com', phone: '+52 55 1111-2222', source: 'YouTube', status: 'contactado', interest: 'Sesion Diagnostico', message: 'Tengo 35 anos, divorciado, necesito reinventarme.', date: '2026-05-20', notes: ['Contactado por WhatsApp, agenda para jueves'] },
  { id: 3, name: 'Ricardo Sosa', email: 'ricardo.s@gmail.com', phone: '+57 310 555-6666', source: 'Web', status: 'en negociacion', interest: 'Metodo Aurum 2.0', message: 'Me interesa pero el precio me parece alto. Hay plan de pagos?', date: '2026-05-18', notes: ['Ofrecido plan 3 cuotas', 'Pidio tiempo para pensarlo'] },
  { id: 4, name: 'Pablo Reyes', email: 'pablo.r@outlook.com', phone: '+34 678 999 888', source: 'Referido', status: 'convertido', interest: 'Metodo Aurum 2.0', message: 'Alfonso me recomendo el programa. Quiero empezar ya.', date: '2026-05-15', notes: ['Pago confirmado', 'Inicia lunes'] },
  { id: 5, name: 'Lucas Torres', email: 'lucas.t@gmail.com', phone: '+54 261 777-8888', source: 'Instagram', status: 'nuevo', interest: 'Sesion 1a1', message: 'Quiero una sesion con Daniel directamente.', date: '2026-05-22', notes: [] },
  { id: 6, name: 'Matias Vega', email: 'matias.v@yahoo.com', phone: '+56 9 1234 5678', source: 'TikTok', status: 'contactado', interest: 'Juego de Texto', message: 'Me cuesta horrores en las apps de citas. Tienen algo para eso?', date: '2026-05-19', notes: ['Enviado info del curso de apps'] },
  { id: 7, name: 'Gonzalo Paz', email: 'gonzalo.p@gmail.com', phone: '+51 945 678 123', source: 'Web', status: 'perdido', interest: 'Metodo Aurum 2.0', message: 'Me gustaria info pero no estoy seguro.', date: '2026-05-10', notes: ['No responde hace 10 dias'] },
  { id: 8, name: 'Sebastian Rivas', email: 'seba.r@gmail.com', phone: '+54 11 2222-3333', source: 'Instagram', status: 'nuevo', interest: 'Sesion Diagnostico', message: 'Tengo 28 anos, nunca tuve novia. Necesito ayuda urgente.', date: '2026-05-22', notes: [] },
];

export const reservas = [
  { id: 1, clientName: 'Santiago Herrera', type: 'Mentoria 1a1', date: '2026-05-23', time: '10:00', status: 'confirmada', coach: 'Daniel', notes: 'Seguimiento modulo 5' },
  { id: 2, clientName: 'Victor Ramirez', type: 'Sesion Diagnostico', date: '2026-05-23', time: '14:00', status: 'confirmada', coach: 'Natalia', notes: 'Primera sesion' },
  { id: 3, clientName: 'Carlos Mendez', type: 'Sesion Diagnostico', date: '2026-05-24', time: '11:00', status: 'pendiente', coach: 'Daniel', notes: '' },
  { id: 4, clientName: 'Diego Fernandez', type: 'Mentoria 1a1', date: '2026-05-24', time: '16:00', status: 'confirmada', coach: 'Daniel', notes: 'Revision de progreso apps' },
  { id: 5, clientName: 'Andres Villanueva', type: 'Salida de Campo', date: '2026-05-25', time: '20:00', status: 'confirmada', coach: 'Daniel', notes: 'Zona Palermo, grupo de 4' },
  { id: 6, clientName: 'Fernando Ortiz', type: 'Sesion Diagnostico', date: '2026-05-26', time: '10:00', status: 'pendiente', coach: 'Natalia', notes: 'Lead nuevo, primera vez' },
  { id: 7, clientName: 'Alfonso Gutierrez', type: 'Mentoria 1a1', date: '2026-05-26', time: '15:00', status: 'confirmada', coach: 'Daniel', notes: 'Sesion final del programa' },
  { id: 8, clientName: 'Martin Lopez', type: 'Seguimiento', date: '2026-05-27', time: '12:00', status: 'cancelada', coach: 'Daniel', notes: 'Reagendar - viaje de trabajo' },
];

export const transacciones = [
  { id: 1, client: 'Pablo Reyes', service: 'Metodo Aurum 2.0', amount: 997, method: 'Stripe', status: 'pagado', date: '2026-05-15' },
  { id: 2, client: 'Santiago Herrera', service: 'Sesion 1a1', amount: 99, method: 'MercadoPago', status: 'pagado', date: '2026-05-18' },
  { id: 3, client: 'Diego Fernandez', service: 'Sesion 1a1', amount: 99, method: 'PayPal', status: 'pagado', date: '2026-05-20' },
  { id: 4, client: 'Victor Ramirez', service: 'Sesion Diagnostico', amount: 0, method: '-', status: 'gratis', date: '2026-05-21' },
  { id: 5, client: 'Carlos Mendez', service: 'Sesion Diagnostico', amount: 0, method: '-', status: 'gratis', date: '2026-05-22' },
  { id: 6, client: 'Andres Villanueva', service: 'Metodo Aurum 2.0', amount: 997, method: 'Stripe', status: 'pagado', date: '2026-02-01' },
  { id: 7, client: 'Alfonso Gutierrez', service: 'Metodo Aurum 2.0', amount: 997, method: 'PayPal', status: 'pagado', date: '2025-11-01' },
  { id: 8, client: 'Martin Lopez', service: 'Metodo Aurum 2.0', amount: 997, method: 'Stripe', status: 'pendiente', date: '2025-09-20' },
];

export const blogPosts = [
  { id: 1, title: '5 errores que destruyen tu atraccion sin que lo sepas', category: 'Seduccion', status: 'publicado', date: '2026-05-10', views: 3420 },
  { id: 2, title: 'Como superar el miedo al rechazo en 30 dias', category: 'Mentalidad', status: 'publicado', date: '2026-05-05', views: 2890 },
  { id: 3, title: 'La regla de los 3 segundos: por que funciona', category: 'Seduccion', status: 'publicado', date: '2026-04-28', views: 4150 },
  { id: 4, title: 'Lenguaje corporal: lo que las mujeres notan primero', category: 'Imagen', status: 'publicado', date: '2026-04-20', views: 5200 },
  { id: 5, title: 'Tinder en 2026: guia definitiva para hombres', category: 'Apps', status: 'borrador', date: null, views: 0 },
  { id: 6, title: 'Por que los hombres exitosos tambien necesitan coaching', category: 'Mentalidad', status: 'programado', date: '2026-06-01', views: 0 },
  { id: 7, title: 'Caso de exito: de 5 anos en la friendzone a 3 citas por semana', category: 'Casos', status: 'publicado', date: '2026-04-15', views: 6800 },
];

export const ingresosMensuales = [
  { mes: 'Jun', valor: 2800 },
  { mes: 'Jul', valor: 3200 },
  { mes: 'Ago', valor: 4100 },
  { mes: 'Sep', valor: 3800 },
  { mes: 'Oct', valor: 5200 },
  { mes: 'Nov', valor: 6800 },
  { mes: 'Dic', valor: 8100 },
  { mes: 'Ene', valor: 7200 },
  { mes: 'Feb', valor: 9400 },
  { mes: 'Mar', valor: 8900 },
  { mes: 'Abr', valor: 11200 },
  { mes: 'May', valor: 12800 },
];
