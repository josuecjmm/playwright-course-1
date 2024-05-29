// https://www.saucedemo.com/
// LOGIN ON PAGE => 
document.querySelector('[data-test="username"]').value = 'standard_user';
document.querySelector('[name="password"]').value = 'secret_sauce';
document.querySelector('#login-button').click();
// SEE THE APP LOGO ONCE IN 
document.querySelector('.app_logo').innerText
// SPECIFIC ADD TO CARD ID 
document.querySelector('#add-to-cart-sauce-labs-backpack')

// https://auth.max.com/product
// GET TITLES OF PLANS 
document.querySelectorAll('[class*="StyledFlatPlanGroupContentContainer"] h2')
// GET PRICING BASED ON THE PLAN 
$x('//h2[contains(string(), "Platinum")]/parent::div//span[contains(string(), "₡") and not(contains(string(), "annual"))]')
$x('//h2[contains(string(), "Standard")]/parent::div//span[contains(string(), "₡") and not(contains(string(), "annual"))]')
