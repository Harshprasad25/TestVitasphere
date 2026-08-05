package com.vitasphere.appointment.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vitasphere.appointment.dto.AppointmentDTO;
import com.vitasphere.appointment.dto.AppointmentDetails;
import com.vitasphere.appointment.dto.MedicineDTO;
import com.vitasphere.appointment.dto.MonthlyVisitDTO;
import com.vitasphere.appointment.dto.ReasonCountDTO;
import com.vitasphere.appointment.exception.HmsException;
import com.vitasphere.appointment.service.AppointmentService;
import com.vitasphere.appointment.service.PrescriptionService;

import feign.Response;

@RestController
@CrossOrigin
@RequestMapping("/appointment")
@Validated
public class AppointmentAPI {

    @Autowired
    private AppointmentService appointmentService;
    @Autowired
    private PrescriptionService prescriptionService;

    @PostMapping("/schedule")
    public ResponseEntity<Long> scheduleAppointment(@RequestBody AppointmentDTO appointmentDTO) throws HmsException {
    	System.out.println("Received time: " + appointmentDTO.getAppointmentTime());
        return new ResponseEntity<>(appointmentService.scheduleAppointment(appointmentDTO), HttpStatus.CREATED);
    }

    @PutMapping("/cancel/{appointmentId}")
    public ResponseEntity<String> cancelAppointment(@PathVariable Long appointmentId) throws HmsException {
        appointmentService.cancelAppointment(appointmentId);
        return new ResponseEntity<>("Appointment Cancelled.", HttpStatus.OK);
    }

    @GetMapping("/get/{appointmentId}")
    public ResponseEntity<AppointmentDTO> getAppointmentDetails(@PathVariable Long appointmentId) throws HmsException {
        return new ResponseEntity<>(appointmentService.getAppointmentDetails(appointmentId), HttpStatus.OK);
    }

    @GetMapping("/get/details/{appointmentId}")
    public ResponseEntity<AppointmentDetails> getAppointmentDetailsWithName(@PathVariable Long appointmentId)
            throws HmsException {
        return new ResponseEntity<>(appointmentService.getAppointmentDetailsWithName(appointmentId), HttpStatus.OK);
    }

    @GetMapping("/getAllByPatient/{patientId}")
    public ResponseEntity<List<AppointmentDetails>> getAllAppointmentsByPatientId(@PathVariable Long patientId)
            throws HmsException {
        return new ResponseEntity<>(appointmentService.getAllAppointmentsByPatientId(patientId), HttpStatus.OK);
    }

    @GetMapping("/getAllByDoctor/{doctorId}")
    public ResponseEntity<List<AppointmentDetails>> getAllAppointmentsByDoctorId(@PathVariable Long doctorId)
            throws HmsException {
        return new ResponseEntity<>(appointmentService.getAllAppointmentsByDoctorId(doctorId), HttpStatus.OK);
    }

    @GetMapping("/countByPatient/{patientId}")
    public ResponseEntity<List<MonthlyVisitDTO>> getAppointmentCountByPatientId(@PathVariable Long patientId)
            throws HmsException {
        return new ResponseEntity<>(appointmentService.getAppointmentCountByPatient(patientId), HttpStatus.OK);
    }

    @GetMapping("/countByDoctor/{doctorId}")
    public ResponseEntity<List<MonthlyVisitDTO>> getAppointmentCountByDoctorId(@PathVariable Long doctorId)
            throws HmsException {
        return new ResponseEntity<>(appointmentService.getAppointmentCountByDoctor(doctorId), HttpStatus.OK);
    }

    @GetMapping("/visitCount")
    public ResponseEntity<List<MonthlyVisitDTO>> getAppointmentCounts()
            throws HmsException {
        return new ResponseEntity<>(appointmentService.getAppointmentCounts(), HttpStatus.OK);
    }

    @GetMapping("/countReasonsByPatient/{patientId}")
    public ResponseEntity<List<ReasonCountDTO>> getReasonsByPatient(@PathVariable long patientId) {
        return new ResponseEntity<>(appointmentService.getReasonCountByPatient(patientId), HttpStatus.OK);
    }

    @GetMapping("/countReasonsByDoctor/{DoctorId}")
    public ResponseEntity<List<ReasonCountDTO>> getReasonsByDoctor(@PathVariable long DoctorId) {
        return new ResponseEntity<>(appointmentService.getReasonCountByDoctor(DoctorId), HttpStatus.OK);
    }

    @GetMapping("/countReasons")
    public ResponseEntity<List<ReasonCountDTO>> getReasons() {
        return new ResponseEntity<>(appointmentService.getReasonCount(), HttpStatus.OK);
    }

    @GetMapping("/getMedicinesByPatient/{patientId}")
    public ResponseEntity<List<MedicineDTO>> getMedicinesByPatientId(@PathVariable Long patientId) throws HmsException {
        return new ResponseEntity<>(prescriptionService.getMedicineByPatientId(patientId), HttpStatus.OK);
    }

    @GetMapping("/today")
    public ResponseEntity<List<AppointmentDetails>> getTodaysAppointment() throws HmsException {
        return new ResponseEntity<>(appointmentService.getTodaysAppointments(), HttpStatus.OK);
    }

}
