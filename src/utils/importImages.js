// src/utils/importImages.js
function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../assets/Certificate', false, /\.(png|jpe?g|svg)$/));

export default images;
