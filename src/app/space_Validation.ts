import{AbstractControl, ValidationErrors}from "@angular/forms"
export class SpaceValidation{
  static Space(control : AbstractControl):ValidationErrors  {
        if((control.value as string).indexOf(' ') != -1){
            debugger
            return {
                Space : true
                
            }
            
        }else{
            debugger
            return null;
        }
    }
}

