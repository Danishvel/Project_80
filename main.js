var names = [];

function Sub_l() {
    var name_of_Guest = document.getElementById("Guest_names").value;
        names.push(name_of_Guest);
        console.log(names);    
    document.getElementById("With").innerHTML = names;
}

function Show_l() {
    var length_array = names.length ;
    var display = [];
    for (var k=0; k<length_array; k++){
        display.push(names[k] + "<br>");
    }
    var remove_co = display.join(" ");
    document.getElementById("Without").innerHTML = remove_co;
} 
function Sort_l() {
    names.sort();
    var length_array = names.length ;
    var display_Sort = [];
    for (var i=0; i<length_array; i++){
        display_Sort.push(names[i]+"<br>");
        
}
    var remove_co = display_Sort.join(" ");
    document.getElementById("Sort-list").innerHTML = remove_co;
}

function Search() {
    var s= document.getElementById("Sear").value;
    var found = 0;
    for (var i = 0; i < names.length; i++) {
        if (s==names[i]) {
         found = found+1;   
        }
        
    }
    document.getElementById("S").innerHTML = "Name Found "+found+" Time/s";
}