export interface SiteConfig {
  name: string;
  legalTradeName: string;
  businessType: string;
  tagline: string;
  phone: string;
  phoneRaw: string;
  email: string;
  address: {
    plotNo: string;
    surveyNo: string;
    landmark: string;
    opposite: string;
    village: string;
    district: string;
    state: string;
    pincode: string;
    country: string;
    fullFormatted: string;
  };
  googleMapsUrl: string;
  brandColor: string;
  logoUrl: string;
  heroVideoUrl: string;
  heroPosterUrl: string;
  workshopPhotos: {
    url: string;
    caption: string;
    description: string;
  }[];
  navLinks: {
    label: string;
    path: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: 'Apson Engineering',
  legalTradeName: 'Apson Engineering',
  businessType: 'Proprietorship',
  tagline: 'Precision CNC & VMC Machining Solutions',
  phone: '+91 81288 30118',
  phoneRaw: '+918128830118',
  email: 'apsonengineering55@gmail.com',
  address: {
    plotNo: 'Plot No. 3',
    surveyNo: 'R.S. No. 348/2',
    landmark: 'Near Luminous Technocast Pvt. Ltd.',
    opposite: 'Opp. Kishan Farm',
    village: 'Shapar',
    district: 'Rajkot',
    state: 'Gujarat',
    pincode: '360026',
    country: 'India',
    fullFormatted:
      'Plot No. 3, R.S. No. 348/2, Near Luminous Technocast Pvt. Ltd., Opp. Kishan Farm, Shapar, Rajkot, Gujarat – 360026, India',
  },
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Plot+No.+3+R.S.+No.+348%2F2+Near+Luminous+Technocast+Pvt+Ltd+Opp+Kishan+Farm+Shapar+Rajkot+Gujarat+360026',
  brandColor: '#7D6C32',
  logoUrl: '/assets/aistudio/Apson_Logo_b2c10379.svg',
  heroVideoUrl: '/assets/aistudio/hero_video_hd.mp4',
  heroPosterUrl: '/assets/aistudio/hero_poster_hd.jpg',
  workshopPhotos: [
    {
      url: '/assets/aistudio/WhatsApp_Image_2026-10-25_at_11.16.38_2e4d072e.jpeg',
      caption: 'Facility Overview & Machining Bays',
      description: 'Pristine shop floor featuring ACE Micromatic 850V VMC and Jyoti machining systems with dedicated staging areas.',
    },
    {
      url: '/assets/aistudio/WhatsApp_Image_2026-10-25_at_11.16.38__1__04dd2739.jpeg',
      caption: 'Active Production & Precision Turning Line',
      description: 'Machinists operating CNC turning centers and vertical machining centers with high-efficiency coolant circuits.',
    },
    {
      url: '/assets/aistudio/WhatsApp_Image_2026-10-25_at_11.16.38__2__d83a759f.jpeg',
      caption: 'Workshop Infrastructure & Quality Inspection',
      description: 'Spacious high-bay manufacturing area equipped with precision metrology equipment and tooling racks.',
    },
  ],
  navLinks: [
    { label: 'Home', path: '/' },
    { label: 'Machines', path: '/products' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ],
};

export function getWhatsAppQuoteUrl(machineModel?: string, customNote?: string): string {
  const baseMessage = machineModel
    ? `Hello Apson Engineering, I would like to inquire about machining on ${machineModel}. Please let me know how to share our component drawings.`
    : `Hello Apson Engineering, I have a precision machining requirement (CNC Turning / VMC Milling) and would like to request a quotation. I have drawings and specifications ready to share.`;
  const additional = customNote ? ` Details: ${customNote}` : '';
  const text = encodeURIComponent(`${baseMessage}${additional}`);
  return `https://api.whatsapp.com/send?phone=918128830118&text=${text}`;
}

export function getMailtoQuoteUrl(subject?: string, body?: string): string {
  const mailSubject = encodeURIComponent(subject || 'Machining RFQ — Component Inquiry');
  const mailBody = encodeURIComponent(
    body ||
      `Dear Apson Engineering Team,\n\nI would like to request a quote for precision machining.\n\nComponent Details:\n- Material:\n- Quantity:\n- Required Operations (Turning/VMC/4-Axis):\n- Target Timeline:\n\nPlease let me know where I can share our engineering 2D/3D drawings.\n\nRegards,\n`
  );
  return `mailto:apsonengineering55@gmail.com?subject=${mailSubject}&body=${mailBody}`;
}
