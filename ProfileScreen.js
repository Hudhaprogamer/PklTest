import { Button, Text, View, StyleSheet, Image } from "react-native";


const ProfileScreen = ({ navigation, route }) => {
  return (
    <View>
      <View style={styles.titleArea}>
        <Text style={styles.title}>
          Selamat Datang Di Profil {route.params.name}
        </Text>
      </View>
      <View>
        <Image
        source={require('./assets/aku.jpg')}
        style={{width:200,height:200}}
        />
      </View>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Image source={{ require}} style={styles.image} />
          <Text style={styles.title}>Name: {route.params.name}</Text>
          <Text style={styles.description}>
            Email: Hudarahmadani@gmail.com
          </Text>
          <Text style={styles.description}>
            Alamat: JL Plaosan Timur 102/17
          </Text>
          <Text style={styles.description}>Phone Number: 08956320433255</Text>
        </View>
      </View>
      <Text>Tulis bio di sini:</Text>
      <Text>Nama saya Sya'ifudin Hudha Rachmadani,saya berdomisili Malang Jawa Timur,lahir pada 27 September 2006,saya sangat tertarik pada bidang Mobile Dev
dan ingin mengembangkan</Text>
      <Text>Tampilkan portofolio di sini</Text>
      <View>
        <Image
        source={require('./assets/kapal.jpeg')}
        style={{ width: 175, height: 175 }}
        />
      </View>
      <View >
        <Image
        source={require('./assets/Brick.jpeg')}
        style={{ width: 100, height: 100 }}
        />
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  title: {
    fontsize: 40,
  },
  titleArea: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    marginVertical: 10,
    elevation: 3,
    padding: 6,
  },
  image: {
    width: 300,
    height: 25,
  },
  cardContent: {
    margin: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    color: "#555",
  },
});
export default ProfileScreen;