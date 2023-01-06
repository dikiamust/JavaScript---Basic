function a(input) {
    if (input % 3 === 0 && input % 5 === 0) {
        console.log('fizzbuzz')
    }else if (input % 5 === 0){
        console.log('buzz')
    }else if( input % 3 === 0 ){
        console.log('fizz')
    }
}

a(3)
a(5)
a(15)