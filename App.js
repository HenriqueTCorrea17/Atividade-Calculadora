import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export default function App() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [erro, setErro] = useState("");
  const [resultado, setResultado] = useState("");

  function somarNumeros() {
    setErro("");
    setResultado(parseFloat(numero1) + parseFloat(numero2));
  }

  function subtrairNumeros() {
    setErro("");
    setResultado(parseFloat(numero1) - parseFloat(numero2));
  }

  function multiplicarNumeros() {
    setErro("");
    setResultado(parseFloat(numero1) * parseFloat(numero2));
  }

  function dividirNumeros() {
    if (parseFloat(numero2) === 0) {
      setErro("Impossível dividir por zero!");
      setResultado("");
    } else {
      setErro("");
      setResultado(parseFloat(numero1) / parseFloat(numero2));
    }
  }

  return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Calculadora</Text>

        <Text style={styles.label}>Informe os números:</Text>

        <TextInput style={styles.input} placeholder="Digite o primeiro número" keyboardType="numeric" onChangeText={setNumero1} />

        <TextInput style={styles.input} placeholder="Digite o segundo número" keyboardType="numeric" onChangeText={setNumero2} />

        <View style={styles.botoesPai}>
          <Button title="Somar" onPress={somarNumeros} />
          <Button title="Subtrair " onPress={subtrairNumeros} />
          <Button title="Multiplicar" onPress={multiplicarNumeros} />
          <Button title="Dividir" onPress={dividirNumeros} />
        </View>

        {resultado !== "" && <Text style={styles.resultado}>Resultado: {resultado}</Text>}
        {erro !== "" && <Text style={styles.erro}>{erro}</Text>}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f4f6f8",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: "#555",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  botoesPai: {
    gap: 10,
    marginVertical: 15,
  },
  resultado: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
    marginTop: 10,
    textAlign: "center",
  },
  erro: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
    marginTop: 10,
    textAlign: "center",
  },
});
