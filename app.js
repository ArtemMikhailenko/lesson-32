//Задание 1
/*
function validateEmail(email){
    return true
}
*/
//Задание 2

function validateEmail(email){
    if (email == '') return false
    if (typeof email != 'string') return false
    if (!email.split('').includes('@') || email.split('')[0]=='@') return false
    if (email.length > 4) return false
    return true
    
}

