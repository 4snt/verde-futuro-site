import React from 'react';

const Home: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = React.useState<'android' | 'ios'>('android');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        fontFamily: '"Titillium Web", Arial, sans-serif',
        color: '#014283',
        lineHeight: '1.6',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      <h1 style={{ color: '#47D4DD', marginBottom: '20px' }}>Instale o App Verde Futuro</h1>
      <p style={{ fontSize: '18px', marginBottom: '30px' }}>
        Siga as instruções abaixo para instalar o app no seu dispositivo.
      </p>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '30px',
        }}
      >
        <button
          onClick={() => setSelectedPlatform('android')}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: selectedPlatform === 'android' ? '#47D4DD' : '#F4FFFE',
            color: selectedPlatform === 'android' ? '#fff' : '#014283',
            border: '2px solid #47D4DD',
            borderRadius: '5px',
            fontWeight: 'bold',
          }}
        >
          Android
        </button>
        <button
          onClick={() => setSelectedPlatform('ios')}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: selectedPlatform === 'ios' ? '#47D4DD' : '#F4FFFE',
            color: selectedPlatform === 'ios' ? '#fff' : '#014283',
            border: '2px solid #47D4DD',
            borderRadius: '5px',
            fontWeight: 'bold',
          }}
        >
          iOS
        </button>
      </div>

      <div
        style={{
          width: '100%',
          maxWidth: '600px',
          padding: '20px',
          border: '1px solid #47D4DD',
          borderRadius: '10px',
          backgroundColor: '#F4FFFE',
        }}
      >
        {selectedPlatform === 'android' ? (
          <>
            <h2 style={{ color: '#7EBA27', marginBottom: '20px' }}>Tutorial para Android</h2>
            <ol style={{ fontSize: '16px', textAlign: 'left' }}>
              <li>Clique no botão abaixo para baixar o APK:</li>
              <a
                href="https://expo.dev/artifacts/eas/gY5yeiEBGsHvmk6dqKdCYR.apk"
                download
                style={{ textDecoration: 'none' }}
              >
                <button
                  style={{
                    padding: '12px 20px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    backgroundColor: '#47D4DD',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    margin: '10px 0',
                  }}
                >
                  Baixar APK
                </button>
              </a>
              <li>
                Após o download, localize o arquivo na pasta de downloads e clique para abrir.
              </li>
              <li>
                Caso apareça uma mensagem bloqueando a instalação, siga os passos abaixo:
                <ul>
                  <li>
                    Abra as <strong>Configurações</strong> do seu dispositivo.
                  </li>
                  <li>
                    Acesse <strong>Segurança</strong> ou <strong>Privacidade</strong>.
                  </li>
                  <li>
                    Procure a opção <strong>Instalar apps de fontes desconhecidas</strong> e
                    habilite-a.
                  </li>
                  <li>
                    Caso específico do dispositivo:
                    <ul>
                      <li>
                        Em alguns modelos, pode ser necessário habilitar essa opção para o app que
                        você usou para baixar o APK (ex.: navegador Chrome ou Gerenciador de
                        Arquivos).
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>Siga as instruções na tela para concluir a instalação.</li>
            </ol>
          </>
        ) : (
          <>
            <h2 style={{ color: '#7EBA27', marginBottom: '20px' }}>Tutorial para iOS</h2>
            <ol style={{ fontSize: '16px', textAlign: 'left' }}>
              <li>
                Acesse a App Store e baixe o aplicativo <strong>TestFlight</strong>:
              </li>
              <a
                href="https://apps.apple.com/app/testflight/id899247664"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <button
                  style={{
                    padding: '12px 20px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    backgroundColor: '#47D4DD',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    margin: '10px 0',
                  }}
                >
                  Baixar TestFlight
                </button>
              </a>
              <li>
                Clique no botão abaixo para acessar o aplicativo Verde Futuro no TestFlight:
              </li>
              <a
                href="https://testflight.apple.com/join/SEU_LINK_AQUI"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <button
                  style={{
                    padding: '12px 20px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    backgroundColor: '#47D4DD',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    margin: '10px 0',
                  }}
                >
                  Baixar via TestFlight
                </button>
              </a>
              <li>
                Abra o TestFlight, localize o aplicativo Verde Futuro e clique em{' '}
                <strong>Instalar</strong>.
              </li>
              <li>
                Após a instalação, você pode abrir o aplicativo diretamente pela tela inicial.
              </li>
            </ol>
          </>
        )}
      </div>

      <p style={{ marginTop: '30px', fontSize: '16px' }}>
        Para mais informações, consulte nossos{' '}
        <a
          href="/terms"
          style={{ color: '#47D4DD', textDecoration: 'none', fontWeight: 'bold' }}
        >
          Termos de Uso
        </a>.
      </p>
    </div>
  );
};

export default Home;
