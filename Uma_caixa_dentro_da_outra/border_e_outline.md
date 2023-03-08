# Border (e outline)

As bordas da caixa

- values: '<border-style>' | '<border-width>' | '<border-color>'
    - style: solid | dotted | dashed | double | groove | ridge | inset | outset
    - width: '<length>'
    - color: '<color>'

''' CSS
div {
    /* shorthand */
    border-top: solid 2px;

    /* style */
    border: solid;

    /* width <length> | style */
    border: 2px dashed;

    /* style | color*/
    border: outset red;

    /* width | style | color */
    border: medium dashed green;
}









# E o outline?

- difere em 4 sentidos:
    - Não modifica o tamanho da caixa, pois não é parte do Box Model
    - Poderá ser diferente de retangular
    - Não permite ajustes individuais
    - Mais usado pelo user agent para acessibilidade