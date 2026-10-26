export type MachineCategory = 'all' | 'vmc' | 'turning' | 'four-axis';

export interface MachineSpecItem {
  label: string;
  value: string;
  status: 'confirmed' | 'tbc'; // confirmed or to be confirmed
  note?: string;
}

export interface Machine {
  id: string;
  name: string;
  manufacturer: string;
  model: string;
  category: 'VMC' | 'CNC Turning' | '4-Axis VMC';
  categoryKey: 'vmc' | 'turning' | 'four-axis';
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  imageCaption: string;
  badge: string;
  isFourAxisCapable: boolean;
  specifications: MachineSpecItem[];
  supportedOperations: string[];
  idealWorkpieces: string[];
}

export const machineCategories = [
  { key: 'all', label: 'All Equipment' },
  { key: 'vmc', label: 'Vertical Machining Centers (VMC)' },
  { key: 'turning', label: 'CNC Turning Centers' },
  { key: 'four-axis', label: '4-Axis Machining' },
] as const;

export const machinesData: Machine[] = [
  {
    id: 'ace-micromatic-850v',
    name: 'ACE Micromatic 850V VMC',
    manufacturer: 'Ace Manufacturing Systems (Ace Micromatic Group)',
    model: '850V',
    category: '4-Axis VMC',
    categoryKey: 'four-axis',
    tagline: 'High-rigidity vertical machining center configured for 4-axis multi-face milling',
    shortDescription:
      'Engineered for precision prismatic components, featuring 800 mm X-travel and a 200 mm 4th-axis rotary table for complex angular operations.',
    fullDescription:
      'The ACE Micromatic 850V is a cornerstone of our milling line, offering rigid structure and dependable repeatability for both batch manufacturing and precision job work. Outfitted with a dedicated 200 mm diameter rotary table, it supports 4-axis synchronized positioning for multi-sided components without refixturing.',
    image: '/assets/mach_vmc_850.jpg',
    imageCaption: 'Vertical Machining Center (VMC) with multi-tool magazine',
    badge: '4-Axis Configured',
    isFourAxisCapable: true,
    specifications: [
      { label: 'X-Axis Travel', value: '800 mm', status: 'confirmed' },
      { label: 'Y-Axis Travel', value: '510 mm', status: 'confirmed' },
      { label: 'Z-Axis Travel', value: '500 mm', status: 'confirmed' },
      { label: 'Table Size', value: '1000 × 510 mm (approx.)', status: 'confirmed' },
      { label: '4th-Axis Rotary Table', value: '200 mm diameter', status: 'confirmed' },
      { label: 'CNC Controller', value: 'Siemens CNC', status: 'confirmed' },
      { label: 'Tool Magazine (ATC)', value: '22–24 Tools', status: 'tbc', note: 'Subject to final workshop confirmation' },
      { label: 'Spindle Taper', value: 'BT-40', status: 'tbc', note: 'Subject to final configuration check' },
      { label: 'Spindle Speed & Power', value: 'To be confirmed', status: 'tbc', note: 'Contact for specific torque/RPM curve' },
    ],
    supportedOperations: [
      'Face & Profile Milling',
      'Precision Drilling & Peck Drilling',
      'Rigid Tapping',
      'Boring & Counterboring',
      'Multi-face Indexing & 4-Axis Machining',
      'Chamfering & Contouring',
    ],
    idealWorkpieces: [
      'Multi-face hydraulic manifolds',
      'Precision transmission brackets',
      'Aluminium electronic enclosures',
      'Custom industrial machinery housings',
    ],
  },
  {
    id: 'ktm-10060-vmc',
    name: 'KTM 10060 VMC',
    manufacturer: 'KTM Machinery',
    model: '10060',
    category: '4-Axis VMC',
    categoryKey: 'four-axis',
    tagline: 'Extended-envelope vertical machining center with 250 mm rotary table for larger workpieces',
    shortDescription:
      'Features an expansive 1000 × 600 mm working envelope with 24-pocket tool magazine and heavy-duty 250 mm 4th-axis rotary indexer.',
    fullDescription:
      'The KTM 10060 provides large-envelope machining capacity at Apson Engineering. Its generous 1000 mm X-axis and 600 mm Y/Z travel accommodate oversized fixtures, long shafts, and bulky casting components requiring multi-surface precision milling.',
    image: '/assets/mach_ktm_10060.jpg',
    imageCaption: 'Extended envelope VMC with 4th-axis rotary indexer table',
    badge: 'Large Envelope & 4th Axis',
    isFourAxisCapable: true,
    specifications: [
      { label: 'X-Axis Travel', value: '1000 mm (approx.)', status: 'tbc', note: 'Preliminary working specification' },
      { label: 'Y-Axis Travel', value: '600 mm (approx.)', status: 'tbc', note: 'Preliminary working specification' },
      { label: 'Z-Axis Travel', value: '600 mm (approx.)', status: 'tbc', note: 'Preliminary working specification' },
      { label: '4th-Axis Rotary Table', value: '250 mm diameter', status: 'confirmed' },
      { label: 'Tool Magazine (ATC)', value: '24 Tools', status: 'confirmed' },
      { label: 'CNC Controller', value: 'Siemens CNC', status: 'confirmed' },
      { label: 'Spindle Taper', value: 'BT-40 / BBT-40', status: 'tbc', note: 'To be confirmed on site' },
      { label: 'Spindle Speed', value: '8000–10000 RPM (approx.)', status: 'tbc', note: 'Awaiting verified machine plate' },
    ],
    supportedOperations: [
      'Heavy Duty Face Milling',
      'Pocketing & 3D Contouring',
      'Precision Deep Hole Drilling',
      'Rigid Synchronous Tapping',
      'Rotary 4th-Axis Multi-Angle Machining',
    ],
    idealWorkpieces: [
      'Large pump casings and valve bodies',
      'Long structural brackets and baseplates',
      'Flanged circular components on 4th axis',
      'Industrial machinery slide components',
    ],
  },
  {
    id: 'ace-micromatic-sje-10lm',
    name: 'ACE Micromatic SJE 10LM',
    manufacturer: 'Ace Micromatic Group',
    model: 'SJE 10LM',
    category: 'CNC Turning',
    categoryKey: 'turning',
    tagline: 'High-speed CNC horizontal turning center for shafts, rings, and precision round parts',
    shortDescription:
      'Equipped with Fanuc CNC control, 200 mm hydraulic chuck, 8-station tool turret, and 643 mm turning length capacity.',
    fullDescription:
      'The ACE Micromatic SJE 10LM delivers consistent cylindrical accuracy, superior surface finish, and tight diameter control. Built for shafts, pins, bushings, and turned fittings, its 8-station turret allows rapid sequential operations from rough turning to fine threading.',
    image: '/assets/mach_ace_sje_10lm.jpg',
    imageCaption: 'CNC Horizontal Turning Center with 8-station tool turret',
    badge: 'High Precision Turning',
    isFourAxisCapable: false,
    specifications: [
      { label: 'CNC Controller', value: 'Fanuc', status: 'confirmed' },
      { label: 'Hydraulic Chuck Size', value: '200 mm / 8-Inch (approx.)', status: 'confirmed' },
      { label: 'Turret Capacity', value: '8 Stations', status: 'confirmed' },
      { label: 'Max. Turning Diameter', value: '350 mm (approx.)', status: 'tbc', note: 'Preliminary working specification' },
      { label: 'Max. Turning Length', value: '643 mm (approx.)', status: 'tbc', note: 'Preliminary working specification' },
      { label: 'Bar Capacity', value: 'Up to ~51 mm', status: 'tbc', note: 'Preliminary working specification' },
      { label: 'Max. Spindle Speed', value: '3500 RPM (approx.)', status: 'tbc', note: 'Preliminary working specification' },
    ],
    supportedOperations: [
      'OD & ID Precision Turning',
      'Facing & Parting Off',
      'Single-point External & Internal Threading',
      'Grooving & Undercutting',
      'Internal Boring & Reaming',
      'Chamfering & Profiling',
    ],
    idealWorkpieces: [
      'Precision automotive drive pins and stepped shafts',
      'Hydraulic cylinder rods and piston caps',
      'Pipe flanges and threaded couplings',
      'Custom bearing sleeves and bushings',
    ],
  },
  {
    id: 'jyoti-vmc',
    name: 'Jyoti CNC VMC',
    manufacturer: 'Jyoti CNC Automation',
    model: 'VMC Line (Model verification in progress)',
    category: 'VMC',
    categoryKey: 'vmc',
    tagline: 'High-accuracy vertical machining center for dynamic milling and contouring',
    shortDescription:
      'Modern vertical machining system from Jyoti CNC Automation running Siemens control with high-precision linear guideways.',
    fullDescription:
      'Manufactured by Jyoti CNC Automation, this vertical machining center operates alongside our primary VMC line. Configured with a Siemens CNC controller and automatic tool changer, it handles customer job work requiring high-accuracy milling, slotting, and thread milling.',
    image: '/assets/mach_jyoti_vmc.jpg',
    imageCaption: 'High-precision Vertical Machining Center for contouring and milling',
    badge: 'VMC Milling',
    isFourAxisCapable: false,
    specifications: [
      { label: 'Manufacturer', value: 'Jyoti CNC Automation', status: 'confirmed' },
      { label: 'Machine Type', value: 'Vertical Machining Center (VMC)', status: 'confirmed' },
      { label: 'CNC Controller', value: 'Siemens CNC', status: 'confirmed' },
      { label: 'Tool Magazine', value: '22 Tools (approx.)', status: 'tbc', note: 'Subject to final workshop confirmation' },
      { label: 'Axis Travel (X/Y/Z)', value: 'To be confirmed', status: 'tbc', note: 'Specific model plate verification in progress' },
      { label: 'Spindle RPM & Taper', value: 'To be confirmed', status: 'tbc', note: 'Awaiting nameplate confirmation' },
      { label: 'Table Load Capacity', value: 'To be confirmed', status: 'tbc', note: 'Subject to model verification' },
    ],
    supportedOperations: [
      'High-Speed Milling',
      'Precision Pocketing & Contouring',
      'Drilling, Reaming & Tapping',
      'Slot Milling & Counterboring',
    ],
    idealWorkpieces: [
      'Machined motor end covers',
      'Precision fixture plates and tooling jigs',
      'Custom fabricated valve bodies',
      'Industrial automation mounting plates',
    ],
  },
  {
    id: 'jyoti-dx-200-5d',
    name: 'Jyoti DX 200 5D Turning Center',
    manufacturer: 'Jyoti CNC Automation',
    model: 'DX 200 5D',
    category: 'CNC Turning',
    categoryKey: 'turning',
    tagline: 'Rigid CNC lathe engineered for round component machining and tight dimensional tolerances',
    shortDescription:
      'Features 8-station tool turret, approx. 500 mm turning length, and Siemens SINUMERIK control for high-accuracy turned components.',
    fullDescription:
      'The Jyoti DX 200 5D Turning Center combines structural rigidity with ergonomic accessibility for medium and high-volume turned parts. Ideal for turned shafts, bushes, pulleys, and precision flanges made from carbon steel, alloy steel, cast iron, and non-ferrous metals.',
    image: '/assets/mach_jyoti_dx200.jpg',
    imageCaption: 'Heavy-duty CNC slant bed turning lathe with hydraulic chuck',
    badge: 'Turning Center',
    isFourAxisCapable: false,
    specifications: [
      { label: 'Manufacturer', value: 'Jyoti CNC Automation', status: 'confirmed' },
      { label: 'Model', value: 'DX 200 5D', status: 'confirmed' },
      { label: 'CNC Controller', value: 'Siemens SINUMERIK', status: 'tbc', note: 'Subject to configuration check' },
      { label: 'Tool Turret', value: '8 Stations', status: 'confirmed' },
      { label: 'Turning Length', value: '500 mm (approx.)', status: 'tbc', note: 'Subject to exact model confirmation' },
      { label: 'Spindle Speed', value: '2500–3000 RPM (approx.)', status: 'tbc', note: 'Subject to configuration confirmation' },
      { label: 'Chuck Size', value: 'Hydraulic Chuck', status: 'confirmed' },
    ],
    supportedOperations: [
      'Precision Cylindrical Turning',
      'Facing & Grooving',
      'Taper Turning & Chamfering',
      'Thread Cutting (Metric & Imperial)',
      'Boring & Internal Profiling',
    ],
    idealWorkpieces: [
      'Agricultural implement pins and bushes',
      'Automotive gear blanks and hubs',
      'Flanges, collars, and retainers',
      'Specialized engineering shafts',
    ],
  },
];
