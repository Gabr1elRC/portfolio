import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Linking } from 'react-native';
import {LinearGradient} from "Expo-Linear-Gradient";

export default function HomeScreen() {

  const texts = [
    "Desenvolvedor Mobile",
    "React Native Developer",
    "Front-end Developer"
  ];

  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {

    let i = 0;

    const typing = setInterval(() => {

      setDisplayText(texts[textIndex].slice(0, i));

      i++;

      if (i > texts[textIndex].length) {

        clearInterval(typing);

        setTimeout(() => {

          setTextIndex((prev) => (prev + 1) % texts.length);

        }, 1500);

      }

    }, 100);

    return () => clearInterval(typing);

  }, [textIndex]);

  return (

  <LinearGradient
      colors={['#6a0dad', '#000000']} // roxo → preto
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
      >

      <Image
        source={require('../../assets/images/GabrielPerfil.png')}
        style={styles.image}
      />

      <Text style={styles.title}>
        Gabriel Corrêa
      </Text>

      <Text style={styles.job}>
        {displayText}
      </Text>

      <View style={styles.buttons}>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => Linking.openURL('https://github.com/Gabr1elRC?tab=repositories')}>

          <Ionicons name="logo-github" size={24} color="white" />

        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => Linking.openURL('https://www.linkedin.com/in/gabriel-ribeiro-correa-733612182/')}>

          <Ionicons name="logo-linkedin" size={24} color="white" />

        </TouchableOpacity>

      </View>

    </LinearGradient>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  },

  image: {

    width: 180,
    height: 180,
    borderRadius: 100,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#200238',
    
    position:"absolute",
    right:80,
    top:60

  },

  title: {

    fontSize: 28,
    color: 'white',
    fontWeight: 'bold'

  },

  job: {

    fontSize: 18,
    color: '#38bdf8',
    marginTop: 10,
    height: 30

  },

  buttons: {

    flexDirection: 'row',
    marginTop: 20,
    gap: 20

  },

  button: {

    backgroundColor: '#1e293b',
    padding: 15,
    borderRadius: 50

  }

});