import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator as CalcIcon, Percent, Calendar, DollarSign, ArrowRight, Info } from 'lucide-react';

const Calculator = () => {
  const [amount, setAmount] = useState(500000);
  const [term, setTerm] = useState(30);
  const [rate, setRate] = useState(9.5);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    const calculatePayment = () => {
      const monthlyRate = (rate / 100) / 12;
      const numberOfPayments = term * 12;
      const payment = (amount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      if (isNaN(payment) || !isFinite(payment)) setMonthlyPayment(0);
      else setMonthlyPayment(payment);
    };
    calculatePayment();
  }, [amount, term, rate]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    <section id="simulador" className="py-32 bg-primary relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Info Side */}
          <div className="lg:w-2/5 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-12 h-px bg-secondary" />
              <span className="text-secondary text-sm font-bold tracking-[0.3em] uppercase">Simulador Inteligente</span>
            </motion.div>
            
            <h2 className="text-4xl lg:text-6xl font-heading font-bold text-white leading-tight">
              Planeje sua <br />
              <span className="text-gradient-gold">Conquista agora.</span>
            </h2>
            
            <p className="text-white/50 text-lg leading-relaxed">
              Utilize nossa ferramenta exclusiva para visualizar cenários e encontrar o equilíbrio perfeito entre prazo e investimento. Transparência total, sem letras miúdas.
            </p>

            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 flex items-start gap-4">
              <Info className="text-secondary shrink-0" size={20} />
              <p className="text-white/40 text-sm">
                Valores estimados baseados em taxas médias de mercado. Sujeito a análise de crédito personalizada.
              </p>
            </div>
          </div>

          {/* Calculator Tool */}
          <div className="lg:w-3/5 w-full">
            <div className="glass p-8 lg:p-12 rounded-[3rem] shadow-2xl relative">
              <div className="grid md:grid-cols-2 gap-12">
                
                {/* Inputs */}
                <div className="space-y-10">
                  <div className="space-y-4">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-secondary">
                      <div className="flex items-center gap-2"><DollarSign size={14} /> Valor do Imóvel</div>
                      <span className="text-white">{formatCurrency(amount)}</span>
                    </div>
                    <input 
                      type="range" 
                      min="100000" max="5000000" step="50000" 
                      value={amount} 
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-secondary" 
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-secondary">
                      <div className="flex items-center gap-2"><Calendar size={14} /> Prazo (Anos)</div>
                      <span className="text-white">{term} anos</span>
                    </div>
                    <input 
                      type="range" 
                      min="5" max="35" step="1" 
                      value={term} 
                      onChange={(e) => setTerm(Number(e.target.value))}
                      className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-secondary" 
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-secondary">
                      <div className="flex items-center gap-2"><Percent size={14} /> Taxa Anual</div>
                      <span className="text-white">{rate}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="5" max="15" step="0.1" 
                      value={rate} 
                      onChange={(e) => setRate(Number(e.target.value))}
                      className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-secondary" 
                    />
                  </div>
                </div>

                {/* Vertical Result Card */}
                <div className="bg-white/[0.03] border border-white/5 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                    <CalcIcon size={28} />
                  </div>
                  
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold mb-2">Parcela Estimada</span>
                  <div className="text-4xl lg:text-5xl font-black text-white mb-8 select-none">
                    {formatCurrency(monthlyPayment)}
                  </div>

                  <button className="w-full btn-premium btn-premium-solid flex items-center justify-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> Solicitar Análise <ArrowRight size={18} />
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Calculator;
