let units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

module.exports = function toReadable (number) {

    if(number == 0)
    return 'zero';

    if(number < 10)
    return units[number];

    if(number > 9 && number < 20)
    return tens[number % 10];

    if(number > 19 && number < 100) {
        if(number % 10 == 0) {
            return dozens[Math.trunc(number / 10)];
        } else {
            return dozens[Math.trunc(number / 10)] + ' ' + units[number % 10];
        }    
    }

    if(number > 99 && number < 1000) {
        if(number % 100 == 0) {
            return units[Math.trunc(number / 100)] + ' ' + 'hundred';

        } else if (Math.trunc(number % 100 / 10) == 0) {
            return units[Math.trunc(number / 100)] + ' '  + 'hundred' + ' ' + units[number%10];

        } else if (Math.trunc(number % 100 / 10) == 1) {
            return units[Math.trunc(number / 100)] + ' ' + 'hundred' + ' ' + tens[number%10];

        } else if (Math.trunc(number % 10) == 0) {
            return units[Math.trunc(number / 100)] + ' ' + 'hundred' + ' ' + dozens[Math.trunc(number%100/10)];

        } else { 
            return units[Math.trunc(number / 100)] + ' ' + 'hundred' + ' ' + dozens[Math.trunc(number%100/10)] + ' ' + units[number%10];

        }
    }
}


