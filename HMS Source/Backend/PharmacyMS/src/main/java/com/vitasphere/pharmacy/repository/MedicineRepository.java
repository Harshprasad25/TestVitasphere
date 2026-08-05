package com.vitasphere.pharmacy.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.vitasphere.pharmacy.entity.Medicine;

public interface MedicineRepository extends CrudRepository<Medicine, Long> {
    Optional<Medicine> findByNameIgnoreCaseAndDosageIgnoreCase(String name, String dosage);

    Optional<Integer> findStockById(Long id);

}
