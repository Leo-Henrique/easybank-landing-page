# Easybank Landing Page com CSS BEM e SASS avançado em React | Desafio do Frontend Mentor

Essa landing page possui um layout bastante comum de se ver na web. Por isso, achei ótima para aplicar **CSS BEM** e utilizar um [boilerplate pessoal de minha autoria](https://github.com/Leo-Henrique/leo-react-app) que se mostrou bastante benéfico para esse tipo de interface.

<div align="center">
	<img src="https://user-images.githubusercontent.com/72027449/213003400-542977d1-4875-42b4-8338-13925743fc33.gif"
	alt="Visualização da página inicial da landing page" />
</div>

## 🔎 Visão geral

Apesar de ser construído em conjunto com React, o destaque dessa aplicação vai para o meu boilerplate que continha uma arquitetura em SASS ao qual pude definir todos os **padrões da UI** e ganhar muita produtividade com o lado responsivo do projeto. 

Não manter a **consistência do design** se tornou quase impossível com o conjunto de **variáveis, mapas e mixins personalizados no SASS**.

### 🔗 Acesse o projeto

* [Site ao vivo](https://leo-henrique.github.io/easybank-landing-page)
* [Desafio no Frontend Mentor](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN)

### 💻 Principais tecnologias / recursos

* [CSS BEM](https://getbem.com/)
* [SASS](https://sass-lang.com/)
* [React](https://reactjs.org/)
* [Vite](https://vitejs.dev/)
* [leo-react-app](https://github.com/Leo-Henrique/leo-react-app)

## 💡 Aprendizados e principais recursos

### CSS BEM

BEM é uma convenção muito simples que se torna ainda mais fácil de aplica-la em conjunto com SASS.

#### Abreviações

Como BEM não impõe que você replique a hierarquia HTML no nome das classes, se torna muito mais simples declarara-las com o *seletor pai (&)* do SASS, já que cada elemento terá um nome de classe única vinculada ao **bloco** (`.block__element`), independente da hierarquia HTML.

```scss
.header {
  // styles

  &__container {
    // styles
  }
  &__toggler {
    // styles
  }
  &__nav {
    // styles
  }
  // ...
}
```

#### Nomes curtos e verbosos

Com as abreviações, as classes não se tornam nomes enormes e a legibilidade continua muito eficaz pela relação do elemento com o bloco.

Confira o JSX curto equivalente do exemplo das classes anteriores. Removi todos os demais atributos para fácil leitura:

```jsx
<header className="header">
  <div className="header__container container">
    <Logo classes="header__logo" />

    <button
      className="header__toggler">
      {visibility ? <SVGClose /> : <SVGHamburger />}
    </button>

    <nav className="header__nav" >
      <ul className="header__list">
        {menu.map((item) => (
          <li className="header__item">
            <a className="header__anchor" >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>

    <Button classes="header__btn" />
  </div>
</header>
```

#### Replicar a hierarquia HTML pode ser útil as vezes

Em uma parte da estrutura surgiu um elemento em que o nome de sua classe era exatamente igual a de outro elemento do mesmo bloco, não havendo mais nenhum outro nome apropriado para se utilizar.

Eu já havia utilizado `articles__title`, portanto segui a hierarquia HTML e utilizei `articles_content__title` conforme o JSX abaixo para evitar resultados inesperados:

```jsx
<article className="articles__item" >
  <div className="articles__img">
    <img src={image.src} 
    alt={image.alt} />
  </div>

  <div className="articles__content">
    <span className="articles__content__author">
      Por {author}
    </span>

    <h3 className="articles__content__title">
      <a href="#">{title}</a>
    </h3>

    <p className="articles__content__desc">
      {desc}
    </p>
  </div>
</article>
```

### SASS boilerplate

O meu boilerplate contendo uma arquitetura SASS pronta em conjunto com algumas variáveis e mixins era dificilmente diferente em outros projetos e fácil de ser adaptado para outras aplicações.

Você pode conferi-lo melhor em [leo-react-app](https://github.com/Leo-Henrique/leo-react-app).

#### Consistência e padronização da interface

Todos os estilos referente a UI são colocadas no arquivo `scss/utilities/_variables.scss`. Assim, é muito fácil fazer qualquer alteração no design, manter a consistência da interface e ter um panorama de toda minha UI.

Confira alguns dos **mapas / variáveis** definidos neste arquivo:
```scss
$fontSizes: (
  h1: 5.6rem,
  h2: 4.2rem,
  h3: 2.6rem,
  body: 1.8rem,
  bodySm: 1.5rem,
  small: 1.3rem
);
$colors: (
  primary: #31d35c,
  secondary: #2d314d,
  secondaryDark: darken(#2d314d, 40%), 
  secondaryLight: #2bb7da,
  supportLight1: #fff,
  supportLight2: #fafafa,
  supportLight3: #f3f4f6,
  supportLight4: #9698a6,
);
```

#### Responsividade

No mesmo arquivo mencionado anteriormente, defino um mapa dedicado aos media queries do projeto, contendo todos os tamanhos utilizados. Eu gosto de utilizar como referência os [breakpoints em max-width do bootstrap](https://getbootstrap.com/docs/5.3/layout/breakpoints/#max-width).

```scss
$mediaQuery: (
  property: max-width,
  unit: px,
  sizes: (
    sm: 575.98,
    md: 767.98,
    lg: 991.98,
    xl: 1199.98,
    xxl: 1399.98,
  ),
);
```

Posteriormente, eu crio um mixin para breakpoints que é possível passar o ponto de interrupção desejado como argumento:

```scss
@mixin breakpoint($size) {
  @media (
    #{map-get($mediaQuery, property)}:
    #{
      map-get(map-get($mediaQuery, sizes), $size) + 
      map-get($mediaQuery, unit)
    }
  ) {
    @content;
  }
}
```

Depois, basta usar o breakpoint desejado no seletor desejado, deixando o lado responsivo de cada trecho do projeto unido com a estilização principal deste mesmo trecho / seletor. 

Em minha experiência, aplicar responsividade por cada seletor facilita qualquer manutenção, já que as estilizações responsivas do mesmo seletor estão unidas com a declaração principal dele.

Confira um trecho da responsividade do rodapé do projeto:

```scss
&__container {
  display: flex;
  column-gap: 12rem;

  @include breakpoint(xl) {
    column-gap: 6rem;
  }
  @include breakpoint(lg) {
    column-gap: 8rem;
    row-gap: 6rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  @include breakpoint(md) {
    flex-direction: column;
    align-items: center;
    gap: initial;
    text-align: center;
  }
}
```

#### Evitando repetições com mixins abrangentes

Toda estilização que há algum padrão eu procuro converter para um mixin personalizável para manter o foco na estruturação peculiar do layout.

Um caso bem comum é definir os estados `:hover` e `:active` para botões e links, onde os padrões são sempre os mesmos: definir transições, pseudo-classes e afins.

Aplicar tudo isso acaba ficando extenso e bem repetitivo caso haja muitos botões / links no projeto. Então, criei um mixin que basta especificar um tipo de transição e as propriedades para cada estado que tudo será aplicado automaticamente.

Confira o uso deste mixin abaixo. Você pode entende-lo melhor no arquivo `scss/utilities/_mixins.scss` ou olhar os exemplos dos arquivos de *leo-react-app* conforme cito [nessa parte do readme](https://github.com/Leo-Henrique/leo-react-app/blob/main/README-pt-BR.md#%EF%B8%8F-configure-o-boilerplate-para-sua-aplica%C3%A7%C3%A3o).

```scss
.logo {
  // styles

  @include state("button", (
    default: (opacity: 1),
    hover: (opacity: 0.7),
    active: (opacity: 0.4)
  ));
}
```

## 🔗 Recursos úteis

Alguns links que contém minhas inspirações ao criar a arquitetura e os outros recursos em SASS.

### CSS BEM
* [Guia definitivo do CSS BEM - dpw](https://desenvolvimentoparaweb.com/css/bem/)
* [Aninhar blocos dentro de blocos no CSS BEM](https://scalablecss.com/bem-blocks-within-blocks/)

### CSS responsivo
* [Media queries max-width do Bootstrap](https://getbootstrap.com/docs/5.3/layout/breakpoints/#max-width)
* [Containers responsivos Bootstrap](https://getbootstrap.com/docs/5.3/layout/containers/)

### Arquitetura SASS
* [Estruturando projetos SASS](https://itnext.io/structuring-your-sass-projects-c8d41fa55ed4)
* [Arquitetura SASS](https://gist.github.com/AdamMarsden/7b85e8d5bdb5bef969a0)