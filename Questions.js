const questions = [
"Écris le théorème de pythagore"
"Dans un triangle rectangle, il y a toujours un angle de ? degré"
"Trouve X: 12²x -2 = 24x + 16"
"Pluto, est t'il un planet?"
"Quelle est l'élément au période 1 et le groupe 1 dans le tableau périodique?"
"Proton, électron et ?"
"Trouve le type du subordonnée circonstancielle: Dès que l’examen a commencé, ça a stressé beaucoup de gens"
"Vrai ou Faux: (y,x)"
"Qui a découervt la gravité?:"
"Ca veut dire quoi le S dans PPS (participe passé):"
  ];



function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}