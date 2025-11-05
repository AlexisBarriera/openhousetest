import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-navy-medium relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-widest text-sm mb-3">Lorem Ipsum Dolor</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Consectetur Adipiscing <span className="gradient-text">Elit Sed Do</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h3 className="font-heading text-2xl mb-6">Eiusmod Tempor Incididunt Labore</h3>
            <p className="text-gray-300 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p className="text-gray-300 mb-8">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-navy-primary/10 to-navy-medium/10 p-4 rounded-lg border-l-4 border-gold transition-all hover:translate-x-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                    <i data-feather="check" className="text-navy-primary text-sm"></i>
                  </div>
                  <h4 className="font-semibold">Consectetur Adipiscing</h4>
                </div>
                <p className="text-gray-300 mt-2 ml-11">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
              </div>
              <div className="bg-gradient-to-r from-navy-primary/10 to-navy-medium/10 p-4 rounded-lg border-l-4 border-gold transition-all hover:translate-x-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                    <i data-feather="check" className="text-navy-primary text-sm"></i>
                  </div>
                  <h4 className="font-semibold">Tempor Incididunt Labore</h4>
                </div>
                <p className="text-gray-300 mt-2 ml-11">Ut labore et dolore magna aliqua enim ad minim veniam quis nostrud.</p>
              </div>
              <div className="bg-gradient-to-r from-navy-primary/10 to-navy-medium/10 p-4 rounded-lg border-l-4 border-gold transition-all hover:translate-x-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                    <i data-feather="check" className="text-navy-primary text-sm"></i>
                  </div>
                  <h4 className="font-semibold">Exercitation Ullamco</h4>
                </div>
                <p className="text-gray-300 mt-2 ml-11">Laboris nisi ut aliquip ex ea commodo consequat duis aute irure.</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h3 className="font-heading text-2xl mb-6 text-center lg:text-left">Dolor Reprehenderit Voluptate</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card rounded-xl p-6 border-t-4 border-gold">
                <h4 className="font-heading text-xl mb-3 flex items-center gap-2">
                  <i data-feather="shield" className="text-gold"></i> Consectetur
                </h4>
                <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
              </div>
              <div className="glass-card rounded-xl p-6 border-t-4 border-gold">
                <h4 className="font-heading text-xl mb-3 flex items-center gap-2">
                  <i data-feather="award" className="text-gold"></i> Incididunt
                </h4>
                <p className="text-gray-300">Ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation.</p>
              </div>
              <div className="glass-card rounded-xl p-6 border-t-4 border-gold">
                <h4 className="font-heading text-xl mb-3 flex items-center gap-2">
                  <i data-feather="heart" className="text-gold"></i> Ullamco
                </h4>
                <p className="text-gray-300">Laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.</p>
              </div>
              <div className="glass-card rounded-xl p-6 border-t-4 border-gold">
                <h4 className="font-heading text-xl mb-3 flex items-center gap-2">
                  <i data-feather="zap" className="text-gold"></i> Reprehenderit
                </h4>
                <p className="text-gray-300">In voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
