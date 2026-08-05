package com.vitasphere.pharmacy.service;

import java.util.List;

import com.vitasphere.pharmacy.dto.SaleDTO;
import com.vitasphere.pharmacy.dto.SaleRequest;
import com.vitasphere.pharmacy.exception.HmsException;

public interface SaleService {
    Long createSale(SaleRequest dto) throws HmsException;

    void updateSale(SaleDTO dto) throws HmsException;

    SaleDTO getSale(Long id) throws HmsException;

    SaleDTO getSaleByPrescriptionId(Long prescriptionId) throws HmsException;

    List<SaleDTO> getAllSales() throws HmsException;

}
