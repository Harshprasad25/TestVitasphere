package com.vitasphere.appointment.dto;

import java.time.LocalDate;
import java.util.List;

import com.vitasphere.appointment.entity.Appointment;
import com.vitasphere.appointment.entity.Prescription;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class PrescriptionDTO {
    private Long id;
    private Long patientId;
    private Long doctorId;
    private Long appointmentId;
    private LocalDate prescriptionDate;
    private String notes;
    private List<MedicineDTO> medicines;

    public Prescription toEntity() {
        return new Prescription(id, patientId, doctorId, new Appointment(appointmentId), prescriptionDate, notes);
    }
}
