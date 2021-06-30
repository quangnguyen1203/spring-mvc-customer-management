package com.codegym.exercise.controller;

import com.codegym.exercise.model.Customer;
import com.codegym.exercise.model.Country;
import com.codegym.exercise.service.country.ICountryService;
import com.codegym.exercise.service.customer.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.Optional;

//@Controller
//public class CustomerController {
//
//    @Autowired
//    private ICustomerService customerService;
//
//    @Autowired
//    private ICountryService countryService;
//
//    @ModelAttribute("countries")
//    public Iterable<Country> countries(){
//        return countryService.findAll();
//    }
//
//    @ModelAttribute("customer")
//    public Customer customer(){
//        return new Customer();
//    }
//
//    @GetMapping("/create-customer")
//    public ModelAndView showCreateForm() {
//        ModelAndView modelAndView = new ModelAndView("/customer/list");
//        modelAndView.addObject("customer", new Customer());
//        return modelAndView;
//    }
//
//    @PostMapping("/create-customer")
//    public String saveCustomer(@ModelAttribute("customer") Customer customer) {
//        customerService.save(customer);
////        ModelAndView modelAndView = new ModelAndView("/customer/list");
////        modelAndView.addObject("customer", new Customer());
////        modelAndView.addObject("message", "New customer created successfully");
////        return modelAndView;
//        return "redirect:customers";
//    }
//
//    @GetMapping("/customers")
//    public ModelAndView listCustomers() {
//        Iterable<Customer> customers = customerService.findAll();
//        ModelAndView modelAndView = new ModelAndView("/customer/list");
//        modelAndView.addObject("customers", customers);
//        return modelAndView;
//    }
//
//    @GetMapping("/edit-customer/{id}")
//    public ModelAndView showEditForm(@PathVariable Long id) {
//        Optional<Customer> customer = customerService.findById(id);
//        if (customer.isPresent()) {
//            ModelAndView modelAndView = new ModelAndView("/customer/edit");
//            modelAndView.addObject("customer", customer.get());
//            return modelAndView;
//        } else {
//            ModelAndView modelAndView = new ModelAndView("/error.404");
//            return modelAndView;
//        }
//    }
//
//    @PostMapping("/edit-customer")
//    public String updateCustomer(@ModelAttribute("customer") Customer customer) {
//        customerService.save(customer);
////        ModelAndView modelAndView = new ModelAndView("/customer/list");
////        modelAndView.addObject("customer", customer);
////        modelAndView.addObject("message", "Customer updated successfully");
////        return modelAndView;
//        return "redirect:customers";
//    }
//
//    @GetMapping("/delete-customer/{id}")
//    public ModelAndView showDeleteForm(@PathVariable Long id) {
//        Optional<Customer> customer = customerService.findById(id);
//        if (customer.isPresent()) {
//            ModelAndView modelAndView = new ModelAndView("/customer/delete");
//            modelAndView.addObject("customer", customer.get());
//            return modelAndView;
//        } else {
//            ModelAndView modelAndView = new ModelAndView("/error.404");
//            return modelAndView;
//        }
//    }
//
//    @PostMapping("/delete-customer")
//    public String deleteCustomer(@ModelAttribute("customer") Customer customer) {
//        customerService.remove(customer.getId());
//        return "redirect:customers";
//    }
//
//}

@RestController
public class CustomerController {
    @Autowired
    private ICustomerService customerService;

    @Autowired
    private ICountryService countryService;

    @ModelAttribute("countries")
    public Iterable<Country> countries(){
        return countryService.findAll();
    }

    @PostMapping("/customers")
    public ResponseEntity<Customer> createCustomer(@RequestBody Customer customer) {
        Optional<Country> country = countryService.findById(customer.getCountry().getCountry_id());
        customer.getCountry().setCountry_name(country.get().getCountry_name());
        return new ResponseEntity<>(customerService.save(customer), HttpStatus.CREATED);
    }

    @GetMapping("/list")
    public ModelAndView getAllCustomerPage() {
        ModelAndView modelAndView = new ModelAndView("/customer/list");
        modelAndView.addObject("customers", customerService.findAllByOrderByIdDesc());
        return modelAndView;
    }

    @GetMapping("/reload")
    public ResponseEntity<Iterable<Customer>> allCustomers() {
        return new ResponseEntity<>(customerService.findAll(), HttpStatus.OK);
    }

    @DeleteMapping("/customers/{id}")
    public ResponseEntity<Customer> deleteCustomer(@PathVariable Long id) {
        Optional<Customer> customerOptional = customerService.findById(id);
        if (!customerOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        customerService.remove(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<Customer> editCustomer(@RequestBody Customer customer,@PathVariable Long id){
        customer.setId(id) ;
        customer.getCountry().setCountry_name(countryService.findById(customer.getCountry().getCountry_id()).get().getCountry_name());
        return new ResponseEntity<>(customerService.save(customer),HttpStatus.OK);
    }

    @GetMapping("/edit-customer/{id}")
    public ResponseEntity<Customer> customerResponseEntity(@PathVariable Long id){
        Customer customerOptional = customerService.findById(id).get();
        return new ResponseEntity<>(customerOptional,HttpStatus.OK);
    }
}