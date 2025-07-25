import { useState, useEffect } from 'react';

export const useJotaData = (enablePolling = false, pollingInterval = 30000) => {
  const [landingData, setLandingData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  const fetchJotaData = async (attempt = 1) => {
    try {
      if (attempt === 1) setError(null);
      
      console.log(`🔄 Tentativa ${attempt} - Carregando dados Jota Soluções...`);
      
      // URL da API configurada para seu servidor
      const apiUrl = import.meta.env.VITE_API_URL || 'http://212.85.10.205:3000';
      
      // Endpoint específico do Jota Soluções
      const response = await fetch(`${apiUrl}/api/content/landing/jota-solucoes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        signal: AbortSignal.timeout(15000)
      });

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      const result = await response.json();
      console.log('✅ Dados Jota Soluções carregados:', result);
      
      // Extrair dados da resposta
      let data = null;
      if (result.data) {
        data = result.data;
      } else if (result.landing) {
        data = result.landing;
      } else {
        data = result;
      }
      
      setLandingData(data);
      setRetryCount(0);
      
    } catch (err) {
      console.error(`❌ Erro na tentativa ${attempt}:`, err);
      
      // Retry logic - até 3 tentativas
      if (attempt < 3) {
        console.log(`🔄 Tentando novamente em 3 segundos... (${attempt}/3)`);
        setTimeout(() => {
          fetchJotaData(attempt + 1);
        }, 3000);
        return;
      }
      
      console.log('⚠️ Usando dados padrão Jota Soluções');
      setError(`Erro após ${attempt} tentativas: ${err.message}`);
      setRetryCount(attempt);
      
      // Dados de fallback específicos para Jota Soluções
      setLandingData({
        title: 'Jota Soluções',
        subtitle: 'Descubra como transformar a saúde financeira da sua empresa!',
        cta: 'Quero meu diagnóstico gratuito',
        description: 'Receba um diagnóstico financeiro gratuito e tenha uma reunião estratégica com o CEO da Jota Soluções.',
        blocos: {
          heroi: {
            destaque: 'Descubra como transformar a saúde financeira da sua empresa!',
            cta: 'Quero meu diagnóstico gratuito'
          },
          dores: {
            itens: [
              'Não sabe se o negócio está dando lucro',
              'Decisões sem base nos números',
              'Falta de clareza no planejamento',
              'Insegurança para crescer'
            ]
          },
          solucoes: {
            itens: [
              'Clareza total dos números',
              'Metas e resultados visíveis',
              'Decisões estratégicas',
              'Apoio especializado'
            ]
          },
          sobre: {
            texto: 'Somos especialistas em BPO Financeiro, ajudando pequenas e médias empresas a organizarem suas finanças e tomarem decisões mais inteligentes baseadas em dados reais.',
            dados: ['500+ Empresas Atendidas', '95% Satisfação', '5+ Anos de Experiência'],
            ceo: {
              nome: 'João Silva',
              cargo: 'CEO & Fundador',
              frase: 'Minha paixão é ajudar empresários a alcançarem seus objetivos através de uma gestão financeira eficiente e estratégica.'
            }
          },
          depoimentos: {
            clientes: [
              {
                nome: 'Maria Santos',
                empresa: 'Boutique Elegance',
                texto: 'Após o diagnóstico da Jota Soluções, consegui ter clareza total dos meus números. Meu faturamento aumentou 40% em 6 meses!'
              },
              {
                nome: 'Carlos Oliveira',
                empresa: 'TechStart Solutions',
                texto: 'O BPO Financeiro transformou minha empresa. Agora tomo decisões baseadas em dados, não no achismo. Recomendo!'
              },
              {
                nome: 'Ana Costa',
                empresa: 'Padaria Artesanal',
                texto: 'Finalmente entendo se minha empresa está dando lucro. O suporte é excepcional e os resultados são visíveis!'
              }
            ]
          }
        },
        status: 'fallback'
      });
    } finally {
      setLoading(false);
    }
  };

  // Effect para carregamento inicial
  useEffect(() => {
    fetchJotaData();
  }, []);

  // Effect para polling (se habilitado)
  useEffect(() => {
    if (!enablePolling) return;

    const interval = setInterval(() => {
      console.log('🔄 Polling automático - Atualizando dados Jota Soluções...');
      fetchJotaData();
    }, pollingInterval);

    return () => clearInterval(interval);
  }, [enablePolling, pollingInterval]);

  // Função para refetch manual
  const refetch = () => {
    console.log('🔄 Refetch manual Jota Soluções');
    setLoading(true);
    setError(null);
    setRetryCount(0);
    fetchJotaData();
  };

  // Status da conexão
  const connectionStatus = {
    isConnected: !!landingData && !error,
    hasError: !!error,
    retryCount,
    isUsingFallback: landingData?.status === 'fallback',
    apiUrl: import.meta.env.VITE_API_URL || 'http://212.85.10.205:3000'
  };

  return {
    landingData,
    loading,
    error,
    refetch,
    connectionStatus
  };
};

export default useJotaData;
