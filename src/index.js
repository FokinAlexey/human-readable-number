module.exports = function toReadable (n) { // n === number in the beginning


    var c = n%100, b = n%10, a = (n-b)/10, // n = 100*c + 10*a + b
        A1 = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        A2 = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
               'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        A3 = ['ten', 'twenty', 'thirty', 'forty', 'fifty',
              'sixty', 'seventy', 'eighty', 'ninety'];        
    if (n<10) return A1[n];          
    if (n > 10 && n < 20) return A2[n-11];             
    if (b === 0) return A3[a-1];

    return A1(Math.trunc(c))+' hundred '+A2(Math.trunc(b-c*10))+' 'A1(n-b*10);

    //return A3[a-1]+' '+A1[b-1];


}
