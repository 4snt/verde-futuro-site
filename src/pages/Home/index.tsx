import React from 'react';

const Home: React.FC = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Instale o App Verde Futuro</h1>
      <p>Siga as instruções abaixo para instalar o app no seu dispositivo.</p>

      <h2>Android</h2>
      <ol>
        <li>Clique no botão abaixo para baixar o APK:</li>
        <a href="/downloads/verde-futuro.apk" download>
          <button style={{ padding: '10px', fontSize: '16px', cursor: 'pointer' }}>
            Baixar APK
          </button>
        </a>
        <li>Após o download, abra o arquivo e siga as instruções de instalação.</li>
        <li>Permita a instalação de aplicativos de fontes desconhecidas, caso solicitado.</li>
      </ol>

      <h2>iOS</h2>
      <ol>
        <li>Acesse a App Store pelo seu iPhone.</li>
        <li>Procure por <strong>Verde Futuro</strong>.</li>
        <li>Clique em "Instalar" e aguarde o término.</li>
      </ol>

      <p>
        Para mais informações, consulte nossos{' '}
        <a href="/terms" style={{ color: '#007bff', textDecoration: 'none' }}>
          Termos de Uso
        </a>.
      </p>
    </div>
  );
};

export default Home;
