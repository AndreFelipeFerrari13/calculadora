
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Calculadora() {

  
  const [valor1, setValor1] = useState<string>("");
  const [valor2, setValor2] = useState<string>("");
  const [resultado, setResultado] = useState<number>(0);
  const [operacao, setOperacao] = useState<string>("soma"); 

  
  function calcular() {
    
    if (valor1 === "" || valor2 === "") {
      alert("Preencha os dois campos");
      return;
    }

    const numero1 = Number(valor1);
    const numero2 = Number(valor2);

    if (isNaN(numero1) || isNaN(numero2)) {
      alert("Digite apenas números válidos");
      return;
    }

    
    let resultadoOperacao = 0;
    switch (operacao) {
      case "soma":
        resultadoOperacao = numero1 + numero2;
        break;
      case "subtracao":
        resultadoOperacao = numero1 - numero2;
        break;
      case "multiplicacao":
        resultadoOperacao = numero1 * numero2;
        break;
      case "divisao":
        resultadoOperacao = numero1 / numero2;
        break;
    }

    setResultado(resultadoOperacao);
  }


  return (
    <SafeAreaView>
      <View>
        {}
        <TextInput
          placeholder="Digite o primeiro valor"
          value={valor1}
          onChangeText={setValor1}
          keyboardType="numeric"
        />

        <TextInput
          placeholder="Digite o segundo valor"
          value={valor2}
          onChangeText={setValor2}
          keyboardType="numeric"
        />

        {}
        <View style={{ flexDirection: "row", marginVertical: 10 }}>
          <TouchableOpacity onPress={() => setOperacao("soma")}>
            <Text>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setOperacao("subtracao")}>
            <Text>-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setOperacao("multiplicacao")}>
            <Text>×</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setOperacao("divisao")}>
            <Text>÷</Text>
          </TouchableOpacity>
        </View>

        {}
        <TouchableOpacity onPress={calcular}>
          <Text>Calcular</Text>
        </TouchableOpacity>

        {}
        <Text>Resultado: {resultado}</Text>
        <Text>Operação escolhida: {operacao}</Text>
      </View>
    </SafeAreaView>
  );
}