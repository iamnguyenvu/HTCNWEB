$(document).ready(function() {
    $("#btnState").prop("disabled", true);
    $("#ipBuyIn").focus();
    $("#carImage").attr("src", "../img/car1.jpg");
    $("#carPrice").text("35000");

    $("#ipBuyIn").blur(function (e) { 
        if($.isNumeric($(this).val()) && ($(this).val()) !== "") {
            $("#btnState").prop("disabled", false);
            $(".errBuyIn").text("");
        } else {
            $("#btnState").prop("disabled", true);
            $(".errBuyIn").css("color", "red");
            $(".errBuyIn").css("font-size","12px");
            $(".errBuyIn").text("Phai nhap so va khong rong!");
        }
    });
    
    $("#ipBuyOut").blur(function (e) { 
        if($.isNumeric($("#ipBuyIn").val()) && ($("#ipBuyIn").val()) !== "" 
        && $.isNumeric($("#ipBuyOut").val()) && ($("#ipBuyOut").val()) !== "") {
            $("#btnUpdate").prop("disabled", false);
            $(".errBuyOut").text("");
        } else {
            $("#btnUpdate").prop("disabled", true);
            $(".errBuyOut").css("color","red");
            $(".errBuyOut").css("font-size","12px");
            $(".errBuyOut").text("Phai nhap so va khong rong!");
        }
        
    });

    $("#carType").change(function (e) { 
        var selectedCar = $(this).val().split(";");
        var carImage = selectedCar[0];
        var carPrice = selectedCar[1];
        $("#carImage").attr("src", carImage);
        $("#carPrice").text(carPrice);
    });

    $("#btnUpdate").click(function (e) { 
        if($("#currencyGold").prop("checked")) {
            $("#buyGoldIn").text($("#ipBuyIn").val());
            $("#buyGoldOut").text($("#ipBuyOut").val());
            $("#buyUSDIn").text("");
            $("#buyUSDOut").text("");
        } else if ($("#currencyUSD").prop("checked")){
            $("#buyUSDIn").text($("#ipBuyIn").val());
            $("#buyUSDOut").text($("#ipBuyOut").val());
            $("#buyGoldIn").text("");
            $("#buyGoldOut").text("");
        }
        else {
            $("#buyUSDIn").text("");
            $("#buyUSDOut").text("");
            $("#buyGoldIn").text("");
            $("#buyGoldOut").text("");
        }
        
    });

});