var people = [
    {
        Name: 'Ada Lovelace',
        Img: 'Images/ada.jpg'
    },
    {
        Name: 'Alan Turing',
        Img: 'Images/alan.png'
    },
    {
        Name: 'Charles Babbage',
        Img: 'Images/charles.jpg'
    },
    {
        Name: 'Elon Musk',
        Img: 'Images/elon.webp'
    },
    {
        Name: "Bill Gates",
        Img: 'Images/Bill.jpg'
    },
    {
        Name: 'Steve Jobs',
        Img: 'Images/steve.jpg'
    }
]
for(var i = 0; i < people.length; i++){
    var div = document.createElement('div')
    var pname = document.createElement('p');
    var img = document.createElement('img');
    pname.textContent = people[i].Name;
    div.append(pname, img)
    
    img.src = people[i].Img;
    img.style.width = "300px"
    img.style.height = "300px"
    document.body.appendChild(div)
    document.body.style.display = "flex"
    document.body.style.flexWrap = "wrap"
    document.body.style.width = "75%"
    document.body.style.justifyContent = "space-between"
    document.body.style.margin = "auto"
}