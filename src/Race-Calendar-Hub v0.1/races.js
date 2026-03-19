const races = [
  // =============================================
  // FORMULA 1 — 2026
  // =============================================
  { series: "F1", race: "Australian Grand Prix", circuit: "MELBOURNE", date: "2026-03-08", flag: "🇦🇺" },
  { series: "F1", race: "Chinese Grand Prix", circuit: "SHANGHAI", date: "2026-03-15", flag: "🇨🇳" },
  { series: "F1", race: "Japanese Grand Prix", circuit: "SUZUKA", date: "2026-03-29", flag: "🇯🇵" },
  { series: "F1", race: "Bahrain Grand Prix", circuit: "SAKHIR", date: "2026-04-12", flag: "🇧🇭" },
  { series: "F1", race: "Saudi Arabian Grand Prix", circuit: "JEDDAH", date: "2026-04-19", flag: "🇸🇦" },
  { series: "F1", race: "Miami Grand Prix", circuit: "MIAMI", date: "2026-05-03", flag: "🇺🇸" },
  { series: "F1", race: "Canadian Grand Prix", circuit: "MONTREAL", date: "2026-05-24", flag: "🇨🇦" },
  { series: "F1", race: "Monaco Grand Prix", circuit: "MONACO", date: "2026-06-07", flag: "🇲🇨" },
  { series: "F1", race: "Barcelona-Catalunya Grand Prix", circuit: "BARCELONA-CATALUNYA", date: "2026-06-14", flag: "🇪🇸" },
  { series: "F1", race: "Austrian Grand Prix", circuit: "SPIELBERG", date: "2026-06-28", flag: "🇦🇹" },
  { series: "F1", race: "British Grand Prix", circuit: "SILVERSTONE", date: "2026-07-05", flag: "🇬🇧" },
  { series: "F1", race: "Belgian Grand Prix", circuit: "SPA-FRANCORCHAMPS", date: "2026-07-19", flag: "🇧🇪" },
  { series: "F1", race: "Hungarian Grand Prix", circuit: "BUDAPEST", date: "2026-07-26", flag: "🇭🇺" },
  { series: "F1", race: "Dutch Grand Prix", circuit: "ZANDVOORT", date: "2026-08-23", flag: "🇳🇱" },
  { series: "F1", race: "Italian Grand Prix", circuit: "MONZA", date: "2026-09-06", flag: "🇮🇹" },
  { series: "F1", race: "Spanish Grand Prix", circuit: "MADRID", date: "2026-09-13", flag: "🇪🇸" },
  { series: "F1", race: "Azerbaijan Grand Prix", circuit: "BAKU", date: "2026-09-26", flag: "🇦🇿" },
  { series: "F1", race: "Singapore Grand Prix", circuit: "SINGAPORE", date: "2026-10-11", flag: "🇸🇬" },
  { series: "F1", race: "United States Grand Prix", circuit: "COTA", date: "2026-10-25", flag: "🇺🇸" },
  { series: "F1", race: "Mexico City Grand Prix", circuit: "MEXICO CITY", date: "2026-11-01", flag: "🇲🇽" },
  { series: "F1", race: "São Paulo Grand Prix", circuit: "INTERLAGOS", date: "2026-11-08", flag: "🇧🇷" },
  { series: "F1", race: "Las Vegas Grand Prix", circuit: "LAS VEGAS", date: "2026-11-21", flag: "🇺🇸" },
  { series: "F1", race: "Qatar Grand Prix", circuit: "LUSAIL", date: "2026-11-29", flag: "🇶🇦" },
  { series: "F1", race: "Abu Dhabi Grand Prix", circuit: "YAS MARINA", date: "2026-12-06", flag: "🇦🇪" },

  // =============================================
  // MOTOGP — 2026
  // =============================================
  { series: "MotoGP", race: "Thai Grand Prix", circuit: "BURIRAM", date: "2026-03-01", flag: "🇹🇭" },
  { series: "MotoGP", race: "Brazilian Grand Prix", circuit: "GOIANIA", date: "2026-03-22", flag: "🇧🇷" },
  { series: "MotoGP", race: "Americas Grand Prix", circuit: "AUSTIN", date: "2026-03-29", flag: "🇺🇸" },
  { series: "MotoGP", race: "Qatar Grand Prix", circuit: "LUSAIL", date: "2026-04-12", flag: "🇶🇦" },
  { series: "MotoGP", race: "Spanish Grand Prix", circuit: "JEREZ", date: "2026-04-26", flag: "🇪🇸" },
  { series: "MotoGP", race: "French Grand Prix", circuit: "LE MANS", date: "2026-05-10", flag: "🇫🇷" },
  { series: "MotoGP", race: "Catalan Grand Prix", circuit: "BARCELONA", date: "2026-05-17", flag: "🇪🇸" },
  { series: "MotoGP", race: "Italian Grand Prix", circuit: "MUGELLO", date: "2026-05-31", flag: "🇮🇹" },
  { series: "MotoGP", race: "Hungarian Grand Prix", circuit: "BALATON PARK", date: "2026-06-07", flag: "🇭🇺" },
  { series: "MotoGP", race: "Czech Grand Prix", circuit: "BRNO", date: "2026-06-21", flag: "🇨🇿" },
  { series: "MotoGP", race: "Dutch Grand Prix", circuit: "ASSEN", date: "2026-06-28", flag: "🇳🇱" },
  { series: "MotoGP", race: "German Grand Prix", circuit: "SACHSENRING", date: "2026-07-12", flag: "🇩🇪" },
  { series: "MotoGP", race: "British Grand Prix", circuit: "SILVERSTONE", date: "2026-08-09", flag: "🇬🇧" },
  { series: "MotoGP", race: "Aragon Grand Prix", circuit: "MOTORLAND ARAGON", date: "2026-08-30", flag: "🇪🇸" },
  { series: "MotoGP", race: "San Marino Grand Prix", circuit: "MISANO", date: "2026-09-13", flag: "🇸🇲" },
  { series: "MotoGP", race: "Austrian Grand Prix", circuit: "SPIELBERG", date: "2026-09-20", flag: "🇦🇹" },
  { series: "MotoGP", race: "Japanese Grand Prix", circuit: "MOTEGI", date: "2026-10-04", flag: "🇯🇵" },
  { series: "MotoGP", race: "Indonesian Grand Prix", circuit: "MANDALIKA", date: "2026-10-11", flag: "🇮🇩" },
  { series: "MotoGP", race: "Australian Grand Prix", circuit: "PHILLIP ISLAND", date: "2026-10-25", flag: "🇦🇺" },
  { series: "MotoGP", race: "Malaysian Grand Prix", circuit: "SEPANG", date: "2026-11-01", flag: "🇲🇾" },
  { series: "MotoGP", race: "Portuguese Grand Prix", circuit: "PORTIMAO", date: "2026-11-15", flag: "🇵🇹" },
  { series: "MotoGP", race: "Valencian Grand Prix", circuit: "CHESTE", date: "2026-11-22", flag: "🇪🇸" },

  // =============================================
  // WORLD SUPERBIKE — 2026
  // =============================================
  { series: "WSBK", race: "Australian Round", circuit: "PHILLIP ISLAND", date: "2026-02-22", flag: "🇦🇺" },
  { series: "WSBK", race: "Portuguese Round", circuit: "PORTIMAO", date: "2026-03-29", flag: "🇵🇹" },
  { series: "WSBK", race: "Dutch Round", circuit: "ASSEN", date: "2026-04-19", flag: "🇳🇱" },
  { series: "WSBK", race: "Hungarian Round", circuit: "BALATON PARK", date: "2026-05-03", flag: "🇭🇺" },
  { series: "WSBK", race: "Czech Round", circuit: "MOST", date: "2026-05-17", flag: "🇨🇿" },
  { series: "WSBK", race: "Aragon Round", circuit: "MOTORLAND ARAGON", date: "2026-05-31", flag: "🇪🇸" },
  { series: "WSBK", race: "Emilia-Romagna Round", circuit: "MISANO", date: "2026-06-14", flag: "🇮🇹" },
  { series: "WSBK", race: "UK Round", circuit: "DONINGTON PARK", date: "2026-07-12", flag: "🇬🇧" },
  { series: "WSBK", race: "French Round", circuit: "MAGNY-COURS", date: "2026-09-06", flag: "🇫🇷" },
  { series: "WSBK", race: "Italian Round", circuit: "CREMONA", date: "2026-09-27", flag: "🇮🇹" },
  { series: "WSBK", race: "Estoril Round", circuit: "ESTORIL", date: "2026-10-11", flag: "🇵🇹" },
  { series: "WSBK", race: "Spanish Round", circuit: "JEREZ", date: "2026-10-18", flag: "🇪🇸" },

  // =============================================
  // ISLE OF MAN TT — 2026
  // =============================================
  { series: "IOMTT", race: "Practice Day 1", circuit: "SNAEFELL MOUNTAIN", date: "2026-05-25", flag: "🇮🇲" },
  { series: "IOMTT", race: "Practice Day 2", circuit: "SNAEFELL MOUNTAIN", date: "2026-05-26", flag: "🇮🇲" },
  { series: "IOMTT", race: "Practice Day 3", circuit: "SNAEFELL MOUNTAIN", date: "2026-05-27", flag: "🇮🇲" },
  { series: "IOMTT", race: "Practice Day 4", circuit: "SNAEFELL MOUNTAIN", date: "2026-05-28", flag: "🇮🇲" },
  { series: "IOMTT", race: "Practice Day 5", circuit: "SNAEFELL MOUNTAIN", date: "2026-05-29", flag: "🇮🇲" },
  { series: "IOMTT", race: "Race Day 1",     circuit: "SNAEFELL MOUNTAIN", date: "2026-05-30", flag: "🇮🇲" },
  { series: "IOMTT", race: "Race Day 2",     circuit: "SNAEFELL MOUNTAIN", date: "2026-05-31", flag: "🇮🇲" },
  { series: "IOMTT", race: "Race Day 3",     circuit: "SNAEFELL MOUNTAIN", date: "2026-06-01", flag: "🇮🇲" },
  { series: "IOMTT", race: "Race Day 4",     circuit: "SNAEFELL MOUNTAIN", date: "2026-06-03", flag: "🇮🇲" },
  { series: "IOMTT", race: "Race Day 5",     circuit: "SNAEFELL MOUNTAIN", date: "2026-06-05", flag: "🇮🇲" },
  { series: "IOMTT", race: "Senior TT",      circuit: "SNAEFELL MOUNTAIN", date: "2026-06-06", flag: "🇮🇲" },

  // =============================================
  // BRITISH SUPERBIKE — 2026
  // =============================================
  { series: "BSB", race: "Round 1",  circuit: "OULTON PARK",   date: "2026-05-04", flag: "🇬🇧" },
  { series: "BSB", race: "Round 2",  circuit: "DONINGTON PARK", date: "2026-05-17", flag: "🇬🇧" },
  { series: "BSB", race: "Round 3",  circuit: "KNOCKHILL",      date: "2026-06-21", flag: "🇬🇧" },
  { series: "BSB", race: "Round 4",  circuit: "SNETTERTON",     date: "2026-07-05", flag: "🇬🇧" },
  { series: "BSB", race: "Round 5",  circuit: "BRANDS HATCH",   date: "2026-07-19", flag: "🇬🇧" },
  { series: "BSB", race: "Round 6",  circuit: "OULTON PARK",    date: "2026-08-02", flag: "🇬🇧" },
  { series: "BSB", race: "Round 7",  circuit: "THRUXTON",       date: "2026-08-16", flag: "🇬🇧" },
  { series: "BSB", race: "Round 8",  circuit: "CADWELL PARK",   date: "2026-08-31", flag: "🇬🇧" },
  { series: "BSB", race: "Round 9",  circuit: "ASSEN",          date: "2026-09-20", flag: "🇳🇱" },
  { series: "BSB", race: "Round 10", circuit: "DONINGTON PARK", date: "2026-10-04", flag: "🇬🇧" },
  { series: "BSB", race: "Round 11", circuit: "BRANDS HATCH",   date: "2026-10-18", flag: "🇬🇧" },
];
