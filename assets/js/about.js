const ImageText = []
ImageText[0] = ''
ImageText[1] = 'Fun at work with Covid 2022'
ImageText[2] = 'This is Jax, the Best Dog EVER!!!'
ImageText[3] = 'My wife Aimee petting the old lady Pepper'
ImageText[4] = 'My son Levi on Rock-N-Roll day at schoool'
ImageText[5] = 'My dad and I hunting while enjoying some fresh beef stew'
ImageText[6] = 'My family and I in the back yard by fire pit'
ImageText[7] = 'Me enjoying a nap in the back yard.  Spring 2022 '//
ImageText[8] = 'My cajun wife Aimee making her amazing gumbo'
ImageText[9] = 'My oldest son Ethan making a new pair of glasses from old ones the dog Jax played with'
ImageText[10] = 'Our dog Jax and Pepper in a rare moment of civility'
ImageText[11] = 'Aimee and I on date night'
ImageText[12] = 'Enjoyed the fire in the back yard'
ImageText[13] = 'Our dog Pepper carrying santa'
ImageText[14] = 'Our family pic at christmass 2021'
ImageText[15] = 'Having fun in the rare snow day in Louisiana'
ImageText[16] = 'Random pic of Jax our dog'
ImageText[17] = 'Aimee and I at Madigras 2021'
ImageText[18] = 'Levi climbing the wall at themepark'
ImageText[19] = 'Levi helping me build a shed in the yard'
ImageText[20] = 'Ethan and Jax taking a nap'
ImageText[21] = 'The boy helping with the garden in 2021'
ImageText[22] = 'The boy helping with the garden in 2021'
ImageText[23] = 'Jax and I on the couch'
ImageText[24] = 'Mothers day at church 2022'
ImageText[25] = 'Pepper enjoying the view outside from our bedroom'
ImageText[26] = 'Random pic of Ethan'
ImageText[27] = 'Random pic of Jax'
ImageText[28] = 'Aimee and Jax on a road trip'
ImageText[29] = 'Family play boardgames.  Scrabble is our jam'
ImageText[30] = 'Random family pic in car'
ImageText[31] = 'Levi at camp this summer 2022'
ImageText[32] = 'Me trying this new hat for vaca. 2022'
ImageText[33] = 'Aimee trying new hat for vaca 2022'
ImageText[34] = 'Levi and I at family fun day'
ImageText[35] = 'Ethan got a new computer for his b-day 2022'



let images = "|";
//-----------funtion to get next good image
const getImg = () => {
    let imgNum;
    let match = false;
    do {

        imgNum = Math.floor(Math.random() * 35) + 1;
        if (!images.includes("|" + imgNum + "|")) {
            images += `${imgNum}|`;
            match = true;
        }
    } while (match === false);
    return imgNum;
}
const loadImages = () => {
    let container = document.getElementById("imgsContainer");
    container.innerHTML = "";
    let i;
    images = "|";
    for (i = 0; i < 12; i++) {
        let nextImage = getImg();
        let textNode = ImageText[nextImage];
        let imgBox = document.createElement("section");
        imgBox.classList.add("imgBox");
        let figure = document.createElement("figure");
        figure.classList.add("image");
        let img = document.createElement("img");
        img.src = `assets/images/about/${nextImage}.JPEG`
        img.alt = textNode;
        figure.appendChild(img);
        imgBox.appendChild(figure);
        let overlay = document.createElement("div");
        overlay.classList.add("overlay");
        let text = document.createElement("div");
        text.classList.add("text");
        text.innerHTML = textNode;
        overlay.appendChild(text);
        imgBox.appendChild(overlay);
        container.appendChild(imgBox);
    }
    setTimeout(loadImages, 20000); // twenty seconds then rerender
}
loadImages();