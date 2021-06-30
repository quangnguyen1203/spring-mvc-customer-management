function addNewCustomer() {
    //lay du lieu
    let fullName = $('#fullName').val();
    let email = $('#email').val();
    let phone = $('#phone').val();
    let address = $('#address').val();
    let country = $('#country_id').val();

    let newCountry = {
        country_id: country
    }

    let newCustomer = {
        fullName: fullName,
        email: email,
        phone: phone,
        address: address,
        country: newCountry
    }
    console.log(newCustomer);
    // goi ajax
    $.ajax({

        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        data: JSON.stringify(newCustomer),
        url: "/customers",
        success: function (customer) {
            $('#customerList tbody').prepend(`<tr id="row${customer.id}">
                        <td>${customer.id}</td>
                        <td>${customer.fullName}</td>
                        <td>${customer.email}</td>
                        <td>${customer.phone}</td>
                        <td>${customer.address}</td>
                        <td>${customer.country.country_name}</td>
                        <td>
                            <button value="${customer.id}" class="btn btn-outline-primary updateCustomer" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="far fa-edit"></i>Edit</button>
                            <a value="${customer.id}" type="button" class="btn btn-outline-danger deleteCustomer" ><i  class="fas fa-trash-alt"></i>Delete</a>
                        </td>
                    </tr>`);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your customer has been created!',
                showConfirmButton: false,
                timer: 1500
            })
            $('#addNewCustomer')[0].reset();
            $('.updateCustomer').on('click', function () {
                let a = $(this);
                let customerId = a.attr("value");
                console.log(customerId);
                $.ajax({
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    type: "GET",
                    url: `/edit-customer/${customerId}`,
                    success: function (customer) {
                        $('#upID').val(customer.id);
                        $('#upFullName').val(customer.fullName);
                        $('#upEmail').val(customer.email);
                        $('#upPhone').val(customer.phone);
                        $('#upAddress').val(customer.address);
                        $('#upCountry').val(customer.country.country_id);
                    }
                })
            })

            $('.save-customer').on('click',function (){
                let id = $('#upID').val();
                console.log(id);
                let fullName = $('#upFullName').val();
                let email = $('#upEmail').val();
                let phone = $('#upPhone').val();
                let address = $('#upAddress').val();
                let country = $('#upCountry').val();

                let newCountry = {
                    country_id: country
                }

                let newCustomer = {
                    id:id,
                    fullName: fullName,
                    email: email,
                    phone: phone,
                    address: address,
                    country: newCountry
                }
                $.ajax({

                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    type: "PUT",
                    data: JSON.stringify(newCustomer),
                    url: `/edit/${id}`,
                    success: function (customer) {
                        $('#row'+id+ ' td').remove();
                        $('#row'+id).html(`
                        <td>${customer.id}</td>
                        <td>${customer.fullName}</td>
                        <td>${customer.email}</td>
                        <td>${customer.phone}</td>
                        <td>${customer.address}</td>
                        <td>${customer.country.country_name}</td>
                        <td>
                            <button value="${customer.id}" class="btn btn-outline-primary updateCustomer" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="far fa-edit"></i>Edit</button>
                            <a value="${customer.id}" type="button" class="btn btn-outline-danger deleteCustomer" ><i  class="fas fa-trash-alt"></i>Delete</a>
                        </td>`);

                        $('.dismiss-modal').click();
                        $('#staticBackdrop')[0].reset();

                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'You have changed successfull',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                });
            })

        }
    });
}

$("#customerList").on("click", ".deleteCustomer", function () {
    let a = $(this);
    deleteConfirm(a);
});

function deleteConfirm(id) {

    let customerId = id.attr("value");
    console.log(customerId);
    // goi ajax


    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showDenyButton: true,
        confirmButtonColor: '#3085d6',
        denyButtonColor: '#d33',
        denyButtonText :`Cancel`,
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                type: "DELETE",
                //tên API
                url: `/customers/${customerId}`,
                //xử lý khi thành công
                success: function (data) {
                    console.log(`#row${customerId}`);
                    // $(`#row${data.id}`).html("");
                    $("#row" + customerId).remove();

                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })
        }
    })
}

$('.updateCustomer').on('click', function () {
    let a = $(this);
    let customerId = a.attr("value");
    console.log(customerId);
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "GET",
        url: `/edit-customer/${customerId}`,
        success: function (customer) {
            $('#upID').val(customer.id);
            $('#upFullName').val(customer.fullName);
            $('#upEmail').val(customer.email);
            $('#upPhone').val(customer.phone);
            $('#upAddress').val(customer.address);
            $('#upCountry').val(customer.country.country_id);
        }
    })
})

$('.save-customer').on('click',function (){
    let id = $('#upID').val();
    console.log(id);
    let fullName = $('#upFullName').val();
    let email = $('#upEmail').val();
    let phone = $('#upPhone').val();
    let address = $('#upAddress').val();
    let country = $('#upCountry').val();

    let newCountry = {
        country_id: country
    }

    let newCustomer = {
        id:id,
        fullName: fullName,
        email: email,
        phone: phone,
        address: address,
        country: newCountry
    }
    $.ajax({

        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "PUT",
        data: JSON.stringify(newCustomer),
        url: `/edit/${id}`,
        success: function (customer) {
            $('#row'+id+ ' td').remove();
            $('#row'+id).html(`
                        <td>${customer.id}</td>
                        <td>${customer.fullName}</td>
                        <td>${customer.email}</td>
                        <td>${customer.phone}</td>
                        <td>${customer.address}</td>
                        <td>${customer.country.country_name}</td>
                        <td>
                            <button value="${customer.id}" class="btn btn-outline-primary updateCustomer" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="far fa-edit"></i>Edit</button>
                            <a value="${customer.id}" type="button" class="btn btn-outline-danger deleteCustomer" ><i  class="fas fa-trash-alt"></i>Delete</a>
                        </td>`);

            $('.dismiss-modal').click();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'You have changed successfull',
                showConfirmButton: false,
                timer: 1500
            })
            $('#staticBackdrop')[0].reset();
        }
    });
})

$("#addNewCustomer").validate({
    errorElement: 'div',
    rules: {
        fullName: {
            required: true,
            minlength: 5,
            maxlength: 50
        },
        phone: {
            number: true,
            minlength: 10,
            maxlength: 11
        },
        email:{
            required: true,
            validateEmail:true
        },
    },
    messages: {
        fullName: {
            required: "Bắt buộc nhập tên đầy đủ",
            minlength: "Hãy nhập tối thiểu 5 ký tự",
            maxlength: "Hãy nhập tối đa 50 ký tự"
        },
        phone: {
            number: "Vui lòng nhập một số hợp lệ",
            minlength: "Hãy nhập ít nhất 10 chữ số",
            maxlength: "Hãy nhập tối đã 11 chữ số"
        },
        email:{
            required:"Hãy nhập đúng email"
        }
    },

    submitHandler: function(form) {
        form.submit();
    }
});
$.validator.addMethod("validateEmail", function (value, element) {
    return this.optional(element) ||/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(value);
}, "Please enter a password from 8 to 16 characters including uppercase, lowercase and at least one number");