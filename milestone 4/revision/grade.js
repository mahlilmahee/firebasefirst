function grade( no){
    if( no<91 && no>79){
        return "congrats your child has got A+ in all subject ";
    }
    return false;
}
var myno=83;
var result = grade(myno);
console.log( result);