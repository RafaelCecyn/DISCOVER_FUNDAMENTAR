## Font-variant
* variações na apresentação fonte

''' css
p {
    font-variant: small caps; -> transforma minúsculo em maiúsculo
}
'''

## Font-stretch
* alargamento ou encolhimento da fonte
* aceita palavras-chaves como: expanded, condensed, normal
* aceita porcentagens de 50% a 200%

''' css
p {
    font-stretch: expanded;
}
'''

## Letter-spacing
* Espaço entre caracteres

''' css
p {
    letter-spacing: 4px;
}
'''

## Word-spacing
* Espaço entre palavras

''' css
p {
    word-spacing: 4px;
}
'''

## line-height

* Espaços entre as linhas
* Pode ser com unidades ou sem unidades de medida
* Comuns: 1.5 ou 2

''' css
p {
    line-height: 1.6;
}
'''

## text-transform
* Transformação do texto

''' css
p {
    text-transform: uppercase; / capitalize / lowercase / none
}
'''

## text-decoration
* Aparencia decorativa de um texto
* line: underline | overline | line-through
    * podemos aplicar mais de 1 valor
* style: wavy | dotted | double | dashed | solid
* color: `<color>` value

''' css
p {
    text-decoration: underline; /* shorthand */
}
'''

## text-align
* Alinhamento de um texto

''' css
p {
    text-align: center; /* left | right | center | justify */
}
'''

## text-shadow
* Sombra aplicada a textos
* Permite múltiplos valores

''' css
p {
    text-shadow: 1px 1px 1px red,
                 2px 2px 1px green; /* offset-x | offset-y | blur-radius | color */
                 blur-radius (embaçamento)
}
'''

## shorthand
* font-style, font-variant, font-weight, font-stretch, font-size, line-height, e font-family.

''' css
p {
    /* -style, -variant,-weight,-stretch,-size,line-height,e -family.*/
    font: italic normal bold normal 3em/1.5 Helvetica,Arial,sans-serif
}
'''


