package com.codegym.exercise.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "countries")
public class Country {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long country_id;
    private String country_name;

    @JsonIgnore
    @OneToMany(targetEntity = Customer.class)
    private List<Customer> customers;


    public Country() {
    }

    public Country(Long country_id) {
        this.country_id = country_id;
    }

    public Country(String country_name, List<Customer> customers) {
        this.country_name = country_name;
        this.customers = customers;
    }

    public Country(Long country_id, String country_name, List<Customer> customers) {
        this.country_id = country_id;
        this.country_name = country_name;
       this.customers = customers;
    }

    public Long getCountry_id() {
        return country_id;
    }

    public void setCountry_id(Long country_id) {
        this.country_id = country_id;
    }

    public String getCountry_name() {
        return country_name;
    }

    public void setCountry_name(String country_name) {
        this.country_name = country_name;
    }

    public List<Customer> getCustomers() {
        return customers;
    }

    public void setCustomers(List<Customer> customers) {
        this.customers = customers;
    }
}
