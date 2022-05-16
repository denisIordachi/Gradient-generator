const wrapper = document.querySelector('.wrapper');
const colorPicker = document.querySelector('.color-pick__input');

const randomColor = () => {
    return Math.floor(Math.random() * 255 + 1);
}
const randomNumber = () => {
    return Math.floor(Math.random() * 100 + 1);
}

function hexToRgbA(hex) {
    let c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',1)';
    }
    throw new Error('Bad Hex');
};

const colorGenerator = (input) => {
    let val = hexToRgbA(input.value);
    val = val.slice(5, val.length - 1);
    val = val.split(',');
    console.log(val);
    const color = `linear-gradient(90deg, rgba(${val[0]}, ${val[1]}, ${val[2]}, ${val[3]}) 0%, rgba(${val[0] - randomColor()}, ${val[1] - randomColor()}, ${val[2] + randomColor()}, ${val[3]}) ${randomNumber()}%, rgba(${val[0] + randomColor()}, ${val[1] - randomColor()}, ${val[2] - randomColor()}, ${val[3]}) 100%)`;
    wrapper.style.background = color;
}
colorPicker.addEventListener('input', () => {
    colorGenerator(colorPicker);
});

