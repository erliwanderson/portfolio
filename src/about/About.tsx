function About() {
  return (
    <section className="container mx-auto my-4 max-w-5xl p-4">
      <div className="relative p-4 text-center">
        <h2 className="relative text-blue-900 font-bold z-10">
          <span className="mr-2 font-headline text-3xl ">Sobre</span>
          <span className="font-handwriting text-4xl">Mim</span>
        </h2>
        <p className="relative text-sm text-gray-600">
          Sou uma pessoa extremamente comunicativa e analítica, apaixonada por
          me relacionar com pessoas e absorver novos conhecimentos. Além da
          faculdade, tenho investido em cursos para complementar meu
          aprendizado, focando no desenvolvimento Front-end para aprimorar
          minhas habilidades na área de programação. Decidi me especializar na
          área de tecnologia porque acredito que ela tem o poder de transformar
          vidas. Meu comprometimento e sede de aprendizado são, sem dúvida,
          minhas maiores diferenças. Tenho certeza de que posso ser uma peça
          útil e contribuir de forma significativa ao longo do tempo.
        </p>
        <div className="absolute left-1/2 top-3 z-0 h-10 rounded-lg bg-blue-100/40"></div>
      </div>
    </section>
  );
}

export default About;
