package com.vitasphere.pharmacy.dto;

import com.vitasphere.pharmacy.entity.Medicine;
import com.vitasphere.pharmacy.entity.Sale;
import com.vitasphere.pharmacy.entity.SaleItem;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SaleItemDTO {
    private Long id;
    private Long saleId;
    private Long medicineId;
    private String batchNo;
    private Integer quantity;
    private Double unitPrice;

    public SaleItem toEntity() {
        return new SaleItem(id, new Sale(saleId), new Medicine(medicineId), batchNo, quantity, unitPrice);
    }
}
