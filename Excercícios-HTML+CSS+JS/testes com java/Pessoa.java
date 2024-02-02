package testes;

public class Pessoa {
    // ATRIBUTOS
	private char sexo;
	private float altura;
	private float circunferenciaQuadril;
	private float iac;

	// MÉDOTODOS

	public Pessoa(char sexo, float altura, float circunferenciaQuadril) { // O MÉTODO CONSTRUTOR É EXECUTADO QUANDO
																			// INSTANCIAMOS UM OBJETO (CRIAMOS O OBJETO PESSOA).
		                                                                    // USAMOS O MÉTODO CONTRUTOR QUANDO QUEREMOS PASSAR UM VALOR DEFAULT, 
		                                                                    // FAZER UMA VALIDAÇÃO OU EXECUTAR UM TRECHO DE CÓDIGO.
		super();
		this.setAltura(altura);
		this.setCircunferenciaQuadril(circunferenciaQuadril);
		this.setSexo(sexo);
	}

	public Pessoa() {
		
	}

	public float calcularIAC() {

		float raizAltura = (float) Math.sqrt(altura);
		float iac = circunferenciaQuadril / (altura * raizAltura) - 18;
		return iac;
	}

	// MÉTODOS ACESSORES
	public char getSexo() {
		return sexo;
	}

	public char setSexo(char sexo) {
		return this.sexo = sexo;
	}

	public float getAltura() {
		return altura;
	}

	public void setAltura(float altura) {
		this.altura = altura;
	}

	public float getCircunferenciaQuadril() {
		return circunferenciaQuadril;
	}

	public void setCircunferenciaQuadril(float circunferenciaQuadril) {
		this.circunferenciaQuadril = circunferenciaQuadril;
	}

	public float getIac() {
		return iac;
	}

	public void setIac(float iac) {
		this.iac = iac;
	}
}
