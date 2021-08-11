function main() {
    var amount = parseFloat(readLine(), 10);
    var rate = parseFloat(readLine(), 10);
    function converter(amount, rate)
    {
        var result=amount*rate;
        return result;
    }
    console.log(converter(amount, rate));
}
