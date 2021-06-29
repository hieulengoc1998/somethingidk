let stuff = ['adidas', 'gucci', 'converse', 'chanel']
let option = prompt('What do u want to do? (C,R,U,D')
if (option === "C") {
    let new_item = prompt("Name your new stuff")
    stuff.push(new_item)
}else if (option === "R") {
    console.log("This is your stuff");
}else if (option === "U" ) {
    index = prompt("Enter the position you want to update")
    new_value = prompt('enter new name')
    stuff[index] = new_value
}else if(option === "D"){
    let index = prompt("Enter the position you want to delete")
    stuff.splice(index, 1)
}

for(let i = 0; i < stuff.length; i++){
    console.log(i, stuff[i]);
}