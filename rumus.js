let luasPersegi = sisi => {
    const rumus = sisi*sisi
    return `Luas Persegi : SISI x SISI || ${sisi} x ${sisi} = ${rumus}`
};

let luasPersegiPanjang = (panjang,lebar) => {
    const rumus = panjang*lebar
    return `Luas Persegi panjang : PANJANG x LEBAR ||  ${panjang} x ${lebar} = ${rumus}`  
};

let kelilingPersegi = sisi => {
    const rumus = 4 * sisi;
    return `Keliling Persegi : SISI + SISI + SISI + SISI || 4 x ${sisi} = ${rumus}`;
};

let kelilingPersegiPanjang = (panjang, lebar) => {
    const rumus = 2 * (panjang + lebar);
    return `Keliling Persegi Panjang: 2 x (PANJANG + LEBAR) || 2 x (${panjang} + ${lebar}) = ${rumus}`;
};

module.exports = {luasPersegi, luasPersegiPanjang, kelilingPersegi, kelilingPersegiPanjang};
