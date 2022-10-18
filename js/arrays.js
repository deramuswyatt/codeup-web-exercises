(function (){
    let testArray = []
    let instructors = ['david', 'cody'];
    const falsyValues =[false, null, "", 0, undefined, NaN];

    console.log(instructors.length);
    console.log([].length);
    console.log(instructors[1]);
    instructors[0] = "'lord Megatron' david"
    console.log(instructors[0]);
    console.log(falsyValues[falsyValues.length - 1]);

    let randomIndex = Math.floor(Math.random() * instructors.length);
    alert('one of our instructors is named: ' + instructors[randomIndex]);

    for(let i = 0; i <= instructors.length; i++){
        console.log("One of my instructors is named: " + instructors[i]);
    }

    instructors.forEach(function(instructors){

        console.log("One of my instructors is named " + instructors);
    });

    function logInfo(info){
        console.log(info);
    }
    falsyValues.forEach(logInfo);

    for(let instructor of instructors) {
        console.log("One of my instructors is named " + instructors);
    }

})();