export default class Apcode{
  inject(p, s){
    let newDiv = document.createElement('div');
    newDiv.style.width = '300px';
    newDiv.style.height = '250px';
    newDiv.style.marginTop = '10px';
    if(s){
      newDiv.classList.add('sticky');
      newDiv.style.backgroundColor = 'yellow';
      document.getElementById('but2').style.display = 'none';
    }else{
      newDiv.classList.add('newDiv');
      newDiv.style.backgroundColor = 'red';
      
    }
    const content = document.getElementById('content')
    const elements = document.getElementsByTagName(p)
    content.insertBefore(newDiv, elements.firstElementChild)
  }
  scroll(){
    const divs = document.getElementsByClassName('newDiv');
    for(let i=0; i<divs.length; i++){
        this.isVisible(divs[i]) ? this.elementVisible(divs[i]) : this.elementNotVisible(divs[i]);
    }
  }
  isVisible=(el)=>{
    const rect = el.getBoundingClientRect();
    const toBottom = rect.bottom - window.innerHeight;
    const result = (rect.top > -125 && toBottom < 125) ? true : false;
    return result; 
  }
  elementVisible=(el)=>{
    el.style.backgroundColor = 'red';
  }
  elementNotVisible=(el)=>{
    el.style.backgroundColor = 'green';
  }
  
}