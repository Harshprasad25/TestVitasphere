package com.vitasphere.pharmacy.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.vitasphere.pharmacy.entity.Sale;

public interface SaleRepository extends CrudRepository<Sale, Long> {
    Boolean existsByPrescriptionId(Long prescriptionId);

    Optional<Sale> findByPrescriptionId(Long prescriptionId);
}
