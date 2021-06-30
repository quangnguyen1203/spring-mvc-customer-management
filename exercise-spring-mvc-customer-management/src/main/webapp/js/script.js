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

// $("#staticBackdrop").on("click", ".updateCustomer", function () {
//     let a = $(this);
//     console.log(a.attr("value"));
//     updateConfirm(a);
// });

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