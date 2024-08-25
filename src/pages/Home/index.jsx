import Container from "../../components/Container";
import Header from "../../components/Header";
import * as Icon from "@phosphor-icons/react";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <section>
          <div className="flex flex-wrap gap-4 lg:grid lg:grid-cols-2 lg:gap-10">
            <div className="rounded-2xl shadow-2xl w-full h-full hidden lg:block">
              <div className="hidden lg:flex justify-center items-center bg-green-400 rounded-2xl w-full h-full">
                <Icon.HandHeart weight="fill" size={192} />
              </div>
            </div>
            <article className="bg-green-900 rounded-2xl shadow-2xl flex flex-col lg:justify-end order-last">
              <div className="w-full h-[350px] rounded-t-2xl bg-green-400 flex justify-center items-center lg:hidden">
                <Icon.HandHeart weight="fill" size={96} />
              </div>
              {/* lg:px-20 lg:pt-96 lg:pb-20 - AQ EM BAIXO */}
              <div className="gap-y-10 flex flex-col px-12 justify-center lg:h-[600px]">
                <h1 className="text-white  uppercase font-black text-3xl">
                  Benefícios da terapia
                </h1>
                <p className="text-white leading-7 text-lg">
                  Fazer terapia traz inúmeros benefícios. Sendo um espaço seguro
                  para demonstração de emoções e o desenvolvimento de
                  habilidades de enfrentamento.
                  <br />A terapia vem promovendo diversos bens como:
                </p>
                <div className="text-white space-y-3">
                  <span className="flex items-center gap-3">
                    <Icon.CheckSquareOffset size={24} />
                    Relacionamento saudáveis
                  </span>
                  <span className="flex items-center gap-3">
                    <Icon.CheckSquareOffset size={24} />
                    Autoconhecimento
                  </span>
                  <span className="flex items-center gap-3">
                    <Icon.CheckSquareOffset size={24} />
                    Crescimento pessoal
                  </span>
                </div>
              </div>
            </article>
          </div>
          <div className="lg:h-20 h-6"></div>
          <div className="flex flex-wrap gap-4 lg:grid lg:grid-cols-2 lg:gap-10">
            <div className="rounded-2xl shadow-2xl w-full h-full hidden lg:block">
              <div className="hidden lg:flex justify-center items-center bg-green-400 rounded-2xl w-full h-full">
                <Icon.Heartbeat weight="fill" size={192} />
              </div>
            </div>
            <article className="bg-green-900 rounded-2xl shadow-2xl flex flex-col lg:justify-end order-first">
              <div className="w-full h-[350px] rounded-t-2xl bg-green-400 flex justify-center items-center lg:hidden">
                <Icon.Heartbeat weight="fill" size={96} />
              </div>
              <div className="gap-y-10 flex flex-col px-12 justify-center lg:h-[600px]">
                <h1 className="text-white  uppercase font-black text-3xl">
                  Mudando vidas
                </h1>
                <p className="text-white leading-7 text-lg">
                  A psicologia oferece orientação e suporte, ajudando a enxergar
                  novas perspectivas e possibilidades de enfrentar seus
                  problemas. Buscando sempre uma maneira clara e objetiva de
                  enfrentar os desafios, levando o paciente a enxergar a vida
                  com outra perspectiva.
                </p>
              </div>
            </article>
          </div>
        </section>
      </Container>
    </>
  );
}
