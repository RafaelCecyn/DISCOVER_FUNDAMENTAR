#Margin

Espaços entre os elementos

- margin-top | margin-right | margin-bottom | margin-left
- values: '<length>' | '<porcentage>' | auto

''' CSS
div {
    /* shorthand */
    margin: 16px 8px 2px 9px;
    margin: 14px 5px 0px; Em cima (direita e esqueda juntos) Em baixo
    margin: 12px 16px;
    margin: 8px;
}

* Cuidado com margin collapsing (top se ajunta ao bottom)

* PADRÃO CHROME MARGIN 8PX

* Auto - Automático nas laterais