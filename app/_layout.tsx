import 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, TouchableOpacity, Text, View } from "react-native"
import { useState } from 'react';


export default function RootLayout() {

    const [visor, setVisor] = useState('0');
    const [primeiroNumero, setPrimeiroNumero] = useState<number | null>(null);
    const [operador, setOperador] = useState<string | null>(null);
    const [novoNumero, setNovoNumero] = useState<boolean>(false);

    const numeroPressionado = (n: string) => {
        if (novoNumero) {
            setVisor(n);
            setNovoNumero(false);
        } else if (visor === '0') {
            setVisor(n);
        } else {
            setVisor(visor + n)
        }
    };

    const operadorPressionado = (o: string) => {
        setPrimeiroNumero(parseFloat(visor.replace(',', '.')));
        setOperador(o);
        setNovoNumero(true);
    }

    const igualPressionado = () => {
        let resultado = 0;

        if (operador === '+') {
            resultado = parseFloat(visor.replace(',', '.')) + primeiroNumero;
        } else if (operador === '-') {
            resultado = primeiroNumero - parseFloat(visor.replace(',', '.'));
        } else if (operador === '*') {
            resultado = parseFloat(visor.replace(',', '.')) * primeiroNumero;
        } else if (operador === '/') {
            resultado = primeiroNumero / parseFloat(visor.replace(',', '.'));
        }
        setVisor(resultado.toString());
    }

    const raizPressionada = () => {
        setVisor(Math.sqrt(parseFloat(visor)).toString());
        setNovoNumero(true);
    };

    const resetPressionado = () => {
        setVisor('0');
        setPrimeiroNumero(0);
        setOperador('');
        setNovoNumero(false);
    };

    const virgulaPressionada = () => {
        if (!visor.includes(',')) {
            setVisor(visor + ',');
        }
    };

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.fundo}>
                <Text style={{ alignItems: 'center', justifyContent: 'center', fontSize: 30 }}>Calculadora 2</Text>

                <View style={styles.visorContainer}>
                    <Text style={{ fontSize: 50 }}>{visor}</Text>
                </View>

                <View style={styles.linha1}>
                    <TouchableOpacity style={styles.reset} onPress={resetPressionado}>
                        <Text> C </Text>
                    </TouchableOpacity>

                    <Text style={styles.botaoFalso}>  </Text>

                    <Text style={styles.botaoFalso}>  </Text>


                    <TouchableOpacity style={styles.botaoOperador} onPress={raizPressionada}>
                        <Text> Raiz </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.linha2}>
                    <TouchableOpacity style={styles.botao} onPress={() => { numeroPressionado('7') }}>
                        <Text> 7 </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botao} onPress={() => { numeroPressionado('8') }}>
                        <Text> 8 </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botao} onPress={() => { numeroPressionado('9') }}>
                        <Text> 9 </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botaoOperador} onPress={() => { operadorPressionado('/') }}>
                        <Text> Dividir </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.linha3}>
                    <TouchableOpacity style={styles.botao} onPress={() => { numeroPressionado('4') }}>
                        <Text> 4 </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botao} onPress={() => { numeroPressionado('5') }}>
                        <Text> 5 </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botao} onPress={() => { numeroPressionado('6') }}>
                        <Text> 6 </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botaoOperador} onPress={() => { operadorPressionado('*') }}>
                        <Text> Multiplicar </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.linha4}>
                    <TouchableOpacity style={styles.botao} onPress={() => { numeroPressionado('1') }}>
                        <Text> 1 </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botao} onPress={() => { numeroPressionado('2') }}>
                        <Text> 2 </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botao} onPress={() => { numeroPressionado('3') }}>
                        <Text> 3 </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botaoOperador} onPress={() => { operadorPressionado('-') }}>
                        <Text> Subtrair </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.linha4}>
                    <TouchableOpacity style={styles.botao} onPress={() => { virgulaPressionada() }}>
                        <Text> , </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.numero0} onPress={() => { numeroPressionado('0') }}>
                        <Text> 0 </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botaoOperador} onPress={() => { igualPressionado() }}>
                        <Text> = </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botaoOperador} onPress={() => { operadorPressionado('+') }}>
                        <Text> Somar </Text>
                    </TouchableOpacity>
                </View>


            </SafeAreaView>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    fundo: {
    
        backgroundColor: "rgba(211, 198, 198, 1)",
        borderWidth: 2,
        borderRadius: 50,
        padding: 10,
        margin: 10,
        overflow: 'hidden',
        width: 500,
        marginBottom: 'auto',
    },

    visorContainer: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: 20,
        margin: 6,
        height: 150,
        backgroundColor: '#aa9b9bff',
        borderRadius: 50,
    },

    botao: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 6,
        borderRadius: 50,
        height: 80,
        backgroundColor: '#bda8a8ff',
        padding: 10,

    },

    botaoFalso: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 6,
        borderRadius: 50,
        height: 80,
        backgroundColor: "rgba(211, 198, 198, 1)",
        padding: 10,

    },

    numero0: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 6,
        borderRadius: 50,
        height: 80,
        backgroundColor: '#bda8a8ff',
        padding: 10,
    },

    botaoOperador: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 6,
        borderRadius: 50,
        height: 80,
        padding: 10,
        backgroundColor: '#f7a72fff'
    },

    reset: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 6,
        borderRadius: 50,
        height: 80,
        backgroundColor: '#fa5e5eff',
        padding: 10,
    },


    linha1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 6,
    },

    linha2: {
        flexDirection: 'row',
    },

    linha3: {
        flexDirection: 'row',
    },

    linha4: {
        flexDirection: 'row',
    },
});