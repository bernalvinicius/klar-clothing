import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  root: {
    margin: 0,
    padding: '8px',
  },
  closeButton: {
    position: 'absolute',
    right: '8px',
    top: '8px',
    color: '#02482b',
  },
  closeIcon: {
    fill: '#02482b',
    fontSize: '2.5rem',
  },
  content: {
    padding: '0 70px 50px',
    textAlign: 'center',
  },
  title: {
    margin: '30px auto',
    fontWeight: 'bold',
    fontSize: '26px',
    color: '#02482b',
    maxWidth: '304px',
  },
  formCcontainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '40vw',
    height: '40vh',
  },
  contentButton: {
    margin: '50px auto 0',
  },
  button: {
    borderRadius: '24px',
    margin: '0 auto 30px',
    display: 'block',
    minHeight: '50px',
    minWidth: '50%',
    textTransform: 'capitalize',
    fontSize: '18px',
    background: '#02482b',
    color: '#FFF',
  },
  cancel: {
    color: '#02482b',
    cursor: 'pointer',
    fontSize: '18px',
    fontWeight: '500',
    margin: '0 auto',
    textAlign: 'center',
  },
});
