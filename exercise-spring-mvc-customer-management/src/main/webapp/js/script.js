function addNewCustomer() {
    //lay du lieu
    let fullName = $('#fullName').val();
    let email = $('#email').val();
    let phone = $('#phone').val();
    let address = $('#address').val();
    let country = $('#country').val();
    let newCustomer = {
        fullName: fullName,
        email: email,
        phone: phone,
        address: address,
        country: country
    };
    // goi ajax
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        data: JSON.stringify(newCustomer),
        //tên API
        url: "/customers",
        //xử lý khi thành công
        success: successHandler
    });
    //chặn sự kiện mặc định của thẻ
    event.preventDefault();
}

function successHandler() {
    $.ajax({
        type: "GET",
        //tên API
        url: "/customers",
        //xử lý khi thành công
        success: function (data) {
            // hien thi danh sach o day
            let content = '    <tr>\n' +
                '        <td>#</td>\n' +
                '        <td>Name</td>\n' +
                '        <td>Phone</td>\n' +
                '        <td>Email</td>\n' +
                '        <td>Address</td>\n' +
                '        <td>Country</td>\n' +
                '        <td>Acction</td>\n' +
                '    </tr>';
            for (let i = 0; i < data.length; i++) {
                content += getCustomer(data[i]);
            }
            document.getElementById('customerList').innerHTML = content;
        }
    });
}

function getCustomer(customer) {
    return `<tr><td >${customer.fullName}</td><td >${customer.email}</td><td>${customer.phone}</td><td >${customer.address}</td><td >${customer.country}</td>` +
        `<td><a class="deleteCustomer" href="${customer.id}">Delete</a></td></tr>`;
}

$(document).ready(function () {
    //sư kiện nào thực hiện Ajax
    $('.deleteCustomer').click(function (event) {
        //lay du lieu
        let a = $(this);
        let customerId = a.attr("href");
        // goi ajax
        $.ajax({
            type: "DELETE",
            //tên API
            url: `/customers/${customerId}`,
            //xử lý khi thành công
            success: function (data) {
                a.parent().parent().remove();
            }

        });
        //chặn sự kiện mặc định của thẻ
        event.preventDefault();
    });
})

