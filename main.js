function  $(elementId) {return document.getElementById(elementId);}
const scene = $('js--scene');

generateObjects = () => {
    for (let i = 0; i< 23; i++){
        const pos = Math.floor(Math.random()*12).toString() + " " + Math.floor(Math.random()*12).toString() + " " + Math.floor(Math.random()*12).toString();
        console.log(pos);
        scene.appendChild(makeBox('red', pos, '0.5'));
    }
};

start = () => {
    alert('start');
    generateObjects();
};

makeId = (length) => {
    let result           = '';
    const characters       = 'abcdefghijklmnopqrstuvwxyz';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

const camera = $('js--camera');

pickup = (event) => {
    /*let color = event.target.getAttribute('color');
    camera.appendChild(makeBox(color,'-0.1 0 -0.3', '0.1'))*/
    start();
};

placeObject = (event) => {
    scene.appendChild(
        makeBox($('js--camera-box').getAttribute('color'), '3 0.25 0', '0.5')
    )
};

makeBox = (color, position, space) => {
    let box = document.createElement(makeId(7).toString());
    box.setAttribute('id', makeId(7).toString());
    box.setAttribute('color', color);
    box.setAttribute('position', position);
    box.setAttribute('width', space);
    box.setAttribute('height', space);
    box.setAttribute('depth', space);
    return box;
};
