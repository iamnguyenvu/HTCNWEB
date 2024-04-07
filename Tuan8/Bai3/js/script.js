$(document).ready(function() {
    $("#hoTen").on("input", function() {
        var nameInput = $(this).val();
        var nameRegex = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/;
        if (nameInput === "" || !nameRegex.test(nameInput)) {
            $(this).addClass("is-invalid");
            $("#dangKyBtn").prop("disabled", true);
        } else {
            $(this).removeClass("is-invalid");
            $("#dangKyBtn").prop("disabled", false);
        }
    });

    $("#dangKyBtn").click(function() {
        var hoTen = $("#hoTen").val();
        var lop = $("#lop").val();
        var monHoc = $("#monHoc").val();
        var loai = $("input[name='loai']:checked").val();

        if (hoTen && lop && monHoc && loai) {
            var newRow = "<tr><td>" + hoTen + "</td><td>" + lop + "</td><td>" + monHoc + "</td><td>" + loai + "</td></tr>";
            $("#thongTin").append(newRow);
        } else {
            alert("Vui lòng điền đầy đủ thông tin.");
        }
    });
});
