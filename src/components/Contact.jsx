import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-32 relative overflow-hidden bg-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-12">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="w-12 h-px bg-secondary" />
                <span className="text-secondary text-sm font-bold tracking-[0.3em] uppercase">Contato</span>
              </motion.div>
              
              <h2 className="text-4xl lg:text-7xl font-heading font-bold text-white mb-8 leading-tight">
                Vamos Conversar <br />
                <span className="text-gradient-gold">Sobre seu Futuro.</span>
              </h2>
              
              <p className="text-white/50 text-xl leading-relaxed max-w-lg">
                Nossa equipe de especialistas está pronta para analisar seu perfil e entregar a solução financeira definitiva.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-10">
              <div className="space-y-2">
                <p className="text-secondary text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> Telefone & WhatsApp
                </p>
                <p className="text-white text-xl font-bold">(14) 98841-4686</p>
              </div>
              <div className="space-y-2">
                <p className="text-secondary text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                  <Mail size={14} /> E-mail Direto
                </p>
                <p className="text-white text-xl font-bold">contato@monify.com.br</p>
              </div>
              <div className="space-y-2">
                <p className="text-secondary text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                  <MapPin size={14} /> Localização
                </p>
                <p className="text-white text-xl font-bold">Atendimento Nacional</p>
              </div>
              <div className="space-y-4">
                <p className="text-secondary text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                  Siga-nos
                </p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-secondary hover:border-secondary transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-secondary hover:border-secondary transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="glass p-8 lg:p-12 rounded-[3.5rem] shadow-2xl relative"
            >
              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-6">
                  {/* Row 1: Name */}
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/60 ml-1 block">
                      Nome Completo
                    </label>
                    <input 
                      type="text" 
                      placeholder="Ex: João Silva" 
                      className="w-full bg-white/[0.03] border border-white/10 p-5 rounded-2xl focus:border-secondary focus:ring-1 focus:ring-secondary text-white outline-none transition-all placeholder:text-white/20" 
                    />
                  </div>

                  {/* Row 2: Email & WhatsApp */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/60 ml-1 block">
                        E-mail
                      </label>
                      <input 
                        type="email" 
                        placeholder="contato@exemplo.com" 
                        className="w-full bg-white/[0.03] border border-white/10 p-5 rounded-2xl focus:border-secondary focus:ring-1 focus:ring-secondary text-white outline-none transition-all placeholder:text-white/20" 
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/60 ml-1 block">
                        WhatsApp
                      </label>
                      <input 
                        type="tel" 
                        placeholder="(00) 00000-0000" 
                        className="w-full bg-white/[0.03] border border-white/10 p-5 rounded-2xl focus:border-secondary focus:ring-1 focus:ring-secondary text-white outline-none transition-all placeholder:text-white/20" 
                      />
                    </div>
                  </div>

                  {/* Row 3: Subject */}
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/60 ml-1 block">
                      Assunto de Interesse
                    </label>
                    <select 
                      className="w-full bg-white/[0.03] border border-white/10 p-5 rounded-2xl focus:border-secondary focus:ring-1 focus:ring-secondary text-white outline-none transition-all cursor-pointer appearance-none"
                    >
                      <option className="bg-primary text-white">Financiamento Imobiliário</option>
                      <option className="bg-primary text-white">Refinanciamento (Home Equity)</option>
                      <option className="bg-primary text-white">Consórcio de Luxo</option>
                      <option className="bg-primary text-white">Consultoria de Investimentos</option>
                    </select>
                  </div>

                  {/* Row 4: Message */}
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/60 ml-1 block">
                      Sua Mensagem (Opcional)
                    </label>
                    <textarea 
                      rows="4"
                      placeholder="Como podemos ajudar você hoje?"
                      className="w-full bg-white/[0.03] border border-white/10 p-5 rounded-2xl focus:border-secondary focus:ring-1 focus:ring-secondary text-white outline-none transition-all placeholder:text-white/20 resize-none"
                    ></textarea>
                  </div>
                </div>
                
                <button className="w-full btn-premium btn-premium-solid py-6 rounded-[2.5rem] flex items-center justify-center gap-3 text-sm font-bold transition-all shadow-[0_20px_40px_rgba(201,160,80,0.15)] group">
                  Enviar Solicitação <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
