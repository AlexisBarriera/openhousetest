import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);

    const contactData = {
      name: formData.get('contactName'),
      email: formData.get('contactEmail'),
      phone: formData.get('contactPhone'),
      service: formData.get('contactService'),
      message: formData.get('contactMessage'),
      timestamp: new Date().toISOString()
    };

    try {
      // Send contact form to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const data = await response.json();

      if (data.success) {
        alert('¡Tu mensaje ha sido enviado exitosamente! Te responderemos pronto.');
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error(data.error || 'Error al enviar mensaje');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      alert('Hubo un error al enviar tu mensaje. Por favor inténtalo de nuevo o contacta al +1 (939) 608-3732.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-navy-primary to-navy-medium">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-widest text-sm mb-3">Encuesta de contacto</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Contáctenos para hablar sobre <span className="gradient-text">sus finanzas</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Complete el formulario y nos pondremos en contacto con usted en un plazo de 24 horas hábiles.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/5">
            <h3 className="font-heading text-2xl mb-6">Información adicional</h3>
            <p className="text-gray-300 mb-8">Lorem Ipsum Dolor sit</p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-gold/5 to-gold/2 p-4 rounded-lg border-l-4 border-gold transition-all hover:translate-x-2">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center flex-shrink-0">
                    <i data-feather="map-pin" className="text-navy-primary text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Localización de oficina</h4>
                    <p className="text-gray-300 text-sm">Lorem<br />Ponce, Puerto Rico 00730</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-gold/5 to-gold/2 p-4 rounded-lg border-l-4 border-gold transition-all hover:translate-x-2">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center flex-shrink-0">
                    <i data-feather="phone" className="text-navy-primary text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Número de teléfono</h4>
                    <p className="text-gray-300 text-sm">+1 (111) 111-1111</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-gold/5 to-gold/2 p-4 rounded-lg border-l-4 border-gold transition-all hover:translate-x-2">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center flex-shrink-0">
                    <i data-feather="mail" className="text-navy-primary text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-300 text-sm">test@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-gold/5 to-gold/2 p-4 rounded-lg border-l-4 border-gold transition-all hover:translate-x-2">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center flex-shrink-0">
                    <i data-feather="clock" className="text-navy-primary text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Horas</h4>
                    <p className="text-gray-300 text-sm">
                      Lunes - Viernes: 8:30 AM - 5:00 PM<br />
                      Sábado: 10:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5">
            <div className="glass-card rounded-xl p-8">
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="contactName" className="block text-xs uppercase text-gray-400 mb-1">Nombre completo *</label>
                    <input type="text" id="contactName" name="contactName" required className="w-full bg-navy-primary/50 border border-navy-light rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold" />
                  </div>
                  <div>
                    <label htmlFor="contactEmail" className="block text-xs uppercase text-gray-400 mb-1">Email *</label>
                    <input type="email" id="contactEmail" name="contactEmail" required className="w-full bg-navy-primary/50 border border-navy-light rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold" />
                  </div>
                  <div>
                    <label htmlFor="contactPhone" className="block text-xs uppercase text-gray-400 mb-1">Número de teléfono</label>
                    <input type="tel" id="contactPhone" name="contactPhone" className="w-full bg-navy-primary/50 border border-navy-light rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold" />
                  </div>
                  <div>
                    <label htmlFor="contactService" className="block text-xs uppercase text-gray-400 mb-1">Servicio de interés</label>
                    <select id="contactService" name="contactService" className="w-full bg-navy-primary/50 border border-navy-light rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold appearance-none">
                      <option value="">Seleccionar...</option>
                      <option value="Contabilidad Corporativa">Contabilidad Corporativa</option>
                      <option value="Preparación de Impuestos">Preparación de Impuestos</option>
                      <option value="Planificación Financiera">Planificación Financiera</option>
                      <option value="Servicios de Nómina">Servicios de Nómina</option>
                      <option value="Auditorías">Auditorías</option>
                      <option value="Consultoría Empresarial">Consultoría Empresarial</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="contactMessage" className="block text-xs uppercase text-gray-400 mb-1">Mensaje *</label>
                  <textarea id="contactMessage" name="contactMessage" rows={5} required className="w-full bg-navy-primary/50 border border-navy-light rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold"></textarea>
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-gold to-gold-dark text-navy-primary font-semibold py-3 rounded-lg hover:shadow-lg transition-all">
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

