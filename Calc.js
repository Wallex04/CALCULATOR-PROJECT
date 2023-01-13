(function() {
    let one = document.querySelector('.btn-key1');
    let two = document.querySelector('.btn-key2');
    let three = document.querySelector('.btn-key3');
    let four = document.querySelector('.btn-key4');
    let five = document.querySelector('.btn-key5');
    let six = document.querySelector('.btn-key6');
    let seven = document.querySelector('.btn-key7');
    let eight = document.querySelector('.btn-key8');
    let nine = document.querySelector('.btn-key9');
    let zero = document.querySelector('.btn-key0');
    let point = document.querySelector('.btn-key');
    let screen = document.querySelector('.screen');
    //let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    let plus = document.querySelector('.btn-dataplus');
    let minus = document.querySelector('.btn-dataminus');
    let multiply = document.querySelector('.btn-datamultiply');
    let divide = document.querySelector('.btn-datadivide');
var newValue;

    // buttons.forEach(function(button) {
    //     button.addEventListener('click', function(e) {
    //         let value = e.target.dataset.num;
    //         //console.log(value)         
            
    //         //screen.value += value; 
    //         newValue = value;
            
    //         console.log(newValue);
    //     })
    // });

one.addEventListener('click', e => {
        screen.value += e.target.dataset.num;
        newValue = screen.value;
   })

two.addEventListener('click', e => {
    screen.value += e.target.dataset.num;
    newValue = screen.value;
})
three.addEventListener('click', e => {
    screen.value += e.target.dataset.num;
    newValue = screen.value;
})
four.addEventListener('click', e => {
    screen.value += e.target.dataset.num;
    newValue = screen.value;
})
five.addEventListener('click', e => {
    screen.value += e.target.dataset.num;
    newValue = screen.value;
})
six.addEventListener('click', e => {
    screen.value += e.target.dataset.num;
    newValue = screen.value;
})
seven.addEventListener('click', e => {
    screen.value += e.target.dataset.num;
    newValue = screen.value;
})
eight.addEventListener('click', e => {
    screen.value += e.target.dataset.num;
    newValue = screen.value;
})
nine.addEventListener('click', e => {
    screen.value += e.target.dataset.num;
    newValue = screen.value;
})
point.addEventListener('click', e => {
    screen.value += e.target.dataset.num;
    newValue = screen.value;
})

zero.addEventListener('click', e => {
    if(screen.value == ""){
        screen.value = "";
    }else{
        screen.value += e.target.dataset.num;
        newValue = screen.value;
    }
    
})

plus.addEventListener('click', e => {
    if(screen.value == ""){
        screen.value = "";
    }else{
    screen.value += e.target.dataset.num;
    newValue = screen.value;
}
})

minus.addEventListener('click', e => {
    if(screen.value == ""){
        screen.value = "";
    }else{
    screen.value += e.target.dataset.num;
    newValue = screen.value;
    }
})



multiply.addEventListener('click', e => {
    if(screen.value == ""){
        screen.value = "";
    }else{
    screen.value += e.target.dataset.num;
    newValue = screen.value;
    }
})

divide.addEventListener('click', e => {
    if(screen.value == ""){
        screen.value = "";
    }else{
    screen.value += e.target.dataset.num;
    newValue = screen.value;
    }
})

equal.addEventListener('click', e => {
        if(screen.value == ""){
            screen.value = ""
        }else{
            let answer = eval(screen.value);
              screen.value = answer;
        }
      
    })

clear.addEventListener('click', function(e){
        console.log(newValue);
        screen.value ="";
        
    })


})();