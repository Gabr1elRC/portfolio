import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useRef } from 'react';
import {
  Animated,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { styles } from './Styles';

export default function Home() {

  // 🔥 animações separadas
  const photoAnim = useRef(new Animated.Value(0)).current;
  const textAnim = useRef(new Animated.Value(0)).current;
  const buttonsAnim = useRef(new Animated.Value(0)).current;

  const project1 = useRef(new Animated.Value(0)).current;
  const project2 = useRef(new Animated.Value(0)).current;
  const project3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(photoAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(textAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(buttonsAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(project1, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(project2, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(project3, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  // 🔘 botão animado
  const scale = useRef(new Animated.Value(1)).current;

  const pressIn = () => {
    Animated.spring(scale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const pressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  // 🔥 função padrão (fade + subir)
  const getAnimationStyle = (anim) => ({
    opacity: anim,
    transform: [
      {
        translateY: anim.interpolate({
          inputRange: [0, 1],
          outputRange: [40, 0],
        }),
      },
    ],
  });

  return (
    <LinearGradient
      colors={['#7A0A84', '#FF4500']}
      style={styles.container}
    >
      <ScrollView>

        <View style={styles.header}>

          <Text style={styles.nameProfile}>
            Gabriel Ribeiro Correa
          </Text>

          {/* FOTO */}
          <Animated.Image
            source={require('../assets/GabrielAnimado.jpeg')}
            style={[styles.profile, getAnimationStyle(photoAnim)]}
          />

          {/* TEXTO */}
          <Animated.Text style={[styles.text, getAnimationStyle(textAnim)]}>
            Estudante do 5° Semestre de Desenvolvimento de Software na Fatec Votorantim,
            atualmente atuando como estagiário de TI/Marketing. Tenho experiência com
            React Native, Angular, JavaScript e desenvolvimento de APIs, sempre buscando
            evoluir minhas habilidades e criar soluções eficientes e bem estruturadas.
          </Animated.Text>

          {/* BOTÕES */}
          <Animated.View style={[styles.socialButtons, getAnimationStyle(buttonsAnim)]}>

            <Animated.View style={{ transform: [{ scale }] }}>
              <TouchableOpacity
                style={styles.socialButton}
                onPressIn={pressIn}
                onPressOut={pressOut}
                onPress={() => Linking.openURL('https://github.com/Gabr1elRC')}
              >
                <Text style={styles.buttonText}>GitHub</Text>
              </TouchableOpacity>
            </Animated.View>

            <Animated.View style={{ transform: [{ scale }] }}>
              <TouchableOpacity
                style={styles.socialButton}
                onPressIn={pressIn}
                onPressOut={pressOut}
                onPress={() => Linking.openURL('https://www.linkedin.com/in/gabriel-ribeiro-correa-733612182/')}
              >
                <Text style={styles.buttonText}>LinkedIn</Text>
              </TouchableOpacity>
            </Animated.View>

          </Animated.View>

        </View>

        <View style={styles.divider} />

        {/* PROJETO 1 */}
        <Animated.View style={[styles.project, getAnimationStyle(project1)]}>
          <View style={styles.projectBox} />
          <Text style={styles.projectText}>Faculride</Text>
        </Animated.View>

        <View style={styles.divider} />

        {/* PROJETO 2 */}
        <Animated.View style={[styles.project, getAnimationStyle(project2)]}>
          <View style={styles.projectBox} />
          <Text style={styles.projectText}>Em Desenvolvimento</Text>
        </Animated.View>

        <View style={styles.divider} />

        {/* PROJETO 3 */}
        <Animated.View style={[styles.project, getAnimationStyle(project3)]}>
          <View style={styles.projectBox} />
          <Text style={styles.projectText}>Em desenvolvimento</Text>
        </Animated.View>

      </ScrollView>
    </LinearGradient>
  );
}