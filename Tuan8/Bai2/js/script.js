$(document).ready(function() {
    function calculateTotalPrice() {
        var totalPrice = 0;
        $("table tr").each(function(index) {
            if (index !== 0 && index !== $("table tr").length - 1) {
                var price = parseFloat($(this).find("td:nth-child(3) span").attr("value"));
                var quantity = parseInt($(this).find("td:nth-child(4) input").val() || 0); 
                var subtotal = price * quantity;
                totalPrice += subtotal;
            }
        });
        $("#sum").text(totalPrice.toLocaleString('vi-VN'));
    }

    calculateTotalPrice();
    
    $("table input[type='number']").on("input", calculateTotalPrice);
});
