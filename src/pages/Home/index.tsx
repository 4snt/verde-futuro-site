import React from 'react';

const Home: React.FC = () => {
  return (
    <div
      style={{
        padding: '20px',
        fontFamily: '"Titillium Web", Arial, sans-serif',
        color: '#014283',
        lineHeight: '1.6',
      }}
    >
      <h1 style={{ color: '#47D4DD', textAlign: 'center' }}>
        Instale o App Verde Futuro
      </h1>
      <p style={{ fontSize: '18px', textAlign: 'center' }}>
        Siga as instruções abaixo para instalar o app no seu dispositivo.
      </p>

      <h2 style={{ color: '#7EBA27', marginTop: '30px' }}>Android</h2>
      <ol style={{ marginLeft: '20px', fontSize: '16px' }}>
        <li>Clique no botão abaixo para baixar o APK:</li>
        <a href="https://expo.dev/artifacts/eas/gY5yeiEBGsHvmk6dqKdCYR.apk" download>
          <button
            style={{
              padding: '12px 20px',
              fontSize: '16px',
              cursor: 'pointer',
              backgroundColor: '#47D4DD',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              marginTop: '10px',
            }}
          >
            Baixar APK
          </button>
        </a>
        <li>Após o download, abra o arquivo e siga as instruções de instalação.</li>
        <li>
          Permita a instalação de aplicativos de fontes desconhecidas, caso solicitado.
        </li>
      </ol>

      <h2 style={{ color: '#7EBA27', marginTop: '30px' }}>iOS</h2>
      <ol style={{ marginLeft: '20px', fontSize: '16px' }}>
        <li>
          Baixe e instale o{' '}
          <a
            href="https://apps.apple.com/app/testflight/id899247664"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#47D4DD', textDecoration: 'none' }}
          >
            TestFlight
          </a>{' '}
          na App Store.
        </li>
        <li>
          Acesse o link abaixo para baixar o aplicativo via TestFlight:
          <br />
          <a
            href="https://testflight.apple.com/join/SEU_LINK_AQUI"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#47D4DD',
              textDecoration: 'none',
              display: 'inline-block',
              marginTop: '10px',
            }}
          >
            Baixar via TestFlight
          </a>
        </li>
        <li>Após o download, abra o TestFlight e siga as instruções para instalar o app.</li>
      </ol>

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
