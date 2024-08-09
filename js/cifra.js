let entrada, saida;
function inicializa_referencias() {
    entrada = document.getElementById("entrada");
    saida = document.getElementById("saida");

    entrada.value = "";
    saida.value = "";
}

function criptografa() {
    saida.value = "";
    entrada.value = entrada.value.toUpperCase();

    for (let i = 0; i < entrada.value.length; i++) {
        if (!chaves.includes(entrada.value[i])) {
            saida.value += entrada.value[i];
            continue;
        }

        saida.value += cola[entrada.value[i]][Math.floor(Math.random() * cola[entrada.value[i]].length)];
    }
}

function descriptografa() {
    saida.value = "";
    entrada.value = entrada.value.toUpperCase();

    for (let i = 0; i < entrada.value.length; i += 2) {
        while (!(chaves.includes(entrada.value[i])) && i < entrada.value.length) {
            saida.value += entrada.value[i];
            i++;
        }
        if (i == entrada.value.length) {
            break;
        }

        cifra = entrada.value.substring(i, i + 2);
        for (let j = 0; j < chaves.length; j++) {
            if (cola[chaves[j]].includes(cifra)) {
                saida.value += chaves[j];
                break;
            }
        }
    }
}

const chaves = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!?";
const cola = { 
    "A": ["QW", "UY", "IP", "IP"],
    "B": ["FQ", "?P", "FQ", "GT"],
    "C": ["HX", "NZ"],
    "D": ["FR", "EO", "OV"],
    "E": ["DT", "BV", "DT"],
    "F": ["RT", "BO", "BO"],
    "G": ["JQ", "BZ"],
    "H": ["CK", "JW"],
    "I": ["AK", "?A"],
    "J": ["GK", "SZ", "?H"],
    "K": ["!H"],
    "L": ["!V", "NS", "VX"],
    "M": ["!U", "UX"],
    "N": ["XY", "LW", "!C"],
    "O": ["EV", "DF", "DR"],
    "P": ["?Y", "QT", "AQ", "!T"],
    "Q": ["?B", "!G", "BP", "PU"],
    "R": ["FL", "OS", "OS"],
    "S": ["JL", "KR", "?R"],
    "T": ["!Q", "EP", "BY", "EP"],
    "U": ["MQ", "PZ", "AG", "MQ"],
    "V": ["DL", "ES", "DL"],
    "W": ["HY"],
    "X": ["?C"],
    "Y": ["NP", "TW"],
    "Z": ["CG"],
    "!": ["LT", "VY", "EN"],
    "?": ["BS", "GR", "FJ"]
} 
    
