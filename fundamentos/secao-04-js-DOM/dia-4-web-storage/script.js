
window.onload = () => {
    
    //background
    const setBackgroundColor = (color) => {
        let content = document.querySelector('.content');
        content.style.backgroundColor = color;
        localStorage.setItem('background', color);
    }

    //text color
    const setFontColor = (color) => { 
    let paragraph = document.querySelectorAll('.paragraph');
    for (index = 0; index < paragraph.length; index += 1) {
        paragraph[index].style.color = color;
    }
    localStorage.setItem('color', color);
    }
    //fontSize
    const setFontSize = (size) => { 
        let paragraph = document.querySelectorAll('.paragraph');
        for (index = 0; index < paragraph.length; index += 1) {
            paragraph[index].style.fontSize = size;
        }
        localStorage.setItem('font-size', size);
    }
    //line height
    const setLineHeight = (height) => { 
        let paragraph = document.querySelectorAll('.paragraph');
        for (index = 0; index < paragraph.length; index += 1) {
            paragraph[index].style.lineHeight = height;
        }
        localStorage.setItem('line-height', height);
    }
    //font family
    const setFontFamily = (font) => { 
        let paragraph = document.querySelectorAll('.paragraph');
        for (index = 0; index < paragraph.length; index += 1) {
            paragraph[index].style.fontFamily = font;
        }
        localStorage.setItem('font-family', font);
    }

    //background color btn
    let backgroundColorBtn = document.querySelectorAll('#background-color>button');
    for (let index = 0; index < backgroundColorBtn.length; index += 1) {
        backgroundColorBtn[index].addEventListener('click', (event) => {
            setBackgroundColor(event.target.innerHTML);
        })
    }

    // text color btn
    let fontColorBtn = document.querySelectorAll('#font-color>button');
    for (let index = 0; index < fontColorBtn.length; index += 1) {
        fontColorBtn[index].addEventListener('click', (event) => {
           setFontColor(event.target.innerHTML);
        })
    }
    
    // font size btn
    let fontSizeBtn = document.querySelectorAll('#font-size>button');
    for (let index = 0; index < fontSizeBtn.length; index += 1) {
        fontSizeBtn[index].addEventListener('click', (event) => {
           setFontSize(event.target.innerHTML);
        })
    }

    // line height btn
    let lineHeightBtn = document.querySelectorAll('#line-height>button');
    for (let index = 0; index < lineHeightBtn.length; index += 1) {
        lineHeightBtn[index].addEventListener('click', (event) => {
            setLineHeight(event.target.innerHTML);
        })
    }

    // font family btn
    let fontFamilyBtn = document.querySelectorAll('#font-family>button');
    for (let index = 0; index < fontFamilyBtn.length; index += 1) {
        fontFamilyBtn[index].addEventListener('click', (event) => {
            setFontFamily(event.target.innerHTML);
        })
    }

    const initialize  = () => {
        let backgroundColor = localStorage.getItem('background');
        setBackgroundColor(backgroundColor);
        
        let fontColor = localStorage.getItem('color');
        setFontColor(fontColor);
        
        let fontSize = localStorage.getItem('font-size');
        setFontSize(fontSize);
        
        let lineHeight = localStorage.getItem('line-height');
        setLineHeight(lineHeight);
        
        let fontFamily = localStorage.getItem('font-family');
        setFontFamily(fontFamily); 
    }

    initialize();













}