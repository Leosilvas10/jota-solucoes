import { useState, useEffect } from 'react';

export const useJotaData = (enablePolling = false, pollingInterval = 30000) => {
  const [landingData, setLandingData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchJotaData = async (attempt = 1) => {
    try {
      if (attempt === 1) setError(null);
      
      console.log(`🔄 Carregando dados Jota Soluções - Tentativa ${attempt}...`);
      
      // Usar variável de ambiente do backend centralizado
      const apiUrl = import.meta.env.VITE_API_URL || 'http://212.85.10.205:3000';
      
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
      
      let data = null;
      if (result.data) {
        data = result.data;
      } else if (result.landing) {
        data = result.landing;
      } else {
        data = result;
      }
      
      setLandingData(data);
      
    } catch (err) {
      console.error(`❌ Erro na tentativa ${attempt}:`, err);
      
      if (attempt < 3) {
        console.log(`🔄 Tentando novamente em 3 segundos... (${attempt}/3)`);
        setTimeout(() => {
          fetchJotaData(attempt + 1);
        }, 3000);
        return;
      }
      
      console.log('⚠️ Usando dados padrão Jota Soluções');
      setError(`Erro após ${attempt} tentativas: ${err.message}`);
      
      // Dados de fallback para Jota Soluções
      setLandingData({
        hero: {
          title: 'Descubra como transformar a saúde financeira da sua empresa!',
          subtitle: 'Receba um diagnóstico financeiro gratuito e tenha uma reunião estratégica com o CEO da Jota Soluções.',
          cta_text: 'Quero meu diagnóstico gratuito'
        },
        sobre: {
          title: 'Jota Soluções',
          description1: 'Somos especialistas em BPO Financeiro, ajudando pequenas e médias empresas.',
          ceo_name: 'João Silva'
        },
        status: 'fallback'
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJotaData();
  }, []);

  // Polling opcional
  useEffect(() => {
    if (!enablePolling) return;

    const interval = setInterval(() => {
      console.log('🔄 Polling Jota Soluções...');
      fetchJotaData();
    }, pollingInterval);

    return () => clearInterval(interval);
  }, [enablePolling, pollingInterval]);

  const refetch = () => {
    console.log('🔄 Refetch manual Jota Soluções');
    setLoading(true);
    setError(null);
    fetchJotaData();
  };

  return {
    landingData,
    loading,
    error,
    refetch,
    connectionStatus: {
      isConnected: !!landingData && !error,
      hasError: !!error,
      isUsingFallback: landingData?.status === 'fallback'
    }
  };
};

export default useJotaData;
