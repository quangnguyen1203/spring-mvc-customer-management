package com.codegym.exercise.service.customer;

import com.codegym.exercise.model.Customer;
import com.codegym.exercise.model.Country;
import com.codegym.exercise.repository.ICustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sun.security.pkcs11.P11Util;

import java.util.Optional;

@Service
public class CustomerService implements ICustomerService {
    @Autowired
    private ICustomerRepository customerRepository;

    @Override
    public Iterable<Customer> findAll() {
        return customerRepository.findAll();
    }


    @Override
    public Optional<Customer> findById(Long id) {
        return customerRepository.findById(id);
    }

    @Override
    public Customer save(Customer customer) {
        return customerRepository.save(customer);
    }

    @Override
    public void remove(Long id) {
        customerRepository.deleteById(id);
    }

    @Override
    public Iterable<Customer> findAllByCountry(Country country) {
        return customerRepository.findAllByCountry(country);
    }

    @Override
    public Iterable<Customer> findAllByOrderByIdDesc() {
        return customerRepository.findAllByOrderByIdDesc();
    }

}

