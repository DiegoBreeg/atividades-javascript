<h3>Sistema de Notas</h3>

<p>Construa um código JS que receba um valor através de um input para um sistema de notas de uma instituição que possui a seguinte política de Classificação:</p>

* Todo aluno recebe uma nota de 0 a 100.

* Alunos com nota abaixo de 40 são reprovados.

* As notas possuem a seguinte regra de arredondamento:

>Se a diferença entra a nota e o p´roximo múltiplo de 5 for menor que 3, arredondar a nota para esse próximo múltiplo de 5.
>Se a nota for abaixo de 38, não é feito nenhum arredondamento pois esta nota resulta na reprovação do aluno.

<p>Por exemplo, a nota 84 será arredondada para 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou seja, que evite a reprovação do aluno</p>
<p>No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 e o aluno será aprovado.</p>
