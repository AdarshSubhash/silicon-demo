class Form {

    constructor() {
this.bbutton = createButton('Barber');
this.Cbutton = createButton('Customer');
this.bbutton.size(displayWidth/6,displayWidth/6);
this.Cbutton.size(displayWidth/6,displayWidth/6);
    }
    hide(){
      this.bbutton.hide();
      this.Cbutton.hide();
    
    }
  
    display(){
      textSize(42);
      textStyle(BOLD);
      textFont('Georgia');
      fill("red");
      text("The Barber's App",displayWidth/2.4,displayHeight/10);
      this.bbutton.position(displayWidth/2.3 - 150, displayHeight/2.5);
      this.Cbutton.position(displayWidth/2.3 + 150, displayHeight/2.5);
      
      this.bbutton.mousePressed(()=>{
       this.bbutton.hide();
       this.Cbutton.hide();
       
      
      });
      this.Cbutton.mousePressed(()=>{
       this.Cbutton.hide();
       this.bbutton.hide();
      });
  
     
     
  
    }
  }
  