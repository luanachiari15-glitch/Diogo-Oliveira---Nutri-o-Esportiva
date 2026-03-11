/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ChevronDown, 
  Instagram, 
  MessageSquare, 
  ShieldCheck, 
  Star, 
  TrendingUp, 
  Zap,
  Target,
  ClipboardList,
  Video,
  Calendar,
  ArrowRight,
  Menu,
  X,
  Phone
} from 'lucide-react';

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.5, ease: "easeOut" }
  };
  
  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
    viewport: { once: true, margin: "-50px" }
  };

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqs = [
    {
      question: "Como funciona o acompanhamento pelo app?",
      answer: "Você terá acesso a um aplicativo exclusivo onde seu plano alimentar, suplementação e treinos estarão disponíveis. Por lá, você registra suas refeições, peso e fotos para que eu possa analisar sua evolução em tempo real."
    },
    {
      question: "Com que frequência são os check-ins?",
      answer: "Os check-ins são semanais. Toda semana você me envia seu feedback e métricas, eu analiso cada detalhe e faço os ajustes necessários no seu protocolo para garantir que você não estagne."
    },
    {
      question: "Preciso de suplementos caros?",
      answer: "Não. A base de qualquer resultado sólido é a comida de verdade. Suplementos são 'cerejas do bolo' e só serão prescritos se houver necessidade real e se couberem no seu orçamento."
    },
    {
      question: "Funciona para quem treina em casa?",
      answer: "Com certeza. O planejamento nutricional é ajustado ao seu gasto energético. Se você treina em casa, sua dieta será calculada para essa realidade, garantindo o aporte de nutrientes necessário para seus objetivos."
    }
  ];

  return (
    <div className="min-h-screen selection:bg-neon-green selection:text-dark-bg bg-dark-bg">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-bg/90 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="text-xl md:text-2xl font-black tracking-tighter">
            DIOGO<span className="text-neon-green">OLIVEIRA</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#metodo" className="text-sm font-bold text-white/60 hover:text-neon-green transition-colors">O Método</a>
            <a href="#sobre" className="text-sm font-bold text-white/60 hover:text-neon-green transition-colors">Sobre</a>
            <a href="#faq" className="text-sm font-bold text-white/60 hover:text-neon-green transition-colors">FAQ</a>
            <a 
              href="http://wa.me/5514996009328"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neon-green text-dark-bg px-6 py-2.5 rounded-full font-black text-sm hover:scale-105 transition-all neon-shadow"
            >
              QUERO MEU PROTOCOLO
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-dark-bg border-b border-white/10 p-6 flex flex-col gap-6 md:hidden shadow-2xl"
            >
              <a href="#metodo" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold">O Método</a>
              <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold">Sobre</a>
              <a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold">FAQ</a>
              <a 
                href="http://wa.me/5514996009328"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neon-green text-dark-bg py-4 rounded-xl font-black text-lg text-center"
              >
                QUERO MEU PROTOCOLO
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-24 pb-12 md:pt-32 md:pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Full Screen Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/r2kjKjyJ/Gemini-Generated-Image-y7788ey7788ey778.png" 
            alt="Background" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover blur-[3px] brightness-[0.35] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/70 via-dark-bg/50 to-dark-bg" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-neon-green/10 border border-neon-green/20 text-neon-green text-[9px] md:text-xs font-black uppercase tracking-[0.2em] mb-6 md:mb-8">
                <Zap size={14} className="animate-pulse" />
                Nutrição de Alta Performance
              </div>
              <h1 className="text-[clamp(1.25rem,4vw+1rem,4rem)] font-black leading-[1.05] mb-6 md:mb-8 tracking-tighter text-center lg:text-left">
                NUTRIÇÃO ONLINE <br />
                <span className="block text-neon-green neon-text-shadow">ACOMPANHAMENTO</span>
                SEMANAL REAL
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 mb-8 md:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Esqueça os PDFs genéricos. Eu analiso sua evolução semanalmente e ajusto seu protocolo até você atingir o shape que sempre quis.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 md:gap-6">
                <motion.a 
                  href="http://wa.me/5514996009328"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  animate={{ 
                    boxShadow: [
                      "0 0 20px rgba(0, 255, 136, 0.2)",
                      "0 0 40px rgba(0, 255, 136, 0.4)",
                      "0 0 20px rgba(0, 255, 136, 0.2)"
                    ]
                  }}
                  transition={{ 
                    boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="group relative bg-neon-green/90 backdrop-blur-md text-dark-bg px-6 py-3.5 md:px-10 md:py-5 rounded-2xl font-black text-sm md:text-lg flex items-center justify-center gap-3 overflow-hidden"
                >
                  {/* Blurred light effect */}
                  <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <span className="relative z-10">QUERO MEU PROTOCOLO</span>
                  <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <div className="flex items-center justify-center gap-4 py-4 sm:py-0">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 md:border-4 border-dark-bg bg-zinc-800 flex items-center justify-center overflow-hidden">
                        <img 
                          src={`https://picsum.photos/seed/user${i}/100/100`} 
                          alt="User" 
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover opacity-90"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1 text-neon-green mb-0.5">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/40">500+ Alunos</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - Mobile Friendly */}
      <section className="py-8 md:py-12 border-y border-white/5 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          {[
            { label: "Alunos", value: "500+" },
            { label: "Anos Exp.", value: "7+" },
            { label: "Satisfação", value: "99%" },
            { label: "Protocolos", value: "100%" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl md:text-4xl font-black text-neon-green mb-0.5 md:mb-1">{stat.value}</p>
              <p className="text-[9px] md:text-xs font-black uppercase tracking-widest text-white/40">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 tracking-tighter uppercase">POR QUE VOCÊ ESTAGNOU?</h2>
            <p className="text-white/50 max-w-2xl mx-auto mb-12 md:mb-20 text-sm sm:text-base md:text-lg leading-relaxed">
              A maioria das pessoas falha não por falta de vontade, mas por seguir estratégias genéricas que ignoram sua individualidade biológica.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10"
          >
            {[
              {
                title: "Esforço sem resultado",
                desc: "Você treina pesado e faz dieta, mas o espelho parou de mudar há meses.",
                icon: <TrendingUp className="text-neon-green" />
              },
              {
                title: "Protocolos de gaveta",
                desc: "Planos alimentares genéricos que não consideram sua rotina e preferências.",
                icon: <ClipboardList className="text-neon-green" />
              },
              {
                title: "Falta de ajuste fino",
                desc: "Sem acompanhamento constante, o progresso acaba estagnando.",
                icon: <Target className="text-neon-green" />
              }
            ].map((card, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="glass-card p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] text-left hover:border-neon-green/40 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-neon-green/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-neon-green/10 transition-colors" />
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-neon-green/10 flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 group-hover:bg-neon-green group-hover:text-dark-bg transition-all duration-500">
                  {card.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-4 tracking-tight">{card.title}</h3>
                <p className="text-white/40 leading-relaxed text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Method Section */}
      <section id="metodo" className="py-16 md:py-24 lg:py-32 bg-zinc-950/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 uppercase tracking-tighter">O MÉTODO DIOGO OLIVEIRA</h2>
            <p className="text-white/50 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
              Um processo completo e personalizado para garantir evolução constante e sustentável.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { title: "Avaliação física", desc: "Análise completa do seu físico para entender deficiências e necessidades.", icon: <TrendingUp /> },
              { title: "Consulta online", desc: "Chamada de vídeo para entender rotina, exames, sono e treino.", icon: <Video /> },
              { title: "Planejamento", desc: "Plano alimentar, suplementação e estratégia nutricional sob medida.", icon: <ClipboardList /> },
              { title: "Acompanhamento", desc: "Check-ins semanais para ajustes e evolução contínua.", icon: <Calendar />, highlight: true }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden transition-all duration-500 group ${
                  item.highlight 
                  ? 'bg-neon-green/5 border-2 border-neon-green neon-shadow' 
                  : 'glass-card border border-white/5 hover:border-white/20'
                }`}
              >
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-6 md:mb-8 transition-transform group-hover:scale-110 ${item.highlight ? 'bg-neon-green text-dark-bg' : 'bg-white/5 text-neon-green'}`}>
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-black mb-4 tracking-tight">{item.title}</h3>
                <p className="text-white/40 text-xs md:text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Highlight */}
      <section className="py-12 px-6">
        <motion.div 
          {...fadeInUp}
          className="max-w-5xl mx-auto bg-gradient-to-br from-neon-green/20 to-transparent border border-neon-green/20 rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <MessageSquare size={200} />
          </div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-neon-green text-dark-bg text-[10px] font-black uppercase tracking-widest mb-6">
              Exclusivo
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-6 text-white uppercase tracking-tighter">SUPORTE TOTAL VIA WHATSAPP</h2>
            <p className="text-base md:text-xl lg:text-2xl text-white/80 font-medium max-w-3xl mx-auto leading-relaxed">
              Você nunca estará sozinho. Estou disponível para tirar dúvidas e fazer ajustes no seu planejamento sempre que necessário.
            </p>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative"
          >
            <div className="relative p-2 md:p-3 rounded-[2.5rem] md:rounded-[3.5rem] bg-gradient-to-br from-neon-green/20 to-transparent border border-neon-green/20 neon-shadow group">
              <div className="aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative">
                <img 
                  src="https://i.imgur.com/6NA8k8G.png" 
                  alt="Diogo Oliveira" 
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent" />
              </div>
              
              {/* Decorative Corner Elements */}
              <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-neon-green rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-neon-green rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-dark-bg border border-white/10 p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl z-20">
              <p className="text-4xl md:text-5xl font-black text-neon-green mb-1 tracking-tighter">+7</p>
              <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Anos de Experiência</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className=""
          >
            <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] font-black uppercase tracking-widest mb-6">
              Especialista
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-10 uppercase tracking-tighter leading-none">QUEM É <br /> DIOGO OLIVEIRA</h2>
            <p className="text-base md:text-lg lg:text-xl text-white/60 mb-8 md:mb-10 leading-relaxed">
              Unindo ciência de ponta e experiência prática no campo de batalha para gerar resultados que outros dizem ser impossíveis.
            </p>
            <ul className="space-y-4 md:space-y-6 mb-10 md:mb-12">
              {[
                "Graduado em Nutrição pela PUC Minas",
                "Pós-graduado em Nutrição Esportiva",
                "Especialista em estética e performance",
                "Mais de 7 anos transformando shapes"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white/80 group">
                  <div className="w-6 h-6 rounded-full bg-neon-green/20 flex items-center justify-center group-hover:bg-neon-green transition-colors shrink-0">
                    <CheckCircle2 className="text-neon-green group-hover:text-dark-bg transition-colors" size={14} />
                  </div>
                  <span className="font-bold text-sm md:text-base lg:text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <a 
              href="http://wa.me/5514996009328"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-neon-green text-dark-bg px-8 py-4 md:px-10 md:py-5 rounded-2xl font-black text-base md:text-lg hover:scale-105 active:scale-95 transition-all duration-300 neon-shadow text-center"
            >
              COMEÇAR TRANSFORMAÇÃO
            </a>
          </motion.div>
        </div>
      </section>


      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 lg:py-32 bg-dark-bg">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 md:mb-6 uppercase tracking-tighter">Dúvidas Frequentes</h2>
            <p className="text-white/40 font-bold uppercase tracking-widest text-[10px] md:text-xs">Tudo o que você precisa saber</p>
          </motion.div>
          
          <div className="space-y-3 md:space-y-4">
            {faqs.map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: i * 0.05 }}
                className="glass-card rounded-2xl md:rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 transition-colors"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 md:p-8 flex items-center justify-between text-left transition-colors"
                >
                  <span className="font-black text-base md:text-xl pr-6 md:pr-8 tracking-tight">{faq.question}</span>
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center transition-transform duration-500 shrink-0 ${openFaq === i ? 'rotate-180 bg-neon-green text-dark-bg' : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-8 text-white/50 leading-relaxed text-sm md:text-lg">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 px-6 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-6xl mx-auto bg-neon-green text-dark-bg rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 lg:p-24 text-center relative overflow-hidden shadow-[0_0_50px_rgba(0,255,136,0.3)]"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-white blur-[80px] md:blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-white blur-[80px] md:blur-[100px] rounded-full translate-x-1/2 translate-y-1/2" />
          </div>
          
          <h2 className="text-[clamp(1.75rem,8vw,5rem)] font-black mb-6 md:mb-8 tracking-tighter uppercase leading-[0.95] md:leading-[0.9]">
            PRONTO PARA <br /> MUDAR O SHAPE?
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-black mb-8 md:mb-16 opacity-70 tracking-tight">
            Não deixe para segunda-feira o que você pode começar hoje.
          </p>
          
          <a 
            href="http://wa.me/5514996009328"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-dark-bg text-white px-8 py-5 md:px-12 md:py-6 rounded-[1.5rem] md:rounded-[2rem] font-black text-lg md:text-2xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl flex items-center justify-center gap-4 mx-auto mb-10 w-full sm:w-auto"
          >
            <MessageSquare size={28} className="md:w-8 md:h-8" />
            FALAR NO WHATSAPP
          </a>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-[10px] md:text-sm font-black uppercase tracking-[0.2em] opacity-60">
            <div className="flex items-center gap-2 md:gap-3">
              <ShieldCheck size={18} className="md:w-5 md:h-5" />
              100% Seguro
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <Zap size={18} className="md:w-5 md:h-5" />
              Início Imediato
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-24 border-t border-white/5 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 mb-20">
            <div>
              <div className="text-3xl font-black tracking-tighter mb-8">
                DIOGO<span className="text-neon-green">OLIVEIRA</span>
              </div>
              <p className="text-white/40 max-w-md mb-10 leading-relaxed text-lg">
                Nutricionista Esportivo (CRN-9 00000). Especialista em estética, performance, hipertrofia e emagrecimento. Transformando vidas através da nutrição baseada em evidências.
              </p>
              <div className="flex gap-5">
                {[
                  { Icon: Instagram, href: "https://instagram.com/diogooliveira.nutri" },
                  { Icon: MessageSquare, href: "http://wa.me/5514996009328" },
                  { Icon: Phone, href: "tel:+5514996009328" }
                ].map((item, i) => (
                  <a 
                    key={i} 
                    href={item.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center hover:bg-neon-green hover:text-dark-bg transition-all duration-300 group"
                  >
                    <item.Icon size={24} className="group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h4 className="font-black uppercase tracking-[0.2em] mb-8 text-[10px] text-white/30">Navegação</h4>
                <ul className="space-y-5 text-white/50 font-bold">
                  <li><a href="#" className="hover:text-neon-green transition-colors">Início</a></li>
                  <li><a href="#metodo" className="hover:text-neon-green transition-colors">O Método</a></li>
                  <li><a href="#sobre" className="hover:text-neon-green transition-colors">Sobre Mim</a></li>
                  <li><a href="#faq" className="hover:text-neon-green transition-colors">FAQ</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-black uppercase tracking-[0.2em] mb-8 text-[10px] text-white/30">Legal</h4>
                <ul className="space-y-5 text-white/50 font-bold">
                  <li><a href="#" className="hover:text-neon-green transition-colors">Privacidade</a></li>
                  <li><a href="#" className="hover:text-neon-green transition-colors">Termos</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-white/20 text-xs font-black uppercase tracking-widest">
            <p>© {new Date().getFullYear()} Diogo Oliveira. Todos os direitos reservados.</p>
            <p>Performance & Estética</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp for Mobile */}
      <motion.a 
        href="http://wa.me/5514996009328"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 w-14 h-14 md:w-16 md:h-16 bg-neon-green text-dark-bg rounded-full flex items-center justify-center shadow-2xl z-[100] md:hidden neon-shadow"
      >
        <MessageSquare size={28} className="md:w-8 md:h-8" fill="currentColor" />
      </motion.a>
    </div>
  );
}
