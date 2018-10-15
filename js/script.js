document.addEventListener('DOMContentLoaded',function() {
    console.log("Loading scripts ...");
    _handleFloatingLabel();
    _handlePasswordSwitcher();
    _handleQualityRange();
    
    _handleDropdownButton();

    console.log("Scipts loaded!");
});

function _handleFloatingLabel(){
    let input = document.getElementsByClassName("js-name-input")[0]; //Two different ways to get class
    let label = document.querySelector(".js-floating-label");

    input.addEventListener("focusout", function(){
        if (input.value != "") label.classList.add("is-floating");
        else label.classList.remove("is-floating");
    });
    
}

function _handlePasswordSwitcher() {
    let passwordCheckox = document.getElementById("togglePasswordCheckbox"); 
    let passwordInput = document.getElementsByClassName("js-password-input")[0];
    passwordCheckox.addEventListener("change",function(){
        if (passwordCheckox.checked)passwordInput.type = "text";
        else passwordInput.type = "password";
    });


}

function _handleQualityRange(){
    let rangeInput = document.querySelector('.js-quality-input');
    let rangeHolder = document.querySelector('.js-range-holder');
    let parentRange = document.querySelector('.c-form-field');

    rangeInput.addEventListener('input', function(){
        rangeHolder.setAttribute('data-value', rangeInput.value);
        rangeHolder.style.transform = `translateX(calc( ${rangeInput.value}% * 15.4)`;
    });

    //extra
    /*
    parentRange.addEventListener('mouseenter', function (e) {
        rangeHolder.style.transform = `translateX(calc( ${rangeInput.value}% * 15.4) ;scale(1)`;
    });

    parentRange.addEventListener('mouseleave', function (e) {
        rangeHolder.style.transform = "scale(0)";
    });*/
}

function _handleDropdownButton() {
    document.querySelector(".js-dropdown-headbutton").addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(".c-dropdown-buttons").classList.toggle("c-dropdown-buttons--visible");
        document.querySelector(".c-button-icon").classList.toggle("c-button-icon--rotate")

    });

}



