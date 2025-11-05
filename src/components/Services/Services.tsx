import React from 'react';

const Services: React.FC = () => {
  const navigateToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-navy-primary to-navy-medium relative">
      <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'url("http://static.photos/office/1200x630/2")', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-widest text-sm mb-3">Lorem Ipsum Dolor</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Consectetur Adipiscing <span className="gradient-text">Elit Sed</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="glass-card rounded-xl p-8 relative overflow-hidden">
            <span className="absolute top-4 right-6 text-7xl font-bold text-gold/15">01</span>
            <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mb-6">
              <i data-feather="dollar-sign" className="text-navy-primary text-xl"></i>
            </div>
            <h3 className="font-heading text-xl mb-4">Consectetur Adipiscing Elit</h3>
            <p className="text-gray-300 mb-5">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Ut enim ad minim veniam</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Quis nostrud exercitation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Ullamco laboris nisi</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Aliquip ex ea commodo</span>
              </li>
            </ul>
            <button onClick={() => navigateToSection('booking')} className="block w-full bg-gradient-to-r from-gold to-gold-dark text-navy-primary font-semibold py-3 rounded-lg text-center hover:shadow-lg transition-all">Lorem Ipsum</button>
          </div>

          <div className="glass-card rounded-xl p-8 relative overflow-hidden">
            <span className="absolute top-4 right-6 text-7xl font-bold text-gold/15">02</span>
            <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mb-6">
              <i data-feather="file-text" className="text-navy-primary text-xl"></i>
            </div>
            <h3 className="font-heading text-xl mb-4">Tempor Incididunt Labore</h3>
            <p className="text-gray-300 mb-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Excepteur sint occaecat</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Cupidatat non proident</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Sunt in culpa qui</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Officia deserunt mollit</span>
              </li>
            </ul>
            <button onClick={() => navigateToSection('booking')} className="block w-full bg-gradient-to-r from-gold to-gold-dark text-navy-primary font-semibold py-3 rounded-lg text-center hover:shadow-lg transition-all">Dolor Sit</button>
          </div>

          <div className="glass-card rounded-xl p-8 relative overflow-hidden">
            <span className="absolute top-4 right-6 text-7xl font-bold text-gold/15">03</span>
            <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mb-6">
              <i data-feather="trending-up" className="text-navy-primary text-xl"></i>
            </div>
            <h3 className="font-heading text-xl mb-4">Exercitation Ullamco Laboris</h3>
            <p className="text-gray-300 mb-5">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Totam rem aperiam eaque</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Ipsa quae ab illo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Inventore veritatis quasi</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Architecto beatae vitae</span>
              </li>
            </ul>
            <button onClick={() => navigateToSection('booking')} className="block w-full bg-gradient-to-r from-gold to-gold-dark text-navy-primary font-semibold py-3 rounded-lg text-center hover:shadow-lg transition-all">Amet Elit</button>
          </div>

          <div className="glass-card rounded-xl p-8 relative overflow-hidden">
            <span className="absolute top-4 right-6 text-7xl font-bold text-gold/15">04</span>
            <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mb-6">
              <i data-feather="users" className="text-navy-primary text-xl"></i>
            </div>
            <h3 className="font-heading text-xl mb-4">Nemo Enim Ipsam</h3>
            <p className="text-gray-300 mb-5">Voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Eos qui ratione voluptatem</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Sequi nesciunt neque porro</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Quisquam est qui dolorem</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Ipsum quia dolor sit</span>
              </li>
            </ul>
            <button onClick={() => navigateToSection('booking')} className="block w-full bg-gradient-to-r from-gold to-gold-dark text-navy-primary font-semibold py-3 rounded-lg text-center hover:shadow-lg transition-all">Consectetur</button>
          </div>

          <div className="glass-card rounded-xl p-8 relative overflow-hidden">
            <span className="absolute top-4 right-6 text-7xl font-bold text-gold/15">05</span>
            <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mb-6">
              <i data-feather="clipboard" className="text-navy-primary text-xl"></i>
            </div>
            <h3 className="font-heading text-xl mb-4">Amet Consectetur Adipiscing</h3>
            <p className="text-gray-300 mb-5">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Sed quia non numquam</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Eius modi tempora incidunt</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Ut labore et dolore</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Magnam aliquam quaerat</span>
              </li>
            </ul>
            <button onClick={() => navigateToSection('booking')} className="block w-full bg-gradient-to-r from-gold to-gold-dark text-navy-primary font-semibold py-3 rounded-lg text-center hover:shadow-lg transition-all">Adipiscing</button>
          </div>

          <div className="glass-card rounded-xl p-8 relative overflow-hidden">
            <span className="absolute top-4 right-6 text-7xl font-bold text-gold/15">06</span>
            <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mb-6">
              <i data-feather="briefcase" className="text-navy-primary text-xl"></i>
            </div>
            <h3 className="font-heading text-xl mb-4">Voluptatem Accusantium</h3>
            <p className="text-gray-300 mb-5">Doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Quasi architecto beatae</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Vitae dicta sunt explicabo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Nemo enim ipsam voluptatem</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Quia voluptas sit aspernatur</span>
              </li>
            </ul>
            <button onClick={() => navigateToSection('booking')} className="block w-full bg-gradient-to-r from-gold to-gold-dark text-navy-primary font-semibold py-3 rounded-lg text-center hover:shadow-lg transition-all">Elit Sed</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
