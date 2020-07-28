$(document).ready(function(){

    $("#customerForm").submit(function(event){
        event.preventDefault();
        postMethod();
    });

    $("#allcustomers").click(function(event){
        event.preventDefault();
        getMethod();
    });

    function postMethod(){
        var mydata={
            firstname: $("#firstname").val(),
            lastname: $("#lastname").val()
        };
        console.log(firstname,lastname);

        $.ajax({
            type:"POST",
            contentType: "application/json",
            url: window.location + "api/customers/save",
            data: JSON.stringify(mydata),
            dataType:'json',
            success:function(customer){
                $("#postResultDiv").html("<p>post succesfully <br> ---->" + JSON.stringify(customer) +"</p>");
                console.log('success'+customer);
                console.log(firstname,lastname);
            },
            error:function(e){
                console.log(firstname,lastname);
                alert("Error");
                console.log(e);
            }
        });
          updateForm();
    }

    function updateForm(){
        $("#firstname").val("");
        $("#lastname").val("");

    }

    function getMethod(){
        $.ajax({
            type:"GET",
            url: window.location + "api/customers/all",
            success: function(result){
                $("#getResultDiv ul").empty();
                var custlist="";
                $.each(result,function(i,customer){
                    $("#getResultDiv .list-group").append(customer.firstname + " " + customer.lastname+ "<br>");
                });
                console.log("success",+result);
               
            },
            error:function(e){
                $("#getResultDiv").html("<p>get error </p>");
                console.log(e);
            }
        });
         
    }
});