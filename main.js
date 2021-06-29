let stuff = ['adidas', 'gucci', 'converse', 'chanel']
let input = prompt('What do u want to do? (C,R,U,D)')
option = input
if (option === "C" || option === "c") {
    let new_item = prompt("Name your new stuff")
    stuff.push(new_item)
}else if(option === "R" || option === "r"){
    alert("This is your stuff");
}else if(option === "U" || option === "u"){
    index = prompt("Enter the position you want to update")
    if(index > 3) {
        alert("Please enter a pos lower than 3")
    }else {
        new_value = prompt('enter new name')
        stuff[index] = new_value
    }
}else if(option === "D" || option === "d" ){
    let index = prompt("Enter the position you want to delete")
    if(index > 3){
        alert("Please enter a pos lower than 3")
    }else{
        let deleteCount = prompt("How many do u want to delete?")
        stuff.splice(index, deleteCount)
    }
    
}else {
    alert("Try again!")
}

for(let i = 0; i < stuff.length; i++){
    console.log(i, stuff[i]);
}