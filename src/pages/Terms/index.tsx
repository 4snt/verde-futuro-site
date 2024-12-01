import React, { useState } from 'react';
import { getPtHtml } from './pt-br';
import { getEnHtml} from './Ing-Intl';

const PrivacyPolicy: React.FC = () => {
  const [language, setLanguage] = useState<'pt' | 'en'>('en');
  const content = {
    pt: getPtHtml(),
    en: getEnHtml(), 
  };

  const selectedContent = content[language];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Botões para alternar entre os idiomas */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
        <button
          onClick={() => setLanguage('en')}
          style={{
            padding: '10px',
            marginRight: '10px',
            backgroundColor: language === 'en' ? '#47D4DD' : '#EEE',
            color: language === 'en' ? '#FFF' : '#000',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          English
        </button>
        <button
          onClick={() => setLanguage('pt')}
          style={{
            padding: '10px',
            backgroundColor: language === 'pt' ? '#47D4DD' : '#EEE',
            color: language === 'pt' ? '#FFF' : '#000',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Português
        </button>
      </div>

      {/* Renderiza o conteúdo HTML correspondente ao idioma */}
      <div dangerouslySetInnerHTML={{ __html: selectedContent }} />
    </div>
  );
};

export default PrivacyPolicy;