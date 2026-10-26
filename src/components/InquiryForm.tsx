import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';

interface InquiryFormProps {
  initialMachine?: string;
}

export const InquiryForm: React.FC<InquiryFormProps> = ({ initialMachine }) => {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(
    initialMachine ? `Machining for ${initialMachine}` : 'CNC Turning & VMC Milling'
  );
  const [quantity, setQuantity] = useState('Batch Production (50–500 pcs)');
  const [description, setDescription] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!phone.trim()) {
      errs.phone = 'Please provide a valid contact number';
    } else if (phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!email.trim()) {
      errs.email = 'Please provide an email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!description.trim()) {
      errs.description = 'Please include brief component specifications or material requirements';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const generateWhatsAppUrl = () => {
    const message =
      `Hello Apson Engineering, I have a machining inquiry from ${fullName}.\n` +
      `Company: ${companyName || 'Individual'}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email}\n` +
      `Service: ${service}\n` +
      `Quantity: ${quantity}\n` +
      `Details: ${description}\n` +
      `*I can share 2D PDF / 3D CAD drawings directly here on WhatsApp.*`;

    return `https://api.whatsapp.com/send?phone=918128830118&text=${encodeURIComponent(message)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      window.open(generateWhatsAppUrl(), '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-xs p-4 sm:p-6 lg:p-8">
      <div className="mb-5 sm:mb-6">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
          Submit Machining Request for Quotation (RFQ)
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
          Provide your component details below. Clicking the green button validates your inputs and opens WhatsApp directly to chat with our engineering team.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Row 1: Name and Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Rajesh Patel"
              className={`w-full px-3.5 py-2.5 text-base sm:text-sm rounded-md border ${
                errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-slate-300 focus:border-[#7D6C32]'
              } focus:outline-none transition-colors`}
            />
            {errors.fullName && (
              <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
              Company Name (Optional)
            </label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="e.g. Apex Industrial Systems"
              className="w-full px-3.5 py-2.5 text-base sm:text-sm rounded-md border border-slate-300 focus:border-[#7D6C32] focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Row 2: Phone and Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
              Phone Number *
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98765 43210"
              className={`w-full px-3.5 py-2.5 text-base sm:text-sm rounded-md border ${
                errors.phone ? 'border-red-500 focus:border-red-500' : 'border-slate-300 focus:border-[#7D6C32]'
              } focus:outline-none transition-colors font-mono`}
            />
            {errors.phone && (
              <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
              Email Address *
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              className={`w-full px-3.5 py-2.5 text-base sm:text-sm rounded-md border ${
                errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-300 focus:border-[#7D6C32]'
              } focus:outline-none transition-colors`}
            />
            {errors.email && (
              <p className="text-xs text-red-600 mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Row 3: Service Selection & Quantity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
              Required Machining Service
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-3.5 py-2.5 text-base sm:text-sm rounded-md border border-slate-300 focus:border-[#7D6C32] focus:outline-none bg-white transition-colors"
            >
              <option value="CNC Turning & VMC Milling">CNC Turning & VMC Milling</option>
              <option value="4-Axis VMC Machining (ACE 850V / KTM 10060)">4-Axis VMC Machining (ACE 850V / KTM 10060)</option>
              <option value="CNC Turning Centers (ACE SJE 10LM / Jyoti DX 200)">CNC Turning Centers (ACE SJE 10LM / Jyoti DX 200)</option>
              <option value="Vertical Machining Center Job Work (Jyoti VMC)">Vertical Machining Center Job Work (Jyoti VMC)</option>
              <option value="Custom Engineering Component to Drawing">Custom Engineering Component to Drawing</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
              Estimated Volume / Batch Size
            </label>
            <select
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full px-3.5 py-2.5 text-base sm:text-sm rounded-md border border-slate-300 focus:border-[#7D6C32] focus:outline-none bg-white transition-colors"
            >
              <option value="Prototype / Sample (1–10 pcs)">Prototype / Sample (1–10 pcs)</option>
              <option value="Small Batch (10–50 pcs)">Small Batch (10–50 pcs)</option>
              <option value="Batch Production (50–500 pcs)">Batch Production (50–500 pcs)</option>
              <option value="Recurring Monthly Production (500+ pcs)">Recurring Monthly Production (500+ pcs)</option>
            </select>
          </div>
        </div>

        {/* Project Description */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
            Component Description & Material Specifications *
          </label>
          <textarea
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Please specify raw material (e.g., Cast Iron, Mild Steel, EN19, Aluminium 6061), critical dimensions, tolerances, or special machining requirements..."
            className={`w-full px-3.5 py-2.5 text-base sm:text-sm rounded-md border ${
              errors.description ? 'border-red-500 focus:border-red-500' : 'border-slate-300 focus:border-[#7D6C32]'
            } focus:outline-none transition-colors`}
          />
          {errors.description && (
            <p className="text-xs text-red-600 mt-1">{errors.description}</p>
          )}
        </div>

        {/* Direct WhatsApp Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2.5 px-4 sm:px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da851] rounded-md transition-all shadow-md hover:shadow-lg cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 fill-white text-[#25D366]" />
            <span>Inquire on WhatsApp</span>
          </button>
          <p className="text-center text-[11px] sm:text-xs text-slate-500 mt-2.5">
            Instant technical response · Send drawings & blueprints directly on WhatsApp
          </p>
        </div>
      </form>
    </div>
  );
};
