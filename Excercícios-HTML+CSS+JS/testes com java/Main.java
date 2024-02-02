import java.text.DecimalFormat;
import java.util.Scanner;

public class Main {

	// OBJETO E ENCAPSULAMENTO
	public static void main(String[] args) {

		Scanner src = new Scanner(System.in);

		boolean sexoValido = false;
		char sexo = 0;
		// O DO WHILE JUNTO COM A VARIÁVEL sexoValido FAZ A VALIDAÇÃO DE GÊNERO PARA CLASSIFICAR O IAC DE ACORDO COM O SEXO DA PESSOA.
		do {
			System.out.println("Digite seu gênero F: Feminino/ M: Masculino");
			
			String inputSexo = src.next();
			sexo = Character.toLowerCase(inputSexo.charAt(0));
			// objetoPessoa.setSexo(src.next().charAt(0));
			
			if (sexo == 'm' || sexo == 'f') {
				sexoValido = true;	//OS GENEROS VÁLIDOS RECEBEM A ATRIBUIÇÃO TRUE
			} else {
				System.out.println("Gênero inválido! Para continuar, por favor, digite um sexo válido."); // ENQUANTO O USUÁRIO NÃO DIGITAR UMA ENTRADA VÁLIDA O ALGORITMO VAI CONTINUAR A PEDIR PARA ESCOLHER UM DOS DOIS.
			}
		} while (!sexoValido);

		Pessoa objetoPessoa = new Pessoa(); // VARIALVEL NÃO PRIMITIVA = OBJETO
		objetoPessoa.setSexo(sexo);

		//A PRIMEIRA ENTRADA SENDO DIGITADA CORRETAMENTE O PROGAMA CONTINUA PEDINDO O RESTANNTE DOS DADOS PARA CALCULAR O IAC
		System.out.println("Digite sua altura");
		objetoPessoa.setAltura(src.nextFloat());

		System.out.println("Digite a medida do seu quadril");
		objetoPessoa.setCircunferenciaQuadril(src.nextFloat());

		float iac = objetoPessoa.calcularIAC(); //INVOCAÇÃO DO MÉTODO DE CALCULO DO IAC

		//FORMATAÇÃO DO RESULTADO PARA SAIR COM APENAS DOIS NÚMEROS APÓS O PONTO
		DecimalFormat df = new DecimalFormat("#.##");
		String iacFormatado = df.format(iac);
		System.out.println("Seu IAC é: " + iacFormatado + "%");
		
		//VALIDAÇÃO PARA DETERMINAR A CLASSIFICAÇÃO DO IAC COM BASE NO SEXO DA PESSOA.
		// AS MENSAGENS CORRESPONDENTES SÃO IMPRESSAS NO CONSOLE DE ACORDO COM AS CONDIÇÕES ESTABELECIDAS.
		if (Character.toLowerCase(objetoPessoa.getSexo()) == 'm') {
			if (iac < 8) {
				System.out.println("Você está abaixo do peso");
			} else if (iac >= 8 && iac < 21) {
				System.out.println("Você está dentro do peso esperado.");
			} else {
				System.out.println("Você está acima do peso.");
			}
		} else if (Character.toLowerCase(objetoPessoa.getSexo()) == 'f') {
			if (iac < 21) {
				System.out.println("Você está abaixo do peso.");
			} else if (iac >= 21 && iac < 33) {
				System.out.println("Você está dentro do peso esperado.");
			} else {
				System.out.println("Você está acima do peso.");
			}
		}
	}
}