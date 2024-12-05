import React, { useEffect } from 'react';
import { styles } from './styles';

const Home: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = React.useState<'android' | 'ios'>('android');

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    if (/android/i.test(userAgent)) {
      setSelectedPlatform('android');
    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
      setSelectedPlatform('ios');
    }
  }, []);

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
              <li style={styles.buttonWrapper}>
                <a
                  href="https://expo.dev/artifacts/eas/gY5yeiEBGsHvmk6dqKdCYR.apk"
                  download
                  style={styles.downloadButton}
                >
                  Baixar APK
                </a>
              </li>
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
                Acesse a App Store e baixe o aplicativo <strong>VerdeFuturo</strong>:
              </li>
              <li style={styles.buttonWrapper}>
                <a
                  href="https://apps.apple.com/br/app/verdefuturo/id6738054097"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.downloadButton}
                >
                  Baixar o APP
                </a>
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