// MileageStyles.js

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  background: {
    flex:1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'black',
    textAlign: 'center',
    position: 'absolute',
    top: '20%',
  },
  buttonContainer: {
    width: 180,
    height: 170,
    borderRadius: 200,
    backgroundColor: '#8B0000',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    position: 'absolute',
    top: '30%',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  button2: {
    width: 190,
    height: 90,
    borderRadius: 200,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    position: 'absolute',
    top: '60%',
    borderColor: '#000',
    borderWidth: 3,
  },
  buttonText2: {
    color: 'black',
    fontSize: 20,
  },
});
