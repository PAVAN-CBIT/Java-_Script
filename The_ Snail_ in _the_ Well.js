function main() 
{
    var depth = parseInt(readLine(), 10);
    var climbs=0;
    var days =0;
    while(1){
         climbs=climbs+7;
         days=days+1;

        if(climbs>=depth)
         {
           break;
         }  

            climbs=climbs-2;

        }

    console.log(days);

}
