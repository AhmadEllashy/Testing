import { AbstractControl, ValidationErrors } from '@angular/forms';

export class R_Email{
    static EmailValidation(control:AbstractControl):ValidationErrors| null{

           
                if(control.value == "ahmedellashy13@gmail.com"){
              
                   return {EmailValidation : true}
    
                    
                }else{
                 return   (null);
                 
                    
                }
            
           
        

        }
     }
