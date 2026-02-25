import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AboutScreen() {

  return (

    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        Sobre Mim
      </Text>

      <Text style={styles.text}>

        Olá! Meu nome é Gabriel Corrêa.

        {"\n\n"}

        Sou estudante de Desenvolvimento de Software Multiplataforma pela Fatec e apaixonado por tecnologia e desenvolvimento mobile.

        {"\n\n"}

        Tenho experiência com JavaScript, React Native, Node.js e construção de APIs REST.

        {"\n\n"}

        Este aplicativo foi desenvolvido como meu portfólio para apresentar meus projetos e habilidades.

        {"\n\n"}

        Estou em busca da minha primeira oportunidade como desenvolvedor.

      </Text>

    </ScrollView>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,
    backgroundColor: '#0f172a',
    padding: 20

  },

  title: {

    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20

  },

  text: {

    fontSize: 16,
    color: 'gray',
    lineHeight: 24

  }

});