package com.vitasphere.appointment.clients;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import com.vitasphere.appointment.config.FeignClientInterceptor;
import com.vitasphere.appointment.dto.DoctorDTO;
import com.vitasphere.appointment.dto.DoctorName;
import com.vitasphere.appointment.dto.PatientDTO;

@FeignClient(name = "ProfileMS", url = "${profilems.url}", configuration = FeignClientInterceptor.class)
public interface ProfileClient {

    @GetMapping("/profile/doctor/exists/{id}")
    Boolean doctorExists(@PathVariable("id") Long id);

    @GetMapping("/profile/patient/exists/{id}")
    Boolean patientExists(@PathVariable("id") Long id);

    @GetMapping("/profile/patient/get/{id}")
    PatientDTO getPatientById(@PathVariable("id") Long id);

    @GetMapping("/profile/doctor/get/{id}")
    DoctorDTO getDoctorById(@PathVariable("id") Long id);

    @GetMapping("/profile/doctor/getDoctorsById")
    List<DoctorName> getDoctorsById(@RequestParam List<Long> ids);

    @GetMapping("/profile/patient/getPatientsById")
    List<DoctorName> getPatientsById(@RequestParam List<Long> ids);
}
