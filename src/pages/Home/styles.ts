import { CSSProperties } from 'react';

// Define common button styles outside of the export to keep it reusable.
const buttonBase: CSSProperties = {
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  borderRadius: '25px', // Adjusted to make buttons look more rounded
  fontWeight: 'bold',
  textTransform: 'none',
  width: '180px',
  textAlign: 'center',
  display: 'inline-block', // This helps in centering the button within the container
};

export const styles: { [key: string]: CSSProperties } = {
  container: {
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
  },
  title: {
    color: '#47D4DD',
    marginBottom: '20px',
  },
  instructions: {
    fontSize: '18px',
    marginBottom: '30px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '30px',
  },
  button: {
    ...buttonBase,
    backgroundColor: '#F4FFFE',
    color: '#014283',
    border: '2px solid #47D4DD',
  },
  activeButton: {
    ...buttonBase,
    backgroundColor: '#47D4DD',
    color: '#fff',
    border: '2px solid #47D4DD',
  },
  tutorialContainer: {
    width: '100%',
    maxWidth: '600px',
    padding: '20px',
    border: '1px solid #47D4DD',
    borderRadius: '10px',
    backgroundColor: '#F4FFFE',
    marginTop: '20px',
  },
  tutorialTitle: {
    fontSize: '24px',
    marginBottom: '15px',
    color: '#014283',
  },
  tutorialList: {
    listStyleType: 'decimal',
    paddingLeft: '20px',
    textAlign: 'left',
  },
  buttonWrapper: {
    textAlign: 'center',
    margin: '10px 0',
  },
  footer: {
    marginTop: '30px',
    fontSize: '16px',
  },
  link: {
    color: '#47D4DD',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  downloadButton: {
    ...buttonBase,
    backgroundColor: '#47D4DD',
    color: '#fff',
    border: '2px solid #47D4DD',
    textDecoration: 'none',
  },
};
