export interface ProductImage {
  url: string;
  alt: string;
  caption: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  images: ProductImage[];
  specifications: ProductSpec[];
  keyFeatures: string[];
  machiningHighlights: {
    title: string;
    description: string;
  }[];
}

export const productsData: Product[] = [
  {
    id: 'pump-part-suction',
    slug: 'pump-part-suction',
    name: 'Pump Part – Suction',
    category: 'Industrial Pumps & Fluid Handling',
    shortDescription:
      'Heavy-duty precision-machined pump suction casting component engineered for industrial fluid transfer systems and high-pressure process pumps.',
    fullDescription:
      'The Pump Part – Suction is an industrial-grade precision casting machined to tight dimensional tolerances. Featuring precision-faced inlet flanges, accurately bored internal flow channels, and tapped mounting configurations, this component is manufactured strictly to customer drawings using multi-axis CNC turning and VMC milling operations. Ideal for heavy-duty submersible, centrifugal, and industrial chemical pumps.',
    images: [
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_14.32.48__1__71f065a2.jpeg',
        alt: 'Pump Part – Suction Component - Precision Chamfer & Internal Bore View',
        caption: 'Machined Chamber & Inner Bore Chamfer',
      },
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_14.32.48__2__5b800f44.jpeg',
        alt: 'Pump Part – Suction Component - Flange Face & Mounting Holes View',
        caption: 'Top Flange Face & Precision Mounting Holes',
      },
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_14.32.48_1b9d5fcb.jpeg',
        alt: 'Pump Part – Suction Component - Side Profile & Rib Structure View',
        caption: 'Casting Rib Structure & Port Windows',
      },
    ],
    specifications: [
      { label: 'Material Grade', value: 'High-Grade Cast Iron / Ductile Iron Casting' },
      { label: 'Machining Operations', value: 'CNC Turning & 4-Axis VMC Milling' },
      { label: 'Primary Application', value: 'Centrifugal & Submersible Industrial Pumps' },
      { label: 'Tolerance Fidelity', value: '±0.015 mm / As per Customer Blueprint' },
      { label: 'Surface Finish', value: 'Ra 0.8 – 1.6 µm on critical sealing faces' },
      { label: 'Mounting Configuration', value: 'Multi-hole drilled & rigid-tapped flange' },
      { label: 'Inspection Protocol', value: '100% Dimensional & Bore Concentricity Check' },
    ],
    keyFeatures: [
      'Precision-turned flange sealing faces for leak-proof gasket seating',
      'Multi-axis VMC drilled and tapped mounting hole patterns with strict pitch accuracy',
      'High concentricity on internal suction bore for laminar fluid dynamics',
      'Rigid structural rib design accommodating elevated hydraulic working pressures',
      'Strict blueprint compliance from raw casting to finished machined part',
    ],
    machiningHighlights: [
      {
        title: 'Precision Face Turning',
        description:
          'Single-setup CNC OD/ID turning to ensure perpendicularity and flat gasket sealing face.',
      },
      {
        title: '4-Axis VMC Indexing',
        description:
          'Synchronized machining of radial window cutouts and multi-angle mounting hole positions.',
      },
      {
        title: 'Bore Alignment & Threading',
        description:
          'Precision boring and rigid tapping under calibrated toolpaths for consistent repeatability.',
      },
    ],
  },
  {
    id: 'industrial-valve',
    slug: 'industrial-valve',
    name: 'Industrial Valve',
    category: 'Industrial Valves & Flow Control',
    shortDescription:
      'High-precision CNC turned and VMC milled industrial valve component with serrated sealing face, 4-bolt circular flange, and stepped square mounting pad.',
    fullDescription:
      'The Industrial Valve component is an industrial flow-control and valve-mounting adapter precision-machined from high-strength forged/cast steel. Produced strictly to customer drawings and CAD specifications, it features high-precision CNC turning for the serrated raised gasket sealing face (phonographic finish) and 4-axis VMC milling for the stepped square mounting pad, internal counterbore, seal grooves, and precision bolt holes. Engineered for leak-proof performance in petrochemical, water distribution, and process pipeline systems.',
    images: [
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_14.32.56_0f0ed72b.jpeg',
        alt: 'Industrial Valve - Serrated Flange Face with Bolt Holes',
        caption: 'Serrated Flange Face & Bolt Pattern',
      },
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_14.32.57_cfd9298f.jpeg',
        alt: 'Industrial Valve - Precision Stepped Counterbore & Square Flange',
        caption: 'Stepped Counterbore & Square Mounting Pad',
      },
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_14.32.59_961ed7e0.jpeg',
        alt: 'Industrial Valve - Angled View with Component Identification',
        caption: 'Machined Profile & Identification Markings',
      },
    ],
    specifications: [
      { label: 'Material Grade', value: 'Forged Steel / Carbon Steel / Ductile Iron' },
      { label: 'Machining Operations', value: 'CNC Turning & 4-Axis VMC Milling' },
      { label: 'Primary Application', value: 'Industrial Flow Control & Valve Assemblies' },
      { label: 'Tolerance Fidelity', value: '±0.015 mm / As per Customer Blueprint' },
      { label: 'Sealing Surface Finish', value: 'Phonographic Serrated Gasket Face (Ra 3.2 – 6.3 µm)' },
      { label: 'Bore Finish', value: 'Ra 0.8 µm Precision Cylindrical Step Bore' },
      { label: 'Inspection Protocol', value: '100% CMM & Bore Gauge Dimensional Verification' },
    ],
    keyFeatures: [
      'Serrated spiral grooving on raised flange face for leak-proof gasket compression',
      'Square mounting pad with 4 precision-drilled clearance holes for rigid actuator or valve coupling',
      'Multi-step internal counterbore and seal grooves machined to sub-20 micron tolerances',
      'High perpendicularity between flange face and central bore for zero fluid bypass',
      '100% customized manufacturing based on customer 2D drawings and 3D CAD models',
    ],
    machiningHighlights: [
      {
        title: 'CNC Flange & Serration Turning',
        description:
          'Single-setup turning of outer diameter, raised face, and precision phonographic serrations for gasket seating.',
      },
      {
        title: '4-Axis VMC Milling & Stepped Boring',
        description:
          'Accurate contour milling of the square flange pad, step counterbores, and internal seal locating registers.',
      },
      {
        title: 'Multi-Hole PCD Drilling & Quality QC',
        description:
          'Rigid CNC drilling of flange bolt circles and square pad holes with verified pitch center repeatability.',
      },
    ],
  },
  {
    id: 'flange',
    slug: 'flange',
    name: 'Flange',
    category: 'Precision Flanges & Manifold Blocks',
    shortDescription:
      'High-precision multi-axis CNC machined hydraulic manifold flange block featuring custom fluid channel profiling, stepped cylindrical neck, and cross-drilled ports.',
    fullDescription:
      'The Flange component is a high-pressure hydraulic manifold and port flange block precision-machined from solid alloy steel bar stock. It combines complex multi-axis VMC 3D contour milling with high-accuracy CNC turning. The component features a Y-branch fluid distribution groove, deep concentric counterbores, stepped cylindrical retaining neck with seal grooves, 4 heavy-duty counterbored bolt holes, and cross-drilled hydraulic intersecting ports. Manufactured strictly to customer CAD models with micron-level tolerances for zero-leakage fluid power applications.',
    images: [
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_14.33.05_88e0371b.jpeg',
        alt: 'Flange - Top Face with Fluid Distribution Channel and Counterbored Holes',
        caption: 'Top Face Profile & Precision Fluid Channel',
      },
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_14.33.03_699b8544.jpeg',
        alt: 'Flange - Side Profile Showing Stepped Cylindrical Boss and Cross Port',
        caption: 'Stepped Cylindrical Neck & Cross-Drilled Port',
      },
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_14.33.03__1__cc8b01ed.jpeg',
        alt: 'Flange - Rear View with Stepped Boss and Mounting Configuration',
        caption: 'Rear Cylindrical Boss & Bolt Mounting Pattern',
      },
    ],
    specifications: [
      { label: 'Material Grade', value: 'Alloy Steel / Stainless Steel / EN8D Bar Stock' },
      { label: 'Machining Operations', value: '4-Axis VMC 3D Milling & Precision CNC Turning' },
      { label: 'Primary Application', value: 'Hydraulic Manifolds, Fluid Control & High-Pressure Systems' },
      { label: 'Tolerance Fidelity', value: '±0.010 mm on bores and groove depths' },
      { label: 'Surface Finish', value: 'Ra 0.4 – 0.8 µm on sealing surfaces & cylindrical neck' },
      { label: 'Porting Features', value: 'Cross-drilled intersecting ports & 3D Y-channel' },
      { label: 'Inspection Protocol', value: '100% Coordinate Measuring Machine (CMM) Verified' },
    ],
    keyFeatures: [
      'Complex 3D CNC milled fluid-directing Y-channel engineered for smooth laminar hydraulic flow',
      'Stepped cylindrical neck turned to close diameter limits with precision seal groove',
      'Cross-drilled and chamfered fluid port with seamless internal intersection',
      '4 heavy counterbored mounting holes for high-tensile socket head cap screws',
      'Precision threaded tapping and reamed dowel pin locating holes for positive alignment',
    ],
    machiningHighlights: [
      {
        title: '3D Form & Channel Milling',
        description:
          'High-speed ball-nose end milling on 4-axis VMC to sculpt contoured fluid channels with zero burrs.',
      },
      {
        title: 'Multi-Diameter Neck Turning',
        description:
          'Precision CNC OD turning of stepped cylindrical boss ensuring concentricity to main bore within 0.01 mm.',
      },
      {
        title: 'Deep Counterbore & Port Drilling',
        description:
          'Calibrated depth-controlled drilling and counterboring for leak-proof O-ring seat compression.',
      },
    ],
  },
  {
    id: 'aerospace-part',
    slug: 'aerospace-part',
    name: 'Aerospace part',
    category: 'Aerospace & High-Precision Components',
    shortDescription:
      'Mission-critical aerospace-grade valve body housing manufactured with multi-axis VMC milling, external threading, and deep cross-drilled internal fluid cavities.',
    fullDescription:
      'The Aerospace part is a high-reliability fluid manifold housing precision-machined from aircraft-grade aluminum alloy / aerospace stainless steel. It features an externally threaded connection collar, deep internal fluid expansion chamber with secondary cross-drilled intersecting flow ports, precision circular O-ring face grooves, and multi-side mounting flange patterns. Produced strictly according to aerospace engineering quality guidelines and customer CAD drawings with micron-accurate concentricity and surface finishes.',
    images: [
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_14.33.07_a219f6aa.jpeg',
        alt: 'Aerospace part - Front Port Face with O-Ring Counterbore and Threaded Collar',
        caption: 'Precision Front Port & O-Ring Counterbore',
      },
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_14.33.09_9d03eb2b.jpeg',
        alt: 'Aerospace part - Stepped Cylindrical Neck & Threaded Collar View',
        caption: 'Stepped Cylindrical Boss & Threaded Collar',
      },
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_14.33.06_9e2c54af.jpeg',
        alt: 'Aerospace part - Deep Internal Chamber & Cross-Drilled Port Cavity View',
        caption: 'Internal Fluid Cavity & Cross-Drilled Port',
      },
    ],
    specifications: [
      { label: 'Material Grade', value: 'Aerospace Aluminum / High-Grade Stainless Steel' },
      { label: 'Machining Operations', value: '4-Axis VMC Milling, CNC Turning & Single-Point Threading' },
      { label: 'Primary Application', value: 'Aerospace Fluid Control, Actuators & High-Pressure Systems' },
      { label: 'Tolerance Fidelity', value: '±0.008 mm / Tight Geometric Tolerances (GD&T)' },
      { label: 'Surface Finish', value: 'Ra 0.4 µm mirror bore & O-ring sealing gland' },
      { label: 'Thread Specification', value: 'Precision Single-Point External Machine Thread' },
      { label: 'Inspection Protocol', value: '100% CMM Coordinate Measurement & Thread Gauge Inspection' },
    ],
    keyFeatures: [
      'Multi-axis complex internal chamber boring with cross-drilled intersection ports',
      'Precision single-point CNC turned external threads for leak-free aerospace couplings',
      'Recessed front O-ring gland machined to exact radial depth and finish specifications',
      'Rigid square base mounting flange with precision clearance holes and dowel pin alignment',
      'Zero-burr internal flow passages optimized for laminar hydraulic fluid performance',
    ],
    machiningHighlights: [
      {
        title: 'Multi-Axis Cavity Milling',
        description:
          'Deep pocket boring and multi-side face milling on ACE Micromatic 4-axis VMC center.',
      },
      {
        title: 'CNC Single-Point Threading',
        description:
          'High-precision thread single-pointing ensuring pitch accuracy and tight thread engagement class.',
      },
      {
        title: 'Cross-Drilled Port Intersection',
        description:
          'Compound-angle internal port drilling with deburred transitions for uninterrupted hydraulic dynamics.',
      },
    ],
  },
  {
    id: 'pump-part',
    slug: 'pump-part',
    name: 'Pump part',
    category: 'Industrial Pumps & Fluid Handling',
    shortDescription:
      'Heavy-duty cylindrical pump casing and bearing bracket component with precision-faced circular registers, multi-point tapped perimeter, and internal ribbed chamber.',
    fullDescription:
      'The Pump part is a precision-machined heavy-duty pump bearing bracket and housing casting designed for industrial fluid pumps and high-head centrifugal pumping units. Engineered with dual-setup CNC turning and 4-axis VMC milling, this component features a machined circular mating register with stepped seal grooves, a 6-hole tapped circular perimeter, 3 deep counterbored mounting apertures, and a precision-threaded central shaft bore. The reverse cavity showcases structural reinforcement ribs and concentric inner bore diameters finished to micron-level tolerances.',
    images: [
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_14.33.10_5de8aad9.jpeg',
        alt: 'Pump part - Internal Cavity with Structural Ribs and Mounting Bores',
        caption: 'Internal Ribbed Chamber & Counterbore Bores',
      },
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_14.33.12_2c845a25.jpeg',
        alt: 'Pump part - Angled View of Machined Face and Tapped Hole Circle',
        caption: 'Machined Mating Face & Tapped Circle',
      },
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_14.33.13_7a99ca27.jpeg',
        alt: 'Pump part - Orthogonal Face View with Center Threaded Hub',
        caption: 'Top Flange Register & Threaded Center Hub',
      },
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_14.33.14_abd9b116.jpeg',
        alt: 'Pump part - Cylindrical Casting Body and Stepped Register Profile',
        caption: 'Cylindrical Casting Profile & Stepped Register',
      },
    ],
    specifications: [
      { label: 'Material Grade', value: 'High-Grade Ductile Iron / Cast Steel Casting' },
      { label: 'Machining Operations', value: 'CNC Lathe Face Turning & 4-Axis VMC Milling' },
      { label: 'Primary Application', value: 'Industrial Centrifugal & High-Pressure Fluid Pumps' },
      { label: 'Tolerance Fidelity', value: '±0.012 mm on registers and bore concentricity' },
      { label: 'Surface Finish', value: 'Ra 0.8 µm on critical sealing and bearing locating faces' },
      { label: 'Fastening Details', value: '6x M-Series Tapped Holes & 3x Deep Counterbores' },
      { label: 'Inspection Protocol', value: '100% Go/No-Go Thread Gauging & Dial Indicator Runout' },
    ],
    keyFeatures: [
      'Precision-turned outer sealing diameter and circular gasket step for leak-proof assembly',
      'Accurate PCD drilling and rigid tapping of 6 perimeter mounting holes',
      '3 heavy-duty counterbored bolt slots allowing high clamp load without housing distortion',
      'Precision internal single-point machine thread in central shaft bore',
      'Robust internal casting rib architecture offering elevated stiffness under hydraulic backpressures',
    ],
    machiningHighlights: [
      {
        title: 'CNC Large-Diameter Face Turning',
        description:
          'Precision OD and face turning to guarantee perpendicularity and concentric register mating.',
      },
      {
        title: 'VMC PCD Drilling & Rigid Tapping',
        description:
          'Automated toolpath drilling of 6 tapped holes and 3 counterbored holes on strict pitch circles.',
      },
      {
        title: 'Internal Cavity & Bore Alignment',
        description:
          'Precision boring of inner chamber and central shaft register for smooth rotational balance.',
      },
    ],
  },
  {
    id: 'water-pump-impeller',
    slug: 'water-pump-impeller',
    name: 'Water Pump Impeller',
    category: 'Industrial Pumps & Fluid Handling',
    shortDescription:
      'High-efficiency multi-vane peripheral water pump impeller casting with precision-broached drive keyway, dynamic balancing holes, and CNC-turned outer diameter.',
    fullDescription:
      'The Water Pump Impeller is a high-performance peripheral / regenerative turbine impeller component manufactured for heavy-duty industrial water pumps, circulation systems, and high-pressure pumping units. Precision-machined from high-grade casting with tight-tolerance CNC turning across both faces, peripheral outer diameter, and central shaft bore. Features an accurately broached drive keyway, radial balancing apertures, and uniformly spaced fluid driving vanes designed to deliver peak hydraulic head while preventing cavitation and dynamic vibration under high operating RPMs.',
    images: [
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-10-25_at_14.04.41_3d6d63f3.jpeg',
        alt: 'Water Pump Impeller - Face View Showing Multi-Vane Radial Channels and Keyway Hub',
        caption: 'Multi-Vane Radial Impeller Disc & Keyway Hub',
      },
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-10-25_at_14.04.39_cf07bb25.jpeg',
        alt: 'Water Pump Impeller - Angled View of Precision Turned Outer Rim and Vanes',
        caption: 'Turned Outer Rim & Radial Flow Vanes',
      },
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-10-25_at_14.04.38_4afd3bf9.jpeg',
        alt: 'Water Pump Impeller - Oblique Angle Highlighting Hub Bore and Disc Thickness',
        caption: 'Precision Hub Bore & Disc Profile',
      },
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-10-25_at_14.04.37_55dc19af.jpeg',
        alt: 'Water Pump Impeller - Side Profile Showing Vane Channel Uniformity and Rim Finish',
        caption: 'Uniform Vane Channels & Concentric Rim Finish',
      },
    ],
    specifications: [
      { label: 'Material Grade', value: 'High-Tensile Cast Iron / Bronze / SS Casting' },
      { label: 'Machining Operations', value: 'CNC Lathe Face & OD Turning, Keyway Broaching' },
      { label: 'Primary Application', value: 'Water Pumps, Industrial Circulators & Turbine Pumps' },
      { label: 'Tolerance Fidelity', value: '±0.010 mm on bore diameter & peripheral runout' },
      { label: 'Surface Finish', value: 'Ra 0.8 µm on shaft bore and outer sealing rim' },
      { label: 'Keyway Specification', value: 'Standard DIN/ISO Precision Keyway Slot' },
      { label: 'Balancing Standard', value: 'ISO 1940 Dynamic Balance Grade G2.5 / G6.3' },
    ],
    keyFeatures: [
      'Uniform multi-vane radial geometry engineered for maximum hydraulic lift and head pressure',
      'Precision cylindrical shaft bore with broached axial keyway for positive torque transfer',
      'Rigid CNC turned peripheral rim ensuring minimal radial runout and zero housing rubbing',
      'Integrated dynamic balancing ports for vibration-free continuous duty operation',
      'Strict dimensional fidelity compliant with OEM pump replacement specifications',
    ],
    machiningHighlights: [
      {
        title: 'CNC Peripheral & Face Turning',
        description:
          'Single-clamping dual-face and OD finish turning to maintain zero radial and axial runout.',
      },
      {
        title: 'Bore Finishing & Keyway Broaching',
        description:
          'Precision finish boring followed by single-pass broaching of the drive keyway for slip-fit shaft alignment.',
      },
      {
        title: 'Dynamic Balancing Verification',
        description:
          'Pre-machined balancing positions to eliminate rotational harmonics at high operating speeds.',
      },
    ],
  },
  {
    id: 'valve',
    slug: 'valve',
    name: 'Valve',
    category: 'Industrial Valves & Flow Control',
    shortDescription:
      'Precision-engineered 40mm (1-1/2") CF8 stainless steel industrial ball valve with CNC-threaded hexagonal ends, full-bore flow, and manual lever handle.',
    fullDescription:
      'The Valve is an industrial quarter-turn 40mm CF8 (AISI 304 cast stainless steel) ball valve precision-machined for demanding flow-control applications. Engineered with tight CNC turning and 4-axis VMC milling, this valve features female threaded hexagonal connection ends, precision-bored spherical seat cavity, anti-blowout stem assembly, and a heavy-duty stainless steel manual lever handle. Built strictly to customer blueprints and industrial pressure ratings, it delivers bubble-tight shutoff, corrosion resistance, and low operating torque for chemical processing, water infrastructure, oil & gas, and industrial fluid systems.',
    images: [
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-10-29_at_10.05.41_79cfc6a4.jpeg',
        alt: 'Valve - 40mm CF8 Stainless Steel Ball Valve with Manual Lever Handle Full View',
        caption: '40mm CF8 Stainless Steel Ball Valve Profile with Lever Handle',
      },
      {
        url: '/assets/aistudio/WhatsApp_Image_2026-10-29_at_10.05.42_1d75b8bb.jpeg',
        alt: 'Valve - 40mm CF8 Valve Body Close-Up showing 40MM CF8 Casting Mark & Hex End',
        caption: 'Body Detail - 40MM CF8 Casting Mark & Hexagonal Threaded End',
      },
    ],
    specifications: [
      { label: 'Material Grade', value: 'CF8 Stainless Steel / Cast SS304' },
      { label: 'Nominal Bore / Size', value: '40 mm (1-1/2" DN40 Full Bore)' },
      { label: 'Machining Operations', value: 'CNC Turning & 4-Axis VMC Milling' },
      { label: 'Primary Application', value: 'Chemical, Water Systems, Petrochemical & Fluid Control' },
      { label: 'Tolerance Fidelity', value: '±0.015 mm / As per Customer Blueprint' },
      { label: 'Pressure Rating', value: '1000 WOG (PN63 / Class 150)' },
      { label: 'End Connection Type', value: 'Female BSP / NPT Threaded Ends with Hex Body' },
      { label: 'Surface Finish', value: 'Ra 0.8 µm on critical sealing and stem faces' },
      { label: 'Inspection Protocol', value: '100% Hydrostatic Shell & Pneumatic Seat Leak Testing' },
    ],
    keyFeatures: [
      'Investment cast CF8 (304 stainless steel) body offering superior corrosion resistance across aggressive fluids',
      'Full bore 40mm internal flow passage preventing fluid turbulence and pressure drops',
      'Precision single-point CNC turned threaded ends with hexagonal flats for secure wrenching',
      'Blow-out proof operating stem with lockable heavy-duty lever handle for reliable manual operation',
      '100% manufactured strictly to customer drawings, standard pipe threads, and pressure ratings',
    ],
    machiningHighlights: [
      {
        title: 'CNC Hexagonal Body & Thread Turning',
        description:
          'Single-setup turning of hexagonal outer profiles and single-point internal threading ensuring concentricity and tight pitch tolerance.',
      },
      {
        title: 'Internal Chamber & Ball Seat Boring',
        description:
          'Precision CNC boring of the spherical ball chamber and PTFE seat retaining grooves for leak-proof sealing under full line pressure.',
      },
      {
        title: '4-Axis VMC Stem Passage Machining',
        description:
          'Accurate milling of the stem passage, gland packing collar, and 90-degree handle rotation stops.',
      },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return productsData.find((p) => p.slug === slug);
}
