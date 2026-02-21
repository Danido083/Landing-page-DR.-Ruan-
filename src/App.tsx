import React from 'react';
import { motion } from 'motion/react';
import { 
  Stethoscope, 
  HeartPulse, 
  Activity, 
  CheckCircle2, 
  ArrowRight, 
  Instagram, 
  MessageCircle 
} from 'lucide-react';

export default function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const whatsappLink = "https://wa.me/5511999999999"; // Placeholder number

  const Watermark = () => (
    <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-10 overflow-hidden">
      <img 
        src="https://res.cloudinary.com/dtdeapdme/image/upload/v1771673544/MARCA_D_A%CC%81GUA_-_DR._RUAN_MATHIAS-14_oy6oyq.png" 
        alt="" 
        className="w-[80%] max-w-3xl object-contain" 
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-beige-50 text-olive-900 font-sans selection:bg-olive-900 selection:text-beige-100">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-beige-50/90 backdrop-blur-md border-b border-olive-900/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-serif text-2xl font-bold tracking-tight text-olive-900">
            Dr. Ruan Mathias
          </div>
          <a 
            href={whatsappLink}
            className="hidden md:flex items-center gap-2 bg-olive-900 text-beige-100 px-6 py-2.5 rounded-full font-medium hover:bg-olive-800 transition-colors duration-300"
          >
            Agendar Consulta
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <Watermark />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-olive-900/5 text-olive-900 text-sm font-semibold tracking-wide mb-6">
                MEDICINA INTEGRATIVA & LONGEVIDADE
              </span>
              <h1 className="font-serif text-4xl lg:text-6xl font-bold leading-[1.1] mb-6 text-olive-900">
                Recupere sua Autoestima e Energia com Ciência e Empatia.
              </h1>
              <h2 className="text-lg lg:text-xl text-olive-900/80 mb-8 leading-relaxed max-w-lg">
                Um método validado por quem viveu na pele o desafio de emagrecer. 
                Tratamento humanizado, sem "achismos", focado na sua saúde real.
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={whatsappLink}
                  className="inline-flex items-center justify-center gap-2 bg-olive-900 text-beige-100 px-8 py-4 rounded-full font-medium text-lg hover:bg-olive-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Agendar minha avaliação
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-olive-900/10 mix-blend-multiply z-10"></div>
                <img 
                  src="https://res.cloudinary.com/dtdeapdme/image/upload/v1771635230/FOTO1_dqhcvy.jpg" 
                  alt="Dr. Ruan Mathias" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-beige-100 rounded-full z-0 opacity-50 blur-2xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-olive-900/10 rounded-full z-0 blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About / Proof Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <Watermark />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              {...fadeInUp}
              className="order-2 lg:order-1 relative"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl border-8 border-beige-50">
                <img 
                  src="https://res.cloudinary.com/dtdeapdme/image/upload/v1771636516/PROVA-VIVA_bxsjvt.jpg" 
                  alt="Transformação do Dr. Ruan Mathias" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-olive-900/90 to-transparent p-8 pt-24 text-beige-100">
                  <p className="font-serif text-3xl font-bold">-12kg</p>
                  <p className="text-sm uppercase tracking-widest opacity-90">Em apenas 45 dias</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              className="order-1 lg:order-2"
            >
              <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6 text-olive-900">
                Eu entendo sua dor, porque eu já estive no seu lugar.
              </h2>
              <div className="space-y-6 text-lg text-olive-900/80 leading-relaxed">
                <p>
                  Eu sei exatamente o que é sentir frustração ao olhar no espelho, a falta de energia que consome seus dias e a sensação de que nenhuma dieta funciona.
                </p>
                <p>
                  <strong className="text-olive-900">Eu sou a prova viva do meu método.</strong> Apliquei em mim mesmo os protocolos que desenvolvi e eliminei 12kg em 45 dias. Não foi mágica, foi fisiologia aplicada.
                </p>
                <p>
                  Hoje, minha missão é ser o médico que eu gostaria de ter encontrado: alguém que não te julga, que entende suas dificuldades e que usa a ciência para te devolver a vida.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-olive-900/10">
                <h3 className="text-sm font-bold uppercase tracking-wider text-olive-900 mb-4">Credenciais Médicas</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-olive-900" />
                    <span>CRM: 16.988</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-olive-900" />
                    <span>Pós-graduado em Endocrinologia</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-olive-900" />
                    <span>Especialista em Medicina da Dor</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-olive-900 text-beige-100 relative overflow-hidden">
        <Watermark />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div {...fadeInUp}>
            <h2 className="font-serif text-3xl lg:text-5xl font-bold mb-8">
              "Eu trato pessoas, não doenças."
            </h2>
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed font-light">
              Chega de consultas de 5 minutos e receitas prontas. Aqui, você encontra uma medicina sem "achismos", 
              100% embasada em estudos científicos, mas com o calor humano de quem realmente se importa com a sua história.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-beige-50 relative overflow-hidden">
        <Watermark />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-olive-900 mb-4">Áreas de Atuação</h2>
            <p className="text-olive-900/70 max-w-2xl mx-auto">
              Uma abordagem completa para transformar sua saúde de dentro para fora.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Activity className="w-8 h-8" />,
                title: "Emagrecimento Definitivo",
                desc: "Protocolos personalizados para destravar seu metabolismo e promover perda de gordura sustentável, sem efeito sanfona."
              },
              {
                icon: <HeartPulse className="w-8 h-8" />,
                title: "Longevidade e Performance",
                desc: "Estratégias para você viver mais e melhor, com mais disposição, força física e clareza mental para o dia a dia."
              },
              {
                icon: <Stethoscope className="w-8 h-8" />,
                title: "Reposição Hormonal",
                desc: "Equilíbrio hormonal seguro e monitorado para recuperar sua vitalidade, libido e bem-estar geral."
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5, delay: index * 0.1 }
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.2 }
                }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-olive-900/5"
              >
                <div className="w-14 h-14 bg-beige-100 rounded-full flex items-center justify-center text-olive-900 mb-6">
                  {service.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-olive-900 mb-3">{service.title}</h3>
                <p className="text-olive-900/70 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Symptoms / Identification */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-beige-100 rounded-3xl p-8 lg:p-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl font-bold text-olive-900 mb-6">
                  Sinais de que esta consulta é para você
                </h2>
                <p className="text-olive-900/80 mb-8">
                  Se você se identifica com um ou mais itens abaixo, seu corpo está pedindo socorro. Nós podemos mudar isso juntos.
                </p>
                <a 
                  href={whatsappLink}
                  className="hidden md:inline-flex items-center gap-2 text-olive-900 font-bold hover:opacity-80 transition-opacity border-b-2 border-olive-900 pb-1"
                >
                  Quero agendar agora <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <ul className="space-y-4">
                {[
                  "Cansaço constante e falta de energia ao acordar",
                  "Dificuldade para emagrecer mesmo com dietas",
                  "Efeito sanfona (emagrece e engorda tudo de novo)",
                  "Baixa libido e desânimo",
                  "Ansiedade e compulsão alimentar",
                  "Sono de má qualidade e irritabilidade"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 bg-white/50 p-4 rounded-xl"
                  >
                    <div className="mt-1 min-w-[20px]">
                      <div className="w-2 h-2 rounded-full bg-olive-900"></div>
                    </div>
                    <span className="text-olive-900 font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-20 bg-beige-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-olive-900 mb-4">Histórias de Transformação</h2>
            <p className="text-olive-900/70 max-w-2xl mx-auto">
              Resultados reais de quem confiou no método e recuperou a qualidade de vida.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Eu já tinha tentado de tudo, mas sempre voltava a engordar. Com o Dr. Ruan, perdi 8kg de forma leve, sem passar fome. O atendimento dele é diferente, ele realmente te escuta e acolhe. Me sinto renovada.",
                author: "Mariana S.",
                tag: "Emagrecimento"
              },
              {
                text: "Cheguei no consultório sem ânimo para nada. O ajuste hormonal devolveu minha vida, minha disposição e até meu casamento melhorou. Voltei a me reconhecer no espelho.",
                author: "Fernanda L.",
                tag: "Reposição Hormonal"
              },
              {
                text: "O método de 45 dias foi um divisor de águas. Eliminei 10kg e, pela primeira vez, mantive o peso. Entender a fisiologia do meu corpo com a explicação dele fez toda a diferença. Adeus efeito sanfona.",
                author: "Carlos M.",
                tag: "Método 45 Dias"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-olive-900/5 relative"
              >
                <div className="absolute top-6 right-8 text-olive-900/10 font-serif text-6xl leading-none">"</div>
                <p className="text-olive-900/80 leading-relaxed mb-6 relative z-10 italic">
                  {testimonial.text}
                </p>
                <div className="flex items-center justify-between border-t border-olive-900/10 pt-4">
                  <span className="font-serif font-bold text-olive-900">{testimonial.author}</span>
                  <span className="text-xs font-medium uppercase tracking-wider text-olive-900/50">{testimonial.tag}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle / Connection */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="font-serif text-2xl font-bold text-olive-900 mb-6">
              Muito prazer, Ruan.
            </h2>
            <p className="text-lg text-olive-900/80 leading-relaxed italic">
              "Quando tiro o jaleco, sou apaixonado por esportes, adoro treinar e aproveitar o tempo com minha família e meu pet. Acredito que o médico deve ser exemplo daquilo que prega. Eu vivo o estilo de vida que proponho aos meus pacientes, buscando equilíbrio entre disciplina e os prazeres da vida."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-olive-900 text-beige-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-8">
            Pronto para recuperar sua melhor versão?
          </h2>
          <p className="text-beige-100/70 max-w-2xl mx-auto mb-10 text-lg">
            Dê o primeiro passo hoje. Agende sua avaliação e vamos construir juntos o seu plano de tratamento personalizado.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a 
              href={whatsappLink}
              className="inline-flex items-center justify-center gap-2 bg-beige-100 text-olive-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Chamar no WhatsApp
            </a>
          </div>

          <div className="border-t border-beige-100/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-beige-100/50">
            <p>© {new Date().getFullYear()} Dr. Ruan Mathias. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="https://www.instagram.com/drruanmathias/" target="_blank" rel="noopener noreferrer" className="hover:text-beige-100 transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
