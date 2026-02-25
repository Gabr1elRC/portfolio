import { View, Text, StyleSheet } from 'react-native';

export default function ProjectsScreen() {

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Meus Projetos
      </Text>

      <Text>
        📚 API de Livros
      </Text>

      <Text>
        🚗 App tipo Uber
      </Text>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },

  title: {

    fontSize: 24,
    marginBottom: 20

  }

});