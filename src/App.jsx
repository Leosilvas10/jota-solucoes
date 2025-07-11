
import React, { useState } from 'react';
import './App.css';

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 glass-effect">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-jota-primary to-jota-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">J</span>
            </div>
            <span className="text-xl font-bold text-white">Jota Soluções</span>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-jota-accent transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('servicos')} className="text-white hover:text-jota-accent transition-colors">
              Serviços
            </button>
            <button onClick={() => scrollToSection('sobre')} className="text-white hover:text-jota-accent transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-white hover:text-jota-accent transition-colors">
              Contato
            </button>
          </nav>

          <button 
            onClick={() => scrollToSection('formulario')}
            className="hidden md:block btn-primary text-white px-6 py-2 rounded-lg font-semibold"
          >
            Quero meu diagnóstico gratuito
          </button>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-jota-accent transition-colors text-left">
                Início
              </button>
              <button onClick={() => scrollToSection('servicos')} className="text-white hover:text-jota-accent transition-colors text-left">
                Serviços
              </button>
              <button onClick={() => scrollToSection('sobre')} className="text-white hover:text-jota-accent transition-colors text-left">
                Sobre
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-white hover:text-jota-accent transition-colors text-left">
                Contato
              </button>
              <button 
                onClick={() => scrollToSection('formulario')}
                className="btn-primary text-white px-6 py-2 rounded-lg font-semibold text-left w-fit"
              >
                Quero meu diagnóstico gratuito
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

// Hero Section
const Hero = () => {
  const scrollToForm = () => {
    const element = document.getElementById('formulario');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen gradient-bg flex items-center section-padding pt-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Descubra como <span className="text-jota-accent">transformar</span> a saúde financeira da sua empresa!
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Receba um diagnóstico financeiro gratuito e tenha uma reunião estratégica com o CEO da Jota Soluções.
            </p>
            <button 
              onClick={scrollToForm}
              className="btn-primary text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center space-x-2"
            >
              <span>Quero meu diagnóstico gratuito</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="card-dark p-8 rounded-2xl max-w-md w-full">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">Dashboard Financeiro</h3>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-jota-primary to-jota-accent p-4 rounded-lg">
                    <p className="text-sm text-gray-300">Receita Mensal</p>
                    <p className="text-2xl font-bold text-white">R$ 450k</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-lg">
                    <p className="text-sm text-gray-300">Lucro</p>
                    <p className="text-2xl font-bold text-white">R$ 89k</p>
                  </div>
                </div>
                
                <div className="h-32 bg-gradient-to-r from-jota-primary/20 to-jota-accent/20 rounded-lg flex items-end justify-center p-4">
                  <div className="flex items-end space-x-2">
                    <div className="w-4 h-12 bg-jota-accent rounded"></div>
                    <div className="w-4 h-16 bg-jota-primary rounded"></div>
                    <div className="w-4 h-8 bg-jota-accent rounded"></div>
                    <div className="w-4 h-20 bg-jota-primary rounded"></div>
                    <div className="w-4 h-14 bg-jota-accent rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Dores Section
const Dores = () => {
  const dores = [
    {
      icon: "📊",
      title: "Não sabe se o negócio está dando lucro",
      description: "Você trabalha muito, mas não tem certeza se está realmente ganhando dinheiro?"
    },
    {
      icon: "🎯",
      title: "Decisões sem base nos números",
      description: "Toma decisões importantes baseado no 'feeling' ao invés de dados concretos?"
    },
    {
      icon: "💡",
      title: "Falta de clareza no planejamento",
      description: "Não tem visão clara de onde sua empresa está e para onde ela vai?"
    },
    {
      icon: "🚀",
      title: "Insegurança para crescer",
      description: "Quer expandir o negócio mas tem medo de dar o próximo passo?"
    }
  ];

  return (
    <section className="section-padding bg-jota-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Você reconhece essas <span className="text-jota-accent">dores</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A maioria dos empresários passa por essas situações. Você não está sozinho.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dores.map((dor, index) => (
            <div key={index} className="card-dark p-6 rounded-xl text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">{dor.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-3">{dor.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{dor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Benefícios Section
const Beneficios = () => {
  const beneficios = [
    {
      icon: "🔍",
      title: "Clareza total dos números",
      description: "Tenha visão completa da saúde financeira da sua empresa"
    },
    {
      icon: "📈",
      title: "Metas e resultados visíveis",
      description: "Acompanhe o progresso do seu negócio com indicadores claros"
    },
    {
      icon: "💼",
      title: "Decisões estratégicas",
      description: "Tome decisões inteligentes baseadas em dados reais"
    },
    {
      icon: "🤝",
      title: "Apoio especializado",
      description: "Conte com especialistas em BPO Financeiro ao seu lado"
    }
  ];

  return (
    <section id="servicos" className="section-padding gradient-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Transforme sua empresa com <span className="text-jota-accent">clareza financeira</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Descubra como nosso BPO Financeiro pode revolucionar a gestão da sua empresa
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {beneficios.map((beneficio, index) => (
            <div key={index} className="card-dark p-6 rounded-xl text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">{beneficio.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-3">{beneficio.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{beneficio.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Sobre Section
const Sobre = () => {
  return (
    <section id="sobre" className="section-padding bg-jota-dark">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Sobre a <span className="text-jota-accent">Jota Soluções</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Somos especialistas em BPO Financeiro, ajudando pequenas e médias empresas a organizarem suas finanças 
              e tomarem decisões mais inteligentes baseadas em dados reais.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Nossa missão é transformar a gestão financeira das empresas, proporcionando clareza, controle e 
              crescimento sustentável através de soluções personalizadas.
            </p>
            
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-jota-accent mb-2">500+</div>
                <div className="text-sm text-gray-300">Empresas Atendidas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-jota-accent mb-2">95%</div>
                <div className="text-sm text-gray-300">Satisfação</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-jota-accent mb-2">5+</div>
                <div className="text-sm text-gray-300">Anos de Experiência</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="card-dark p-8 rounded-2xl max-w-md">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-jota-primary to-jota-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">CEO</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">João Silva</h3>
                <p className="text-gray-300">CEO & Fundador</p>
              </div>
              <p className="text-gray-300 text-center text-sm leading-relaxed">
                "Minha paixão é ajudar empresários a alcançarem seus objetivos através de uma gestão financeira eficiente e estratégica."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Provas Sociais Section
const ProvasSociais = () => {
  const depoimentos = [
    {
      nome: "Maria Santos",
      empresa: "Boutique Elegance",
      depoimento: "Após o diagnóstico da Jota Soluções, consegui ter clareza total dos meus números. Meu faturamento aumentou 40% em 6 meses!",
      rating: 5
    },
    {
      nome: "Carlos Oliveira",
      empresa: "TechStart Solutions",
      depoimento: "O BPO Financeiro transformou minha empresa. Agora tomo decisões baseadas em dados, não no achismo. Recomendo!",
      rating: 5
    },
    {
      nome: "Ana Costa",
      empresa: "Padaria Artesanal",
      depoimento: "Finalmente entendo se minha empresa está dando lucro. O suporte é excepcional e os resultados são visíveis!",
      rating: 5
    }
  ];

  return (
    <section className="section-padding gradient-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            O que nossos <span className="text-jota-accent">clientes dizem</span>
          </h2>
          <p className="text-xl text-gray-300">
            Veja os resultados reais de empresários que transformaram seus negócios
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {depoimentos.map((depoimento, index) => (
            <div key={index} className="card-dark p-6 rounded-xl">
              <div className="flex mb-4">
                {[...Array(depoimento.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">"{depoimento.depoimento}"</p>
              <div>
                <div className="font-semibold text-white">{depoimento.nome}</div>
                <div className="text-sm text-jota-accent">{depoimento.empresa}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Formulário Section
const Formulario = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    faturamento: '',
    segmento: '',
    contasBancarias: '',
    lgpd: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você integraria com o CRM Clint
    console.log('Dados do formulário:', formData);
    alert('Formulário enviado com sucesso! Você será redirecionado para agendar sua reunião.');
    // Redirecionar para página de agradecimento
  };

  return (
    <section id="formulario" className="section-padding bg-jota-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Solicite seu <span className="text-jota-accent">Diagnóstico Gratuito</span>
            </h2>
            <p className="text-xl text-gray-300">
              Preencha o formulário e receba sua análise financeira personalizada
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="card-dark p-8 rounded-2xl space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-jota-dark border border-gray-600 rounded-lg text-white focus:border-jota-accent focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-jota-dark border border-gray-600 rounded-lg text-white focus:border-jota-accent focus:outline-none"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Telefone (WhatsApp) *
                </label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-jota-dark border border-gray-600 rounded-lg text-white focus:border-jota-accent focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nome da Empresa *
                </label>
                <input
                  type="text"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-jota-dark border border-gray-600 rounded-lg text-white focus:border-jota-accent focus:outline-none"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Faturamento Mensal *
                </label>
                <select
                  name="faturamento"
                  value={formData.faturamento}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-jota-dark border border-gray-600 rounded-lg text-white focus:border-jota-accent focus:outline-none"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="até-10k">Até R$ 10.000</option>
                  <option value="10k-50k">R$ 10.000 - R$ 50.000</option>
                  <option value="50k-100k">R$ 50.000 - R$ 100.000</option>
                  <option value="100k-500k">R$ 100.000 - R$ 500.000</option>
                  <option value="acima-500k">Acima de R$ 500.000</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Segmento de Atuação *
                </label>
                <select
                  name="segmento"
                  value={formData.segmento}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-jota-dark border border-gray-600 rounded-lg text-white focus:border-jota-accent focus:outline-none"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="comercio">Comércio</option>
                  <option value="servicos">Serviços</option>
                  <option value="industria">Indústria</option>
                  <option value="tecnologia">Tecnologia</option>
                  <option value="consultoria">Consultoria</option>
                  <option value="outros">Outros</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Quantas contas bancárias sua empresa possui? *
              </label>
              <select
                name="contasBancarias"
                value={formData.contasBancarias}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-jota-dark border border-gray-600 rounded-lg text-white focus:border-jota-accent focus:outline-none"
              >
                <option value="">Selecione uma opção</option>
                <option value="1">1 conta</option>
                <option value="2-3">2 a 3 contas</option>
                <option value="4-5">4 a 5 contas</option>
                <option value="mais-5">Mais de 5 contas</option>
              </select>
            </div>
            
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="lgpd"
                id="lgpd"
                checked={formData.lgpd}
                onChange={handleChange}
                required
                className="mt-1 w-4 h-4 text-jota-accent bg-jota-dark border-gray-600 rounded focus:ring-jota-accent"
              />
              <label htmlFor="lgpd" className="text-sm text-gray-300 leading-relaxed">
                Concordo com o tratamento dos meus dados pessoais de acordo com a 
                <a href="#" className="text-jota-accent hover:underline"> Política de Privacidade</a> 
                e autorizo o contato para apresentação dos serviços. *
              </label>
            </div>
            
            <button
              type="submit"
              className="w-full btn-primary text-white py-4 rounded-lg font-semibold text-lg"
            >
              Quero meu diagnóstico gratuito!
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      pergunta: "O diagnóstico é realmente gratuito?",
      resposta: "Sim, o diagnóstico inicial é 100% gratuito. Analisamos sua situação atual e apresentamos as oportunidades de melhoria sem nenhum custo."
    },
    {
      pergunta: "Quanto tempo demora o diagnóstico?",
      resposta: "O diagnóstico completo leva em média 3 a 5 dias úteis. Após a análise, agendamos uma reunião para apresentar os resultados e recomendações."
    },
    {
      pergunta: "Meus dados ficarão seguros?",
      resposta: "Sim, trabalhamos com total sigilo e confidencialidade. Todos os dados são protegidos e utilizados apenas para a análise solicitada."
    },
    {
      pergunta: "O que está incluído no BPO Financeiro?",
      resposta: "Incluímos controle de fluxo de caixa, conciliação bancária, relatórios gerenciais, análise de indicadores e consultoria estratégica mensal."
    },
    {
      pergunta: "Vocês atendem empresas de qualquer tamanho?",
      resposta: "Sim, atendemos desde MEIs até empresas de médio porte. Nossos serviços são adaptados ao tamanho e necessidade de cada negócio."
    }
  ];

  return (
    <section className="section-padding gradient-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Perguntas <span className="text-jota-accent">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-300">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="card-dark rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold text-white">{faq.pergunta}</span>
                <svg 
                  className={`w-5 h-5 text-jota-accent transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed">{faq.resposta}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer id="contato" className="bg-jota-dark border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-jota-primary to-jota-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">J</span>
              </div>
              <span className="text-xl font-bold text-white">Jota Soluções</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Especialistas em BPO Financeiro, ajudando empresas a organizarem suas finanças e crescerem com segurança.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-jota-accent transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-jota-accent transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-jota-accent transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-300">
              <li>BPO Financeiro</li>
              <li>Diagnóstico Gratuito</li>
              <li>Consultoria Estratégica</li>
              <li>Controle de Fluxo de Caixa</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
            <div className="space-y-2 text-gray-300">
              <p>📧 contato@jotasolucoes.com.br</p>
              <p>📱 (11) 99999-9999</p>
              <p>📍 São Paulo - SP</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Jota Soluções. Todos os direitos reservados.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-jota-accent transition-colors">Política de Privacidade</a> | 
            <a href="#" className="hover:text-jota-accent transition-colors ml-2">Termos de Uso</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
export default function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Dores />
      <Beneficios />
      <Sobre />
      <ProvasSociais />
      <Formulario />
      <FAQ />
      <Footer />
    </div>
  );
}
