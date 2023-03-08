# Shorthand

* junção de propriedades
* resumido
* legível

''' css

{
    /* background properties */
    background-color: #000;
    background-image: url(images/bg.gif);
    background-repeat: no-repeat;
    background-position: left top;

    /*background shorthands*/
    background: #000 url(images/bg.gif) no-repeat left top;

    /* font properties */
    font-style: italic;
    font-weight: bold;
    font-size: 0.8rem;
    line-height: 1.2;
    font-family: Arial, sans-serif;

    /*font shorthands*/
    font: italic bold 0.8rem/1.2 Arial, sans-serif
}

## Detalhes
* não irá considerar propriedades anteriores
* valores não especificados irão assumir valores padrão
* geralmente, a ordem descrita não importa, mas, se houver muitas propriedades
com valores semelhantes, poderemos encontrar problemas