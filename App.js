import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Circular Image */}
      <Image
        source={{ uri: 'https://scontent.fprn13-1.fna.fbcdn.net/v/t39.30808-6/489918383_1711490046106428_5888472931389279368_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=HFC-djIhf-YQ7kNvwFg371s&_nc_oc=AdngXhT4xU4vR_EetmZZA6iCxIWrvMypTnFay1tHV8IU7Xo0egKxlkbUaH6TcbBWaeE&_nc_zt=23&_nc_ht=scontent.fprn13-1.fna&_nc_gid=ZD-3XNskIdZo96Fdr_27VA&oh=00_Afm8rAsF19VhZsy7JfR_oNNmX-ubx4hZ4XrP5V1566pQXQ&oe=69391F66' }}
        style={styles.profileImage}
      />
      
      {/* Name */}
      <Text style={styles.name}>Norit Qyqalla</Text>
      
      {/* What I study */}
      <Text style={styles.study}>3rd Year Computer Science Student</Text>
      
    
      <View style={styles.skillsContainer}>
<Text style={styles.skillsTitle}>Skills & Interests:</Text>
<Text style={styles.skill}>• React Native Dev.</Text>
<Text style={styles.skill}>• JavaScript & Python</Text>
<Text style={styles.skill}>• Mobile UI/UX Design</Text>
<Text style={styles.skill}>• Gaming Dev.</Text>
</View>



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 55,
    flex: 1,
    backgroundColor: '#e0dfdfff',
    alignItems: 'center',
    paddingTop: 50,
  },
  profileImage: {
    marginTop: 100,
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 0,
  },
  name: {
    fontSize: 24,
    color: '#000000ff',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  study: {
    fontSize: 16,
    color: '#009dffff',
    marginBottom: 20,
  },
  skillsContainer: {
    borderRadius: 30,
    backgroundColor: '#009dffff',
    marginTop: 20,
    paddingHorizontal: 20,
    width: '60%',
},
  skillsTitle: {
    color: '#ffffffff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 15,
    marginBottom: 10,
    textAlign: 'center',
},
  skill: {
    color: '#020304ff',
    fontSize: 16,
    marginVertical: 5,
    paddingLeft: 20,
    paddingBottom: 15,
}


});