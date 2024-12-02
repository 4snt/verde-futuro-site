import React from 'react';

const VerdeFuturoFormEmbed = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <p style={{ textAlign: 'center' }}>Por favor, preencha o formulário abaixo para completar o seu cadastro.</p>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdzEfaX3niGvjYFSlA5k5PnAbZHnIrbpW4W-Dorjj29BtqOlA/viewform?embedded=true"
        width="640"
        height="auto"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Verde Futuro Form"
        style={{ border: 'none', maxWidth: '100%', width: '640px', height: '1090px' }}
      >
        Carregando…
      </iframe>
      <footer style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>Verde Futuro - Promovendo Sustentabilidade</p>
      </footer>
    </div>
  );
};

export default VerdeFuturoFormEmbed;
