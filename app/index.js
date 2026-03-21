import { LinearGradient } from 'expo-linear-gradient';
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default function Home() {
  return (
    <LinearGradient
      colors={['#7A0A84', '#FF4500']}
      style={styles.container}
    >
      <ScrollView>

        {/* TOPO */}
        <View style={styles.header}>
          
          <Image
            source={require('../assets/GabrielAnimado.jpeg')}
            style={styles.profile}
          />

          <Text style={styles.text}>
            Sou desenvolvedor em início de carreira, atualmente atuando como
            estagiário na área de tecnologia. Tenho experiência com React Native,
            JavaScript e desenvolvimento de APIs, sempre buscando evoluir minhas
            habilidades e criar soluções eficientes e bem estruturadas.
          </Text>

          <View style={styles.socialButtons}>
  
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => Linking.openURL('https://github.com/Gabr1elRC')}
            >
              <Text style={styles.buttonText}>GitHub</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => Linking.openURL('https://www.linkedin.com/in/gabriel-ribeiro-correa-733612182/')}
            >
              <Text style={styles.buttonText}>LinkedIn</Text>
            </TouchableOpacity>

          </View>

        </View>

        

        {/* LINHA */}
        <View style={styles.divider} />

        {/* PROJETOS */}
        <View style={styles.project}>
          <View style={styles.projectBox} />
          <Text style={styles.projectText}>Faculride</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.project}>
          <View style={styles.projectBox} />
          <Text style={styles.projectText}>Em Desenvolvimento</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.project}>
          <View style={styles.projectBox} />
          <Text style={styles.projectText}>Em desenvolvimento</Text>
        </View>

      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },

  header: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
  },

  profile: {
  width: 220,
  height: 220,

  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  borderBottomLeftRadius: 30,
  borderBottomRightRadius: 60, // diferente aqui

  borderWidth: 3,
  borderColor: '#fff',
},

  text: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
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
  gap: 10
},

socialButton: {
  backgroundColor: '#fff',
  paddingVertical: 8,
  paddingHorizontal: 15,
  borderRadius: 20
},

buttonText: {
  color: '#8B0000',
  fontWeight: 'bold'
},
});