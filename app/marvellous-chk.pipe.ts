import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number,pram:string): unknown 
  {
    if(value==0||value==1)
    {
      return ;
    }
    if(pram=="Prime")
    {
       let it:number=0;
      for(it=2;it<=value/2;it++)
      {
        if(value%it==0)
        {
            return ("it is not a prime number");
        }
      }
      return ("It is prime number");
    }
    if(pram=="Perfect")
    {
       let it:number=0;
       let inc:number=2;
      while(it<=value)
      {
        it=inc*inc;
        if(it==value)
        {
          return ("It is perfect number");
        }
        inc++;
        
      }
      return ("It is not perfect number");
    }
    if(pram=="Even")
    {
      if(value%2==0)
      {
        return ("It is even number");
      }
      else{
        return ("It is not even number");
      }
    }
    if(pram=="Odd")
    {
      if(value%2==0)
      {
        return ("It is not odd number");
      }
      else{
        return ("It is an odd number");
      }
    }
    
    return null;
  }

}
