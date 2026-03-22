import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },

  header: {
    alignItems: 'center',
    padding: 20,
  },

  profile: {
    width: 220,
    height: 220,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
  },

  text: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'left',
    paddingHorizontal: 20,
    marginTop: 10,
  },

  divider: {
    height: 1,
    backgroundColor: '#fff',
    marginVertical: 15,
    marginHorizontal: 20,
  },

  project: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  projectBox: {
    width: 70,
    height: 70,
    backgroundColor: '#d3a3a3',
    marginRight: 15,
    borderWidth: 2,
  },

  projectText: {
    color: '#fff',
    fontSize: 16,
  },

  socialButtons: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 10,
  },

  socialButton: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },

  buttonText: {
    color: '#8B0000',
    fontWeight: 'bold',
  },

  nameProfile: {
    color: '#fff',
    fontSize: 26,
    marginBottom: 10,
  }
});