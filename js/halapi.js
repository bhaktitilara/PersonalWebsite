 
 function publication() {
   
        var xhr = new XMLHttpRequest(),
            method = 'GET',
            url = 'https://api.archives-ouvertes.fr/search/?q=*BENOIT%20GAUDOU*&wt=json&fl=label_s&sort=producedDate_tdate%20desc&docType_s=ART%20OR%20OTHER';      // sorted by descending publication date 

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                var details = JSON.parse(xhr.responseText);

                // var node, childNodes = xmlDoc.documentElement.childNodes;
                var ele = document.getElementById('data');
                var new_div,divName,divDetails;
                for (var i = 1; i < details.response.docs.length; i++) {
                   
                    details.response.docs[i].label_s.replace('et al.','');                    
                    var parts = details.response.docs[i].label_s.replace('et al.','').split('.');
                   
                    var the_text = parts[0];                    
                    var the_details  = parts[1];
                    var the_details1  = parts[2];
                    var the_details2  = parts[3];
                    var the_details3  = parts[4];                
                                        
                    new_div = document.createElement("div");
                    new_div.className = "hello jumbotron  counter  ";      
                    
                    divName = document.createElement("div"); 
                    divName.className = "name";      
                    divName.append(the_text);
                    new_div.append(divName);

                    divDetails = document.createElement("div");
                    divDetails.className = "detail";   
                    divDetails.append(the_details  );
                    // document.write("<br>");
                    divDetails.append(the_details1);
                    divDetails.append(the_details2);
                    divDetails.append(the_details3);
                    new_div.append(divDetails);
                    ele.append(new_div);
                    
                } 
            }
        };
        xhr.open(method, url, true);
        xhr.send();
   
}

function getJournal() {
   
    var xhr = new XMLHttpRequest(),
        method = 'GET',
        url = 'https://api.archives-ouvertes.fr/search/?q=authIdHal_s:%22benoit-gaudou%22&structId_i=396069&docType_s=ART&wt=json';      // sorted by descending publication date 

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var details = JSON.parse(xhr.responseText);

            // var node, childNodes = xmlDoc.documentElement.childNodes;
            var ele = document.getElementById('dataJournal');
            var new_div,divName,divDetails;
           
            for (var i = 1; i < details.response.docs.length; i++) {
               
                details.response.docs[i].label_s.replace('et al.','');                    
                var parts = details.response.docs[i].label_s.replace('et al.','').split('.');
               
                var the_text = parts[0];                    
                var the_details  = parts[1];
                var the_details1  = parts[2];
                var the_details2  = parts[3];
                var the_details3  = parts[4];
               
                
                
                new_div = document.createElement("div");
                new_div.className = "hello jumbotron  counter  ";      
                
                divName = document.createElement("div"); 
                divName.className = "name";      
                divName.append(the_text);
                new_div.append(divName);

                divDetails = document.createElement("div");
                divDetails.className = "detail";   
                divDetails.append(the_details  );
                // document.write("<br>");
                divDetails.append(the_details1);
                divDetails.append(the_details2);
                divDetails.append(the_details3);
                new_div.append(divDetails);
                ele.append(new_div);
                
            } 
        }
    };
    xhr.open(method, url, true);
    xhr.send();

}
function getBooks() {
   
    var xhr = new XMLHttpRequest(),
        method = 'GET',
        url = 'https://api.archives-ouvertes.fr/search/?q=authIdHal_s:%22benoit-gaudou%22&structId_i=396069&docType_s=COUV&wt=json';      // sorted by descending publication date 

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var details = JSON.parse(xhr.responseText);

            // var node, childNodes = xmlDoc.documentElement.childNodes;
            var ele = document.getElementById('dataBooks');
            var new_div,divName,divDetails;
           
            for (var i = 1; i < details.response.docs.length; i++) {
               
                details.response.docs[i].label_s.replace('et al.','');                    
                var parts = details.response.docs[i].label_s.replace('et al.','').split('.');
               
                var the_text = parts[0];                    
                var the_details  = parts[1];
                var the_details1  = parts[2];
                var the_details2  = parts[3];
                var the_details3  = parts[4];
                
                new_div = document.createElement("div");
                new_div.className = "hello jumbotron  counter  ";      
                
                divName = document.createElement("div"); 
                divName.className = "name";      
                divName.append(the_text);
                new_div.append(divName);

                divDetails = document.createElement("div");
                divDetails.className = "detail";   
                divDetails.append(the_details  );
                // document.write("<br>");
                divDetails.append(the_details1);
                divDetails.append(the_details2);
                divDetails.append(the_details3);
                new_div.append(divDetails);
                ele.append(new_div);
                
            } 
        }
    };
    xhr.open(method, url, true);
    xhr.send();

}
function serch_author() {
    var searchval = document.getElementById("search-term").value;
    $('#authorname').text(searchval);
    $('#lblTitle').text('Publication');
    if (searchval != '') {
        var xhr = new XMLHttpRequest(),
            method = 'GET',
            overrideMimeType = 'application/json',
            url = 'https://api.archives-ouvertes.fr/search/?q=*' + searchval + '*&wt=json';      // ADD THE URL OF THE FILE.

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                var details = JSON.parse(xhr.responseText);

                // var node, childNodes = xmlDoc.documentElement.childNodes;
                var ele = document.getElementById('data');
                var new_div;
                $('#data').empty();

                for (var i = 0; i < details.response.docs.length; i++) {
                    console.log(details.response.docs[i].label_s);
                    new_div = document.createElement("div");
                    new_div.className = "hello jumbotron  counter  ";
                    // document.body.appendChild(new_div);
                    new_div.append(details.response.docs[i].label_s);
                    ele.append(new_div);

                }

                $('#Search').on('click', '.counter', function () {
                    // alert(1);
                    $(this).css({ 'backgroundColor': '#87a396', 'color': '#FFF' });    // Change its style.

                });
            }
        };
        xhr.open(method, url, true);
        xhr.send();
    }
}

function search_project() {
    var searchval = document.getElementById("search-term").value;
    $('#divProjects').empty();

    if (searchval != '') {

        $('#lblTitle').text('Project');
        $('#authorname').text(searchval);
        var xhr = new XMLHttpRequest(),
            method = 'GET',
            overrideMimeType = 'application/json',
            url = 'http://api.archives-ouvertes.fr/ref/europeanproject/?q=*' + searchval + '*&wt=json';      // ADD THE URL OF THE FILE.

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                var details = JSON.parse(xhr.responseText);

                // var node, childNodes = xmlDoc.documentElement.childNodes;
                var ele = document.getElementById('divProjects');
                var new_div;
                $('#divProjects').empty();


                for (var i = 0; i < details.response.docs.length; i++) {
                    console.log(details.response.docs[i].label_s);
                    new_div = document.createElement("div");
                    new_div.className = "hello jumbotron  counter  ";
                    // document.body.appendChild(new_div);
                    new_div.append(details.response.docs[i].label_s);
                    ele.append(new_div);

                }

                $('#Search').on('click', '.counter', function () {
                    // alert(1);
                    $(this).css({ 'backgroundColor': '#87a396', 'color': '#FFF' });    // Change its style.

                });
            }
        };
        xhr.open(method, url, true);
        xhr.send();
    }
}