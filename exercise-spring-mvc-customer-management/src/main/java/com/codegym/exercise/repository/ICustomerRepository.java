package com.codegym.exercise.repository;

import com.codegym.exercise.model.Country;
import com.codegym.exercise.model.Customer;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ICustomerRepository extends PagingAndSortingRepository<Customer, Long> {
    Iterable<Customer> findAllByCountry(Country country);
}
