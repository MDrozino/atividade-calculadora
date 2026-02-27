import 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, TouchableOpacity, Text, View } from "react-native"


export default function RootLayout() {
 
  return (
    <SafeAreaView style={StyleSheet.container}>
      <Text>Calculadora 2</Text>
      <Text> Resultado: </Text>

      <View style={styles.linha1}>
        <TouchableOpacity style={styles.reset}>
            <Text> C </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.raiz}>
            <Text> Raiz </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.linha2}>
        <TouchableOpacity style={styles.numero7}>
            <Text> 7 </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.numero8}>
            <Text> 8 </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.numero9}>
            <Text> 9 </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.divisao}>
            <Text> Dividir </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.linha3}>
        <TouchableOpacity style={styles.numero4}>
            <Text> 4 </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.numero5}>
            <Text> 5 </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.numero6}>
            <Text> 6 </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.multiplicacao}>
            <Text> Multiplicar </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.linha4}>
        <TouchableOpacity style={styles.numero1}>
            <Text> 1 </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.numero2}>
            <Text> 2 </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.numero3}>
            <Text> 3 </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.subtracao}>
            <Text> Subtrair </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.linha4}>
        <TouchableOpacity style={styles.virgula}>
            <Text> , </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.numero0}>
            <Text> 0 </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.igual}>
            <Text> = </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.soma}>
            <Text> Somar </Text>
        </TouchableOpacity>
      </View>

      
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container:{
      backgroundColor: "rgba(211, 198, 198, 1)"
  }
});