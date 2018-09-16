2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
$(document).ready(() => {

    var url = window.location;

    // GET REQUEST
    $("#btnGetFiles").click((event) => {
        event.preventDefault();
        ajaxGet();
    });

    // DO GET
    function ajaxGet() {
        $.ajax({
            type: "GET",
            url: "/api/files/getall",
            success: (data) => {
                //clear old data
                $("#listFiles").html("");

                /*
                	render list of files
                */
                $("#listFiles").append('<ul>');
                $.each(data, (index, filename) => {

                    $("#listFiles").append('<li><a href=' + url + 'api/files/' + filename + '>' + filename + '</a></li>');
                });
                $("#listFiles").append('</ul>');
            },
            error: (err) => {
                $("#listFiles").html(err.responseText);
            }
        });
    }
})