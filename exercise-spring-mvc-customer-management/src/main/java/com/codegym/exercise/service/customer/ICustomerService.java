package com.codegym.exercise.service.customer;

import com.codegym.exercise.model.Country;
import com.codegym.exercise.model.Customer;
import com.codegym.exercise.service.IGeneralService;

public interface ICustomerService extends IGeneralService<Customer> {
    Iterable<Customer> findAllByCountry(Country country);
    Iterable<Customer> findAllByOrderByIdDesc();
}

