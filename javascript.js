function lasku() { 

        let lasku = Number(document.getElementById("yksi").value);
        let lasku2 = Number(document.getElementById("kaksi").value);

        document.getElementById("yksi").innerHTML = "";
        document.getElementById("kaksi").innerHTML = "";

        let sum = lasku + lasku2;


        document.getElementById("summa").innerHTML = sum;
        }