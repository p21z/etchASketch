/* oninput event handler (and input event handler event types) on html5 input[type="range"] 
   by @girlie_mac

In this example, both "change" and "input" behave the same.

See another example at http://jsfiddle.net/girlie_mac/CcqU7/

*/

var p = document.getElementById("price"),
    res = document.getElementById("result");

p.addEventListener("input", function() {
    res.innerHTML = "$" + p.value;
}, false); 

