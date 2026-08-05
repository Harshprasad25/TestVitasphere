package com.vitasphere.appointment.service;

import java.util.List;

import com.vitasphere.appointment.dto.MedicineDTO;
import com.vitasphere.appointment.dto.PrescriptionDTO;
import com.vitasphere.appointment.dto.PrescriptionDetails;
import com.vitasphere.appointment.exception.HmsException;

public interface PrescriptionService {
    public Long savePrescription(PrescriptionDTO request);

    public PrescriptionDTO getPrescriptionByAppointmentId(Long appointmentId) throws HmsException;

    public PrescriptionDTO getPrescriptionById(Long prescriptionId) throws HmsException;

    public List<PrescriptionDetails> getPrescriptionsByPatientId(Long patientId) throws HmsException;

    public List<PrescriptionDetails> getPrescriptions() throws HmsException;

    List<MedicineDTO> getMedicineByPatientId(Long patientId) throws HmsException;

}
