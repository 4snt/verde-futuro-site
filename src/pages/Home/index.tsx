import React from 'react';
import { styles } from './styles';

const Home: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = React.useState<'android' | 'ios'>('android');

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Instale o App Verde Futuro</h1>
      <p style={styles.instructions}>
        Siga as instruções abaixo para instalar o app no seu dispositivo.
      </p>

      <div style={styles.buttonContainer}>
        <button
          onClick={() => setSelectedPlatform('android')}
          style={selectedPlatform === 'android' ? styles.activeButton : styles.button}
        >
          Android
        </button>
        <button
          onClick={() => setSelectedPlatform('ios')}
          style={selectedPlatform === 'ios' ? styles.activeButton : styles.button}
        >
          iOS
        </button>
      </div>

      <div style={styles.tutorialContainer}>
        {selectedPlatform === 'android' ? (
          <>
            <h2 style={styles.tutorialTitle}>Tutorial para Android</h2>
            <ol style={styles.tutorialList}>
              <li>Clique no botão abaixo para baixar o APK:</li>
              <a
                href="https://expo.dev/artifacts/eas/gY5yeiEBGsHvmk6dqKdCYR.apk"
                download
                style={styles.link}
              >
                <button
                  style={styles.downloadButton}
                >
                  Baixar APK
                </button>
              </a>
              <li>
                Após o download, localize o arquivo na pasta de downloads e clique para abrir.
              </li>
              <li>
                Caso apareça uma mensagem bloqueando a instalação, siga os passos abaixo:
                <ul style={styles.list}>
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
                    <ul style={styles.list}>
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
            <h2 style={styles.tutorialTitle}>Tutorial para iOS</h2>
            <ol style={styles.tutorialList}>
              <li>
                Acesse a App Store e baixe o aplicativo <strong>TestFlight</strong>:
              </li>
              <a
                href="https://apps.apple.com/app/testflight/id899247664"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
              >
                <button
                  style={styles.downloadButton}
                >
                  Baixar TestFlight
                </button>
              </a>
              <li>
                Clique no botão abaixo para acessar o aplicativo Verde Futuro no TestFlight:
              </li>
              <a
                href="https://testflight.apple.com/join/SKywEZPJ"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
              >
                <button
                  style={styles.downloadButton}
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

      <p style={styles.footer}>
        Para mais informações, consulte nossos{' '}
        <a href="/terms" style={styles.link}>
          Termos de Uso
        </a>.
      </p>
    </div>
  );
};

export default Home;
